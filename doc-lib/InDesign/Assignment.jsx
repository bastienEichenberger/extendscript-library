/*
 * An assignment.
 */
var Assignment = {
  /*
   * The path to the document that the hyperlink destination points to.
   * @type {File}
   */
  documentPath: undefined,
  
  /*
   * The status of the assignment file.
   * @type {AssignmentStatus}
   */
  assignmentFileStatus: undefined,
  
  /*
   * If true, the assignment is packaged.
   * @type {Boolean}
   */
  packaged: undefined,
  
  /*
   * If true, the assignment package is up to date.
   * @type {Boolean}
   */
  packageUpToDate: undefined,
  
  /*
   * The file path (colon delimited on the Mac OS). Can also accept: File.
   * @type {String}
   */
  filePath: undefined,
  
  /*
   * The unique ID of the Assignment.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the Assignment (a Document).
   * @type {Document}
   */
  parent: undefined,
  
  /*
   * The index of the Assignment within its containing object.
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
   * A collection of assigned stories.
   * @type {AssignedStories}
   */
  assignedStories: undefined,
  
  /*
   * The name of the Assignment.
   * @type {String}
   */
  name: undefined,
  
  /*
   * The user name to assign to tracked changes and notes.
   * @type {String}
   */
  userName: undefined,
  
  /*
   * The content to export in the assignment.
   * @type {AssignmentExportOptions}
   */
  exportOptions: undefined,
  
  /*
   * The color of the assignment's frames. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  frameColor: undefined,
  
  /*
   * If true, includes linked files when packaging the assignment.
   * @type {Boolean}
   */
  includeLinksWhenPackage: undefined,
  
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
   * Updates the assignment file.
 *
   * @param {String} [versionComments] The comment for this version. 
   * @param {Boolean} [forceSave] If true, forcibly saves a version. 
   */
  update: function(versionComments, forceSave) {
  },
  
  /*
   * Deletes the assignment and its file.
   */
  remove: function() {
  },
  
  /*
   * Creates an assignment package.
 *
   * @param {File} filePath The full path name of the assignment package file.
   * @param {Boolean} [submit] If true, submits assigned stories before packaging the assignment. 
   * @param {Object} [withProperties] Initial values for properties of the new Assignment 
   * @returns {File}
   */
  createPackage: function(filePath, submit, withProperties) {
    return new File();
  },
  
  /*
   * Cancels the package for an assignment.
   */
  cancelPackage: function() {
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
   * Generates a string which, if executed, will return the Assignment.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {Assignment}
   */
  getElements: function() {
    return new Assignment();
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
