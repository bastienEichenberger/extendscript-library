/*
 * Spell-check preferences.
 */
var SpellPreference = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the SpellPreference (a Application).
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
   * If true, underlines misspelled and repeated words, uncapitalized proper nouns, and uncapitalized first words in sentences. Note: Valid only when the corresponding properties are true. For information, see check misspelled words, check repeated words, check capitalized words, and check capitalized sentences.
   * @type {Boolean}
   */
  dynamicSpellCheck: undefined,
  
  /*
   * The underline color for misspelled words, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. Note: Valid only when both dynamic spell check and check misspelled words are true. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
   * @type {Mixed}
   */
  misspelledWordColor: undefined,
  
  /*
   * The underline color for repeated words, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. Note: Valid only when both dynamic spell check and check repeated words are true. . Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
   * @type {Mixed}
   */
  repeatedWordColor: undefined,
  
  /*
   * The underline color for uncapitalized proper nouns, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. Note: Valid only when both dynamic spell check and check capitalized words are true. . Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
   * @type {Mixed}
   */
  uncapitalizedWordColor: undefined,
  
  /*
   * The underline color for the first word in sentences that do not begin with a capital letter, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. Note: Valid when both dynamic spell check and check capitalized sentences are true. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
   * @type {Mixed}
   */
  uncapitalizedSentenceColor: undefined,
  
  /*
   * If true, checks for misspelled words.
   * @type {Boolean}
   */
  checkMisspelledWords: undefined,
  
  /*
   * If true, checks for repeated words.
   * @type {Boolean}
   */
  checkRepeatedWords: undefined,
  
  /*
   * If true, checks for uncapitalized proper nouns.
   * @type {Boolean}
   */
  checkCapitalizedWords: undefined,
  
  /*
   * If true, checks for uncapitalized first words in sentences.
   * @type {Boolean}
   */
  checkCapitalizedSentences: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the SpellPreference.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {SpellPreference}
   */
  getElements: function() {
    return new SpellPreference();
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
