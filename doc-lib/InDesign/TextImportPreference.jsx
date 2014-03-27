/*
 * Text import preferences.
 */
var TextImportPreference = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the TextImportPreference (a Application).
   * @type {Application}
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
   * The computer language character set used to create the text file.
   * @type {TextImportCharacterSet}
   */
  characterSet: undefined,
  
  /*
   * The platform used to create the imported text file.
   * @type {ImportPlatform}
   */
  platform: undefined,
  
  /*
   * The dictionary to use for the imported text.
   * @type {String}
   */
  dictionary: undefined,
  
  /*
   * If true, the import filter removes extra carriage returns at the ends of lines.
   * @type {Boolean}
   */
  stripReturnsBetweenLines: undefined,
  
  /*
   * If true, the import filter removes extra carriage returns between paragraphs.
   * @type {Boolean}
   */
  stripReturnsBetweenParagraphs: undefined,
  
  /*
   * If true, converts the specified number of spaces into a tab. For information on specifying the number of spaces, see spaces into tabs count.
   * @type {Boolean}
   */
  convertSpacesIntoTabs: undefined,
  
  /*
   * The number of spaces to convert to a tab. Note: Valid when convert spaces into tabs is true.
   * @type {Number}
   */
  spacesIntoTabsCount: undefined,
  
  /*
   * If true, convert straight quotes and apostrophes in the imported text to typographic quotation marks and apostrophes.
   * @type {Boolean}
   */
  useTypographersQuotes: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the TextImportPreference.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {TextImportPreference}
   */
  getElements: function() {
    return new TextImportPreference();
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
