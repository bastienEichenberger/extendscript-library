/*
 * The global methods and properties.
 */
var global = {
  /*
   * The application object
   * @type {Application}
   */
  app: undefined,
  
  /*
   * The NaN global property is a predefined variable with the value NaN (Not-a-Number), as specified by the IEEE-754 standard.
   * @type {Number}
   */
  NaN: undefined,
  
  /*
   * The Infinity global property is a predefined variable with the value for infinity.
   * @type {Number}
   */
  Infinity: undefined,
  
  /*
   * This global property is a predefined variable with the value for an undefined value.
   * @type {Undefined}
   */
  undefined: undefined,
  
  /*
   * The global BridgeTalk object.
   * @type {BridgeTalk}
   */
  BridgeTalk: undefined,
  
  /*
   * Encodes a string after RFC2396.
 *
   * @param {String} text The text to encode.
   * @returns {String}
   */
  encodeURI: function(text) {
    return new String();
  },
  
  /*
   * Encodes a string after RFC2396.
 *
   * @param {String} text The text to encode.
   * @returns {String}
   */
  encodeURIComponent: function(text) {
    return new String();
  },
  
  /*
   * undefined
 *
   * @param {String} uri The text to decode.
   * @returns {String}
   */
  decodeURI: function(uri) {
    return new String();
  },
  
  /*
   * undefined
 *
   * @param {String} uri The text to decode.
   * @returns {String}
   */
  decodeURIComponent: function(uri) {
    return new String();
  },
  
  /*
   * Creates a URL-encoded string from aString.
 *
   * @param {String} aString The string to be encoded.
   * @returns {String}
   */
  escape: function(aString) {
    return new String();
  },
  
  /*
   * Evaluates its argument as a JavaScript script, and returns the result of evaluation.
 *
   * @param {String} stringExpression The string to evaluate.
   * @returns {any}
   */
  eval: function(stringExpression) {
    return new any();
  },
  
  /*
   * Creates a source code representation of the supplied argument, and returns it as a string.
 *
   * @param {any} what The object to uneval.
   * @returns {String}
   */
  uneval: function(what) {
    return new String();
  },
  
  /*
   * Evaluates an expression and reports whether the result is a finite number.
 *
   * @param {Number} expression Any valid JavaScript expression.
   * @returns {Boolean}
   */
  isFinite: function(expression) {
    return new Boolean();
  },
  
  /*
   * Evaluates an expression and reports whether the result is "Not-a-Number" (NaN).
 *
   * @param {Number} expression Any valid JavaScript expression.
   * @returns {Boolean}
   */
  isNaN: function(expression) {
    return new Boolean();
  },
  
  /*
   * Extracts an integer from a string.
 *
   * @param {String} text The string from which to extract an integer.
   * @param {Number} [base] The base of the string to parse (from base 2 to base 36).
   * @returns {Number}
   */
  parseInt: function(text, base) {
    return new Number();
  },
  
  /*
   * Extracts a floating-point number from a string.
 *
   * @param {String} text The string from which to extract a floating point number.
   * @returns {Number}
   */
  parseFloat: function(text) {
    return new Number();
  },
  
  /*
   * Translates URL-encoded string into a regular string, and returns that string.
 *
   * @param {String} stringExpression The URL-encoded string to convert.
   * @returns {String}
   */
  unescape: function(stringExpression) {
    return new String();
  },
  
  /*
   * Localizes a ZString-encoded string and merges additional arguments into the string.
 *
   * @param {String} what The string to localize. A ZString-encoded string that can contain placeholder for additional arguments in the form %1 to %n.
   * @param {any} [argument] Optional argument(s) to be merged into the string.
   * @returns {String}
   */
  localize: function(what, argument) {
    return new String();
  },
  
  /*
   * Returns true is the supplied string is a valid XML name.
 *
   * @param {String} name The XML name to test.
   * @returns {Boolean}
   */
  isXMLName: function(name) {
    return new Boolean();
  },
  
  /*
   * Defines the default XML namespace.
 *
   * @param {Namespace} namespace The namespace to use.
   */
  setDefaultXMLNamespace: function(namespace) {
  },
  
  /*
   * Displays an alert box
 *
   * @param {String} message The text to display
   * @param {String} [title] The title of the alert; ignored on the Macintosh
   * @param {Boolean} errorIcon Display an Error icon; ignored on the Macintosh
   */
  alert: function(message, title, errorIcon) {
  },
  
  /*
   * Displays an alert box with Yes and No buttons; returns true for Yes
 *
   * @param {String} message The text to display
   * @param {Boolean} noAsDefault Set to true to set the No button as the default button
   * @param {String} [title] The title of the alert; ignored on the Macintosh
   * @returns {Boolean}
   */
  confirm: function(message, noAsDefault, title) {
    return new Boolean();
  },
  
  /*
   * Displays a dialog allowing the user to enter text
 *
   * @param {String} prompt The text to display
   * @param {String} [default] The default text to preset the edit field with
   * @param {String} [title] The title of the dialog;
   * @returns {String}
   */
  prompt: function(prompt, default, title) {
    return new String();
  },
  
};
