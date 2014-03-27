/*
 * Returns a string representation of the value given as an argument.
 * @constructor
   *
 * @param {any} value A number, variable, or object to convert to a string.
 */
function String(value) {
  /*
   * The length of the string.
   * @type {Number}
   */
  this.length = undefined;
  
  /*
   * Returns a string created by concatenation one or more characters specified as ASCII values.
   *
   * @param {Number} value1 One or more ASCII values.
   * @returns {String}
   */
  this.fromCharCode = function(value1) {
    return new String();
  }
  
  /*
   * Returns itself.
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
  
  /*
   * Returns itself.
   * @returns {String}
   */
  this.valueOf = function() {
    return new String();
  }
  
  /*
   * Returns the character at the specified index.
   *
   * @param {Number} index An integer between 0 and string.length -1, specifying the character to return.
   * @returns {String}
   */
  this.charAt = function(index) {
    return new String();
  }
  
  /*
   * Returns the Unicode value of the character at the given index.
   *
   * @param {Number} index An integer between 0 and string.length -1, specifying the character.
   * @returns {Number}
   */
  this.charCodeAt = function(index) {
    return new Number();
  }
  
  /*
   * If necessary, converts the one or more given values to strings.
   *
   * @param {String} value The values to be concatenated with the given string.
   * @returns {String}
   */
  this.concat = function(value) {
    return new String();
  }
  
  /*
   * Returns the index within the string of the first occurrence of the specified string, starting the search at fromIndex if provided.
   *
   * @param {String} searchValue The string for which to search.
   * @param {Number} [offset] The starting offset of the search.
   * @returns {Number}
   */
  this.indexOf = function(searchValue, offset) {
    return new Number();
  }
  
  /*
   * Returns the index within the string of the last occurrence of the specified value.
   *
   * @param {String} searchValue The string for which to search.
   * @param {Number} [offset] The starting offset of the search.
   * @returns {Number}
   */
  this.lastIndexOf = function(searchValue, offset) {
    return new Number();
  }
  
  /*
   * Extracts a substring of the given string and returns it as a new string.
   *
   * @param {Number} startSlice The index at which to begin extraction.
   * @param {Number} [endSlice] The index at which to end extraction.
   * @returns {String}
   */
  this.slice = function(startSlice, endSlice) {
    return new String();
  }
  
  /*
   * Returns a new string which contains all the characters of the original string converted to lowercase.
   * @returns {String}
   */
  this.toLowerCase = function() {
    return new String();
  }
  
  /*
   * Returns a new string which contains all the characters of the original string converted to uppercase.
   * @returns {String}
   */
  this.toUpperCase = function() {
    return new String();
  }
  
  /*
   * Returns a new string which contains all the characters of the original string converted to lowercase (localized).
   * @returns {String}
   */
  this.toLocaleLowerCase = function() {
    return new String();
  }
  
  /*
   * Returns a new string which contains all the characters of the original string converted to uppercase (localized).
   * @returns {String}
   */
  this.toLocaleUpperCase = function() {
    return new String();
  }
  
  /*
   * Performs a localized comparison of two strings.
   *
   * @param {String} what The string to compare with.
   * @returns {Number}
   */
  this.localeCompare = function(what) {
    return new Number();
  }
  
  /*
   * Matches a string against a regular expression.
   *
   * @param {RegExp} regexp The regular expression to use.
   * @returns {Array}
   */
  this.match = function(regexp) {
    return new Array();
  }
  
  /*
   * undefined
   *
   * @param {any} what undefined
   * @param {String} with undefined
   * @returns {String}
   */
  this.replace = function(what, with) {
    return new String();
  }
  
  /*
   * undefined
   *
   * @param {RegExp} search undefined
   * @returns {Number}
   */
  this.search = function(search) {
    return new Number();
  }
  
  /*
   * Splits a string into a group of substrings, places those strings in an array, and returns the array.
   *
   * @param {String} delimiter Specifies the string to use for delimiting.
   * @param {Number} limit undefined
   * @returns {String}
   */
  this.split = function(delimiter, limit) {
    return new String();
  }
  
  /*
   * Returns a string containing the characters beginning at the specified index, start, through the specified number of characters.
   *
   * @param {Number} start Location at which to begin extracting characters.
   * @param {Number} [length]  The number of characters to extract.
   * @returns {String}
   */
  this.substr = function(start, length) {
    return new String();
  }
  
  /*
   * Returns a substring of the given string by extracting characters from indexA up to but not including indexB.
   *
   * @param {Number} indexA The index to begin extracting.
   * @param {Number} [indexB]  The index at which to end extraction.
   * @returns {String}
   */
  this.substring = function(indexA, indexB) {
    return new String();
  }
  
  /*
   * Returns a string consisting of this string enclosed in a&lt;a&gt;tag.
   *
   * @param {String} name The text to be stored in the anchors' name attribute.
   * @returns {String}
   */
  this.anchor = function(name) {
    return new String();
  }
  
  /*
   * Returns a string consisting of this string enclosed in a&lt;big&gt;tag.
   * @returns {String}
   */
  this.big = function() {
    return new String();
  }
  
  /*
   * Returns a string consisting of this string enclosed in a&lt;blink&gt;tag.
   * @returns {String}
   */
  this.blink = function() {
    return new String();
  }
  
  /*
   * Returns a string consisting of this string enclosed in a&lt;b&gt;tag.
   * @returns {String}
   */
  this.bold = function() {
    return new String();
  }
  
  /*
   * Returns a string consisting of this string enclosed in a&lt;tt&gt;tag.
   * @returns {String}
   */
  this.fixed = function() {
    return new String();
  }
  
  /*
   * Returns a string consisting of this string enclosed in a&lt;font&gt;tag.
   *
   * @param {String} color The value to be stored in the tag's color attribute.
   * @returns {String}
   */
  this.fontcolor = function(color) {
    return new String();
  }
  
  /*
   * Returns a string consisting of this string enclosed in a&lt;font&gt;tag.
   *
   * @param {Number} size The value to be stored in the tag's size attribute.
   * @returns {String}
   */
  this.fontsize = function(size) {
    return new String();
  }
  
  /*
   * Returns a string consisting of this string enclosed in a&lt;i&gt;tag.
   * @returns {String}
   */
  this.italics = function() {
    return new String();
  }
  
  /*
   * Returns a string consisting of this string enclosed in a&lt;a&gt;tag.
   *
   * @param {String} href The value to be stored in the tag's href attribute.
   * @returns {String}
   */
  this.link = function(href) {
    return new String();
  }
  
  /*
   * Returns a string consisting of this string enclosed in a&lt;small&gt;tag.
   * @returns {String}
   */
  this.small = function() {
    return new String();
  }
  
  /*
   * Returns a string consisting of this string enclosed in a&lt;strike&gt;tag.
   * @returns {String}
   */
  this.strike = function() {
    return new String();
  }
  
  /*
   * Returns a string consisting of this string enclosed in a&lt;sub&gt;tag.
   * @returns {String}
   */
  this.sub = function() {
    return new String();
  }
  
  /*
   * Returns a string consisting of this string enclosed in a&lt;sup&gt;tag.
   * @returns {String}
   */
  this.sup = function() {
    return new String();
  }
  
}
