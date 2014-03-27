/*
 * Returns a new Number object set to the value of the argument converted to a number.
 * @constructor
   *
 * @param {any} value The value of the object being created.
 */
function Number(value) {
  /*
   * A constant representing the smallest representable number.
   * @type {Number}
   */
  this.MIN_VALUE = undefined;
  
  /*
   * A constant representing the largest representable number.
   * @type {Number}
   */
  this.MAX_VALUE = undefined;
  
  /*
   * A constant representing the special "Not a Number" value.
   * @type {Number}
   */
  this.NaN = undefined;
  
  /*
   * A constant representing negative infinity.
   * @type {Number}
   */
  this.NEGATIVE_INFINITY = undefined;
  
  /*
   * A constant representing positive infinity.
   * @type {Number}
   */
  this.POSITIVE_INFINITY = undefined;
  
  /*
   * undefined
   * @returns {Number}
   */
  this.toSource = function() {
    return new Number();
  }
  
  /*
   * Returns the value of a Number object converted to a string.
   *
   * @param {Number} [radix] The optional conversion radix.
   * @returns {Number}
   */
  this.toString = function(radix) {
    return new Number();
  }
  
  /*
   * Returns the value of a Number object converted to a string, using localized conventions.
   * @returns {Number}
   */
  this.toLocaleString = function() {
    return new Number();
  }
  
  /*
   * Converts the Number object to a string with fixed decimals.
   *
   * @param {Number} decimals The number of decimals.
   * @returns {Number}
   */
  this.toFixed = function(decimals) {
    return new Number();
  }
  
  /*
   * Converts the Number object to a string in scientific notation.
   *
   * @param {Number} decimals The number of decimals.
   * @returns {Number}
   */
  this.toExponential = function(decimals) {
    return new Number();
  }
  
  /*
   * Converts the Number object to a string in either scientific or fixed notation, epending on its value.
   *
   * @param {Number} decimals The number of decimals.
   * @returns {Number}
   */
  this.toPrecision = function(decimals) {
    return new Number();
  }
  
  /*
   * Returns the value of a Number object as a primitive number.
   * @returns {Number}
   */
  this.valueOf = function() {
    return new Number();
  }
  
}
