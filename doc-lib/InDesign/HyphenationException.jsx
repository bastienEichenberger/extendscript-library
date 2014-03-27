/*
 * A hyphenation exceptions list.
 */
var HyphenationException = {
  /*
   * The name of the HyphenationException.
   * @type {String}
   */
  name: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the HyphenationException (a Document).
   * @type {Document}
   */
  parent: undefined,
  
  /*
   * The index of the HyphenationException within its containing object.
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
   * A list of words removed from the hyphenation exceptions list.
   * @type {String}
   */
  removedExceptions: undefined,
  
  /*
   * A list of words added to the hyphenation exceptions list.
   * @type {String}
   */
  addedExceptions: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Adds the specified words to the hyphenation exceptions list.
 *
   * @param {String} addedExceptions The list of words to add.
   * @param {Boolean} [removedList] If true, adds the words to the removed exceptions list. If false or unspecified, adds the words to the added exceptions list. 
   */
  addException: function(addedExceptions, removedList) {
  },
  
  /*
   * Removes the specified words from the hyphenation exceptions list.
 *
   * @param {String} removedExceptions The list of words to remove.
   * @param {Boolean} [removedList] If true, removes the words from the removed exceptions list. If false or unspecified, adds the words to the added exceptions list. 
   */
  removeException: function(removedExceptions, removedList) {
  },
  
  /*
   * Generates a string which, if executed, will return the HyphenationException.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {HyphenationException}
   */
  getElements: function() {
    return new HyphenationException();
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
