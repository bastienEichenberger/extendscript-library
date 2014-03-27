/*
 * background task
 */
var BackgroundTask = {
  /*
   * The name of the BackgroundTask.
   * @type {String}
   */
  name: undefined,
  
  /*
   * The document name on which this task operates.
   * @type {String}
   */
  documentName: undefined,
  
  /*
   * Progress information for this task.
   * @type {Number}
   */
  percentDone: undefined,
  
  /*
   * The current status of this task object.
   * @type {TaskState}
   */
  status: undefined,
  
  /*
   * The alerts encountered while running this task object. Can return: Array of Array of 2 TaskAlertType enumerators or Strings.
   * @type {Mixed}
   */
  alerts: undefined,
  
  /*
   * The unique ID of the BackgroundTask.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the BackgroundTask (a Application).
   * @type {Application}
   */
  parent: undefined,
  
  /*
   * The index of the BackgroundTask within its containing object.
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
   * Cancels the specified background task.
   */
  cancelTask: function() {
  },
  
  /*
   * Waits for the task to finish.
   * @returns {TaskState}
   */
  waitForTask: function() {
    return new TaskState();
  },
  
  /*
   * Queries for a particular property in the task metadata.
 *
   * @param {String} name The task property being queried
   * @returns {any}
   */
  queryProperty: function(name) {
    return new any();
  },
  
  /*
   * Generates a string which, if executed, will return the BackgroundTask.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {BackgroundTask}
   */
  getElements: function() {
    return new BackgroundTask();
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
