/**
 * Module with Utils functions
 * @namespace Utils
 * @memberOf H
 * @author Bastien Eichenberger
 */
H.Utils = (function (my) {

    /**
     * Function to check if the param is an array
     * @function is_array
     * @memberOf H.Utils
     * @param array
     * @returns {boolean}
     */
    my.is_array = function (array) {
        return array &&
            typeof array === 'object' &&
            typeof array.length === 'number' &&
            typeof array.splice === 'function' && !(array.propertyIsEnumerable('length'));
    };


    /**
     * Function to check if the object is a File
     * @function is_file
     * @memberOf H.Utils
     * @param {File} file the file to check
     * @return {boolean} true if the parameter is a valid File
     */
    my.is_file = function (file) {
        if (file instanceof File) {
            return true;

        }
        return false;
    };

    /**
     * Function to get the extension in lowercase
     * @function get_extension
     * @memberOf H.Utils
     * @param {string} filename the file name
     * @return {*} return a string with the extension in lowercase or null
     */
    my.get_extension = function (filename) {
        var index = filename.lastIndexOf(".");
        if (index !== -1) {
            return filename.substr(index, filename.length - index).toLowerCase();
        }
        return null;
    };

    /**
     * Function to check if a file exist
     * @function file_exist
     * @memberOf H.Utils
     * @param {string} file_path
     * @return {boolean} true if the file exist or false
     */
    my.file_exist = function (file_path) {
        var my_file = new File(file_path);
        if (my_file.exists) {
            return true;
        }
        else {
            return false;
        }
    };

    /**
     * This function get a file filter function for mac os x
     * @function get_file_filter
     * @memberOf H.Utils
     * @param {Array} array_of_ext an array of extension [.tif, .pdf, .jpg]
     */
    my.get_file_filter = function get_file_filter (array_of_ext) {

        if ($.os.toLowerCase().contains('windows')) {

            throw {
                name: 'UnimplementedMethodError',
                message: 'this function do not work on Windows',
                fileName: $.fileName,
                line: $.line
            };
            // ["Files:*.doc;*.docx;*.rtf"]

            var filter = "Files:";
            for (var i = 0; i < array_of_ext.length; i++) {
                 filter = filter + '*' + array_of_ext[i] + ';';
            }
            return filter;
        }
        else {
            function return_filter (file) {
                var is_valid = false;
                var index = 0;

                while (!is_valid) {

                    while (file.alias) {
                        file = file.resolve();
                        if (file == null) {
                            is_valid = false
                        }
                    }

                    if (file.constructor.name === 'Folder') {
                        is_valid = true;
                    }

                    else {

                        var ext = my.get_extension(file.name);

                        if (ext.indexOf(array_of_ext[index]) > -1) {
                            is_valid = true;
                        }
                    }

                    index++;

                    if (index >= array_of_ext.length) {
                        break;
                    }
                }
                return is_valid;
            }

            return return_filter
        }

    }

    return my;

})(H.Utils || {});