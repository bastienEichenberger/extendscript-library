/**
 * Module with Utils functions
 * @namespace Utils
 * @memberOf H
 * @author Bastien Eichenberger
 */
H.Shell = (function (my) {


    /**
     * Function to execute a shell string
     * @supported for the moment this function works only on mac with InDesign
     * @todo add support for windows, Photoshop, Illustrator using batch files
     * @param shell_function
     * @returns {*|null}
     */
    my.execute = function (shell_function) {
        var result, apple_script;

        if ($.os.contains('Windows')) {
            throw {
                name: 'UnimplementedMethodError',
                message: 'this function do not work on Windows',
                fileName: $.fileName,
                line: $.line
            };
        }

        if (app.name.indexOf('InDesign') > -1) {
            apple_script = 'do shell script "' + shell_function + '"';
            try {
                result = app.doScript(apple_script, ScriptLanguage.applescriptLanguage);
            }
            catch (ex) {
                throw {
                    name: 'Error',
                    message: 'the shell function '+ shell_function + ' contains an error: ' + ex.message,
                    fileName: $.fileName,
                    line: $.line
                };
            }
        }
        else {
            throw {
                name: 'UnimplementedMethodError',
                message: 'this function works only with InDesign',
                fileName: $.fileName,
                line: $.line
            };
        }

        return result || null;
    }

    return my;

})(H.Shell || {});