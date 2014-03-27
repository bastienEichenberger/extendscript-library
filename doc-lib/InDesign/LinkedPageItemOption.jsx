/*
 * The link options for a linked Page Item.
 */
var LinkedPageItemOption = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the LinkedPageItemOption (a Application, Document, PageItem, HtmlItem, FormField, SignatureField, TextBox, RadioButton, ListBox, ComboBox, CheckBox, MultiStateObject, Button, MediaItem, Sound, Movie, EPSText, SplineItem, Polygon, GraphicLine, Rectangle, Oval, Graphic, ImportedPage, PICT, WMF, PDF, EPS, Image, Group or TextFrame).
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
   * If true, the linked Page Item will be updated while saving.
   * @type {Boolean}
   */
  updateLinkWhileSaving: undefined,
  
  /*
   * If true, a warning will be shown if the update link operation will override local edits.
   * @type {Boolean}
   */
  warnOnUpdateOfEditedPageItem: undefined,
  
  /*
   * If true, size and shape edits will be preserved during update.
   * @type {Boolean}
   */
  preserveSizeAndShape: undefined,
  
  /*
   * If true, appearance edits will be preserved during update.
   * @type {Boolean}
   */
  preserveAppearance: undefined,
  
  /*
   * If true, interactivity edits will be preserved during update.
   * @type {Boolean}
   */
  preserveInteractivity: undefined,
  
  /*
   * If true, frame content edits will be preserved during update.
   * @type {Boolean}
   */
  preserveFrameContent: undefined,
  
  /*
   * If true, text wrap, hyperLinks, text frame options, object export settings will be preserved during update.
   * @type {Boolean}
   */
  preserveOthers: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the LinkedPageItemOption.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {LinkedPageItemOption}
   */
  getElements: function() {
    return new LinkedPageItemOption();
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
