/*
 * Excel import preferences.
 */
var ExcelImportPreference = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the ExcelImportPreference (a Application).
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
   * If true, convert straight quotes and apostrophes in the imported text to typographic quotation marks and apostrophes.
   * @type {Boolean}
   */
  useTypographersQuotes: undefined,
  
  /*
   * If true, preserves inline graphics.
   * @type {Boolean}
   */
  preserveGraphics: undefined,
  
  /*
   * The stored custom or personal view(s) to import with the file.
   * @type {String}
   */
  viewName: undefined,
  
  /*
   * The worksheet to import.
   * @type {String}
   */
  sheetName: undefined,
  
  /*
   * The worksheet's index. For information, see sheet name.
   * @type {Number}
   */
  sheetIndex: undefined,
  
  /*
   * The range of cells to import. Note: Use a colon (:) to separate the start and end cell names in the range.
   * @type {String}
   */
  rangeName: undefined,
  
  /*
   * The cell alignment for the imported document.
   * @type {AlignmentStyleOptions}
   */
  alignmentStyle: undefined,
  
  /*
   * The number of decimal places to include. Note: Valid only when alignment style is decimal.
   * @type {Number}
   */
  decimalPlaces: undefined,
  
  /*
   * If true, shows hidden cells.
   * @type {Boolean}
   */
  showHiddenCells: undefined,
  
  /*
   * The import error code. (Key: 0=Success; 1=Empty Sheet; 2=Invalid sheet; 3=Invalid range; 4=Invalid View; 5=Misc. Error)
   * @type {Number}
   */
  errorCode: undefined,
  
  /*
   * The format for imported spreadsheets.
   * @type {TableFormattingOptions}
   */
  tableFormatting: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the ExcelImportPreference.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {ExcelImportPreference}
   */
  getElements: function() {
    return new ExcelImportPreference();
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
