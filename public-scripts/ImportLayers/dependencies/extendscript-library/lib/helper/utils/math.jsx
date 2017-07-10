/**
 * @class Number
 */

/**
 * Function to round a number
 * @param {number} number
 * @param {number} [precision = 2], the precision to round in cm
 * @return {number}
 */
Number.prototype.roundTo = function (precision) {

    var tmp;

    if (precision === undefined) {
        var precision = 2;
    }

    tmp = Math.pow(10, precision);

    return Math.round(this * tmp) / tmp;

}
