(function (xml_file_path, results_folder) {

    try {
        //@include "../../../../../lib/helper/helper-lib.jsx"
        H.Config.init();

        // shell string to build a ZIP zip -r output.zip source
        //var shell_string = 'zip -r -j --junk-paths %s %s';
        var shell_string = 'zip -r %s %s';
        shell_string = shell_string.printf(results_folder + '/output.zip', results_folder);

        H.Shell.execute(shell_string);


    }
    catch (ex) {
        alert('file: ' + ex.fileName + '\n message: ' + ex.message + '\n line: ' + ex.line);
    }


}).apply(this, [].slice.apply(this.arguments));