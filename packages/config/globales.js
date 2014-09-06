Lib.Globales = function(my) {


    /**
     * log_level the severity level by default debug
     * @type {number}
     */
    my.log_level = 0;

    my.script_dir = new File($.fileName).parent;

    my.log_dir = script_dir + "/log";


    return my;
}(Lib || {} );
