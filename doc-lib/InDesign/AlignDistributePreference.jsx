/*
 * Preferences for alignment and distribution.
 */
var AlignDistributePreference = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the AlignDistributePreference (a Application).
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
   * The bounds to use as a basis for aligning or distributing page items.
   * @type {AlignDistributeBounds}
   */
  alignDistributeBounds: undefined,
  
  /*
   * If true, distribute space between page items and ignore the bounds setting.
   * @type {Boolean}
   */
  distributeAbsolute: undefined,
  
  /*
   * The distance to use when distributing page items.
   * @type {Mixed}
   */
  distributeAbsoluteMeasurement: undefined,
  
  /*
   * If true, distribute space between page items and ignore the bounds setting.
   * @type {Boolean}
   */
  distributeSpaceAbsolute: undefined,
  
  /*
   * The distance to use when distributing page items.
   * @type {Mixed}
   */
  distributeSpaceAbsoluteMeasurement: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the AlignDistributePreference.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {AlignDistributePreference}
   */
  getElements: function() {
    return new AlignDistributePreference();
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
