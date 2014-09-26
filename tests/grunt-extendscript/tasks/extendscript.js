/*
 * grunt-extendscript
 * https://github.com/hanamura/grunt-extendscript
 *
 * Copyright (c) 2013 Taro Hanamura
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var exec = require('child_process').exec,
      path = require('path');

  var step = function(srcs, options, done) {
    if (srcs.length) {
      var src,
          args,
          app,
          applescript,
          shellcommand;

      // src
      src = srcs[0];
      src = path.resolve(src);
      src = src.replace(/("|\\)/g, '\\$1');

      // args
      args = options.args;
      args = args.map(function(arg) {
        arg = String(arg);
        arg = arg.replace(/("|\\)/g, '\\$1');
        arg = '"' + arg + '"';
        return arg;
      });
      args = args.join(',');
      args = '{' + args + '}';

      // app
      app = options.app;
      app = app.replace(/("|\\)/g, '\\$1');

      // execute
      applescript =
        'tell application ' +
        '"' + app + '" ' +
        'to activate & do javascript file ' +
        '"' + src + '" ' +
        'with arguments ' +
        args;
      applescript = applescript.replace(/("|\\)/g, '\\$1');

      shellcommand =
        'osascript -e ' +
        '"' + applescript + '"';

      exec(shellcommand, function(error, stdout, stderr) {
        grunt.log.writeln(srcs[0]);
        step(srcs.slice(1), options, done);
      });
    } else {
      done();
    }
  };

  grunt.registerMultiTask('extendscript', 'Execute ExtendScript (.jsx) files.', function() {
    step(
      this.filesSrc,
      this.options({
        app: 'Adobe Photoshop CS6',
        args: []
      }),
      this.async()
    );
  });

};

