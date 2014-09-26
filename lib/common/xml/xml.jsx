H.XML = (function (my) {

    my.read = function(xml_file_path) {

        var file = new File(xml_file_path);
        if (!file.exists) {
            throw new Error('the xml file cannot be found');
        }
        file.encoding = 'UTF8';
        file.lineFeed = 'unix';
        var rc = file.open('r', 'TEXT', '????');
        if (!rc) {
            throw new Error('the xml file cannot be run');
        }
        var str = file.read();
        rc = file.close();
        return new XML(str);
    };

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