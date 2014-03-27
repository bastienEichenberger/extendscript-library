/*
 * A tracked change made to a story.
 */
var Change = {
  /*
   * The date on which the tracked change was made. Note: Valid only when track changes is true.
   * @type {Date}
   */
  date: undefined,
  
  /*
   * The type of tracked change. Note: Valid only when track changes is true.
   * @type {ChangeTypes}
   */
  changeType: undefined,
  
  /*
   * The user who made the change. Note: Valid only when track changes is true.
   * @type {String}
   */
  userName: undefined,
  
  /*
   * The location of the first insertion point in the object (relative to the beginning of the story).
   * @type {InsertionPoint}
   */
  storyOffset: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the Change (a Story, XmlStory or Cell).
   * @type {Mixed}
   */
  parent: undefined,
  
  /*
   * The index of the Change within its containing object.
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
   * A collection of text variable instances.
   * @type {TextVariableInstances}
   */
  textVariableInstances: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Accepts the tracked change. Note: Valid only when track changes is true.
   */
  accept: function() {
  },
  
  /*
   * Rejects the tracked change. Note: Valid only when track changes is true.
   */
  reject: function() {
  },
  
  /*
   * Generates a string which, if executed, will return the Change.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {Change}
   */
  getElements: function() {
    return new Change();
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
