/*
 * The preferences for a running header/footer &amp;&#35;40;match paragraph style&#41; variable.
 */
var MatchParagraphStylePreference = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the MatchParagraphStylePreference (a TextVariable).
   * @type {TextVariable}
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
   * The text that precedes the value of the variable. (Limit: 128 characters)
   * @type {String}
   */
  textBefore: undefined,
  
  /*
   * The text that follows the value of the variable. (Limit: 128 characters)
   * @type {String}
   */
  textAfter: undefined,
  
  /*
   * The paragraph style applied to the text. Can also accept: String.
   * @type {ParagraphStyle}
   */
  appliedParagraphStyle: undefined,
  
  /*
   * The starting point and direction in which the search will be conducted.
   * @type {SearchStrategies}
   */
  searchStrategy: undefined,
  
  /*
   * The case of the matched text.
   * @type {ChangeCaseOptions}
   */
  changeCase: undefined,
  
  /*
   * If true, deletes end punctuation from the matched text.
   * @type {Boolean}
   */
  deleteEndPunctuation: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the MatchParagraphStylePreference.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {MatchParagraphStylePreference}
   */
  getElements: function() {
    return new MatchParagraphStylePreference();
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
