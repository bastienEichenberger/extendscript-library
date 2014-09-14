/**
 * @name Lib.Config
 * @class <b>Lib.Config</b> a module with the config
 * @author Bastien Eichenberger
 */
Lib.Config = (function (my) {


    /**
     * Function to init the library
     * @name Lib.Config.init
     * @function
     */
    my.init = function () {
        // init the logger
        Lib.Log.init(Lib.Globals.script_dir, Lib.Globals.log_level);

    }

    return my;
})(Lib || {});