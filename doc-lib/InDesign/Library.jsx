/*
 * An object library.
 */
var Library = {
  /*
   * The name of the Library.
   * @type {String}
   */
  name: undefined,
  
  /*
   * The full path to the Library, including the name of the Library.
   * @type {File}
   */
  fullName: undefined,
  
  /*
   * The full path to the file.
   * @type {File}
   */
  filePath: undefined,
  
  /*
   * The associated panel.
   * @type {Panel}
   */
  associatedPanel: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the Library (a Application).
   * @type {Application}
   */
  parent: undefined,
  
  /*
   * The index of the Library within its containing object.
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
   * A collection of object library assets.
   * @type {Assets}
   */
  assets: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Closes the Library.
   */
  close: function() {
  },
  
  /*
   * Stores the specified object in the library.
 *
   * @param {Mixed} using The page item(s) to store. Can accept: Array of PageItems, Movies, Sounds, Graphics or XMLElements.
   * @param {Object} [withProperties] Initial values for properties of the new Library 
   * @returns {Asset}
   */
  store: function(using, withProperties) {
    return new Asset();
  },
  
  /*
   * Generates a string which, if executed, will return the Library.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {Library}
   */
  getElements: function() {
    return new Library();
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
