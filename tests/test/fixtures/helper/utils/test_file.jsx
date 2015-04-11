/**
 * @author Bastien Eichenberger
 */


(function (xml_file_path) {

    try {
        //@include "../../../../../lib/helper/helper-lib.jsx"

        H.Config.init();

        var my_file = new File('~Desktop/test.tif');

        var ext = my_file.extension();

        // read the xml file
        var content = H.XML.read(xml_file_path);

        // add the node
        var root = new XML(content);

        // the id and the name of the current app
        var app_name = app.name;
        app_name = app_name.replace(/\s+/g, '_').toLowerCase(); // replace all spaces by _

        // add the node
        var root = new XML(content);
        var unit_test_extension = <unit-test id={ 'extension_' + app_name }>{ext}</unit-test>;


        root.appendChild(unit_test_extension);


        // update xml file
        H.XML.write(xml_file_path, root);


    }
    catch (ex) {
        alert('file: ' + ex.fileName + '\n message: ' + ex.message + '\n line: ' + ex.line);
    }


}).apply(this, [].slice.apply(this.arguments));