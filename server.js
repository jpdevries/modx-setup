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
    host: req.headers.host,
    protocol: req.protocol
  });
});

app.get('/api/presets', (req, res) => {
  res.json(
    require('./assets/fakepi/presets.json')
  );
});

app.get('/api/providers', (req, res) => {
  res.json(
    require('./assets/fakepi/providers.json')
  );
});

app.get('/api/categories', (req, res) => {
  res.json(
    require('./assets/fakepi/categories.json').sort((a, b) => (
      a.key > b.key
    ))
  );
});

app.get('/api/:provider/extras', (req, res) => {
  if(req.params.provider == 'modx.com') {
    return res.json(
      require('./assets/fakepi/providers/modx.json')
    )
  }
  res.json(
    require('./assets/fakepi/providers/modmore.json')
  );
});

app.get('/api/:provider/extras/exemptions', (req, res) => {
  res.json(
    require('./assets/fakepi/exemptions.json')
  );
});

app.get('/api/desires', (req, res) => {
  res.json(
    require('./assets/fakepi/desires.json')
  );
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
