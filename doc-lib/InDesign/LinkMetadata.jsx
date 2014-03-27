/*
 * MetaData properties for the link source file.
 */
var LinkMetadata = {
  /*
   * The author of the document.
   * @type {String}
   */
  author: undefined,
  
  /*
   * The description of the LinkMetadata.
   * @type {String}
   */
  description: undefined,
  
  /*
   * The job name.
   * @type {String}
   */
  jobName: undefined,
  
  /*
   * The copyright status of the document.
   * @type {CopyrightStatus}
   */
  copyrightStatus: undefined,
  
  /*
   * The text to use as a copyright notice.
   * @type {String}
   */
  copyrightNotice: undefined,
  
  /*
   * The URL of the file that contains the linked copyright statement.
   * @type {String}
   */
  copyrightInfoURL: undefined,
  
  /*
   * The list of keywords associated with the document.
   * @type {String}
   */
  keywords: undefined,
  
  /*
   * The location of the document on the asset management server.
   * @type {String}
   */
  serverURL: undefined,
  
  /*
   * The most recent modification date of the document.
   * @type {Date}
   */
  modificationDate: undefined,
  
  /*
   * The creation date of the document.
   * @type {Date}
   */
  creationDate: undefined,
  
  /*
   * The title of the document.
   * @type {String}
   */
  documentTitle: undefined,
  
  /*
   * The name of the application used to create the document.
   * @type {String}
   */
  creator: undefined,
  
  /*
   * The format of the document.
   * @type {String}
   */
  format: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the LinkMetadata (a Link).
   * @type {Link}
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
   * Gets the XMP property value associated with the specified path.
 *
   * @param {String} namespace The namespace of the property.
   * @param {String} path The specified path.
   * @returns {String}
   */
  getProperty: function(namespace, path) {
    return new String();
  },
  
  /*
   * Counts the number of items in the container.
 *
   * @param {String} namespace The namespace of the container.
   * @param {String} path The path to the container.
   * @returns {Number}
   */
  countContainer: function(namespace, path) {
    return new Number();
  },
  
  /*
   * Generates a string which, if executed, will return the LinkMetadata.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {LinkMetadata}
   */
  getElements: function() {
    return new LinkMetadata();
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
