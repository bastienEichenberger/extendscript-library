/*
 * A movie behavior object.
 */
var MovieBehavior = {
  /*
   * The name of the MovieBehavior.
   * @type {String}
   */
  name: undefined,
  
  /*
   * The unique ID of the MovieBehavior.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the MovieBehavior (a Button, CheckBox, ComboBox, ListBox, RadioButton, TextBox or SignatureField).
   * @type {Mixed}
   */
  parent: undefined,
  
  /*
   * The index of the MovieBehavior within its containing object.
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
   * The movie page item.
   * @type {Movie}
   */
  movieItem: undefined,
  
  /*
   * The id of the navigation point to play from. This property is ignored for all operations other than Play From Navigation Point.
   * @type {Number}
   */
  navigationPointID: undefined,
  
  /*
   * The playback mode.
   * @type {MoviePlayOperations}
   */
  operation: undefined,
  
  /*
   * If true, the behavior is enabled.
   * @type {Boolean}
   */
  enableBehavior: undefined,
  
  /*
   * The event which triggers the behavior.
   * @type {BehaviorEvents}
   */
  behaviorEvent: undefined,
  
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
   * Deletes the MovieBehavior.
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
   * Generates a string which, if executed, will return the MovieBehavior.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {MovieBehavior}
   */
  getElements: function() {
    return new MovieBehavior();
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
