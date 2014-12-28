(function (xml_file_path, results_folder) {

    try {
        //@include "../../../../../lib/photoshop/photoshop-lib.jsx"
        PS.Config.init();


    }
    catch (ex) {
        alert('file: ' + ex.fileName + '\n message: ' + ex.message + '\n line: ' + ex.line);
    }


}).apply(this, [].slice.apply(this.arguments));