const express = require("express");
const { renderToNodeStream } = require("react-dom/server");
const { StaticRouter } = require("react-router-dom");
const { matchRoutes } = require("react-router-config");
const { SitemapStream, streamToPromise } = require("sitemap");
const routes = require("./src/routes");

const app = express();

app.get("/sitemap.xml", async (req, res) => {
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

    // Set the content type and send the response
    res.header("Content-Type", "application/xml");
    res.send(sm.toString());
  } catch (error) {
    console.error("Error generating sitemap:", error);
    res.status(500).send("Error generating sitemap");
  }
});

app.listen(3000, () => console.log("Server started on port 3000"));
