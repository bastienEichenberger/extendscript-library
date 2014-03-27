/*
 * A TOC entry definition.
 */
var TOCStyleEntry = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the TOCStyleEntry (a TOCStyle).
   * @type {TOCStyle}
   */
  parent: undefined,
  
  /*
   * The index of the TOCStyleEntry within its containing object.
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
   * The name of the TOCStyleEntry.
   * @type {String}
   */
  name: undefined,
  
  /*
   * The paragraph style applied to the TOC entry. Can return: ParagraphStyle or String.
   * @type {Mixed}
   */
  formatStyle: undefined,
  
  /*
   * The indent level of the entry in the TOC.
   * @type {Number}
   */
  level: undefined,
  
  /*
   * The character style applied to the page number of the entry. Can return: CharacterStyle or String.
   * @type {Mixed}
   */
  pageNumberStyle: undefined,
  
  /*
   * The page number placement for the TOC entry style.
   * @type {PageNumberPosition}
   */
  pageNumberPosition: undefined,
  
  /*
   * The string to insert between the entry text and the page numbers.
   * @type {String}
   */
  separator: undefined,
  
  /*
   * The character style applied to the string separating the TOC entry text and the page numbers. Can return: CharacterStyle or String.
   * @type {Mixed}
   */
  separatorStyle: undefined,
  
  /*
   * If true, sorts the entries alphabetically.
   * @type {Boolean}
   */
  sortAlphabet: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Deletes the TOCStyleEntry.
   */
  remove: function() {
  },
  
  /*
   * Generates a string which, if executed, will return the TOCStyleEntry.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {TOCStyleEntry}
   */
  getElements: function() {
    return new TOCStyleEntry();
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
