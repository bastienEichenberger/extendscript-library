/*
 * A gradient.
 */
var Gradient = {
  /*
   * The unique ID of the Gradient.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the Gradient (a Application or Document).
   * @type {Mixed}
   */
  parent: undefined,
  
  /*
   * The index of the Gradient within its containing object.
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
   * A collection of gradient stops.
   * @type {GradientStops}
   */
  gradientStops: undefined,
  
  /*
   * The gradient type.
   * @type {GradientType}
   */
  type: undefined,
  
  /*
   * The name of the Gradient.
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
   * Duplicates the Gradient.
   * @returns {Gradient}
   */
  duplicate: function() {
    return new Gradient();
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
   * Generates a string which, if executed, will return the Gradient.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {Gradient}
   */
  getElements: function() {
    return new Gradient();
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
