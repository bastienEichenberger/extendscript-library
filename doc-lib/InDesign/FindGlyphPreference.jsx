/*
 * Find glyph preferences.
 */
var FindGlyphPreference = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the FindGlyphPreference (a Application).
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
   * The GID/CID of the glyph. Can return: Long Integer or NothingEnum enumerator.
   * @type {Mixed}
   */
  glyphID: undefined,
  
  /*
   * The Registry Ordered font group. Can return: Array of 2 Strings or NothingEnum enumerator.
   * @type {Mixed}
   */
  rosFontGroup: undefined,
  
  /*
   * The font applied to the FindGlyphPreference, specified as either a font object or the name of font family. Can return: Font, String or NothingEnum enumerator.
   * @type {Mixed}
   */
  appliedFont: undefined,
  
  /*
   * The name of the font style. Can return: String or NothingEnum enumerator.
   * @type {Mixed}
   */
  fontStyle: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the FindGlyphPreference.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {FindGlyphPreference}
   */
  getElements: function() {
    return new FindGlyphPreference();
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
