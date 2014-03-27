/*
 * A hyperlink.
 */
var Hyperlink = {
  /*
   * If true, the hyperlink is hidden.
   * @type {Boolean}
   */
  hidden: undefined,
  
  /*
   * The unique ID of the Hyperlink.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the Hyperlink (a Document).
   * @type {Document}
   */
  parent: undefined,
  
  /*
   * The index of the Hyperlink within its containing object.
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
   * The name of the Hyperlink.
   * @type {String}
   */
  name: undefined,
  
  /*
   * The hyperlinked text or page item. Can return: HyperlinkPageItemSource, HyperlinkTextSource or CrossReferenceSource.
   * @type {Mixed}
   */
  source: undefined,
  
  /*
   * If true, the Hyperlink is visible.
   * @type {Boolean}
   */
  visible: undefined,
  
  /*
   * The hyperlink highlight style.
   * @type {HyperlinkAppearanceHighlight}
   */
  highlight: undefined,
  
  /*
   * The stroke weight of the hyperlink border.
   * @type {HyperlinkAppearanceWidth}
   */
  width: undefined,
  
  /*
   * The hyperlink border color. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
   * @type {Mixed}
   */
  borderColor: undefined,
  
  /*
   * The hyperlink border style.
   * @type {HyperlinkAppearanceStyle}
   */
  borderStyle: undefined,
  
  /*
   * The text, page, or URL that the hyperlink points to. Can return: HyperlinkTextDestination, HyperlinkPageDestination, HyperlinkExternalPageDestination, HyperlinkURLDestination or ParagraphDestination.
   * @type {Mixed}
   */
  destination: undefined,
  
  /*
   * A property that can be set to any string.
   * @type {String}
   */
  label: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Deletes the Hyperlink.
   */
  remove: function() {
  },
  
  /*
   * Jumps to the hyperlink source.
   */
  showSource: function() {
  },
  
  /*
   * Jumps to the hyperlink destination.
   */
  showDestination: function() {
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
   * Generates a string which, if executed, will return the Hyperlink.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {Hyperlink}
   */
  getElements: function() {
    return new Hyperlink();
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
