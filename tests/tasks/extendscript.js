/**
 * Node module to execute a jsx file with AppleScript
 *
 * @supported Work only with Mac OS X
 * @todo add support for windows (use other scripting language than AppleScript)
 *
 * This module is inspired by:
 * grunt-extendscript
 * https://github.com/hanamura/grunt-extendscript
 * Copyright (c) 2013 Taro Hanamura
 * Licensed under the MIT license.
 * @author Taro Hanamura
 * @author Bastien Eichenberger (add some modifications)
 */

'use strict';


module.exports = function (grunt) {

    var config = require('../config.js');

    var exec = require('child_process').exec,
        path = require('path');

    /**
     * Function to execute all jsx file of a task
     * For more information see the Gruntfile.js file
     * @param srcs the jsx file to execute
     * @param options an object with the arguments
     * @param done function to execute, force task into async mode with this.async()
     */
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

    // run jsx file in illustrator
    grunt.registerMultiTask('illustrator', 'Execute ExtendScript in illustrator', function () {
        step(this.filesSrc, this.options({ app: config.apps.illustrator, args: [] }), this.async());
    });
    // run jsx file in photohsop
    grunt.registerMultiTask('photoshop', 'Execute ExtendScript in photoshop', function () {
        step(this.filesSrc, this.options({ app: config.apps.photoshop, args: [] }), this.async());
    });
    // run jsx file in indesign
    grunt.registerMultiTask('indesign', 'Execute ExtendScript in indesign', function () {
        step(this.filesSrc, this.options({ app: config.apps.indesign, args: [] }), this.async());
    });

    //run a jsx file in all application in the all_apps array
    grunt.registerMultiTask('all_apps', function () {
        var all_apps = ['photoshop', 'illustrator', 'indesign'];
        var args = this.options().args;
        var src = this.filesSrc;
        /**
         * run all task with the same parameters
         * grunt.config.set('photoshop.options.args', args);
         * grunt.config.set('photoshop.src', src);
         * grunt.task.run('photoshop');
         */
        for(var i = 0; i < all_apps.length; i++) {
            grunt.config.set(all_apps[i] + '.options.args', args);
            grunt.config.set(all_apps[i] + '.src', src);
            grunt.task.run(all_apps[i]);
        }
    });


};


/**
 * Function to build a string
 * @author Jason Trill
 * {@link https://gist.github.com/jjt/850046#file-string-prototype-printf-js | jjt/String.prototype.printf.js}
 * @param {String} obj the list of string to replace or an object or an array
 * @returns {String} the new string
 * @example
 * "%s %s great".printf('This', 'is') -> This is great
 * "{bar} or {foo}".printf({foo:'A',bar,'B'}) -> B or A
 * "{}, {}, {}!".printf([1,2,3]) -> 1, 2, 3!
 */
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

