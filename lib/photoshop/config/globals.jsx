/**
 * Module with globals variables
 * @namespace Globals
 * @memberOf PS
 * @author Bastien Eichenberger
 */
PS.Globals = (function (my) {

    /**
     * My private test variable
     * @private
     * @memberOf PS.Globals#
     */
    var private_test = 'secret';

    /**
     * My public test variable
     * @name test_variable
     * @type {number}
     * @memberOf PS.Globals
     * @default
     */
    my.test_variable = 0;

    return my;

})(PS.Globals || {} );
