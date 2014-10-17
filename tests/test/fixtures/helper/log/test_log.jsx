(function (log_folder) {

    try {

        //@include "../../../../../lib/helper/helper-lib.jsx"

        H.Log.init(log_folder, 0);

        H.Log.warn('my warn message');
        H.Log.info('my info message')
        H.Log.debug('my debug message');
        H.Log.error('my error message');

    }

    catch (ex) {
        alert('file: ' + ex.fileName + '\n message: ' + ex.message + '\n line: ' + ex.line);
    }

}).apply(this, [].slice.apply(this.arguments));

