(function (results_folder, expected_folder) {

    try {
        //@include "../../../../../lib/indesign/indesign-lib.jsx"
        IN.Config.init();

        IN.Document.create(100, 200);

        var source = IN.Document.save(results_folder + '/document_result.indd');

        IN.Document.export_as_PDF(results_folder + '/test.pdf', '[PDF/X-4:2008]', '1-1');

        IN.Document.export_as_JPG(results_folder + '/test_jpg_indesign.jpg', JPEGOptionsQuality.MEDIUM, 72);

        IN.Document.package(results_folder);

        IN.Document.close(SaveOptions.NO);

        IN.Document.open(expected_folder + '/test/test.indd');

        IN.Document.copy(results_folder + '/document_copy.indd');

        IN.Document.fonts(results_folder + '/document fonts');

        IN.Document.links(results_folder + '/links');

        IN.Document.close(SaveOptions.NO);

    }
    catch (ex) {
        alert('file: ' + ex.fileName + '\n message: ' + ex.message + '\n line: ' + ex.line);
    }
    finally {
        IN.Application.restore();
    }


}).apply(this, [].slice.apply(this.arguments));