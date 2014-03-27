/*
 * A hyperlink destination that is a page in a document other than the document that contains the hyperlink source. For information on hyperlink sources, hyperlink page item source or hyperlink text source.
 */
var HyperlinkExternalPageDestination = {
  /*
   * The name of the HyperlinkExternalPageDestination.
   * @type {String}
   */
  name: undefined,
  
  /*
   * If true, the hyperlink is hidden.
   * @type {Boolean}
   */
  hidden: undefined,
  
  /*
   * The unique ID of the HyperlinkExternalPageDestination.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the HyperlinkExternalPageDestination (a Document).
   * @type {Document}
   */
  parent: undefined,
  
  /*
   * The index of the HyperlinkExternalPageDestination within its containing object.
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
   * The path to the document that the hyperlink destination points to.
   * @type {File}
   */
  documentPath: undefined,
  
  /*
   * The index of the page that the hyperlink destination points to. Note: Valid only when hyperlink destination is an external page.
   * @type {Number}
   */
  destinationPageIndex: undefined,
  
  /*
   * The destination page size when the page is reached by clicking the hyperlink.
   * @type {HyperlinkDestinationPageSetting}
   */
  viewSetting: undefined,
  
  /*
   * The view rectangle, specified in the format [y1, x1, y2, x2]. Note: Valid only when view setting is fixed. Can return: Ordered array containing top:Unit, left:Unit, bottom:Unit, right:Unit.
   * @type {Mixed}
   */
  viewBounds: undefined,
  
  /*
   * The zoom percentage. (Range: 5 to 4000) Note: Valid only when view setting is fixed.
   * @type {Number}
   */
  viewPercentage: undefined,
  
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
   * Deletes the HyperlinkExternalPageDestination.
   */
  remove: function() {
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
   * Generates a string which, if executed, will return the HyperlinkExternalPageDestination.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {HyperlinkExternalPageDestination}
   */
  getElements: function() {
    return new HyperlinkExternalPageDestination();
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
