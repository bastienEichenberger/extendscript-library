/**
 * Module with XML functions
 * @namespace XML
 * @memberOf H
 * @author Bastien Eichenberger
 */
H.XML = (function (my) {

    /**
     * Function to read an XML file
     * @function read
     * @memberOf H.XML
     * @param {String} xml_file_path the file
     * @returns {XML} xml an xml file
     */
    my.read = function(xml_file_path) {

        var file = new File(xml_file_path);
        if (!file.exists) {
            throw new Error('the xml file cannot be found');
        }
        file.encoding = 'UTF8';
        file.lineFeed = 'unix';
        var rc = file.open('r', 'TEXT', '????');
        if (!rc) {
            throw new Error('the xml file cannot be read');
        }
        var str = file.read();
        rc = file.close();
        return new XML(str);
    };

    /**
     * Function to write into an XML file
     * @function
     * @memberOf H.XML
     * @param {String} xml_file_path
     * @param {XML} xml the xml file to edit
     * @returns {File} file
     */
    my.write = function(xml_file_path, xml) {

        if (!(xml instanceof XML)) {
            throw new Error('bad xml');
        }

        var file = new File(xml_file_path);
        if (!file.exists) {
            throw new Error('the xml file cannot be found');
        }

        file.encoding = 'UTF8';
        var rc = file.open('w', 'TEXT', '????');

        if (!rc) {
            throw new Error('the xml file cannot be run');
        }

        file.lineFeed = 'unix';
        file.writeln('<?xml version="1.0" encoding="utf-8"?>');
        rc = file.writeln(xml.toXMLString());
        rc = file.close();
        return file;
    };

    return my;
})(H.XML || {});