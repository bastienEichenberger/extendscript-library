/*
 * Index options.
 */
var IndexOptions = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the IndexOptions (a Document or Application).
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
   * The title of the generated index.
   * @type {String}
   */
  title: undefined,
  
  /*
   * The paragraph style applied to the title of the generated index. Can also accept: String.
   * @type {ParagraphStyle}
   */
  titleStyle: undefined,
  
  /*
   * If true, replaces the content of the existing index. Note: Replaces only index content; does not update the index location or other index properties that may have been changed.
   * @type {Boolean}
   */
  replaceExistingIndex: undefined,
  
  /*
   * If true, includes topics and page references from all the documents in a book.
   * @type {Boolean}
   */
  includeBookDocuments: undefined,
  
  /*
   * If true, includes topics and page references on hidden layers.
   * @type {Boolean}
   */
  includeHiddenEntries: undefined,
  
  /*
   * The format for level 2 and lower index topics.
   * @type {IndexFormat}
   */
  indexFormat: undefined,
  
  /*
   * If true, displays the letters of the alphabet as index section headings.
   * @type {Boolean}
   */
  includeSectionHeadings: undefined,
  
  /*
   * If true, displays headings for sections with no index topics. Note: Valid only when include section headings is true.
   * @type {Boolean}
   */
  includeEmptyIndexSections: undefined,
  
  /*
   * The paragraph style applied to level 1 index topics.
   * @type {ParagraphStyle}
   */
  level1Style: undefined,
  
  /*
   * The paragraph style applied to level 2 index topics.
   * @type {ParagraphStyle}
   */
  level2Style: undefined,
  
  /*
   * The paragraph style applied to level 3 index topics.
   * @type {ParagraphStyle}
   */
  level3Style: undefined,
  
  /*
   * The paragraph style applied to level 4 index topics.
   * @type {ParagraphStyle}
   */
  level4Style: undefined,
  
  /*
   * The paragraph style applied to index section headings. Note: Valid when include section headings is true.
   * @type {ParagraphStyle}
   */
  sectionHeadingStyle: undefined,
  
  /*
   * The character style applied to page numbers in the index.
   * @type {CharacterStyle}
   */
  pageNumberStyle: undefined,
  
  /*
   * The character style applied to cross references.
   * @type {CharacterStyle}
   */
  crossReferenceStyle: undefined,
  
  /*
   * The character style applied to cross reference topics.
   * @type {CharacterStyle}
   */
  crossReferenceTopicStyle: undefined,
  
  /*
   * The character(s) inserted after each index topic.
   * @type {String}
   */
  followingTopicSeparator: undefined,
  
  /*
   * The character(s) inserted between index entries when runin-style index format is used for nested topics.
   * @type {String}
   */
  betweenEntriesSeparator: undefined,
  
  /*
   * The character(s) inserted between page numbers to indicate a page range.
   * @type {String}
   */
  pageRangeSeparator: undefined,
  
  /*
   * The character(s) inserted between separate page numbers, page numbers and page ranges, and series of page ranges.
   * @type {String}
   */
  betweenPageNumbersSeparator: undefined,
  
  /*
   * The character(s) inserted at the start of cross references.
   * @type {String}
   */
  beforeCrossReferenceSeparator: undefined,
  
  /*
   * The character(s) inserted at the end of each index entry.
   * @type {String}
   */
  entryEndSeparator: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the IndexOptions.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {IndexOptions}
   */
  getElements: function() {
    return new IndexOptions();
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
