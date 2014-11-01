/**
 * @author Bastien Eichenberger
 */


(function (xml_file_path) {

    try {
        //@include "../../../../../lib/helper/helper-lib.jsx"
        H.Config.init();

        var my_array = [-1, -2, 3, 3, 4, 5, 6, 7];

        var is_in_array = my_array.is_in_array(3);
        var min = my_array.min();
        var max = my_array.max();

        // read the xml file
        var content = H.XML.read(xml_file_path);

        // add the node
        var root = new XML(content);

        // the id and the name of the current app
        var app_name = app.name;
        app_name = app_name.replace(/\s+/g, '_').toLowerCase(); // replace all spaces by _

        // add the node
        var root = new XML(content);
        var unit_test_is_in_array = <unit-test id={ 'is_in_array_' + app_name }>{is_in_array}</unit-test>;
        var unit_test_min = <unit-test id={ 'min_' + app_name }>{min}</unit-test>;
        var unit_test_max = <unit-test id={ 'max_' + app_name }>{max}</unit-test>;

        root.appendChild(unit_test_is_in_array);
        root.appendChild(unit_test_min);
        root.appendChild(unit_test_max);

        // update xml file
        H.XML.write(xml_file_path, root);


    }
    catch (ex) {
        alert('file: ' + ex.fileName + '\n message: ' + ex.message + '\n line: ' + ex.line);
    }


}).apply(this, [].slice.apply(this.arguments));