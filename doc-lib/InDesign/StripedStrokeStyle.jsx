/*
 * A striped stroke style.
 */
var StripedStrokeStyle = {
  /*
   * The stroke style type.
   * @type {String}
   */
  strokeStyleType: undefined,
  
  /*
   * The unique ID of the StripedStrokeStyle.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the StripedStrokeStyle (a Document or Application).
   * @type {Mixed}
   */
  parent: undefined,
  
  /*
   * The index of the StripedStrokeStyle within its containing object.
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
   * The width and position of stripes in a striped stroke pattern. Each stripe is specified by a start-end pair in the format [start1, end1, start2, end2]; each value indicates a percentage of the stroke weight. Each value must be greater than the previous value. (Range: 0 to 100).
   * @type {Number}
   */
  stripeArray: undefined,
  
  /*
   * The name of the StripedStrokeStyle.
   * @type {String}
   */
  name: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Duplicates the StripedStrokeStyle.
   * @returns {StripedStrokeStyle}
   */
  duplicate: function() {
    return new StripedStrokeStyle();
  },
  
  /*
   * Deletes the stroke style.
 *
   * @param {Mixed} [replacingWith] The stroke style to apply in place of the deleted style. . Can accept: StrokeStyle or String. 
   */
  remove: function(replacingWith) {
  },
  
  /*
   * Generates a string which, if executed, will return the StripedStrokeStyle.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {StripedStrokeStyle}
   */
  getElements: function() {
    return new StripedStrokeStyle();
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
