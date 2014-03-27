/*
 * Interactive PDF export settings for the application object.
 */
var InteractivePDFExportPreference = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the InteractivePDFExportPreference (a Application).
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
   * The pages to print, specified either as an enumeration or a string. To specify a range, separate page numbers in the string with a hyphen (-). To specify separate pages, separate page numbers in the string with a comma (,). Can return: PageRange enumerator or String.
   * @type {Mixed}
   */
  pageRange: undefined,
  
  /*
   * If true, each spread in the exported document is combined into a single page that has spread's original width.
   * @type {Boolean}
   */
  exportReaderSpreads: undefined,
  
  /*
   * If true, automatically opens the PDF file after exporting.
   * @type {Boolean}
   */
  viewPDF: undefined,
  
  /*
   * If true, generates thumbnail images for each page or spread.
   * @type {Boolean}
   */
  generateThumbnails: undefined,
  
  /*
   * If true, saves each layer as an Acrobat layer within the PDF document.
   * @type {Boolean}
   */
  exportLayers: undefined,
  
  /*
   * If true, creates a tagged PDF file. Note: If acrobat compatibility is acrobat 6 or higher, tags are visible only when the PDF is opened in Acrobat 6 or higher.
   * @type {Boolean}
   */
  includeStructure: undefined,
  
  /*
   * The export PDF magnification options.
   * @type {PdfMagnificationOptions}
   */
  pdfMagnification: undefined,
  
  /*
   * The export PDF page layout.
   * @type {PageLayoutOptions}
   */
  pdfPageLayout: undefined,
  
  /*
   * Open PDF in full screen mode.
   * @type {Boolean}
   */
  openInFullScreen: undefined,
  
  /*
   * Automatically flip pages in the exported PDF.
   * @type {Boolean}
   */
  flipPages: undefined,
  
  /*
   * The speed that the pages flip.
   * @type {Number}
   */
  flipPagesSpeed: undefined,
  
  /*
   * The name of the page transition to use for all pages.
   * @type {PageTransitionOverrideOptions}
   */
  pageTransitionOverride: undefined,
  
  /*
   * How to draw interactive elements.
   * @type {InteractivePDFInteractiveElementsOptions}
   */
  interactivePDFInteractiveElementsOption: undefined,
  
  /*
   * The PDF raster compression options.
   * @type {PDFRasterCompressionOptions}
   */
  pdfRasterCompression: undefined,
  
  /*
   * The PDF JPEG quality options.
   * @type {PDFJPEGQualityOptions}
   */
  pdfJPEGQuality: undefined,
  
  /*
   * The raster resolution. Can return: RasterResolutionOptions enumerator or Long Integer (72 - 300).
   * @type {Mixed}
   */
  rasterResolution: undefined,
  
  /*
   * Use tagged PDF structure for interactive elements tab order.
   * @type {Boolean}
   */
  usePDFStructureForTabOrder: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the InteractivePDFExportPreference.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {InteractivePDFExportPreference}
   */
  getElements: function() {
    return new InteractivePDFExportPreference();
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
