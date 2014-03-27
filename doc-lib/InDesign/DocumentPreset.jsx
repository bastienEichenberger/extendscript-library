/*
 * A preset that contains all of the new document settings.
 */
var DocumentPreset = {
  /*
   * The unique ID of the DocumentPreset.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the DocumentPreset (a Application).
   * @type {Application}
   */
  parent: undefined,
  
  /*
   * The index of the DocumentPreset within its containing object.
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
   * The name of the DocumentPreset.
   * @type {String}
   */
  name: undefined,
  
  /*
   * The number of pages in the document. (Range: 1 to 9999)
   * @type {Number}
   */
  pagesPerDocument: undefined,
  
  /*
   * If true, the document has facing pages.
   * @type {Boolean}
   */
  facingPages: undefined,
  
  /*
   * The height of the page.
   * @type {Mixed}
   */
  pageHeight: undefined,
  
  /*
   * The width of the page.
   * @type {Mixed}
   */
  pageWidth: undefined,
  
  /*
   * The page orientation.
   * @type {PageOrientation}
   */
  pageOrientation: undefined,
  
  /*
   * The number of columns to place on the page.
   * @type {Number}
   */
  columnCount: undefined,
  
  /*
   * The distance between columns.
   * @type {Mixed}
   */
  columnGutter: undefined,
  
  /*
   * The top edge of the DocumentPreset.
   * @type {Mixed}
   */
  top: undefined,
  
  /*
   * The bottom edge of the DocumentPreset.
   * @type {Mixed}
   */
  bottom: undefined,
  
  /*
   * The left edge of the DocumentPreset.
   * @type {Mixed}
   */
  left: undefined,
  
  /*
   * The right edge of the DocumentPreset.
   * @type {Mixed}
   */
  right: undefined,
  
  /*
   * The amount to offset the inside or left document bleed. Note: To set the bleed inside or left offset, document bleed uniform size must be false.
   * @type {Mixed}
   */
  documentBleedInsideOrLeftOffset: undefined,
  
  /*
   * The amount to offset the top document bleed.
   * @type {Mixed}
   */
  documentBleedTopOffset: undefined,
  
  /*
   * The amount to offset the outside or right document bleed. Note: To set the bleed outside or right offset, document bleed uniform size must be false.
   * @type {Mixed}
   */
  documentBleedOutsideOrRightOffset: undefined,
  
  /*
   * The amount to offset the bottom document bleed. Note: To set the bleed bottom offset, document bleed uniform size must be false.
   * @type {Mixed}
   */
  documentBleedBottomOffset: undefined,
  
  /*
   * The amount to offset the inside or left slug. Note: To set the slug inside or left offset, document slug uniform size must be false.
   * @type {Mixed}
   */
  slugInsideOrLeftOffset: undefined,
  
  /*
   * The amount to offset the top slug.
   * @type {Mixed}
   */
  slugTopOffset: undefined,
  
  /*
   * The amount to offset the outside or right slug. Note: To set the slug right or outside offset, document slug uniform size must be false.
   * @type {Mixed}
   */
  slugRightOrOutsideOffset: undefined,
  
  /*
   * The amount to offset the bottom slug. Note: To set the slug bottom offset, document slug uniform size must be false.
   * @type {Mixed}
   */
  slugBottomOffset: undefined,
  
  /*
   * If true, the document A-master has primary text frames when a new document is created.
   * @type {Boolean}
   */
  createPrimaryTextFrame: undefined,
  
  /*
   * The starting page number for a document. This is the same as the starting page number for the first section of a document. Default value is 1.
   * @type {Number}
   */
  startPageNumber: undefined,
  
  /*
   * The intent for a document.
   * @type {DocumentIntentOptions}
   */
  intent: undefined,
  
  /*
   * If true, uses the document bleed top offset value for bleed offset measurements on all sides of the document. The default setting is true.
   * @type {Boolean}
   */
  documentBleedUniformSize: undefined,
  
  /*
   * If true, uses the slug top offset value for slug measurements on all sides of the document. The default value is false.
   * @type {Boolean}
   */
  documentSlugUniformSize: undefined,
  
  /*
   * The size of the page.
   * @type {String}
   */
  pageSize: undefined,
  
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
   * Deletes the DocumentPreset.
   */
  remove: function() {
  },
  
  /*
   * Duplicates the DocumentPreset.
   * @returns {DocumentPreset}
   */
  duplicate: function() {
    return new DocumentPreset();
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
   * Generates a string which, if executed, will return the DocumentPreset.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {DocumentPreset}
   */
  getElements: function() {
    return new DocumentPreset();
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
