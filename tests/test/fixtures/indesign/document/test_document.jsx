    (function (results_folder, expected_folder) {

    try {
        //@include "../../../../../lib/indesign/indesign-lib.jsx"
        IN.Config.init();

        var doc = IN.Document.create(100, 200);

        var source = IN.Document.save({file_path : results_folder + '/document_result.indd'});

        IN.Document.export_as_PDF(results_folder + '/test.pdf', '[PDF/X-4:2008]', '1-1');

        IN.Document.export_as_JPG(results_folder + '/test_jpg_indesign.jpg', JPEGOptionsQuality.MEDIUM, 72);


        // edit just one default option
        var options = {
            creatingReport : true
        }

        IN.Document.package(results_folder, doc, options);

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