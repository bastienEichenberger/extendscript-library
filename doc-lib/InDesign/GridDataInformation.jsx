/*
 * Grid defaults. Note: Applies to named, layout, and frame &amp;&#35;40;story&#41; grids.
 */
var GridDataInformation = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the GridDataInformation (a Story, XmlStory, Page, NamedGrid or TextFrame).
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
   * The font applied to the GridDataInformation, specified as either a font object or the name of font family. Can return: Font or String.
   * @type {Mixed}
   */
  appliedFont: undefined,
  
  /*
   * The name of the font style.
   * @type {String}
   */
  fontStyle: undefined,
  
  /*
   * The text size.
   * @type {Mixed}
   */
  pointSize: undefined,
  
  /*
   * The amount of white space between characters.
   * @type {Number}
   */
  characterAki: undefined,
  
  /*
   * The amount of white space between lines.
   * @type {Number}
   */
  lineAki: undefined,
  
  /*
   * The horizontal scaling applied to the GridDataInformation.
   * @type {Number}
   */
  horizontalScale: undefined,
  
  /*
   * The vertical scaling applied to the GridDataInformation.
   * @type {Number}
   */
  verticalScale: undefined,
  
  /*
   * The line justification.
   * @type {LineAlignment}
   */
  lineAlignment: undefined,
  
  /*
   * The alignment to the frame grid or baseline grid.
   * @type {GridAlignment}
   */
  gridAlignment: undefined,
  
  /*
   * The alignment of small characters to the largest character in the line.
   * @type {CharacterAlignment}
   */
  characterAlignment: undefined,
  
  /*
   * The grid view setting.
   * @type {GridViewSettings}
   */
  gridView: undefined,
  
  /*
   * The character count location. Note: Valid when show character count is true.
   * @type {CharacterCountLocation}
   */
  characterCountLocation: undefined,
  
  /*
   * The character size for the character count display.
   * @type {Number}
   */
  characterCountSize: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the GridDataInformation.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {GridDataInformation}
   */
  getElements: function() {
    return new GridDataInformation();
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
