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




var xml = grunt.file.read('test/results/tests.xml');
var XmlDocument = require('xmldoc').XmlDocument;
var tests = new XmlDocument(xml);

function get_node_value_by_id(value) {
    var node = tests.childWithAttribute('id', value);
    return node.val;
}


// use console.log to debug
exports.tests = {

    setUp: function (done) {
        done();
    },


    // --------------------------- photoshop-lib tests ---------------------------
    save_to_psd: function (test) {
        var is_save_to_psd = grunt.file.exists('test/results/test.psd');
        test.ok(is_save_to_psd);
        test.done();
    },
    save_to_tif: function (test) {
        var is_save_to_tif = grunt.file.exists('test/results/test.tif');
        test.ok(is_save_to_tif);
        test.done();
    },
    get_resolution: function (test) {
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

    // --------------------------- helper-lib tests ---------------------------
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
        var res = get_node_value_by_id('is_in_array');
        test.equal(res, 2);
        test.done();
    },
    min_array_from_photoshop: function (test) {
        var res = get_node_value_by_id('min');
        test.equal(res, -2);
        test.done();
    },
    max_array_from_photoshop: function (test) {
        var res = get_node_value_by_id('max');
        test.equal(res, 7);
        test.done();
    }
};



