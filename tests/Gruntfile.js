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

        // -------------------- tasks for photoshop, indesign, illustrator --------------------
        photoshop: {
            test_document_application: {
                options: {
                    args: [path.resolve('test/results/tests.xml'), path.resolve('test/results')]
                },
                src: ['test/fixtures/photoshop/document/test_document.jsx', 'test/fixtures/photoshop/application/test_application.jsx']
            },
            test_log: {
                options: {
                    args: [path.resolve('test/log')]
                },
                src: 'test/fixtures/helper/log/test_log.jsx'
            },
            test_gateway_utils: {
                options: {
                    args: [path.resolve('test/results/tests.xml')]
                },
                src: ['test/fixtures/helper/gateway/test_gateway.jsx', 'test/fixtures/helper/utils/test_utils.jsx']
            }
        },

        indesign: {
            test_link: {
                options: {
                    args: []
                },
                src: 'test/fixtures/indesign/link/test_link.jsx'
            },
            test_log: {
                options: {
                    args: [path.resolve('test/log')]
                },
                src: 'test/fixtures/helper/log/test_log.jsx'
            },
            test_gateway: {
                options: {
                    args: [path.resolve('test/results/tests.xml')]
                },
                src: 'test/fixtures/helper/gateway/test_gateway.jsx'
            }
        },

        illustrator: {
            test_log: {
                options: {
                    args: [path.resolve('test/log')]
                },
                src: 'test/fixtures/helper/log/test_log.jsx'
            },
            test_gateway: {
                options: {
                    args: [path.resolve('test/results/tests.xml')]
                },
                src: 'test/fixtures/helper/gateway/test_gateway.jsx'
            }
        },
        // -------------------- end tasks for photoshop, indesign, illustrator --------------------

        // Units tests.
        nodeunit: {
            tests: ['test/tests.js']
        }

    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

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

    // Whenever the "test" task is run, first clean results and logs, create xml file, runs tasks, test them
    grunt.registerTask('test', ['clean', 'create', 'photoshop', 'indesign', 'illustrator', 'nodeunit']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'test']);

};
