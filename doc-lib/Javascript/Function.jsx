/*
 * undefined
 * @constructor
   *
 * @param {String} arguments The list of formal arguments, separated by commas.
 * @param {String} body The body of the function to create.
 */
function Function(arguments, body) {
  /*
   * The function arguments, packed into an array.
   * @type {Object}
   */
  this.arguments = undefined;
  
  /*
   * The number of formal arguments.
   * @type {Number}
   */
  this.length = undefined;
  
  /*
   * The number of formal arguments.
   * @type {Number}
   */
  this.arity = undefined;
  
  /*
   * The function name.
   * @type {String}
   */
  this.name = undefined;
  
  /*
   * undefined
   *
   * @param {Object} thisObj undefined
   * @param {Array} args An array of arguments.
   * @returns {any}
   */
  this.apply = function(thisObj, args) {
    return new any();
  }
  
  /*
   * undefined
   *
   * @param {Object} thisObj undefined
   * @param {any} argument undefined
   * @returns {any}
   */
  this.call = function(thisObj, argument) {
    return new any();
  }
  
  /*
   * undefined
   * @returns {String}
   */
  this.toSource = function() {
    return new String();
  }
  
  /*
   * Returns the function definition as a string.
   * @returns {String}
   */
  this.toString = function() {
    return new String();
  }
  
}
