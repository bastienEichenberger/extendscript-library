/*
 * An active preflight process.
 */
var PreflightProcess = {
  /*
   * The target document the process is inspecting.
   * @type {Document}
   */
  targetObject: undefined,
  
  /*
   * The preflight profile the process is using.
   * @type {PreflightProfile}
   */
  appliedProfile: undefined,
  
  /*
   * The description of the PreflightProcess.
   * @type {String}
   */
  description: undefined,
  
  /*
   * The results found by the process as a large string.
   * @type {String}
   */
  processResults: undefined,
  
  /*
   * A string containing a description of all elements visited by the process.
   * @type {String}
   */
  processInventory: undefined,
  
  /*
   * The aggregated results found by the process. Can return: Ordered array containing documentName:String, profileName:String, results:Array of Ordered array containing parentNodeID:Long Integer, errorName:String, pageNumber:String, errorInfo:String, errorDetail:Array of Ordered array containing label:String, description:String.
   * @type {Mixed}
   */
  aggregatedResults: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the PreflightProcess (a Application).
   * @type {Application}
   */
  parent: undefined,
  
  /*
   * The index of the PreflightProcess within its containing object.
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
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Deletes the PreflightProcess.
   */
  remove: function() {
  },
  
  /*
   * Waits for the process to finish, up to an optional maximum amount of time. No other processes get cycles during this time.
 *
   * @param {Number} [waitTime] The maximum time to wait, in seconds; if omitted, waits until completion no matter how long it takes. 
   * @returns {Boolean}
   */
  waitForProcess: function(waitTime) {
    return new Boolean();
  },
  
  /*
   * Saves a report of the completed preflight process.
 *
   * @param {File} to The preflight report to save to.
   * @param {Boolean} [autoOpen] If true, automatically open the report after creation. 
   */
  saveReport: function(to, autoOpen) {
  },
  
  /*
   * Generates a string which, if executed, will return the PreflightProcess.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {PreflightProcess}
   */
  getElements: function() {
    return new PreflightProcess();
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
