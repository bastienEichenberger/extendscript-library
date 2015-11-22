/**
 * Unit testing with node-unit
 * To run the tests execute the command grunt --verbose
 * If a jsx file create a document -> save it under test/results and check if this document exist
 * If a jsx file return a value -> save this value in the xml file test/results/tests.xml and check if the value is ok
 * If you want to compare a result with an existing file store this file under test/expected
 */

'use strict';

var grunt = require('grunt');

/*
 ======== A Handy Little Nodeunit Reference ========
 https://github.com/caolan/nodeunit

 Test methods:
 test.expect(numAssertions)
 test.done()
 Test assertions:
 test.ok(value, [message])
 test.equal(actual, expected, [message])
 test.notEqual(actual, expected, [message])
 test.deepEqual(actual, expected, [message])
 test.notDeepEqual(actual, expected, [message])
 test.strictEqual(actual, expected, [message])
 test.notStrictEqual(actual, expected, [message])
 test.throws(block, [error], [message])
 test.doesNotThrow(block, [error], [message])
 test.ifError(value)
 */


/**
 * The xml file with the tests results
 * @type {XML}
 */
var xml = grunt.file.read('test/results/tests.xml');

var XmlDocument = require('xmldoc').XmlDocument;
var tests = new XmlDocument(xml);

/**
 * Function to get the node value by id
 * @param {String} value
 * @returns {*}
 */
function get_node_value_by_id (value) {
    var node = tests.childWithAttribute('id', value);
    return node.val;
}


exports.indesign_lib = {

    setUp: function (done) {
        done();
    },
    export_as_PDF: function (test) {
        var is_export_as_pdf = grunt.file.exists('test/results/test.pdf');
        test.ok(is_export_as_pdf);
        test.done();
    },
    export_as_JPG: function (test) {
        var is_export_as_jpg = grunt.file.exists('test/results/test_jpg_indesign.jpg');
        test.ok(is_export_as_jpg);
        test.done();
    },
    save_indesign_document: function (test) {
        var is_export_as_indd = grunt.file.exists('test/results/document_result.indd');
        test.ok(is_export_as_indd);
        test.done();
    },
    zip_with_shell: function (test) {
        var is_zip_shell = grunt.file.exists('test/results/output.zip');
        test.ok(is_zip_shell);
        test.done();
    },
    grep: function (test) {

        var expected = grunt.file.read('test/expected/grep.txt');
        var result = grunt.file.read('test/results/grep.txt');

        test.equal(result.toString(), expected.toString());
        test.done();
    },
    book_as_PDF: function (test) {
        var is_book_pdf = grunt.file.exists('test/results/test_book.pdf');
        test.ok(is_book_pdf);
        test.done();
    }

};


exports.photoshop_lib = {

    setUp: function (done) {
        done();
    },
    save_to_psd: function (test) {
        // check if a psd file exist in test/result
        var is_save_to_psd = grunt.file.exists('test/results/test.psd');
        test.ok(is_save_to_psd);
        test.done();
    },
    save_to_tif: function (test) {
        var is_save_to_tif = grunt.file.exists('test/results/test.tif');
        test.ok(is_save_to_tif);
        test.done();
    },
    save_as_web_JPG: function (test) {
        var is_save_to_web_JPG = grunt.file.exists('test/results/test_web_jpg.jpg');
        test.ok(is_save_to_web_JPG);
        test.done();
    },
    get_resolution: function (test) {
        // check the tests.xml file contains the value 72 dpi
        var res = get_node_value_by_id('resolution');
        res = parseInt(res, 10);
        test.equal(res, 72);
        test.done();
    },
    open_image: function (test) {
        var res = get_node_value_by_id('open_image');
        test.equal(res, 'test.psd');
        test.done();
    },
    convert_to_profile: function (test) {
        var is_convert_to_profile = grunt.file.exists('test/results/testProfileConvertion.tif');
        test.ok(is_convert_to_profile);
        test.done();
    },
    set_bits_channels: function (test) {
        var is_convert_to_profile = grunt.file.exists('test/results/testNumberOfBits.tif');
        test.ok(is_convert_to_profile);
        test.done();
    },
    set_artLayer: function (test) {
        var is_layerset = grunt.file.exists('test/results/testArtLayer.tif');
        test.ok(is_layerset);
        test.done();
    },
    add_remove_layers: function (test) {
        var is_layer = grunt.file.exists('test/results/testLayer.tif');
        test.ok(is_layer);
        test.done();
    },
    add_merge_layersets: function (test) {
        var is_layerset = grunt.file.exists('test/results/testLayerset.tif');
        test.ok(is_layerset);
        test.done();
    },
    set_remove_path: function (test) {
        var is_remove_path = grunt.file.exists('test/results/testPath.tif');
        test.ok(is_remove_path);
        test.done();
    }

};

