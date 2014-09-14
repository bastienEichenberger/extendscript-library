/**
 * @name Lib.Globals
 * @class <b>Lib.Globals</b> a module with the globals variables
 * @author Bastien Eichenberger
 */
Lib.Globals = (function(my) {

    /**
     * log_level the severity log level, by default set to debug
     * @public
     * @name Lib.Globals.log_level
     * @type {number}
     */
    my.log_level = 0;

    /**
     * The script directories
     * @public
     * @name Lib.Globals.script_dir
     * @type {Folder}
     */
    my.script_dir = new File($.fileName).parent;

    /**
     * The log directories
     * @public
     * @name Lib.Globals.log_dir
     * @type {string}
     */
    my.log_dir = my.script_dir + "/log";


    return my;
})(Lib || {} );
