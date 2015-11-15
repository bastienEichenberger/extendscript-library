(function (xml_file_path, results_folder) {

    try {

        //@include "../../../../../lib/photoshop/photoshop-lib.jsx"
        PS.Config.init();

        SCRIPT_FOLDER = new File($.fileName).parent;

        // open a document
        var doc = PS.Document.open(SCRIPT_FOLDER + '/testPath.psd');

        // remove paths
        PS.Path.remove_by_kind([PathKind.NORMALPATH, PathKind.WORKPATH], doc);

        PS.Document.save_to_TIFF(results_folder + '/testPath.tif');

        PS.Document.close(SaveOptions.DONOTSAVECHANGES, doc);

    }

    catch (ex) {
        alert('file: ' + ex.fileName + '\n message: ' + ex.message + '\n line: ' + ex.line);
    }

}).apply(this, [].slice.apply(this.arguments));

