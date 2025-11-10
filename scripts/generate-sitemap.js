const { SitemapStream, streamToPromise } = require("sitemap");
const fs = require("fs");
const path = require("path");
const routes = require("../src/routes");

async function generateSitemap() {
  try {
    const sitemap = new SitemapStream({
      hostname: "https://www.kimarina.com",
    });

    // Add all routes to the sitemap
    routes.forEach((route) => {
      sitemap.write({
        url: route.path,
        changefreq: "monthly",
        priority: 0.7,
      });
    });

    // End the stream
    sitemap.end();

    // Generate the sitemap
    const sm = await streamToPromise(sitemap);

    // Write the sitemap to the public directory
    fs.writeFileSync(
      path.join(__dirname, "../public/sitemap.xml"),
      sm.toString()
    );
    console.log("Sitemap generated successfully!");
  } catch (error) {
    console.error("Error generating sitemap:", error);
    process.exit(1);
  }
}

generateSitemap();
