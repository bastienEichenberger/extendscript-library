/*
 * Transform preferences.
 */
var TransformPreference = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the TransformPreference (a Application).
   * @type {Application}
   */
  parent: undefined,
  
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
   * If true, includes the stroke weight when displaying object dimensions. If false, measures objects from the path or frame.
   * @type {Boolean}
   */
  dimensionsIncludeStrokeWeight: undefined,
  
  /*
   * If true, transformation values are relative to the parent object. If false, the transformation values are absolute values.
   * @type {Boolean}
   */
  transformationsAreTotals: undefined,
  
  /*
   * If true, measures the x and y values of the object relative to the containing frame. If false, measures the x and y values relative to the rulers.
   * @type {Boolean}
   */
  showContentOffset: undefined,
  
  /*
   * The method used to scale a page item.
   * @type {WhenScalingOptions}
   */
  whenScaling: undefined,
  
  /*
   * If true, strokes are scaled when objects are scaled.
   * @type {Boolean}
   */
  adjustStrokeWeightWhenScaling: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the TransformPreference.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {TransformPreference}
   */
  getElements: function() {
    return new TransformPreference();
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
