/**
 * Node module to run extendscript file in photoshop, indesign and illustrator
 *
 * @supported Work only with Mac OS X
 * @supported Windows
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

    var path = require('path');

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

        // Before generating any new files, remove folders(results, log and temp files (on windows only with vbs)
        clean: {
            test: ['test/results', 'test/log', 'test/temp']
        },

        photoshop: {
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
            },
            test_array_file: {
                options: {
                    args: [path.resolve('test/results/tests.xml')]
                },
                src: ['test/fixtures/helper/utils/test_array.jsx', 'test/fixtures/helper/utils/test_file.jsx']
            },
            test_document_application: {
                options: {
                    args: [path.resolve('test/results/tests.xml'), path.resolve('test/results')]
                },
                src: ['test/fixtures/photoshop/document/test_document.jsx', 'test/fixtures/photoshop/application/test_application.jsx']
            },
            test_path: {
                options: {
                    args: [path.resolve('test/results/tests.xml'), path.resolve('test/results')]
                },
                src: ['test/fixtures/photoshop/path/test_path.jsx']
            },
            test_artlayer: {
                options: {
                    args: [path.resolve('test/results/tests.xml'), path.resolve('test/results')]
                },
                src: ['test/fixtures/photoshop/artlayer/test_artlayer.jsx']
            },
            test_channel: {
                options: {
                    args: [path.resolve('test/results/tests.xml'), path.resolve('test/results')]
                },
                src: ['test/fixtures/photoshop/channel/test_channel.jsx']
            },
            test_layer: {
                options: {
                    args: [path.resolve('test/results/tests.xml'), path.resolve('test/results')]
                },
                src: ['test/fixtures/photoshop/layer/test_layer.jsx']
            },
            test_layerset: {
                options: {
                    args: [path.resolve('test/results/tests.xml'), path.resolve('test/results')]
                },
                src: ['test/fixtures/photoshop/layerset/test_layerset.jsx']
            }
        },

        indesign: {
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
            },
            test_array_file: {
                options: {
                    args: [path.resolve('test/results/tests.xml')]
                },
                src: ['test/fixtures/helper/utils/test_array.jsx', 'test/fixtures/helper/utils/test_file.jsx']
            },
            test_link: {
                options: {
                    args: []
                },
                src: 'test/fixtures/indesign/link/test_link.jsx'
            },
            test_document: {
                options: {
                    args: [path.resolve('test/results'), path.resolve('test/expected')]
                },
                src: 'test/fixtures/indesign/document/test_document.jsx'
            },
            test_grep: {
                options: {
                    args: [path.resolve('test/results')]
                },
                src: 'test/fixtures/indesign/document/test_grep.jsx'
            },
            test_shell: {
                options: {
                    args: [path.resolve('test/results/tests.xml'), path.resolve('test/results')]
                },
                src: ['test/fixtures/helper/shell/test_shell.jsx']
            },
            test_book: {
                options: {
                    args: [path.resolve('test/results')]
                },
                src: ['test/fixtures/indesign/book/test_book.jsx']
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
            },
            test_array_file: {
                options: {
                    args: [path.resolve('test/results/tests.xml')]
                },
                src: ['test/fixtures/helper/utils/test_array.jsx', 'test/fixtures/helper/utils/test_file.jsx']
            },
            test_document: {
                options: {
                    args: [path.resolve('test/results')]
                },
                src: 'test/fixtures/illustrator/document/test_document.jsx'
            }
        },

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

    // create a new results and create a xml file with root
    grunt.registerTask('create', 'Create results and temp directories', function () {
        grunt.file.mkdir('test/results');
		grunt.file.mkdir('test/temp');
        grunt.file.write('test/results/tests.xml',
            '<?xml version="1.0" encoding="UTF-8"?>' +
            '<tests>' +
            '</tests>'
        );
    });


    // Whenever the "test" task is run, first clean results and logs, create xml file, runs tasks, test them
    grunt.registerTask('test', ['clean', 'create', 'illustrator', 'photoshop', 'indesign', 'nodeunit']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'test']);

};
