/*
 * A dotted stroke style.
 */
var DottedStrokeStyle = {
  /*
   * The stroke style type.
   * @type {String}
   */
  strokeStyleType: undefined,
  
  /*
   * The unique ID of the DottedStrokeStyle.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the DottedStrokeStyle (a Document or Application).
   * @type {Mixed}
   */
  parent: undefined,
  
  /*
   * The index of the DottedStrokeStyle within its containing object.
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
   * The length of gaps between dots. Define up to five values.
   * @type {Mixed}
   */
  dotArray: undefined,
  
  /*
   * The corner adjustment applied to the DottedStrokeStyle.
   * @type {StrokeCornerAdjustment}
   */
  strokeCornerAdjustment: undefined,
  
  /*
   * The name of the DottedStrokeStyle.
   * @type {String}
   */
  name: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Duplicates the DottedStrokeStyle.
   * @returns {DottedStrokeStyle}
   */
  duplicate: function() {
    return new DottedStrokeStyle();
  },
  
  /*
   * Deletes the stroke style.
 *
   * @param {Mixed} [replacingWith] The stroke style to apply in place of the deleted style. . Can accept: StrokeStyle or String. 
   */
  remove: function(replacingWith) {
  },
  
  /*
   * Generates a string which, if executed, will return the DottedStrokeStyle.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {DottedStrokeStyle}
   */
  getElements: function() {
    return new DottedStrokeStyle();
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
