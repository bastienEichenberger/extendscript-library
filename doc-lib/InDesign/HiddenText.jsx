/*
 * A hidden text object.
 */
var HiddenText = {
  /*
   * The insertion point before the table in the story containing the table.
   * @type {InsertionPoint}
   */
  storyOffset: undefined,
  
  /*
   * The unique ID of the HiddenText.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the HiddenText (a Story, XmlStory, TextFrame, InsertionPoint, Note, Cell or Footnote).
   * @type {Mixed}
   */
  parent: undefined,
  
  /*
   * The index of the HiddenText within its containing object.
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
   * A collection of text objects.
   * @type {Texts}
   */
  texts: undefined,
  
  /*
   * A collection of characters.
   * @type {Characters}
   */
  characters: undefined,
  
  /*
   * A collection of words.
   * @type {Words}
   */
  words: undefined,
  
  /*
   * A collection of lines.
   * @type {Lines}
   */
  lines: undefined,
  
  /*
   * A collection of text columns.
   * @type {TextColumns}
   */
  textColumns: undefined,
  
  /*
   * A collection of paragraphs.
   * @type {Paragraphs}
   */
  paragraphs: undefined,
  
  /*
   * A collection of insertion points.
   * @type {InsertionPoints}
   */
  insertionPoints: undefined,
  
  /*
   * A collection of text style ranges.
   * @type {TextStyleRanges}
   */
  textStyleRanges: undefined,
  
  /*
   * A property that can be set to any string.
   * @type {String}
   */
  label: undefined,
  
  /*
   * The name of the HiddenText; this is an alias to the HiddenText's label property.
   * @type {String}
   */
  name: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
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
   * Generates a string which, if executed, will return the HiddenText.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {HiddenText}
   */
  getElements: function() {
    return new HiddenText();
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
