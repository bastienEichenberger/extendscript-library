(function (results_folder) {

    try {
        //@include "../../../../../lib/indesign/indesign-lib.jsx"
        IN.Config.init();

        SCRIPT_FOLDER = new File($.fileName).parent;

        var book = IN.Book.open(SCRIPT_FOLDER + '/test_book.indb');

        IN.Book.export_as_PDF(results_folder + '/test_book.pdf', '[PDF/X-4:2008]');

    }
    catch (ex) {
        alert('file: ' + ex.fileName + '\n message: ' + ex.message + '\n line: ' + ex.line);
    }
    finally {
        IN.Application.restore();
    }


}).apply(this, [].slice.apply(this.arguments));