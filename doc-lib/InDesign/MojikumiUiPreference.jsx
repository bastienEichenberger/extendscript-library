/*
 * Mojikumi UI preferences.
 */
var MojikumiUiPreference = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the MojikumiUiPreference (a Document or Application).
   * @type {Mixed}
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
   * If true, uses half-width spacing for all characters.
   * @type {Boolean}
   */
  lineEndAllOneHalfEm: undefined,
  
  /*
   * If true, indents lines one space and uses line end uke one half space.
   * @type {Boolean}
   */
  oneEmIndentLineEndUkeOneHalfEm: undefined,
  
  /*
   * If true, indents lines one full or half space and uses line end uke one half space.
   * @type {Boolean}
   */
  oneOrOneHalfEmIndentLineEndUkeOneHalfEm: undefined,
  
  /*
   * If true, Uses full-witdh spacing for all characters except the last character in the line, which uses either full- or half-width spacing.
   * @type {Boolean}
   */
  oneOrOneHalfEmIndentLineEndAllOneEm: undefined,
  
  /*
   * If true, indents lines one full space and uses full-width spacing for all characters.
   * @type {Boolean}
   */
  oneEmIndentLineEndAllOneEm: undefined,
  
  /*
   * If true, indents lines one full space and uses no float for all characters.
   * @type {Boolean}
   */
  oneEmIndentLineEndAllNoFloat: undefined,
  
  /*
   * If true, indents lines one full space and uses line end uke no float.
   * @type {Boolean}
   */
  oneEmIndentLineEndUkeNoFloat: undefined,
  
  /*
   * If true, indents lines one half space or one full space and uses line end uke no float.
   * @type {Boolean}
   */
  oneOrOneHalfEmIndentLineEndUkeNoFloat: undefined,
  
  /*
   * If true, indents lines one full space and uses half-width spacing for all characters.
   * @type {Boolean}
   */
  oneEmIndentLineEndAllOneHalfEm: undefined,
  
  /*
   * If true, uses full-width spacing for all characters.
   * @type {Boolean}
   */
  lineEndAllOneEm: undefined,
  
  /*
   * If true, uses line end uke no float.
   * @type {Boolean}
   */
  lineEndUkeNoFloat: undefined,
  
  /*
   * If true, indents lines one or one-half space and uses full-width spacing for punctuation and for the last character in the line.
   * @type {Boolean}
   */
  oneOrOneHalfEmIndentLineEndPeriodOneEm: undefined,
  
  /*
   * If true, indents lines one space and uses full-width spacing for punctuation and for the last character in the line.
   * @type {Boolean}
   */
  oneEmIndentLineEndPeriodOneEm: undefined,
  
  /*
   * If true, uses full-width spacing for punctuation and for the last character in the line.
   * @type {Boolean}
   */
  lineEndPeriodOneEm: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the MojikumiUiPreference.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {MojikumiUiPreference}
   */
  getElements: function() {
    return new MojikumiUiPreference();
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
