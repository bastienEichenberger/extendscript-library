/*
 * A note in a story.
 */
var Note = {
  /*
   * The date and time the note was created.
   * @type {Date}
   */
  creationDate: undefined,
  
  /*
   * The date and time the note was last modified.
   * @type {Date}
   */
  modificationDate: undefined,
  
  /*
   * The user who made the note.
   * @type {String}
   */
  userName: undefined,
  
  /*
   * The insertion point before the table in the story containing the table.
   * @type {InsertionPoint}
   */
  storyOffset: undefined,
  
  /*
   * The unique ID of the Note.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the Note (a XmlStory, Story, TextFrame, InsertionPoint or Cell).
   * @type {Mixed}
   */
  parent: undefined,
  
  /*
   * The index of the Note within its containing object.
   * @type {Number}
   */
  index: undefined,
  
  /*
   * A collection of text variable instances.
   * @type {TextVariableInstances}
   */
  textVariableInstances: undefined,
  
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
   * A collection of hidden text objects.
   * @type {HiddenTexts}
   */
  hiddenTexts: undefined,
  
  /*
   * If true, the note is collapsed in galley view.
   * @type {Boolean}
   */
  collapsed: undefined,
  
  /*
   * A property that can be set to any string.
   * @type {String}
   */
  label: undefined,
  
  /*
   * The name of the Note; this is an alias to the Note's label property.
   * @type {String}
   */
  name: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Deletes the Note.
   */
  remove: function() {
  },
  
  /*
   * Converts the note to story text.
   */
  convertToText: function() {
  },
  
  /*
   * Moves the note to the specified location.
 *
   * @param {LocationOptions} to The new location relative to the reference object or within the containing object.
   * @param {Mixed} [reference] The reference object. Note: Required when the to parameter specifies before or after. Can accept: Text or Story. 
   * @returns {Note}
   */
  move: function(to, reference) {
    return new Note();
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
   * Generates a string which, if executed, will return the Note.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {Note}
   */
  getElements: function() {
    return new Note();
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
