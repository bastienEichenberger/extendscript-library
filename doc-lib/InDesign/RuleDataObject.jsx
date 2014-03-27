/*
 * A preflight rule data object.
 */
var RuleDataObject = {
  /*
   * The name of the RuleDataObject.
   * @type {String}
   */
  name: undefined,
  
  /*
   * The type of data.
   * @type {RuleDataType}
   */
  dataType: undefined,
  
  /*
   * The ID for this rule data object.
   * @type {String}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the RuleDataObject (a PreflightProfileRule or PreflightRuleInstance).
   * @type {Mixed}
   */
  parent: undefined,
  
  /*
   * The index of the RuleDataObject within its containing object.
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
   * The value for this data object. Can return: String, Real, Long Integer, Short Integer, Boolean, Object or Array of Strings, Reals, Long Integers, Short Integers, Booleans, Objects or Arrays of Array of Arrays of Array of Strings, Reals, Long Integers, Short Integers, Booleans or Objects.
   * @type {Mixed}
   */
  dataValue: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Deletes the RuleDataObject.
   */
  remove: function() {
  },
  
  /*
   * Generates a string which, if executed, will return the RuleDataObject.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {RuleDataObject}
   */
  getElements: function() {
    return new RuleDataObject();
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
