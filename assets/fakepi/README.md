See [REST API for Extras List ](https://github.com/jpdevries/modx-setup/issues/4)

As explained in [#3](https://github.com/jpdevries/modx-setup/issues/3) the setup front end will need to hit an API to get the information for

 - What'll I'll be managing (presets)
 - What I want (desires)
 - Packages to Install (extras)
 - Package exemptions

| Route  | HTTP Verb | Description |
| ------------- | ------------- | ------------- |
| `/presets/`  | `GET`  | Retrieve a list of presets
| `/providers/`  | `GET`  | Retrieve a list of extra providers
| `/desires/`  | `GET`  | Retrieve a list of desires
| `/categories/`  | `GET`  | Retrieve a list of categories
| `/:providers/extras/`  | `GET`  | Retrieve a list of extras
| `/:providers/extras/exemptions/`  | `GET`  | Retrieve a list of extra exemptions

## Example Responses
### Retrieve a list of presets `GET /presets`

```json
[
   {
      "key":"blog",
      "title":"Blog",
      "dependent": [
         "getresources",
         "collections",
         "blockdown",
         "formit",
         "formalicious",
         "content-blocks",
         "redactor",
         "getpage",
         "seo-tab",
         "seo-pro",
         "google-analytics-dashboard-widget",
         "wayfinder",
         "breadcrumbs",
         "googlesitemap",
         "simplesearch",
         "twitterx",
         "batcher",
         "taglister",
         "archivist",
         "quip",
         "tagger"
      ]
   },
   {
      "key":"custom-site",
      "title":"Custom Site",
      "checked":true
   },
   {
      "key":"portfolio-site",
      "title":"Portfolio Site"
   },
   {
      "key":"webshop",
      "title":"Webshop"
   },
   {
      "key":"web-app",
      "title":"Web App"
   },
   {
      "key":"api",
      "title":"API"
   }
]
```

### Retrieve a list of extra providers `GET /providers`

```json
[
  "modx.com",
  "modmore"
]
```

### Retrieve a list of categories `GET /:provider/categories`
```json
[
  {
    "key": "editing",
    "title": "Editing Packages"
  },
  {
    "key": "utility",
    "title": "Utility Packages"
  },
  {
    "key": "content",
    "title": "Content Packages"
  },
  {
    "key": "editing",
    "title": "Editing Packages"
  },
  {
    "key": "marketing",
    "title": "Marketing Packages"
  },
  {
    "key": "social",
    "title": "Social Packages"
  },
  {
    "key": "media",
    "title": "Media Packages"
  }
]

```

### Retrieve a list of extras `GET /:provider/extras`
```json
{
  "provider": "modmore",
  "extras": {
    "blockdown": {
      "title": "BlockDown",
      "description": "BlockDown adds a MarkDown input type to ContentBlocks",
      "version": "1.0.0",
      "release": "pl",
      "transport": "https://modx.com/extras/download/?id=52c184b562cf240b35006e33",
      "href": "http://google.com",
      "category": "editing"
    },
    "formalicious": {
      "title": "Formalicious by Sterc",
      "description": "Formalicious is the most powerful and easiest MODX form builder, with built-in multi-step forms, 8 field types, hooks, validation and the ability to use advanced FormIt features",
      "version": "1.0.0",
      "release": "pl",
      "transport": "https://modx.com/extras/download/?id=52c184b562cf240b35006e33",
      "href": "http://google.com",
      "category": "content",
      "premium": true,
      "price": "€59"
    },
    "content-blocks": {
      "title": "ContentBlocks by modmore",
      "description": "ContentBlocks is a powerful content manager for MODX allowing editors to create modular, multi-column content",
      "version": "1.0.0",
      "release": "pl",
      "transport": "https://modx.com/extras/download/?id=52c184b562cf240b35006e33",
      "href": "http://google.com",
      "category": "content",
      "premium": true,
      "price": "€79"
    },
    "redactor": {
      "title": "Redactor by modmore",
      "description": "Redactor is a beautiful, user friendly, and configurable rich text editor for MODX with powerful media management",
      "price": "€29",
      "version": "1.0.0",
      "release": "pl",
      "transport": "https://modx.com/extras/download/?id=52c184b562cf240b35006e33",
      "href": "http://google.com",
      "category": "editing",
      "premium": true,
      "type": "radio",
      "default": true,
      "name": "redactor-tinymce"

    },
    "more-gallery": {
      "title": "MoreGallery",
      "description": "MoreGallery is an intuitive and powerful image gallery complete with video support, tags, cropping and custom fields",
      "version": "1.0.0",
      "release": "pl",
      "transport": "https://modx.com/extras/download/?id=52c184b562cf240b35006e33",
      "href": "http://google.com",
      "category": "media",
      "premium": true,
      "price": "€25"
    },
    "versionx": {
      "title": "VersionX",
      "description": "Give yourself peace of mind. Backup your stuff",
      "version": "1.0.0",
      "release": "pl",
      "transport": "https://modx.com/extras/download/?id=52c184b562cf240b35006e33",
      "href": "http://google.com",
      "category": "content"
    }
  }
}
```


### Retrieve a list of extra exemptions `GET /:providers/extras/exemptions`
```json
{
  "pdotools": [
    "getresources",
    "wayfinder",
    "breadcrumbs",
    "googlesitemap",
    "getpage"
  ]
}

```

### Retrieve a list of desires `GET /desires`
```json
[
  {
    "collections": {
        "title": "Manage content as collections",
        "presetDependencies": ["blog"],
        "dependencies": ["collections"]
    }
  }
]
```
