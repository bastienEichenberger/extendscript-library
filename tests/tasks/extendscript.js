/*
 * grunt-extendscript
 * https://github.com/hanamura/grunt-extendscript
 *
 * Copyright (c) 2013 Taro Hanamura
 * Licensed under the MIT license.
 */

'use strict';



module.exports = function (grunt) {

    var config = require('../config.js');

    var exec = require('child_process').exec,
        path = require('path');


    var step = function (srcs, options, done) {
        if (srcs.length) {
            var src,
                args,
                app,
                applescript,
                shellcommand;

            // src
            src = srcs[0];
            src = path.resolve(src);
            src = src.replace(/("|\\)/g, '\\$1'); // escape /("|\\)

            // args
            args = options.args;
            args = args.map(function (arg) {
                arg = String(arg);
                arg = arg.replace(/("|\\)/g, '\\$1'); // escape /("|\\)
                arg = '"' + arg + '"';
                return arg;
            });
            args = args.join(',');
            args = '{' + args + '}';

            // app
            app = options.app;
            app = app.replace(/("|\\)/g, '\\$1');


            // fix the bug with appleScript if the app is indesign use do script instead do javascript
            if (app.toLowerCase().indexOf('indesign') > -1) {
                applescript = 'tell application "%s" \n' +
                    'activate \n' +
                    'do script "%s" with arguments %s language javascript \n' +
                    'end tell';
            }
            else {
                applescript = 'tell application "%s"    \n' +
                    'activate \n' +
                    'do javascript file "%s" with arguments %s \n' +
                    'end tell';
            }

            applescript = applescript.printf(app, src, args);
            applescript = applescript.replace(/("|\\)/g, '\\$1'); // escape /("|\\)

            shellcommand = 'osascript -e "%s"';
            shellcommand = shellcommand.printf(applescript);

            exec(shellcommand, function (error, stdout, stderr) {
                grunt.log.writeln(srcs[0]);
                step(srcs.slice(1), options, done); // repeat the step() for each source files
            });
        } else {
            done();
        }
    };


    grunt.registerMultiTask('illustrator', 'Execute ExtendScript in illustrator', function () {
        step(this.filesSrc, this.options({ app: config.app.illustrator, args: [] }), this.async() );
    });

    grunt.registerMultiTask('photoshop', 'Execute ExtendScript in photoshop', function () {
        step(this.filesSrc, this.options({ app: config.app.photoshop, args: [] }), this.async() );
    });

    grunt.registerMultiTask('indesign', 'Execute ExtendScript in indesign', function () {
        step(this.filesSrc, this.options({ app: config.app.indesign, args: [] }), this.async() );
    });

};

String.prototype.printf = function (obj) {
    var useArguments = false;
    var _arguments = arguments;
    var i = -1;
    if (typeof _arguments[0] === "string") {
        useArguments = true;
    }
    if (obj instanceof Array || useArguments) {
        return this.replace(/\%s/g,
            function (a, b) {
                i++;
                if (useArguments) {
                    if (typeof _arguments[i] === 'string') {
                        return _arguments[i];
                    }
                    else {
                        throw new Error("Arguments element is an invalid type");
                    }
                }
                return obj[i];
            });
    }
    else {
        return this.replace(/\{([^{}]*)\}/g,
            function (a, b) {
                var r = obj[b];
                return typeof r === 'string' || typeof r === 'number' ? r : a;
            });
    }
};

