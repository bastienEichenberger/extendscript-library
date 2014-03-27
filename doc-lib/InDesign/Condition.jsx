/*
 * A condition for conditional text.
 */
var Condition = {
  /*
   * The unique ID of the Condition.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the Condition (a Application or Document).
   * @type {Mixed}
   */
  parent: undefined,
  
  /*
   * The index of the Condition within its containing object.
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
   * The name of the Condition.
   * @type {String}
   */
  name: undefined,
  
  /*
   * The color for the condition indicator; specified either as an array of three doubles representing RGB values in the range 0 to 255, or as a UI color. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
   * @type {Mixed}
   */
  indicatorColor: undefined,
  
  /*
   * The condition indicator method.
   * @type {ConditionIndicatorMethod}
   */
  indicatorMethod: undefined,
  
  /*
   * The condition underline indicator appearance.
   * @type {ConditionUnderlineIndicatorAppearance}
   */
  underlineIndicatorAppearance: undefined,
  
  /*
   * If true, the Condition is visible.
   * @type {Boolean}
   */
  visible: undefined,
  
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
   * Delete the condition.
 *
   * @param {Mixed} [replacingWith] The condition to apply to text in place of the deleted condition. By default, no condition is applied in place of the deleted condition. Can accept: Condition or String. 
   */
  remove: function(replacingWith) {
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
   * Generates a string which, if executed, will return the Condition.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {Condition}
   */
  getElements: function() {
    return new Condition();
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
