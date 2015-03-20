/**
 * Node module to execute a jsx files
 *
 * @supported Mac OS X and Windows
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
    var os = require('os');
    var fs = require('fs');
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

            if (os.platform() === 'darwin') {
                shellcommand = do_apple_script(app, src, args);
            }
            else if (os.platform() === 'win32' || os.platform() === 'win64') {
                shellcommand = do_visual_basic(app, src, args);
            }
            else {
                throw new Error('your system is not supported yet. This function works only on Mac OS X and Windows');
            }

            exec(shellcommand, function (error, stdout, stderr) {
                grunt.log.writeln(srcs[0]);
                step(srcs.slice(1), options, done); // repeat the step() for each source files
            });

        } else {
            done();
        }
    };

    function do_visual_basic (app, src, args) {
        var vbs_args_array = 'Array(' + args.toString().replace(/[{}]/g, "") + ')';
        var visualBasicScript,
            shellcommand;
        // the program InDesign has not a DoJavaScriptFile method
        if (app.toLowerCase().indexOf('indesign') > -1) {
            visualBasicScript = 'Dim myInDesign \n' +
            'Dim myJavaScript \n' +
            'Set myInDesign = CreateObject("%s") \n' +
            'myJavaScript = "%s" \n' +
            'myInDesign.DoScript myJavaScript, 1246973031, %s \n';
        }
        else {
            visualBasicScript = 'Dim app \n' +
            'Dim myJavaScript \n' +
            'Set app = CreateObject("%s") \n' +
            'myJavaScript = "%s" \n' +
            'call app.DoJavaScriptFile(myJavaScript, %s, 1)';
        }
        visualBasicScript = visualBasicScript.printf(app, src, vbs_args_array);
        // to run vbs with windows a temp file is required
        fs.writeFile(path.resolve('test/temp/execute.vbs'), visualBasicScript, function (err) {
            if (err) {
                throw new Error("Error during vbs file writing");
            }
            else {
                grunt.log.writeln("vbs file writting ok");
            }
        });
        // run cscript with the temp/execute.vbs file
        shellcommand = 'cscript ' + path.resolve('test/temp/execute.vbs');
        shellcommand = shellcommand.printf(visualBasicScript);
        return shellcommand;
    }

    function do_apple_script (app, src, args) {
        var applescript,
            shellcommand;

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
        // run the appleScript directly in the terminal, escape specials chars
        applescript = applescript.replace(/("|\\)/g, '\\$1'); // escape /("|\\)

        shellcommand = 'osascript -e "%s"';
        shellcommand = shellcommand.printf(applescript);
        return shellcommand;
    }

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

