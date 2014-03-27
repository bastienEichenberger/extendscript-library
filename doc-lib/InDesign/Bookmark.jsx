/*
 * A bookmark.
 */
var Bookmark = {
  /*
   * The indent level of the bookmark.
   * @type {Number}
   */
  indent: undefined,
  
  /*
   * The destination that the hyperlink points to. Can return: HyperlinkTextDestination, HyperlinkPageDestination, HyperlinkExternalPageDestination or Page.
   * @type {Mixed}
   */
  destination: undefined,
  
  /*
   * The unique ID of the Bookmark.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the Bookmark (a Document or Bookmark).
   * @type {Mixed}
   */
  parent: undefined,
  
  /*
   * The index of the Bookmark within its containing object.
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
   * A collection of bookmarks.
   * @type {Bookmarks}
   */
  bookmarks: undefined,
  
  /*
   * The name of the Bookmark.
   * @type {String}
   */
  name: undefined,
  
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
   * Deletes the Bookmark.
   */
  remove: function() {
  },
  
  /*
   * Moves the bookmark to the specified location.
 *
   * @param {LocationOptions} [to] The bookmark location relative to the reference object or within the containing object. 
   * @param {Mixed} [reference] The reference object. Note: Required when the to parameter specifies before or after. Can accept: Bookmark, Document or Bookmark. 
   * @returns {Bookmark}
   */
  move: function(to, reference) {
    return new Bookmark();
  },
  
  /*
   * Go to the bookmark.
   */
  showBookmark: function() {
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
   * Generates a string which, if executed, will return the Bookmark.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {Bookmark}
   */
  getElements: function() {
    return new Bookmark();
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
