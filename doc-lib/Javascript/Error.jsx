/*
 * Creates a new Error object.
 * @constructor
   *
 * @param {String} msg The error message.
 * @param {String} [file] The name of the file.
 * @param {Number} [line] The line number.
 */
function Error(msg, file, line) {
  /*
   * The error message.
   * @type {String}
   */
  this.description = undefined;
  
  /*
   * Convert this object to a string.
   * @returns {String}
   */
  this.toString = function() {
    return new String();
  }
  
  /*
   * undefined
   * @returns {String}
   */
  this.toSource = function() {
    return new String();
  }
  
}
