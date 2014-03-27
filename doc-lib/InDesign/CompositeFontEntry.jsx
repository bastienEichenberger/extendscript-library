/*
 * A composite font entry.
 */
var CompositeFontEntry = {
  /*
   * If true, the CompositeFontEntry is locked.
   * @type {Boolean}
   */
  locked: undefined,
  
  /*
   * The unique ID of the CompositeFontEntry.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the CompositeFontEntry (a CompositeFont).
   * @type {CompositeFont}
   */
  parent: undefined,
  
  /*
   * The index of the CompositeFontEntry within its containing object.
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
   * The name of the CompositeFontEntry.
   * @type {String}
   */
  name: undefined,
  
  /*
   * The font applied to the CompositeFontEntry, specified as either a font object or the name of font family. Can return: Font or String.
   * @type {Mixed}
   */
  appliedFont: undefined,
  
  /*
   * The name of the font style.
   * @type {String}
   */
  fontStyle: undefined,
  
  /*
   * The size of the entry relative to the base entry. Note: The base entry cannot be modified.
   * @type {Number}
   */
  relativeSize: undefined,
  
  /*
   * The horizontal scaling applied to the CompositeFontEntry.
   * @type {Number}
   */
  horizontalScale: undefined,
  
  /*
   * The vertical scaling applied to the CompositeFontEntry.
   * @type {Number}
   */
  verticalScale: undefined,
  
  /*
   * The characters that the set affects.
   * @type {String}
   */
  customCharacters: undefined,
  
  /*
   * If true, scales characters from the center.
   * @type {Boolean}
   */
  scaleOption: undefined,
  
  /*
   * The amount of baseline shift.
   * @type {Number}
   */
  baselineShift: undefined,
  
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
   * Deletes the CompositeFontEntry.
   */
  remove: function() {
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
   * Generates a string which, if executed, will return the CompositeFontEntry.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {CompositeFontEntry}
   */
  getElements: function() {
    return new CompositeFontEntry();
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
