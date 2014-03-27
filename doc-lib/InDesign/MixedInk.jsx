/*
 * A mixed ink swatch.
 */
var MixedInk = {
  /*
   * The component inks.
   * @type {Ink}
   */
  inkList: undefined,
  
  /*
   * The mixed ink group that a mixed ink swatch is based on.
   * @type {MixedInkGroup}
   */
  baseColor: undefined,
  
  /*
   * The unique ID of the MixedInk.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the MixedInk (a Application or Document).
   * @type {Mixed}
   */
  parent: undefined,
  
  /*
   * The index of the MixedInk within its containing object.
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
   * The array of tint percentages for inks in the ink list. Note: Specify a value for each ink.
   * @type {Number}
   */
  inkPercentages: undefined,
  
  /*
   * The name of the MixedInk.
   * @type {String}
   */
  name: undefined,
  
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
   * Duplicates the MixedInk.
   * @returns {MixedInk}
   */
  duplicate: function() {
    return new MixedInk();
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
   * Generates a string which, if executed, will return the MixedInk.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {MixedInk}
   */
  getElements: function() {
    return new MixedInk();
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
