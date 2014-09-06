Lib.Config = (function (my) {



    my.init = function () {
        Lib.Log.init(Lib.Globales.script_dir, Lib.Globales.log_level);

    }

    return my;
})(Lib || {});