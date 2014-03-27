/*
 * Metadata preferences.
 */
var MetadataPreference = {
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
   * The parent of the MetadataPreference (a Document).
   * @type {Document}
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
   * The author of the document.
   * @type {String}
   */
  author: undefined,
  
  /*
   * The description of the MetadataPreference.
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
   * The title of the document.
   * @type {String}
   */
  documentTitle: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Saves the metadata in the document to an external file.
 *
   * @param {File} to The path to the external file.
   */
  save: function(to) {
  },
  
  /*
   * Replaces the current metadata in the document with metadata from the specified file.
 *
   * @param {File} using The full path to the file that contains the replacement metadata.
   * @param {Boolean} [affectAll] If true, treats all properties as external. Note: Defaults to false. 
   */
  replace: function(using, affectAll) {
  },
  
  /*
   * Uses metadata from the specified external file to define any undefined metadata properties in the document.
 *
   * @param {File} from The path to the external file that contains the metadata.
   * @param {Boolean} [affectAll] If true, also replaces existing metadata with data from the external file. If false, does not replace existing metadata. Note: Defaults to false. 
   */
  append: function(from, affectAll) {
  },
  
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
   * Sets the XMP property associated with the specified path.
 *
   * @param {String} namespace The namespace of the property.
   * @param {String} path The specified path(s).
   * @param {String} value The value to assign to the property. Note: To remove the property, pass an empty string.
   */
  setProperty: function(namespace, path, value) {
  },
  
  /*
   * Creates an empty container.
 *
   * @param {String} namespace The namespace of the container.
   * @param {String} path The path to the container.
   * @param {Number} [index] The index of the item within the container. Specified values must be 1 or greater. To append the item to the end of the index and allow the next available value to be assigned, use 0. 
   * @param {ContainerType} [container] The container type. Note: Required when the new item is the first item added to the container. 
   */
  createContainerItem: function(namespace, path, index, container) {
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
   * Generates a string which, if executed, will return the MetadataPreference.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {MetadataPreference}
   */
  getElements: function() {
    return new MetadataPreference();
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
