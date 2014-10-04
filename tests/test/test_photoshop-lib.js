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
var xml2js = require('xml2js');
var parser = xml2js.Parser();

function get_node_value_by_id (xml, value) {

    var result;
    parser.parseString(xml, function (err, data) {
        for(var i = 0; i < data.tests['unit-test'].length; i++) {
            var id = data.tests['unit-test'][i]['$']['id'];
            if (id === value) {
                result = data.tests['unit-test'][i]['_'];
            }
        }
    });

    if (!result) {
        throw new Error('there is no unit-test node with an id attribute: ' + value);
    }
    return result;
}

exports.extendscript = {

    setUp: function (done) {

        done();
    },
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
        var res = get_node_value_by_id(xml, 'resolution');
        res = parseInt(res, 10);
        test.equal(res, 72);
        test.done();
    },
    open_image: function (test) {
        var res = get_node_value_by_id(xml, 'open_image');
        test.equal(res, 'test.psd');
        test.done();
    }

};



