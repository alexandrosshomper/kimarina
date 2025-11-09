/**
 * Ensures Ajv v8 provides legacy date/time formats required by older schema-utils.
 */
const ajvModule = require('ajv');
const addFormats = require('ajv-formats');
const AjvClass = ajvModule.default || ajvModule;
const Module = require('module');
const path = require('path');

const legacyBootstrapArg = `--require ${JSON.stringify(__filename)}`;
const currentNodeOptions = process.env.NODE_OPTIONS || '';
if (!currentNodeOptions.includes(__filename)) {
  process.env.NODE_OPTIONS = currentNodeOptions
    ? `${legacyBootstrapArg} ${currentNodeOptions}`
    : legacyBootstrapArg;
}

const execArgv = process.execArgv || [];
const alreadyBootstrapped =
  execArgv.includes(__filename) ||
  execArgv.some(
    (arg, index) =>
      (arg === '--require' && execArgv[index + 1] === __filename) ||
      arg === `--require=${__filename}`
  );
if (!alreadyBootstrapped) {
  execArgv.push('--require', __filename);
}

try {
  const workerThreads = require('worker_threads');
  const OriginalWorker = workerThreads.Worker;

  if (OriginalWorker && !OriginalWorker.__legacyAjvPatched) {
    class LegacyPatchedWorker extends OriginalWorker {
      constructor(filename, options = {}) {
        const sourceExecArgv = Array.isArray(options.execArgv)
          ? options.execArgv
          : execArgv;
        const nextExecArgv = sourceExecArgv.slice();
        const hasLegacyFlag =
          nextExecArgv.includes(__filename) ||
          nextExecArgv.some(
            (arg, index) =>
              (arg === '--require' && nextExecArgv[index + 1] === __filename) ||
              arg === `--require=${__filename}`
          );

        if (!hasLegacyFlag) {
          nextExecArgv.push('--require', __filename);
        }

        super(filename, { ...options, execArgv: nextExecArgv });
      }
    }

    LegacyPatchedWorker.__legacyAjvPatched = true;
    workerThreads.Worker = LegacyPatchedWorker;
  }
} catch {
  // worker_threads not available, nothing else to do.
}

const LEGACY_DRAFT_PATH = 'ajv/lib/refs/json-schema-draft-04.json';
const localDraftSchemaPath = path.join(__dirname, 'json-schema-draft-04.json');

try {
  require.resolve(LEGACY_DRAFT_PATH);
} catch {
  const originalResolveFilename = Module._resolveFilename;
  Module._resolveFilename = function legacyDraftResolver(request, parent, isMain, options) {
    if (request === LEGACY_DRAFT_PATH) {
      return localDraftSchemaPath;
    }
    return originalResolveFilename.call(this, request, parent, isMain, options);
  };
}

if (!AjvClass.__legacyFormatPatchApplied) {
  const LEGACY_FORMATS = ['date', 'time', 'date-time'];
  const originalCompile = AjvClass.prototype.compile;

  if (!Object.getOwnPropertyDescriptor(AjvClass.prototype, '_opts')) {
    Object.defineProperty(AjvClass.prototype, '_opts', {
      get() {
        if (!this.__legacyOpts) {
          this.__legacyOpts = { ...(this.opts || {}) };
        }
        return this.__legacyOpts;
      },
      set(value) {
        this.__legacyOpts = value || {};
      }
    });
  }

  function ensureLegacyFormats(instance) {
    if (instance.__legacyFormatsReady) {
      return;
    }

    try {
      addFormats(instance, { keywords: false });
    } catch (error) {
      // ajv-formats already registered, ignore.
    }

    const formats = instance.formats || {};
    instance._formats = instance._formats || Object.create(null);
    instance.opts = instance.opts || {};
    const strictFlags = ['strict', 'strictSchema', 'strictNumbers', 'strictTypes', 'strictTuples'];
    for (const flag of strictFlags) {
      if (instance.opts[flag] !== false) {
        instance.opts[flag] = false;
      }
    }
    const legacyOpts = instance._opts || {};
    for (const flag of strictFlags) {
      if (legacyOpts[flag] !== false) {
        legacyOpts[flag] = instance.opts[flag];
      }
    }
    instance._opts = legacyOpts;

    for (const name of LEGACY_FORMATS) {
      if (formats[name]) {
        if (typeof formats[name] === 'object') {
          instance._formats[name] = formats[name];
        } else {
          instance._formats[name] = { validate: formats[name] };
        }
      }
    }

    instance.__legacyFormatsReady = true;
  }

  AjvClass.prototype.compile = function compileWithLegacyFormats(...args) {
    ensureLegacyFormats(this);
    return originalCompile.apply(this, args);
  };

  AjvClass.__legacyFormatPatchApplied = true;
}
