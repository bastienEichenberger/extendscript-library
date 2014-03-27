/*
 * A TOC style definition.
 */
var TOCStyle = {
  /*
   * The unique ID of the TOCStyle.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the TOCStyle (a Document).
   * @type {Document}
   */
  parent: undefined,
  
  /*
   * The index of the TOCStyle within its containing object.
   * @type {Number}
   */
  index: undefined,
  
  /*
   * A collection TOC style entries.
   * @type {TOCStyleEntries}
   */
  tocStyleEntries: undefined,
  
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
   * The paragraph style applied to the TOC title.
   * @type {ParagraphStyle}
   */
  titleStyle: undefined,
  
  /*
   * The TOC title.
   * @type {String}
   */
  title: undefined,
  
  /*
   * The name of the TOCStyle.
   * @type {String}
   */
  name: undefined,
  
  /*
   * If true, the lowest-level TOC entries are placed on the same line as the previous entry.
   * @type {Boolean}
   */
  runIn: undefined,
  
  /*
   * If true, the TOC includes entries from text on hidden layers.
   * @type {Boolean}
   */
  includeHidden: undefined,
  
  /*
   * If true, includes the entire book in the TOC. If false, includes only the TOC entries in the current document. Note: Valid when the current document is part of a book.
   * @type {Boolean}
   */
  includeBookDocuments: undefined,
  
  /*
   * If true, creates bookmarks for TOC entries.
   * @type {Boolean}
   */
  createBookmarks: undefined,
  
  /*
   * The table of contents story direction.
   * @type {HorizontalOrVertical}
   */
  setStoryDirection: undefined,
  
  /*
   * The format for importing numbered paragraphs into the TOC.
   * @type {NumberedParagraphsOptions}
   */
  numberedParagraphs: undefined,
  
  /*
   * If true, make text anchor in source paragraph.
   * @type {Boolean}
   */
  makeAnchor: undefined,
  
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
   * Duplicates the TOCStyle.
   * @returns {TOCStyle}
   */
  duplicate: function() {
    return new TOCStyle();
  },
  
  /*
   * Deletes the TOCStyle.
   */
  remove: function() {
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
   * Generates a string which, if executed, will return the TOCStyle.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {TOCStyle}
   */
  getElements: function() {
    return new TOCStyle();
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
