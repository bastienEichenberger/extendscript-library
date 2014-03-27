/*
 * XFL export preferences.
 */
var XFLExportPreference = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the XFLExportPreference (a Application).
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
   * The dynamic media handling options.
   * @type {DynamicMediaHandlingOptions}
   */
  dynamicMediaHandling: undefined,
  
  /*
   * If true, discretionary hyphenation points are inserted when TLF text is used.
   * @type {Boolean}
   */
  insertHyphens: undefined,
  
  /*
   * The fitting method to use.
   * @type {FitMethodSettings}
   */
  fitMethod: undefined,
  
  /*
   * The options for fitting to predefined dimension.
   * @type {FitDimension}
   */
  fitOption: undefined,
  
  /*
   * The size fits to given scale percentage.
   * @type {Number}
   */
  fitScale: undefined,
  
  /*
   * The size fits to given width and height.
   * @type {Number}
   */
  fitWidthAndHeight: undefined,
  
  /*
   * The pages to print, specified either as an enumeration or a string. To specify a range, separate page numbers in the string with a hyphen (-). To specify separate pages, separate page numbers in the string with a comma (,). Can return: PageRange enumerator or String.
   * @type {Mixed}
   */
  pageRange: undefined,
  
  /*
   * If true, each spread in the exported document is combined into a single page that has spread's original width.
   * @type {Boolean}
   */
  dynamicDocumentExportReaderSpreads: undefined,
  
  /*
   * If true, all the pages in the exported document will be rasterized.
   * @type {Boolean}
   */
  rasterizePages: undefined,
  
  /*
   * Flatten transparency when exporting.
   * @type {Boolean}
   */
  flattenTransparency: undefined,
  
  /*
   * The text export policy.
   * @type {DynamicDocumentsTextExportPolicy}
   */
  textExportPolicy: undefined,
  
  /*
   * The raster format options.
   * @type {XFLRasterizeFormatOptions}
   */
  rasterFormat: undefined,
  
  /*
   * The JPEG quality options.
   * @type {DynamicDocumentsJPEGQualityOptions}
   */
  jpegQualityOptions: undefined,
  
  /*
   * The raster resolution.
   * @type {Number}
   */
  rasterResolution: undefined,
  
  /*
   * The resampling type.
   * @type {Sampling}
   */
  resamplingType: undefined,
  
  /*
   * The resampling threshold.
   * @type {Number}
   */
  resamplingThreshold: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the XFLExportPreference.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {XFLExportPreference}
   */
  getElements: function() {
    return new XFLExportPreference();
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
