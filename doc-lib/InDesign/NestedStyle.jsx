/*
 * A nested style.
 */
var NestedStyle = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the NestedStyle (a TextDefault, Paragraph, ParagraphStyle, Text, InsertionPoint, TextStyleRange, TextColumn, Line, Word, Character, Story or XmlStory).
   * @type {Mixed}
   */
  parent: undefined,
  
  /*
   * The index of the NestedStyle within its containing object.
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
   * The character style applied to the text. Can also accept: String.
   * @type {CharacterStyle}
   */
  appliedCharacterStyle: undefined,
  
  /*
   * The delimiting expression that indicates how deeply into the paragraph the nested style is applied. Can return: String or NestedStyleDelimiters enumerator.
   * @type {Mixed}
   */
  delimiter: undefined,
  
  /*
   * The number instances of the specified delimiter up to which, or through which, to apply the nested style.
   * @type {Number}
   */
  repetition: undefined,
  
  /*
   * If true, the nested style is applied through the last delimiter. If false, the nested style is applied up to the last delimiter.
   * @type {Boolean}
   */
  inclusive: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Deletes the NestedStyle.
   */
  remove: function() {
  },
  
  /*
   * Generates a string which, if executed, will return the NestedStyle.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {NestedStyle}
   */
  getElements: function() {
    return new NestedStyle();
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
