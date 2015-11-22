(function (results_folder) {

    try {
        //@include "../../../../../lib/indesign/indesign-lib.jsx"
        IN.Config.init();

        SCRIPT_FOLDER = new File($.fileName).parent;

        var book_path;

        if (app.version < 9) {
            book_path = 'exportBookCS6/test_book_cs6.indb';
        }
        else {
            book_path = 'exportBookCC2015/test_book_cc.indb';
        }

        var book = IN.Book.open(SCRIPT_FOLDER + '/' + book_path);

        IN.Book.export_as_PDF(results_folder + '/test_book.pdf', '[PDF/X-4:2008]');

        IN.Book.close(SaveOptions.NO, book);

    }
    catch (ex) {
        alert('file: ' + ex.fileName + '\n message: ' + ex.message + '\n line: ' + ex.line);
    }
    finally {
        IN.Application.restore();
    }


}).apply(this, [].slice.apply(this.arguments));