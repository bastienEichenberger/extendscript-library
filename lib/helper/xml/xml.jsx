/**
 * Module with XML functions
 * @namespace XML
 * @memberOf H
 * @author Bastien Eichenberger
 * @requires {@File H}
 * @todo complete this part and read the documentation JavaScript Tool Guide page 240
 */
H.XML = (function (my) {

    /**
     * Function to read an XML file
     * @function read
     * @memberOf H.XML
     * @param {string} xml_file_path the file
     * @returns {XML} xml an xml file
     */
    my.read = function (xml_file_path) {
        var file = new File(xml_file_path);
        var str = file.read()
        return new XML(str);
    };

    /**
     * Function to write into an XML file
     * @function write
     * @memberOf H.XML
     * @param {string} xml_file_path
     * @param {XML} xml the xml file to edit
     * @returns {File} file
     */
    my.write = function (xml_file_path, xml) {

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
            throw new Error('the xml file cannot be read');
        }

        file.lineFeed = 'unix';
        file.writeln('<?xml version="1.0" encoding="utf-8"?>');
        rc = file.writeln(xml.toXMLString());
        rc = file.close();
        return file;
    };

    return my;

})(H.XML || {});