/*
 * SWF export settings for the application object.
 */
var SWFExportPreference = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the SWFExportPreference (a Application).
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
   * Flatten transparency when exporting.
   * @type {Boolean}
   */
  flattenTransparency: undefined,
  
  /*
   * The dynamic media handling options.
   * @type {DynamicMediaHandlingOptions}
   */
  dynamicMediaHandling: undefined,
  
  /*
   * The name of the page transition to use for all pages.
   * @type {PageTransitionOverrideOptions}
   */
  pageTransitionOverride: undefined,
  
  /*
   * SWF background setting
   * @type {SWFBackgroundOptions}
   */
  swfBackground: undefined,
  
  /*
   * The frame rate in frames per second.
   * @type {Number}
   */
  frameRate: undefined,
  
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
   * Flag indicates whether to generate HTML.
   * @type {Boolean}
   */
  generateHTML: undefined,
  
  /*
   * The text export policy.
   * @type {DynamicDocumentsTextExportPolicy}
   */
  textExportPolicy: undefined,
  
  /*
   * Flag indicates whether to include interactive page curl when export to SWF.
   * @type {Boolean}
   */
  includeInteractivePageCurl: undefined,
  
  /*
   * The SWF raster compression options.
   * @type {RasterCompressionOptions}
   */
  rasterCompression: undefined,
  
  /*
   * The JPEG quality options.
   * @type {DynamicDocumentsJPEGQualityOptions}
   */
  jpegQualityOptions: undefined,
  
  /*
   * The SWF curve quality.
   * @type {SWFCurveQualityValue}
   */
  curveQuality: undefined,
  
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
   * Flag indicates whether to allow to use network access when export to SWF.
   * @type {Boolean}
   */
  useNetworkAccess: undefined,
  
  /*
   * Flag indicates to whether to view the SWF after exporting.
   * @type {Boolean}
   */
  viewSWFAfterExporting: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the SWFExportPreference.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {SWFExportPreference}
   */
  getElements: function() {
    return new SWFExportPreference();
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
