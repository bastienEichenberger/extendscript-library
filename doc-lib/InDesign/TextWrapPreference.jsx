/*
 * Text wrap preferences.
 */
var TextWrapPreference = {
  /*
   * The contour of the text wrap. Valid only when when text wrap type is contour.
   * @type {ContourOption}
   */
  contourOptions: undefined,
  
  /*
   * If true, the text wrap path has been explicitly modified by the user.
   * @type {Boolean}
   */
  userModifiedWrap: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the TextWrapPreference (a PageItem, HtmlItem, FormField, SignatureField, TextBox, RadioButton, ListBox, ComboBox, CheckBox, MultiStateObject, Button, MediaItem, Sound, Movie, EPSText, SplineItem, Polygon, GraphicLine, Rectangle, Oval, Graphic, ImportedPage, PICT, WMF, PDF, EPS, Image, Group, TextFrame, Application, Document or ObjectStyle).
   * @type {Mixed}
   */
  parent: undefined,
  
  /*
   * A collection of preferences objects.
   * @type {Preferences}
   */
  preferences: undefined,
  
  /*
   * A collection of paths.
   * @type {Paths}
   */
  paths: undefined,
  
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
   * The minimum space between text and the edges of the wrapped object. The format for defining text wrap offset values depends on the text wrap type. If text wrap type is jump object text wrap, specify 2 values in the format [top, bottom]. If text wrap type is next column text wrap or contour, specify a single value. For bounding box text wrap, specify 4 values in the format in the format [top, left, bottom, right]. . Can return: Unit, Array of Units or NothingEnum enumerator.
   * @type {Mixed}
   */
  textWrapOffset: undefined,
  
  /*
   * If true, inverts the text wrap.
   * @type {Boolean}
   */
  inverse: undefined,
  
  /*
   * If true, text wraps on the master spread apply to that spread only, and not to any pages the master spread has been applied to.
   * @type {Boolean}
   */
  applyToMasterPageOnly: undefined,
  
  /*
   * Text wrap side options.
   * @type {TextWrapSideOptions}
   */
  textWrapSide: undefined,
  
  /*
   * The text wrap mode.
   * @type {TextWrapModes}
   */
  textWrapMode: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the TextWrapPreference.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {TextWrapPreference}
   */
  getElements: function() {
    return new TextWrapPreference();
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
