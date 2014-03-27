/*
 * An ink.
 */
var Ink = {
  /*
   * If true, the ink is a process ink.
   * @type {Boolean}
   */
  isProcessInk: undefined,
  
  /*
   * The name of the Ink.
   * @type {String}
   */
  name: undefined,
  
  /*
   * The solidity value of the ink. (Range: 0.0 to 1.0)
   * @type {Number}
   */
  solidity: undefined,
  
  /*
   * The unique ID of the Ink.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the Ink (a Application or Document).
   * @type {Mixed}
   */
  parent: undefined,
  
  /*
   * The index of the Ink within its containing object.
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
   * The ink object to map this ink to.
   * @type {String}
   */
  aliasInkName: undefined,
  
  /*
   * The angle of the ink. (Range: 0 to 360)
   * @type {Number}
   */
  angle: undefined,
  
  /*
   * Converts spot inks to process inks.
   * @type {Boolean}
   */
  convertToProcess: undefined,
  
  /*
   * The frequency of the ink. (Range: 1 to 500)
   * @type {Number}
   */
  frequency: undefined,
  
  /*
   * The neutral density of the ink. (Range: 0.001 to 10.0)
   * @type {Number}
   */
  neutralDensity: undefined,
  
  /*
   * If true, prints the ink. Only valid when printing separations.
   * @type {Boolean}
   */
  printInk: undefined,
  
  /*
   * The place of the ink in the trapping sequence.
   * @type {Number}
   */
  trapOrder: undefined,
  
  /*
   * The trapping type of the ink.
   * @type {InkTypes}
   */
  inkType: undefined,
  
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
   * Generates a string which, if executed, will return the Ink.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {Ink}
   */
  getElements: function() {
    return new Ink();
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
