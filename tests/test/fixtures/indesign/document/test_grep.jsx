(function (xml_file_path, results_folder) {

    try {
        //@include "../../../../../lib/indesign/indesign-lib.jsx"
        IN.Config.init();
        /**
         * @todo test the grep_document.indd file then compare with expectedd file
         */



    }
    catch (ex) {
        alert('file: ' + ex.fileName + '\n message: ' + ex.message + '\n line: ' + ex.line);
    }
    finally {
        IN.Application.restore();
    }


}).apply(this, [].slice.apply(this.arguments));