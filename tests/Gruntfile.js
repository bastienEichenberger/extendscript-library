/*
 * grunt-extendscript
 * https://github.com/hanamura/grunt-extendscript
 *
 * Copyright (c) 2013 Taro Hanamura
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    var path = require('path');

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                '<%= nodeunit.tests %>'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        // Before generating any new files, remove the results folder and the log folder
        clean: {
            test: ['test/results', 'test/log']
        },


        // Configuration to be run (and then tested).
        extendscript: {
            test_document: {
                options: {
                    app: 'Adobe Photoshop CS6',
                    args: [path.resolve('test/results/tests.xml'), path.resolve('test/results'), path.resolve('test/log')]
                },
                src: 'test/fixtures/photoshop/document/test_document.jsx'
            },
            test_application: {
                options: {
                    app: 'Adobe Photoshop CS6',
                    args: [path.resolve('test/results/tests.xml'), path.resolve('test/results'), path.resolve('test/log')]
                },
                src: 'test/fixtures/photoshop/document/test_application.jsx'
            }
        },

        // Unit tests.
        nodeunit: {
            tests: ['test/test_photoshop-lib.js']
        }

    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', ['clean', 'create', 'extendscript', 'nodeunit']);

    // then create a new results and log folder, create a xml file with root
    grunt.registerTask('create', 'Create results and log directories', function () {
        grunt.file.mkdir('test/results');
        grunt.file.mkdir('test/log');

        grunt.file.write('test/results/tests.xml',
            '<?xml version="1.0" encoding="UTF-8"?>' +
            '<tests>' +
            '</tests>'
        );
    });


    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'test']);

};
