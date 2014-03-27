/*
 * A tint swatch.
 */
var Tint = {
  /*
   * The color that the tint is based on.
   * @type {Color}
   */
  baseColor: undefined,
  
  /*
   * The name of the Tint.
   * @type {String}
   */
  name: undefined,
  
  /*
   * The color model.
   * @type {ColorModel}
   */
  model: undefined,
  
  /*
   * The color space.
   * @type {ColorSpace}
   */
  space: undefined,
  
  /*
   * The ink values that create the color, specified as a percentage for each ink. Note: The number of values required and the range depends on the color space. For RGB, specify three values, with each value in the range 0 to 255; for CMYK, specify four values representing C, M, Y, and K, with each value in the range 0 to 100; for LAB, specify three values representing L (Range: 0 to 100), A (Range: -128 to 127), and B (Range: -128 to 127); for mixed ink, specify values for each ink in the ink list, with each value in the range 0 to 100.
   * @type {Number}
   */
  colorValue: undefined,
  
  /*
   * The unique ID of the Tint.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the Tint (a Application or Document).
   * @type {Mixed}
   */
  parent: undefined,
  
  /*
   * The index of the Tint within its containing object.
   * @type {Number}
   */
  index: undefined,
  
  /*
   * A collection of events.
   * @type {Events}
   */
  events: undefined,
  
  /*
   * A collection of event listeners.
   * @type {EventListeners}
   */
  eventListeners: undefined,
  
  /*
   * The percent of the base color. (Range: 0 to 100)
   * @type {Number}
   */
  tintValue: undefined,
  
  /*
   * A property that can be set to any string.
   * @type {String}
   */
  label: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Deletes the swatch.
 *
   * @param {Swatch} [replacingWith] The swatch to apply in place of the deleted swatch. 
   */
  remove: function(replacingWith) {
  },
  
  /*
   * Duplicates the Tint.
   * @returns {Tint}
   */
  duplicate: function() {
    return new Tint();
  },
  
  /*
   * Merges the specified swatches with the swatch.
 *
   * @param {Mixed} with The swatches to merge. Can accept: Array of Swatches, Swatch or String.
   * @returns {Swatch}
   */
  merge: function(with) {
    return new Swatch();
  },
  
  /*
   * Sets the label to the value associated with the specified key.
 *
   * @param {String} key The key.
   * @param {String} value The value.
   */
  insertLabel: function(key, value) {
  },
  
  /*
   * Gets the label value associated with the specified key.
 *
   * @param {String} key The key.
   * @returns {String}
   */
  extractLabel: function(key) {
    return new String();
  },
  
  /*
   * Generates a string which, if executed, will return the Tint.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {Tint}
   */
  getElements: function() {
    return new Tint();
  },
  
  /*
   * Retrieves the object specifier.
   * @returns {String}
   */
  toSpecifier: function() {
    return new String();
  },
  
  /*
   * Adds an event listener.
 *
   * @param {String} eventType The event type.
   * @param {Mixed} handler The event handler. Can accept: File or JavaScript Function.
   * @param {Boolean} [captures] This parameter is obsolete. 
   * @returns {EventListener}
   */
  addEventListener: function(eventType, handler, captures) {
    return new EventListener();
  },
  
  /*
   * Removes the event listener.
 *
   * @param {String} eventType The registered event type.
   * @param {Mixed} handler The registered event handler. Can accept: File or JavaScript Function.
   * @param {Boolean} [captures] This parameter is obsolete. 
   * @returns {Boolean}
   */
  removeEventListener: function(eventType, handler, captures) {
    return new Boolean();
  },
  
};
