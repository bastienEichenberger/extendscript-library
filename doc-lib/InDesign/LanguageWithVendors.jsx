/*
 * A language that allows the specification of a hyphenation rules source, a spell-checking source, and a thesaurus.
 */
var LanguageWithVendors = {
  /*
   * The name of the LanguageWithVendors.
   * @type {String}
   */
  name: undefined,
  
  /*
   * The full name of the Language object's ICU locale.
   * @type {String}
   */
  icuLocaleName: undefined,
  
  /*
   * A list of spelling vendors.
   * @type {String}
   */
  spellingVendorList: undefined,
  
  /*
   * A list of hyphenation vendors.
   * @type {String}
   */
  hyphenationVendorList: undefined,
  
  /*
   * The unique ID of the LanguageWithVendors.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the LanguageWithVendors (a Application).
   * @type {Application}
   */
  parent: undefined,
  
  /*
   * The index of the LanguageWithVendors within its containing object.
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
   * The single quotes pair for the language.
   * @type {String}
   */
  singleQuotes: undefined,
  
  /*
   * The double quotes pair for the language.
   * @type {String}
   */
  doubleQuotes: undefined,
  
  /*
   * The hyphenation rules source.
   * @type {String}
   */
  hyphenationVendor: undefined,
  
  /*
   * The spell-checking source.
   * @type {String}
   */
  spellingVendor: undefined,
  
  /*
   * The thesaurus source.
   * @type {String}
   */
  thesaurusVendor: undefined,
  
  /*
   * The user dictionaries for the language.
   * @type {String}
   */
  dictionaryPaths: undefined,
  
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
   * Adds the specified user dictionary.
 *
   * @param {String} filePath The path to the dictionary file.
   * @returns {String}
   */
  addDictionaryPath: function(filePath) {
    return new String();
  },
  
  /*
   * Removes the specified user dictionary.
 *
   * @param {String} filePath The path to the dictionary file.
   * @returns {String}
   */
  removeDictionaryPath: function(filePath) {
    return new String();
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
   * Generates a string which, if executed, will return the LanguageWithVendors.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {LanguageWithVendors}
   */
  getElements: function() {
    return new LanguageWithVendors();
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
