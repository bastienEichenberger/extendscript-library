/*
 * A hyperlink destination that is a document page.
 */
var HyperlinkPageDestination = {
  /*
   * If true, the hyperlink is hidden.
   * @type {Boolean}
   */
  hidden: undefined,
  
  /*
   * The unique ID of the HyperlinkPageDestination.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the HyperlinkPageDestination (a Document).
   * @type {Document}
   */
  parent: undefined,
  
  /*
   * The index of the HyperlinkPageDestination within its containing object.
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
   * The name of the HyperlinkPageDestination.
   * @type {String}
   */
  name: undefined,
  
  /*
   * If true or unspecified, allows a custom destination name; also does not update the name when the destination is moved to a different page. If false, uses the page number as the page destination name and makes the name property read-only for the destination object; also updates the name when the destination is moved to a different page.
   * @type {Boolean}
   */
  nameManually: undefined,
  
  /*
   * The page that the hyperlink points to.
   * @type {Page}
   */
  destinationPage: undefined,
  
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
   * Deletes the HyperlinkPageDestination.
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
   * Generates a string which, if executed, will return the HyperlinkPageDestination.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {HyperlinkPageDestination}
   */
  getElements: function() {
    return new HyperlinkPageDestination();
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