exports.illustrator_lib = {

    setUp: function (done) {
        done();
    },

    export_svg_document: function (test) {
        var is_export_as_svg = grunt.file.exists('test/results/test_SVG.svg');
        test.ok(is_export_as_svg);
        test.done();
    }

};


/**
 * helper-lib.jsx tests
 * Those tests are running in photoshop, illustrator and indesign
 *
 */
exports.helper_lib = {

    setUp: function (done) {
        done();
    },

    call_app_from_photoshop: function (test) {
        var res = get_node_value_by_id('gateway_adobe_photoshop');
        test.equal(res, 'Adobe Photoshop return hello world');
        test.done();
    },
    call_app_from_indesign: function (test) {
        var res = get_node_value_by_id('gateway_adobe_indesign');
        test.equal(res, 'Adobe InDesign return hello world');
        test.done();
    },
    call_app_from_illustrator: function (test) {
        var res = get_node_value_by_id('gateway_adobe_illustrator');
        test.equal(res, 'Adobe Illustrator return hello world');
        test.done();
    },
    logs_from_photoshop_indesign_illustrator: function (test) {
        var actual_lines;
        var expected_lines;

        // check if the number of lines in the expected log file is equal than in the result log file
        var actual = grunt.file.read('test/log/log.log');
        actual_lines = actual.toString().split(/\r\n|\r|\n/).length;

        var expected = grunt.file.read('test/expected/log.log');
        expected_lines = expected.toString().split(/\r\n|\r|\n/).length;

        test.equal(actual_lines, expected_lines);
        test.done();
    },
    is_in_array_from_photoshop: function (test) {
        var res = get_node_value_by_id('is_in_array_adobe_photoshop');
        test.equal(res, 2);
        test.done();
    },
    is_in_array_from_indesign: function (test) {
        var res = get_node_value_by_id('is_in_array_adobe_indesign');
        test.equal(res, 2);
        test.done();
    },
    is_in_array_from_illustrator: function (test) {
        var res = get_node_value_by_id('is_in_array_adobe_illustrator');
        test.equal(res, 2);
        test.done();
    },
    min_array_from_photoshop: function (test) {
        var res = get_node_value_by_id('min_adobe_photoshop');
        test.equal(res, -2);
        test.done();
    },
    min_array_from_indesign: function (test) {
        var res = get_node_value_by_id('min_adobe_indesign');
        test.equal(res, -2);
        test.done();
    },
    min_array_from_illustrator: function (test) {
        var res = get_node_value_by_id('min_adobe_illustrator');
        test.equal(res, -2);
        test.done();
    },
    max_array_from_photoshop: function (test) {
        var res = get_node_value_by_id('max_adobe_photoshop');
        test.equal(res, 7);
        test.done();
    },
    max_array_from_indesign: function (test) {
        var res = get_node_value_by_id('max_adobe_indesign');
        test.equal(res, 7);
        test.done();
    },
    max_array_from_illustrator: function (test) {
        var res = get_node_value_by_id('max_adobe_illustrator');
        test.equal(res, 7);
        test.done();
    },
    extension_photoshop: function (test) {
        var res = get_node_value_by_id('extension_adobe_photoshop');
        test.equal(res, '.tif');
        test.done();
    },
    extension_indesign: function (test) {
        var res = get_node_value_by_id('extension_adobe_indesign');
        test.equal(res, '.tif');
        test.done();
    },
    extension_illustrator: function (test) {
        var res = get_node_value_by_id('extension_adobe_illustrator');
        test.equal(res, '.tif');
        test.done();
    }

};

