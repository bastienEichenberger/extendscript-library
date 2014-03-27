/*
 * Arguments to pass to a script.
 */
var ScriptArg = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the ScriptArg (a Application).
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
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Gets the value of a script argument.
 *
   * @param {String} name The name of the script argument.
   * @returns {String}
   */
  get: function(name) {
    return new String();
  },
  
  /*
   * Gets the value of a script argument.
 *
   * @param {String} name The name of the script argument.
   * @returns {String}
   */
  getValue: function(name) {
    return new String();
  },
  
  /*
   * Sets the value of a script argument.
 *
   * @param {String} name The name of the script argument.
   * @param {String} value The value.
   */
  set: function(name, value) {
  },
  
  /*
   * Sets the value of a script argument.
 *
   * @param {String} name The name of the script argument.
   * @param {String} value The value.
   */
  setValue: function(name, value) {
  },
  
  /*
   * Verifies whether the script argument is defined.
 *
   * @param {String} name The name of the script argument.
   * @returns {Boolean}
   */
  isDefined: function(name) {
    return new Boolean();
  },
  
  /*
   * Clears all script arguments.
   */
  clear: function() {
  },
  
  /*
   * Saves the script arguments.
   */
  save: function() {
  },
  
  /*
   * Restores all script arguments.
   */
  restore: function() {
  },
  
  /*
   * Generates a string which, if executed, will return the ScriptArg.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {ScriptArg}
   */
  getElements: function() {
    return new ScriptArg();
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
