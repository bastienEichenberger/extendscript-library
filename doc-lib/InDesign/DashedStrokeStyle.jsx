/*
 * A dashed stroke style.
 */
var DashedStrokeStyle = {
  /*
   * The stroke style type.
   * @type {String}
   */
  strokeStyleType: undefined,
  
  /*
   * The unique ID of the DashedStrokeStyle.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the DashedStrokeStyle (a Document or Application).
   * @type {Mixed}
   */
  parent: undefined,
  
  /*
   * The index of the DashedStrokeStyle within its containing object.
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
   * The pattern of dashes and gaps, in the format [dash length1, gap length1, dash length2, gap length2]. Define up to ten values.
   * @type {Mixed}
   */
  dashArray: undefined,
  
  /*
   * The corner adjustment applied to the DashedStrokeStyle.
   * @type {StrokeCornerAdjustment}
   */
  strokeCornerAdjustment: undefined,
  
  /*
   * The end shape of an open path.
   * @type {EndCap}
   */
  endCap: undefined,
  
  /*
   * The name of the DashedStrokeStyle.
   * @type {String}
   */
  name: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Duplicates the DashedStrokeStyle.
   * @returns {DashedStrokeStyle}
   */
  duplicate: function() {
    return new DashedStrokeStyle();
  },
  
  /*
   * Deletes the stroke style.
 *
   * @param {Mixed} [replacingWith] The stroke style to apply in place of the deleted style. . Can accept: StrokeStyle or String. 
   */
  remove: function(replacingWith) {
  },
  
  /*
   * Generates a string which, if executed, will return the DashedStrokeStyle.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {DashedStrokeStyle}
   */
  getElements: function() {
    return new DashedStrokeStyle();
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
