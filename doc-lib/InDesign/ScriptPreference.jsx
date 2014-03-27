/*
 * Scripting environment preferences.
 */
var ScriptPreference = {
  /*
   * The path to the Scripts folder for the application.
   * @type {File}
   */
  scriptsFolder: undefined,
  
  /*
   * A list of the scripts in the Scripts folder. Can return: Array of Array of 2 Strings or Files.
   * @type {Mixed}
   */
  scriptsList: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the ScriptPreference (a Application).
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
   * The version of the scripting environment. Can also accept: Real.
   * @type {String}
   */
  version: undefined,
  
  /*
   * Controls the display of dialogs and alerts during script processing.
   * @type {UserInteractionLevels}
   */
  userInteractionLevel: undefined,
  
  /*
   * The measurement unit used during script processing. Can return: AutoEnum enumerator or MeasurementUnits enumerator.
   * @type {Mixed}
   */
  measurementUnit: undefined,
  
  /*
   * If true, enables redraw during script execution.
   * @type {Boolean}
   */
  enableRedraw: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the ScriptPreference.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {ScriptPreference}
   */
  getElements: function() {
    return new ScriptPreference();
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
