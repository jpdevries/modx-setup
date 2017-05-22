var Visualizer = require('webpack-visualizer-plugin');

module.exports = function(grunt) {
  const pkg = grunt.file.readJSON('package.json');
  const webpackConfig = require('./webpack.config');
  grunt.initConfig({
    pkg: pkg,
    dirs:{
      static:'./static/',
      theme:'./',
      lib:'./lib/',
      assets:'./assets/',
      js:'./js/',
      css:'./css/',
      img:'./img/',
      scss:'scss/'
    },
    bower: {
        install: {
            options: {
                targetDir: './lib',
                layout: 'byComponent'
            }
        }
    },
    webpack: {
      options: {
        stats: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
      },
      prod: webpackConfig,
      dev: Object.assign({ watch: true }, webpackConfig)
    },
    modernizr:{
      dist:{
        "crawl": false,
        "customTests": [],
        "dest": "<%= dirs.theme %><%= dirs.assets %><%= dirs.js %>vendor/modernizr.js",
        "enableJSClass":true,
        "tests": [
          "audio",
          "batteryapi",
          "cookies",
          "emoji",
          "eventlistener",
          "fullscreen",
          "geolocation",
          "history",
          "htmlimports",
          "inputtypes",
          "json",
          "ligatures",
          "notification",
          "pagevisibility",
          "queryselector",
          "requestanimationframe",
          "svg",
          "typedarrays",
          "vibrate",
          "adownload",
          "webaudio",
          "lowbattery",
          "cssanimations",
          "csscalc",
          "checked",
          "csscolumns",
          "flexbox",
          "fontface",
          "lastchild",
          "mediaqueries",
          "opacity",
          "csspointerevents",
          "csspositionsticky",
          "cssremunit",
          "scrollsnappoints",
          "subpixelfont",
          "cssvhunit",
          "cssvwunit",
          "willchange",
          "hidden",
          "picture",
          "es5date",
          "es6array",
          "es6collections",
          "generators",
          "es6math",
          "es6number",
          "es6object",
          "promises",
          "es6string",
          "oninput",
          "filereader",
          "filesystem",
          "jpeg2000",
          "srcset",
          "fetch",
          "speechsynthesis",
          "svgasimg",
          "svgfilters",
          "inlinesvg",
          "datauri",
          "urlparser",
          "sharedworkers",
          "webworkers"
        ],
        "options": [
          "setClasses"
        ],
        "uglify": true
      }
    },
    copy: {
      bower: {
        files: [{
            src: 'bourbon/**/*',
            cwd: '<%= dirs.lib %>',
            dest: '<%= dirs.scss %>',
            expand: true
        }, {
            src: 'neat/**/*',
            cwd: '<%= dirs.lib %>',
            dest: '<%= dirs.scss %>',
            expand: true
        }, {
            src: 'spec/**/*',
            cwd: '<%= dirs.lib %>spectacular/',
            dest: '<%= dirs.scss %>',
            expand: true
        }]
      },
      "html5-boilerplate": {
        files: [{
            src: '<%= dirs.lib %>html5-boilerplate/css/main.css',
            dest: '<%= dirs.scss %>html5-boilerplate/main.scss'
        }, {
            src: '<%= dirs.lib %>html5-boilerplate/css/normalize.css',
            dest: '<%= dirs.scss %>html5-boilerplate/normalize.scss'
        }]
      },
    },
    sass:{
      dev: {
				options: {
					style: 'expanded',
					compass: false,
          sourcemap: false
				},
				files: {
					'<%= dirs.theme %><%= dirs.assets %><%= dirs.css %>main.css': '<%= dirs.scss %>main.scss'
				}
			}
    },
    /*postcss: {
      options: {
        map: true, // inline sourcemaps

        // or
        map: {
            inline: false, // save all sourcemaps as separate files...
            //annotation: 'dist/css/maps/' // ...to the specified directory
        },

        processors: [
          require('pixrem')(), // add fallbacks for rem units
          require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
          require('postcss-custom-properties')({preserve: true})
          //require('cssnano')() // minify the result
        ]
      },
      dist: {
        src: '<%= dirs.theme %><%= dirs.assets %><%= dirs.css %>*.css'
      }
    },*/
    bump: {
      index: {
        files: [{
            src: './public/index.html',
            dest: './public/index.html'
        }],
        options: {
            replacements: [{
                pattern: /<link rel="stylesheet" type="text\/css" href="assets\/css\/eureka.\d*.\d*.\d*.min.css/i,
                replacement: `<link rel="stylesheet" type="text/css" href="assets/css/eureka.<%= pkg.version %>.min.css`
            }]
        }
      },
      pkg: {
        files: [{
            src: './package.json',
            dest: './package.json'
        }, {
            src: './bower.json',
            dest: './bower.json'
        }],
        options: {
            replacements: [{
                pattern: /"version":\s*"\d+.\d+.\d+"/,
                replacement: '"version": "' + (grunt.option('ver') || '<%= pkg.version %>') + '"'
            }, {
                pattern: /"release"\s*:\s*"(.*?)"/,
                replacement: '"release": "' + (grunt.option('rel') || '<%= pkg.release %>') + '"'
            },{
              pattern: /eureka.\d+.\d+.\d+/,
              replacement: `eureka.${grunt.option('ver') || pkg.version}`
            },{
              pattern: /eureka-browser.bundle.\d+.\d+.\d+./,
              replacement: `eureka-browser.bundle.${grunt.option('ver') || pkg.version}.`
            }]

        }
      }
    },
    cssmin:{
      ship: {
        options:{
          report:'gzip'
        },
        files: {
            '<%= dirs.theme %><%= dirs.assets %><%= dirs.css %>main.min.css': '<%= dirs.theme %><%= dirs.assets %><%= dirs.css %>main.css'
        }
      },
    },
    svgo: {
      static: {
        options: {
          cleanupIDs: false,
          cleanupIds: false,
          plugins: [{
                      cleanupIDs: false
                  }]
        },
        files: {
          '<%= dirs.build %><%= dirs.assets %><%= dirs.img %>icons.min.svg': '<%= dirs.build %><%= dirs.assets %><%= dirs.img %>icons.svg'
        }
      }
    },
    uglify: {
      'modx-setup': {
        files: {
          '<%= dirs.theme %><%= dirs.assets %><%= dirs.js %>modx-setup.<%= pkg.version %>.min.js': ['<%= dirs.theme %><%= dirs.assets %><%= dirs.js %>modx-setup.js']
        }
      }
    },
    growl: { /* optional growl notifications requires terminal-notifer: gem install terminal-notifier */
      sass: {
          message: "Sass files created.",
          title: "grunt"
      },
      build: {
          title: "grunt",
          message: "Build complete."
      },
      watch: {
          title: "grunt",
          message: "Watching. Grunt has its eye on you."
      },
      concat: {
          title: "grunt",
          message: "JavaScript concatenated."
      },
      uglify: {
          title: "grunt",
          message: "JavaScript minified."
      }
    },
    clean: {
      buildcss: [
        '<%= dirs.build %><%= dirs.assets %><%= dirs.css %>*'
      ],
      themecss: [
        '<%= dirs.theme %><%= dirs.assets %><%= dirs.css %>*'
      ],
      buildjs: [
        '<%= dirs.build %><%= dirs.assets %><%= dirs.js %>*.js',
        '<%= dirs.theme %><%= dirs.assets %><%= dirs.js %>*.js'
      ],
      buildimg: [
        '<%= dirs.build %><%= dirs.assets %><%= dirs.img %>icons.*.svg',
        '<%= dirs.theme %><%= dirs.assets %><%= dirs.img %>icons.*.svg'
      ]
    },
    svgstore: {
      icons: {
        files: {
          '<%= dirs.build %><%= dirs.assets %><%= dirs.img %>icons.svg': ['<%= dirs.theme %><%= dirs.assets %><%= dirs.img %>src/svg/*.svg']
        },
        options: {
          formatting : {
            indent_size : 2
          },
          prefix: 'icon-',
          cleanup: true,
          convertNameToId: function(name) {
            return name.replace(/^\w+\_/, '');
          }
        }
      }
    },
    watch: { /* trigger tasks on save */
      options: {
          livereload: true
      },
      scss: {
          options: {
              livereload: true
          },
          files: '<%= dirs.scss %>**/*.scss',
          tasks: ['sass:dev', 'cssmin', 'growl:sass']
      }
    },
  });



  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks("grunt-modernizr");
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-growl');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-string-replace');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-svgo');
  grunt.loadNpmTasks('grunt-svgstore');

  grunt.renameTask('string-replace','bump');

  grunt.registerTask('default', ['growl:watch', 'watch']);
  //grunt.registerTask('build',['bower','copy:bower','modernizr','sass','copy:css','postcss','cssmin','copy:css','webpack','uglify','clean:buildimg','svgstore','svgo','copy:img','growl:build']);
  grunt.registerTask('build',['sass','cssmin','webpack','growl:sass']);
  grunt.registerTask('buildcss',['sass','cssmin','growl:sass']);
};
