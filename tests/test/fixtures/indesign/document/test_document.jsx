(function (results_folder) {

    try {
        //@include "../../../../../lib/indesign/indesign-lib.jsx"
        IN.Config.init();

        IN.Document.create(100, 200);

        IN.Document.export_as_PDF(results_folder + '/test.pdf', '[PDF/X-4:2008]');

        IN.Document.export_as_JPG(results_folder + '/test_jpg_indesign.jpg', JPEGOptionsQuality.MEDIUM, 72);

        IN.Document.close(SaveOptions.NO);

    }
    catch (ex) {
        alert('file: ' + ex.fileName + '\n message: ' + ex.message + '\n line: ' + ex.line);
    }
    finally {
        IN.Application.restore();
    }


}).apply(this, [].slice.apply(this.arguments));