/*
 * A document added to a book.
 */
var BookContent = {
  /*
   * The full path to the BookContent, including the name of the BookContent.
   * @type {File}
   */
  fullName: undefined,
  
  /*
   * The status of the book content object file.
   * @type {BookContentStatus}
   */
  status: undefined,
  
  /*
   * The size of the BookContent file.
   * @type {Number}
   */
  size: undefined,
  
  /*
   * The date and time the BookContent was created.
   * @type {Date}
   */
  date: undefined,
  
  /*
   * The page range of the book content object within the book.
   * @type {String}
   */
  documentPageRange: undefined,
  
  /*
   * The full path to the file.
   * @type {File}
   */
  filePath: undefined,
  
  /*
   * The name of the BookContent.
   * @type {String}
   */
  name: undefined,
  
  /*
   * The unique ID of the BookContent.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the BookContent (a Book).
   * @type {Book}
   */
  parent: undefined,
  
  /*
   * The index of the BookContent within its containing object.
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
   * Moves the book content object.
 *
   * @param {LocationOptions} [to] The location relative to the reference object or within the book. 
   * @param {BookContent} [reference] The reference object. Note: Required when the to parameter specifies before or after. 
   * @returns {BookContent}
   */
  move: function(to, reference) {
    return new BookContent();
  },
  
  /*
   * Deletes the BookContent.
   */
  remove: function() {
  },
  
  /*
   * Replaces a book content object with a new file. Note: If the new file replaces the current style source document, the new file becomes the style source document.
 *
   * @param {File} using The full path name of the new book content object.
   * @returns {BookContent}
   */
  replace: function(using) {
    return new BookContent();
  },
  
  /*
   * Matches the formatting of the book content object to the style source document.
   */
  synchronize: function() {
  },
  
  /*
   * Preflight a book content object and optionally save the resulting report.
 *
   * @param {File} [to] The preflight report to save to. 
   * @param {Boolean} [autoOpen] If true, automatically open the report after creation. 
   */
  preflight: function(to, autoOpen) {
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
   * Generates a string which, if executed, will return the BookContent.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {BookContent}
   */
  getElements: function() {
    return new BookContent();
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
