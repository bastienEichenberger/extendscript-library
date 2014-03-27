/*
 * A book.
 */
var Book = {
  /*
   * Print preference settings.
   * @type {PrintPreference}
   */
  printPreferences: undefined,
  
  /*
   * The name of the Book.
   * @type {String}
   */
  name: undefined,
  
  /*
   * The full path to the Book, including the name of the Book.
   * @type {File}
   */
  fullName: undefined,
  
  /*
   * The full path to the file.
   * @type {File}
   */
  filePath: undefined,
  
  /*
   * If true, the Book has been modified since it was last saved.
   * @type {Boolean}
   */
  modified: undefined,
  
  /*
   * If true, the Book has been saved since it was created.
   * @type {Boolean}
   */
  saved: undefined,
  
  /*
   * Preflight book option settings.
   * @type {PreflightBookOption}
   */
  preflightBookOptions: undefined,
  
  /*
   * EPub export preference settings.
   * @type {EPubExportPreference}
   */
  epubExportPreferences: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the Book (a Application).
   * @type {Application}
   */
  parent: undefined,
  
  /*
   * The index of the Book within its containing object.
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
   * A collection of preferences objects.
   * @type {Preferences}
   */
  preferences: undefined,
  
  /*
   * A collection of book content objects.
   * @type {BookContents}
   */
  bookContents: undefined,
  
  /*
   * Current style source document. Can return: Document or BookContent.
   * @type {Mixed}
   */
  styleSourceDocument: undefined,
  
  /*
   * Page numbering options for book content objects within the book.
   * @type {RepaginateOption}
   */
  repaginationOption: undefined,
  
  /*
   * If true, inserts a blank page as necessary to fill in page number gaps caused by the odd or even specification set in the repagination option.
   * @type {Boolean}
   */
  insertBlankPage: undefined,
  
  /*
   * If true, automatically updates page numbers when pages in book content files are added, deleted, or rearranged.
   * @type {Boolean}
   */
  automaticPagination: undefined,
  
  /*
   * If true, automatically converts the book content object during repagination and synchronization.
   * @type {Boolean}
   */
  automaticDocumentConversion: undefined,
  
  /*
   * If true, merges identically named layers when exporting to PDF.
   * @type {Boolean}
   */
  mergeIdenticalLayers: undefined,
  
  /*
   * A property that can be set to any string.
   * @type {String}
   */
  label: undefined,
  
  /*
   * If true, synchronize table of content styles.
   * @type {Boolean}
   */
  synchronizeTableOfContentStyle: undefined,
  
  /*
   * If true, synchronize text variables.
   * @type {Boolean}
   */
  synchronizeTextVariable: undefined,
  
  /*
   * If true, synchronize table styles.
   * @type {Boolean}
   */
  synchronizeTableStyle: undefined,
  
  /*
   * If true, synchronize paragraph styles.
   * @type {Boolean}
   */
  synchronizeParagraphStyle: undefined,
  
  /*
   * If true, synchronize character styles.
   * @type {Boolean}
   */
  synchronizeCharacterStyle: undefined,
  
  /*
   * If true, synchronize trap styles.
   * @type {Boolean}
   */
  synchronizeTrapStyle: undefined,
  
  /*
   * If true, synchronize master pages.
   * @type {Boolean}
   */
  synchronizeMasterPage: undefined,
  
  /*
   * If true, synchronize object styles.
   * @type {Boolean}
   */
  synchronizeObjectStyle: undefined,
  
  /*
   * If true, synchronize swatches.
   * @type {Boolean}
   */
  synchronizeSwatch: undefined,
  
  /*
   * If true, synchronize cell styles.
   * @type {Boolean}
   */
  synchronizeCellStyle: undefined,
  
  /*
   * If true, synchronize bullets and numbering.
   * @type {Boolean}
   */
  synchronizeBulletNumberingList: undefined,
  
  /*
   * If true, synchronize conditional text.
   * @type {Boolean}
   */
  synchronizeConditionalText: undefined,
  
  /*
   * How to match styles with same name while synchronizing a book.
   * @type {SmartMatchOptions}
   */
  smartMatchStyleGroups: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Prints the Book(s).
 *
   * @param {Boolean} [printDialog] Whether to invoke the print dialog 
   * @param {Mixed} [using] Printer preset to use. Can accept: PrinterPresetTypes enumerator or PrinterPreset. 
   */
  print: function(printDialog, using) {
  },
  
  /*
   * Close the Book
 *
   * @param {SaveOptions} [saving] Whether to save changes before closing the Book 
   * @param {File} [savingIn] The file in which to save the Book 
   * @param {String} [versionComments] The comment for this version 
   * @param {Boolean} [forceSave] Forcibly save a version 
   */
  close: function(saving, savingIn, versionComments, forceSave) {
  },
  
  /*
   * Saves the book.
 *
   * @param {File} [to] The file path. Note: Required only if the book has not been previously saved. If the book has previously been saved, specifying a path saves a copy and closes the original book. 
   * @param {String} [versionComments] The comment for this version. 
   * @param {Boolean} [forceSave] If true, forcibly saves a version. 
   */
  save: function(to, versionComments, forceSave) {
  },
  
  /*
   * Exports the book to a file.
 *
   * @param {Mixed} format The export format, specified as an enumeration value or as an extension that appears in the Save as type or Format menu in the Export dialog. Can accept: ExportFormat enumerator or String.
   * @param {File} [to] The file to which to export the book. 
   * @param {Boolean} [showingOptions] Used to specify if the PDF Export Options Dialog needs to be shown or not 
   * @param {PDFExportPreset} [using] Used to specify the presets for the export which can be the object of the preset type, enumeration for existing presets or user defined presets, or a string naming the preset to be used, but in case Showing Options is true, the preset specified in the Export Dialog will over ride this parameter 
   * @param {BookContent} [whichDocuments] Used to specify a list of book content references, from the current book, where the list may contain duplicate entries and if the list is not specified then the entire book contents shall be exported 
   * @param {String} [versionComments] The comment for this version. 
   * @param {Boolean} [forceSave] If true, forcibly saves a version. 
   */
  exportFile: function(format, to, showingOptions, using, whichDocuments, versionComments, forceSave) {
  },
  
  /*
   * Synchronizes the entire book to the style source document.
   */
  synchronize: function() {
  },
  
  /*
   * Repaginates the book.
   */
  repaginate: function() {
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
   * Updates chapter numbers and paragraph numbers throughout the book.
   */
  updateChapterAndParagraphNumbers: function() {
  },
  
  /*
   * Update all numbers (e.g. Page numbers, chapter numbers and paragraph numbers) throughout the book.
   */
  updateAllNumbers: function() {
  },
  
  /*
   * Updates the cross references in the entire book.
   */
  updateAllCrossReferences: function() {
  },
  
  /*
   * Packages the document.
 *
   * @param {File} to The folder, alias, or path in which to place the packaged files.
   * @param {Boolean} copyingFonts If true, copies fonts used in the document to the package folder.
   * @param {Boolean} copyingLinkedGraphics If true, copies linked graphics files to the package folder.
   * @param {Boolean} copyingProfiles If true, copies color profiles to the package folder.
   * @param {Boolean} updatingGraphics If true, updates graphics links to the package folder.
   * @param {Boolean} includingHiddenLayers If true, copies fonts and links from hidden layers to the package.
   * @param {Boolean} ignorePreflightErrors If true, ignores preflight errors and proceeds with the packaging. If false, cancels the packaging when errors exist.
   * @param {Boolean} creatingReport If true, creates a package report that includes printing instructions, print settings, lists of fonts, links and required inks, and other information.
   * @param {String} [versionComments] The comments for the version. 
   * @param {Boolean} [forceSave] If true, forcibly saves a version. 
   * @returns {Boolean}
   */
  packageForPrint: function(to, copyingFonts, copyingLinkedGraphics, copyingProfiles, updatingGraphics, includingHiddenLayers, ignorePreflightErrors, creatingReport, versionComments, forceSave) {
    return new Boolean();
  },
  
  /*
   * Preflight a book and optionally save the resulting report.
 *
   * @param {File} [to] The preflight report to save to. 
   * @param {Boolean} [autoOpen] If true, automatically open the report after creation. 
   */
  preflight: function(to, autoOpen) {
  },
  
  /*
   * Generates a string which, if executed, will return the Book.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {Book}
   */
  getElements: function() {
    return new Book();
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
