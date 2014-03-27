/*
 * Galley preferences.
 */
var GalleyPreference = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the GalleyPreference (a Application or Document).
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
   * The background color, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as an InCopy UI color. . Can return: Array of 3 Reals (0 - 255) or InCopyUIColors enumerator.
   * @type {Mixed}
   */
  backgroundColor: undefined,
  
  /*
   * If true, the cursor blinks.
   * @type {Boolean}
   */
  blinkCursor: undefined,
  
  /*
   * The cursor type for galley and story views.
   * @type {CursorTypes}
   */
  cursorType: undefined,
  
  /*
   * If true, galley text is anti-aliased.
   * @type {Boolean}
   */
  smoothText: undefined,
  
  /*
   * The text color, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as an InCopy UI color. Can return: Array of 3 Reals (0 - 255) or InCopyUIColors enumerator.
   * @type {Mixed}
   */
  textColor: undefined,
  
  /*
   * If true, displays the depth ruler.
   * @type {Boolean}
   */
  showDepthRuler: undefined,
  
  /*
   * The type of text anti-aliasing to use in story and galley views.
   * @type {AntiAliasType}
   */
  antiAliasType: undefined,
  
  /*
   * If true, show paragraph style names.
   * @type {Boolean}
   */
  showParagraphStyleNames: undefined,
  
  /*
   * Amount of spacing between lines.
   * @type {LineSpacingType}
   */
  lineSpacingValue: undefined,
  
  /*
   * Font family name to use for text display.
   * @type {String}
   */
  displayFont: undefined,
  
  /*
   * Size to use for text display.
   * @type {Mixed}
   */
  displayFontSize: undefined,
  
  /*
   * Info column width.
   * @type {Mixed}
   */
  infoColumnWidth: undefined,
  
  /*
   * If true, display the Info column.
   * @type {Boolean}
   */
  showInfoColumn: undefined,
  
  /*
   * If true, show paragraph break marks.
   * @type {Boolean}
   */
  showParagraphBreakMarks: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the GalleyPreference.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {GalleyPreference}
   */
  getElements: function() {
    return new GalleyPreference();
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
