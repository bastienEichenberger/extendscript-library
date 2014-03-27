/*
 * Creates and returns a new RegExp object set to the value of the argument converted to a regular expression.
 * @constructor
   *
 * @param {String} pattern The pattern to convert.
 * @param {String} [flags] Flags that control how the conversion is performed.
 */
function RegExp(pattern, flags) {
  /*
   * The matched subexpression &#35;1.
   * @type {String}
   */
  this.$1 = undefined;
  
  /*
   * The matched subexpression &#35;2.
   * @type {String}
   */
  this.$2 = undefined;
  
  /*
   * The matched subexpression &#35;3.
   * @type {String}
   */
  this.$3 = undefined;
  
  /*
   * The matched subexpression &#35;4.
   * @type {String}
   */
  this.$4 = undefined;
  
  /*
   * The matched subexpression &#35;5.
   * @type {String}
   */
  this.$5 = undefined;
  
  /*
   * The matched subexpression &#35;6.
   * @type {String}
   */
  this.$6 = undefined;
  
  /*
   * The matched subexpression &#35;7.
   * @type {String}
   */
  this.$7 = undefined;
  
  /*
   * The matched subexpression &#35;8.
   * @type {String}
   */
  this.$8 = undefined;
  
  /*
   * The matched subexpression &#35;9.
   * @type {String}
   */
  this.$9 = undefined;
  
  /*
   * The last match.
   * @type {String}
   */
  this.lastMatch = undefined;
  
  /*
   * The value of the last matched subexpression.
   * @type {String}
   */
  this.lastParen = undefined;
  
  /*
   * The string before the match.
   * @type {String}
   */
  this.leftContext = undefined;
  
  /*
   * The string after the match.
   * @type {String}
   */
  this.rightContext = undefined;
  
  /*
   * Indicates whether the match is a global match.
   * @type {Boolean}
   */
  this.global = undefined;
  
  /*
   * Indicates whether the match is not case sensitive.
   * @type {Boolean}
   */
  this.ignoreCase = undefined;
  
  /*
   * Indicates whether the match matches multiple lines.
   * @type {Boolean}
   */
  this.multiline = undefined;
  
  /*
   * The original input string.
   * @type {String}
   */
  this.input = undefined;
  
  /*
   * Converts this RegExp object to a string.
   * @returns {String}
   */
  this.toString = function() {
    return new String();
  }
  
  /*
   * Compiles a string to a regular expression. Returns true if the compilation was successful.
   *
   * @param {String} pattern The pattern to compile.
   * @returns {Boolean}
   */
  this.compile = function(pattern) {
    return new Boolean();
  }
  
  /*
   * Execute a regular expression.
   *
   * @param {String} text The string to match.
   * @returns {Array}
   */
  this.exec = function(text) {
    return new Array();
  }
  
  /*
   * Execute a regular expression, and return true if there is a match.
   *
   * @param {String} text The string to match.
   * @returns {Boolean}
   */
  this.test = function(text) {
    return new Boolean();
  }
  
}
