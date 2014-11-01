(function () {

    try {
        //@include "../../../../../lib/indesign/indesign-lib.jsx"
        IN.Config.init();

        // code
    }
    catch (ex) {
        alert('file: ' + ex.fileName + '\n message: ' + ex.message + '\n line: ' + ex.line);
    }


}).apply(this, [].slice.apply(this.arguments));