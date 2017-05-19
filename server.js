const express = require('express'),
fs = require('fs'),
app = express(),
path = require('path'),
util = require('util'),

compression = require('compression'),
minifyHTML = require('express-minify-html'),
isProd = (process.env.NODE_ENV == 'production') ? true : false,
pathParse = require('path-parse');

const multiparty = require('multiparty');
const Twig = require("twig");

if(isProd) {
  app.use(minifyHTML({
    override: true,
    htmlMinifier: {
      removeComments: true,
      collapseWhitespace: true,
      collapseBooleanAttributes: true,
      removeAttributeQuotes: false,
      removeEmptyAttributes: true,
      minifyJS: true
    }
  }));

  app.use(compression({ level: 9, threshold: 0 }));
}

app.set("twig options", {
    strict_variables: false
});

app.set('port', (process.env.PORT || 3003));

app.use('/assets', express.static(path.join(__dirname, '/assets')));

app.get('/', (req, res) => {
  res.render('index.twig', {
  });
});

app.get('/api/presets', (req, res) => {
  res.json(
    [
      {
        "key": "blog",
        "title": "Blog",
      },
      {
        "key": "portfolio-site",
        "title": "Portfolio Site",
      },
      {
        "key": "webshop",
        "title": "Portfolio Site",
      },
      {
        "key": "web-app",
        "title": "Web App",
      },
      {
        "key": "api",
        "title": "API",
      }
    ]
  );
});

app.get('/api/providers', (req, res) => {
  res.json(
    [
      "modx.com",
      "modmore"
    ]
  );
});

app.get('/api/categories', (req, res) => {
  res.json(
    [
      {
        "key": "editing",
        "title": "Editing Packages"
      }
    ]
  );
});

app.get('/api/:provider/extras', (req, res) => {
  res.json(
    {
      "provider": req.params.provider,
      "extras": {
        "getresources": {
          "version": "*",
          "href": "http://google.com",
          "category": "editing"
        },
        "collections": {
          "version": "*",
          "href": "http://google.com",
          "category": "editing"
        },
        "blockdown": {
          "version": "*",
          "href": "http://google.com",
          "category": "editing"
        },
        "formit": {
          "version": "*",
          "href": "http://google.com",
          "category": "editing"
        },
        "formalicious": {
          "version": "*",
          "href": "http://google.com",
          "category": "editing"
        },
        "content-blocks": {
          "version": "*",
          "href": "http://google.com",
          "category": "editing"
        },
        "redactor": {
          "version": "*",
          "href": "http://google.com",
          "category": "editing"
        },
        "getpage": {
          "version": "*",
          "href": "http://google.com",
          "category": "editing"
        },
        "seo-tab": {
          "version": "*",
          "href": "http://google.com",
          "category": "editing"
        },
        "seo-pro": {
          "version": "*",
          "href": "http://google.com",
          "category": "editing"
        },
        "google-analytics-dashboard-widget": {
          "version": "*",
          "href": "http://google.com",
          "category": "editing"
        },
        "wayfinder": {
          "version": "*",
          "href": "http://google.com",
          "category": "editing"
        },
        "breadcrumbs": {
          "version": "*",
          "href": "http://google.com",
          "category": "editing"
        },
        "googlesitemap": {
          "version": "*",
          "href": "http://google.com",
          "category": "editing"
        },
        "simplesearch": {
          "version": "*",
          "href": "http://google.com",
          "category": "editing"
        },
        "twitterx": {
          "version": "*",
          "href": "http://google.com",
          "category": "editing"
        },
        "batcher": {
          "version": "*",
          "href": "http://google.com",
          "category": "editing"
        },
        "taglister": {
          "version": "*",
          "href": "http://google.com",
          "category": "editing"
        },
        "archivist": {
          "version": "*",
          "href": "http://google.com",
          "category": "editing"
        },
        "quip": {
          "version": "*",
          "href": "http://google.com",
          "category": "editing"
        },
        "tagger": {
          "version": "*",
          "href": "http://google.com",
          "category": "editing"
        }
      }
    }
  );
});

app.get('/api/:provider/extras/exemptions', (req, res) => {
  res.json(
    [
      {
        "pdoTools": [
          "getResources",
          "wayfinder",
          "breadcrumbs",
          "googlesitemap"
        ],
      }
    ]
  );
});

app.get('/api/desires', (req, res) => {
  res.json(
      {
        "collections": {
            "title": "Manage content as collections",
            "dependencies": ["blog","collections"] /* supports presets and extras alike. blog is a preset, preset is an extra */
        }
      }
  );
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
