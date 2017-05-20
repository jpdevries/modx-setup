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
          "name": "getResources",
          "version": "1.0.0",
          "release": "pl",
          "transport": "https://modx.com/extras/download/?id=52c184b562cf240b35006e33",
          "href": "http://google.com",
          "category": "editing"
        },
        "collections": {
          "name": "Collections",
          "version": "1.0.0",
          "release": "pl",
          "transport": "https://modx.com/extras/download/?id=52c184b562cf240b35006e33",
          "href": "http://google.com",
          "category": "editing"
        },
        "blockdown": {
          "name": "BlockDown",
          "version": "1.0.0",
          "release": "pl",
          "transport": "https://modx.com/extras/download/?id=52c184b562cf240b35006e33",
          "href": "http://google.com",
          "category": "editing"
        },
        "formit": {
          "name": "FormIt",
          "version": "1.0.0",
          "release": "pl",
          "transport": "https://modx.com/extras/download/?id=52c184b562cf240b35006e33",
          "href": "http://google.com",
          "category": "editing"
        },
        "formalicious": {
          "name": "Formalicious by Sterc",
          "version": "1.0.0",
          "release": "pl",
          "transport": "https://modx.com/extras/download/?id=52c184b562cf240b35006e33",
          "href": "http://google.com",
          "category": "editing",
          "premium": true
        },
        "content-blocks": {
          "name": "ContentBlocks by modmore",
          "version": "1.0.0",
          "release": "pl",
          "transport": "https://modx.com/extras/download/?id=52c184b562cf240b35006e33",
          "href": "http://google.com",
          "category": "editing",
          "premium": true
        },
        "redactor": {
          "name": "Redactor by modmore",
          "version": "1.0.0",
          "release": "pl",
          "transport": "https://modx.com/extras/download/?id=52c184b562cf240b35006e33",
          "href": "http://google.com",
          "category": "editing",
          "premium": true
        },
        "getpage": {
          "name": "getPage",
          "version": "1.0.0",
          "release": "pl",
          "transport": "https://modx.com/extras/download/?id=52c184b562cf240b35006e33",
          "href": "http://google.com",
          "category": "editing"
        },
        "seo-tab": {
          "name": "SEOTab",
          "version": "1.0.0",
          "release": "pl",
          "transport": "https://modx.com/extras/download/?id=52c184b562cf240b35006e33",
          "href": "http://google.com",
          "category": "editing"
        },
        "seo-pro": {
          "name": "SEOPro",
          "version": "1.0.0",
          "release": "pl",
          "transport": "https://modx.com/extras/download/?id=52c184b562cf240b35006e33",
          "href": "http://google.com",
          "category": "editing"
        },
        "google-analytics-dashboard-widget": {
          "name": "Google Analytics Dashboard Widget",
          "version": "1.0.0",
          "release": "pl",
          "transport": "https://modx.com/extras/download/?id=52c184b562cf240b35006e33",
          "href": "http://google.com",
          "category": "editing"
        },
        "wayfinder": {
          "name": "Wayfinder",
          "version": "1.0.0",
          "release": "pl",
          "transport": "https://modx.com/extras/download/?id=52c184b562cf240b35006e33",
          "href": "http://google.com",
          "category": "editing"
        },
        "breadcrumbs": {
          "name": "Breadcrumbs",
          "version": "1.0.0",
          "release": "pl",
          "transport": "https://modx.com/extras/download/?id=52c184b562cf240b35006e33",
          "href": "http://google.com",
          "category": "editing"
        },
        "googlesitemap": {
          "name": "Tagger",
          "version": "1.0.0",
          "release": "pl",
          "transport": "https://modx.com/extras/download/?id=52c184b562cf240b35006e33",
          "href": "http://google.com",
          "category": "editing"
        },
        "simplesearch": {
          "name": "SimpleSearch",
          "version": "1.0.0",
          "release": "pl",
          "transport": "https://modx.com/extras/download/?id=52c184b562cf240b35006e33",
          "href": "http://google.com",
          "category": "editing"
        },
        "twitterx": {
          "name": "TwitterX",
          "version": "1.0.0",
          "release": "pl",
          "transport": "https://modx.com/extras/download/?id=52c184b562cf240b35006e33",
          "href": "http://google.com",
          "category": "editing"
        },
        "batcher": {
          "name": "Batcher",
          "version": "1.0.0",
          "release": "pl",
          "transport": "https://modx.com/extras/download/?id=52c184b562cf240b35006e33",
          "href": "http://google.com",
          "category": "editing"
        },
        "taglister": {
          "name": "TagLister",
          "version": "1.0.0",
          "release": "pl",
          "transport": "https://modx.com/extras/download/?id=52c184b562cf240b35006e33",
          "href": "http://google.com",
          "category": "editing"
        },
        "archivist": {
          "name": "Archivist",
          "version": "1.0.0",
          "release": "pl",
          "transport": "https://modx.com/extras/download/?id=52c184b562cf240b35006e33",
          "href": "http://google.com",
          "category": "editing"
        },
        "quip": {
          "name": "Quip",
          "version": "1.0.0",
          "release": "pl",
          "transport": "https://modx.com/extras/download/?id=52c184b562cf240b35006e33",
          "href": "http://google.com",
          "category": "editing"
        },
        "tagger": {
          "name": "Tagger",
          "version": "1.0.0",
          "release": "pl",
          "transport": "https://modx.com/extras/download/?id=52c184b562cf240b35006e33",
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
