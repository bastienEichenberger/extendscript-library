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

    var round = Math.pow(this, precision);

    round = Math.round(round);
    round = round / precision;

    return round;
}
