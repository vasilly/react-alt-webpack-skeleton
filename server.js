import Hapi from 'hapi';
import React from 'react';
import { renderToString } from 'react-dom/server'
import { match, RoutingContext } from 'react-router'
import Path from 'path';
import Inert from 'inert';
import fs from 'fs';
import cheerio from 'cheerio';
import routes from './src/routes'

// Path to dir where static assets are
const buildPath = Path.join(__dirname, "build");

// Path to app layout
const templatePath = Path.join(buildPath, 'index.html');

// Get array of static filenames
const staticAssets = fs.readdirSync(buildPath);

// Load layout HTML
let $layout = cheerio.load(fs.readFileSync(templatePath));

// Create server
const server = new Hapi.Server();

server.register(Inert, function () {

  server.connection({
    host: 'localhost',
    port: 8000
  });

  // Create routes for static assets
  for (let asset of staticAssets) {
    server.route({
      method: 'GET',
      path: `/${asset}`,
      handler: {
        file: Path.join(buildPath, asset)
      }
    });
  }

  server.route({
    method: 'GET',
    path:'/{path*}',
    handler: function (request, reply) {
      match({ routes, location: request.url }, (error, redirectLocation, renderProps) => {
        if (error) {
          reply(error.message).code(500)
        } else if (redirectLocation) {
          redirect(redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
          // Render React components for route
          var html = renderToString(<RoutingContext {...renderProps} />);

          // Interpolate rendered components in layout
          $layout("#app").html(html);

          var resp = $layout.html();

          reply(resp)
        } else {
          reply("Not found").code(404)
        }
      })
    }
  });

  server.start((err) => {
    if (err) {
      throw err;
    }
    console.log('Server running at:', server.info.uri);
  });
});
