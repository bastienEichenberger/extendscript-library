/**
 * Module with Utils functions
 * @namespace Utils
 * @memberOf H
 * @author Bastien Eichenberger
 */
H.Utils = (function (my) {

    /**
     * Function to check if the param is an array
     * @param array
     * @returns {boolean}
     */
    my.is_array = function (array) {
        return array &&
            typeof array === 'object' &&
            typeof array.length == 'number' &&
            typeof array.splice === 'function' && !(value.propertyIsEnumerable('length'));
    };



    return my;
})(H.Utils || {});