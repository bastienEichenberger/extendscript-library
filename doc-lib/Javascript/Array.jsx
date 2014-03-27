/*
 * Creates and returns a new array.
 * @constructor
   *
 * @param {Number} length If no other parameters are passed, the initial length of the empty array.
 * @param {any} [element] If there is more than one parameter, the array is initialized with the given parameters.
 */
function Array(length, element) {
  /*
   * The length of the array
   * @type {Number}
   */
  this.length = undefined;
  
  /*
   * Returns a new array created by concatenating the given values to the end of the original array.
   *
   * @param {any} value Any number of values to be added to the end of the array.
   * @returns {Array}
   */
  this.concat = function(value) {
    return new Array();
  }
  
  /*
   * Joins all elements of the array into a string; optionally, each element is separated by delimiter.
   *
   * @param {String} [delimiter] A string used to separate each element of the array.
   * @returns {String}
   */
  this.join = function(delimiter) {
    return new String();
  }
  
  /*
   * Reverses the order of the elements in the array.
   * @returns {Array}
   */
  this.reverse = function() {
    return new Array();
  }
  
  /*
   * Creates a new array, which contains a subset of the original array's elements.
   * @returns {Array}
   */
  this.slice = function() {
    return new Array();
  }
  
  /*
   * Sorts the elements of the array in place, using the given function to compare to elements.
   *
   * @param {Function} userFunction A user-supplied function of the form userFunction(a, b) which returns less than 0 if a is greater than b, 0 if a and b are equal, and greater than 0 if b is greater than a.
   */
  this.sort = function(userFunction) {
  }
  
  /*
   * Removes the last element from the array, decreases the length by 1, and returns the value of the element.
   * @returns {any}
   */
  this.pop = function() {
    return new any();
  }
  
  /*
   * Places one or more values onto the end of the array and increases length by n.
   *
   * @param {Number} value Any number of values to be pushed onto the end of the array.
   * @returns {Number}
   */
  this.push = function(value) {
    return new Number();
  }
  
  /*
   * Removes num elements from the array beginning with index, start.
   *
   * @param {Number} start The index of the first element to remove. Negative values are relative to the end of the array.
   * @param {Number} [num] The number of array elements to remove, including start. If omitted, all elements from array index start to the end of the array are removed.
   * @param {any} [value] A list of one or more values to be added to the array starting at index start.
   * @returns {Array}
   */
  this.splice = function(start, num, value) {
    return new Array();
  }
  
  /*
   * Removes the first element from the array, decreases the length by 1, and returns the value of the element.
   * @returns {any}
   */
  this.shift = function() {
    return new any();
  }
  
  /*
   * Converts an array to a string and returns the string.
   * @returns {String}
   */
  this.toString = function() {
    return new String();
  }
  
  /*
   * Converts an array to a string and returns the string (localized).
   * @returns {String}
   */
  this.toLocaleString = function() {
    return new String();
  }
  
  /*
   * Adds one or more elements to the beginning of the array.
   *
   * @param {any} value The values of one or more elements to be added to the beginning of the array.
   * @returns {Number}
   */
  this.unshift = function(value) {
    return new Number();
  }
  
  /*
   * undefined
   * @returns {String}
   */
  this.toSource = function() {
    return new String();
  }
  
}
