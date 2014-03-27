/*
 * JPEG export preferences.
 */
var JPEGExportPreference = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the JPEGExportPreference (a Application).
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
   * If true, exports each spread as a single JPEG file. If false, exports facing pages as separate files and appends sequential numbers to each file name.
   * @type {Boolean}
   */
  exportingSpread: undefined,
  
  /*
   * The compression quality.
   * @type {JPEGOptionsQuality}
   */
  jpegQuality: undefined,
  
  /*
   * The page(s) to export, specified as a page number or an array of page numbers. Note: Valid when JPEG export range is not all.
   * @type {String}
   */
  pageString: undefined,
  
  /*
   * The rendering style.
   * @type {JPEGOptionsFormat}
   */
  jpegRenderingStyle: undefined,
  
  /*
   * The page range to export.
   * @type {ExportRangeOrAllPages}
   */
  jpegExportRange: undefined,
  
  /*
   * True to embed the color profile, false otherwise.
   * @type {Boolean}
   */
  embedColorProfile: undefined,
  
  /*
   * One of RGB, CMYK or Gray
   * @type {JpegColorSpaceEnum}
   */
  jpegColorSpace: undefined,
  
  /*
   * If true, uses the document's bleed settings in the exported JPEG.
   * @type {Boolean}
   */
  useDocumentBleeds: undefined,
  
  /*
   * If true, use anti-aliasing for text and vectors during export.
   * @type {Boolean}
   */
  antiAlias: undefined,
  
  /*
   * If true, simulates the effects of overprinting spot and process colors in the same way they would occur when printing.
   * @type {Boolean}
   */
  simulateOverprint: undefined,
  
  /*
   * The export	resolution expressed as a real number instead of an integer. (Range: 1.0 to 2400.0)
   * @type {Number}
   */
  exportResolution: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the JPEGExportPreference.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {JPEGExportPreference}
   */
  getElements: function() {
    return new JPEGExportPreference();
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
