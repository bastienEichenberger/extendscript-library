/*
 * Word RTF import preferences.
 */
var WordRTFImportPreference = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the WordRTFImportPreference (a Application).
   * @type {Application}
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
   * If true, maintains character formatting in text whose formatting has been removed. Note: Valid when remove formatting is true.
   * @type {Boolean}
   */
  preserveLocalOverrides: undefined,
  
  /*
   * If true, imports unused styles.
   * @type {Boolean}
   */
  importUnusedStyles: undefined,
  
  /*
   * The option for handling style name conflicts.
   * @type {ResolveStyleClash}
   */
  resolveCharacterStyleClash: undefined,
  
  /*
   * The option for resolving conflicts that arise when paragraph styles have matching names.
   * @type {ResolveStyleClash}
   */
  resolveParagraphStyleClash: undefined,
  
  /*
   * If true, preserves inline graphics.
   * @type {Boolean}
   */
  preserveGraphics: undefined,
  
  /*
   * If true, preserves comments and edits in the imported file.
   * @type {Boolean}
   */
  preserveTrackChanges: undefined,
  
  /*
   * If true, imports footnotes.
   * @type {Boolean}
   */
  importFootnotes: undefined,
  
  /*
   * If true, imports endnotes.
   * @type {Boolean}
   */
  importEndnotes: undefined,
  
  /*
   * If true, convert straight quotes and apostrophes in the imported text to typographic quotation marks and apostrophes.
   * @type {Boolean}
   */
  useTypographersQuotes: undefined,
  
  /*
   * The option for handling manual page breaks.
   * @type {ConvertPageBreaks}
   */
  convertPageBreaks: undefined,
  
  /*
   * If true, imports the index.
   * @type {Boolean}
   */
  importIndex: undefined,
  
  /*
   * If true, imports the table of contents.
   * @type {Boolean}
   */
  importTOC: undefined,
  
  /*
   * If true, removes text and table formatting.
   * @type {Boolean}
   */
  removeFormatting: undefined,
  
  /*
   * The policy for converting tables whose formatting has been removed. Note: Valid when remove formatting is true.
   * @type {ConvertTablesOptions}
   */
  convertTablesTo: undefined,
  
  /*
   * If true, bullets and numbers will be converted to embedded characters during import. If false, bullets and numbers will be rendered by InDesign.
   * @type {Boolean}
   */
  convertBulletsAndNumbersToText: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the WordRTFImportPreference.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {WordRTFImportPreference}
   */
  getElements: function() {
    return new WordRTFImportPreference();
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
