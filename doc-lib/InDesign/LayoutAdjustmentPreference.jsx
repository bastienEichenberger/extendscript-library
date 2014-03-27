/*
 * Layout adjustment preferences.
 */
var LayoutAdjustmentPreference = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the LayoutAdjustmentPreference (a Application or Document).
   * @type {Mixed}
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
   * If true, layout adjustment is enabled.
   * @type {Boolean}
   */
  enableLayoutAdjustment: undefined,
  
  /*
   * The range within which an object snaps to guides.
   * @type {Mixed}
   */
  snapZone: undefined,
  
  /*
   * If true, allows graphics to be resized.
   * @type {Boolean}
   */
  allowGraphicsToResize: undefined,
  
  /*
   * If true, allows ruler guides to move.
   * @type {Boolean}
   */
  allowRulerGuidesToMove: undefined,
  
  /*
   * If true, ignores ruler guide alignments.
   * @type {Boolean}
   */
  ignoreRulerGuideAlignments: undefined,
  
  /*
   * If true, ignores object or layer locks.
   * @type {Boolean}
   */
  ignoreObjectOrLayerLocks: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the LayoutAdjustmentPreference.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {LayoutAdjustmentPreference}
   */
  getElements: function() {
    return new LayoutAdjustmentPreference();
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
