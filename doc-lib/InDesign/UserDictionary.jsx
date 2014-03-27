/*
 * A user dictionary.
 */
var UserDictionary = {
  /*
   * The name of the UserDictionary.
   * @type {String}
   */
  name: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the UserDictionary (a Application).
   * @type {Application}
   */
  parent: undefined,
  
  /*
   * The index of the UserDictionary within its containing object.
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
   * A list of words added to the user dictionary.
   * @type {String}
   */
  addedWords: undefined,
  
  /*
   * A list of words removed from the user dictionary.
   * @type {String}
   */
  removedWords: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Adds the specified words to the specified list in the dictionary.
 *
   * @param {String} addedWords The words to add.
   * @param {Boolean} [removedList] If true, adds the words to the removed words list. If false or unspecified, adds the words to the added words list. 
   */
  addWord: function(addedWords, removedList) {
  },
  
  /*
   * Removes the specified words from the specified list in the dictionary.
 *
   * @param {String} removedWords The words to remove.
   * @param {Boolean} [removedList] If true, removes the words from the removed words list. If false or unspecified, removes the words from the added words list. 
   */
  removeWord: function(removedWords, removedList) {
  },
  
  /*
   * Generates a string which, if executed, will return the UserDictionary.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {UserDictionary}
   */
  getElements: function() {
    return new UserDictionary();
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
