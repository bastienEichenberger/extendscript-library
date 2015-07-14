/**
 * @class Number
 */

/**
 * Function to round a number
 * @param {number} number
 * @param {number} precision, the precision to round in centième
 * @return {number}
 */
Number.prototype.roundTo = function (precision) {

    var precision = precision || 2;
    var tmp = Math.pow(10, precision);

    return Math.round( this * tmp )/tmp;
}
