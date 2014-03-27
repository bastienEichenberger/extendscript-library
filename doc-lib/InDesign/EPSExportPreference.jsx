/*
 * EPS export preferences.
 */
var EPSExportPreference = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the EPSExportPreference (a Application).
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
   * The height of the bleed area at the bottom of the page. Note: Valid only when use document bleed to print is true.
   * @type {Mixed}
   */
  bleedBottom: undefined,
  
  /*
   * The width of the bleed area at the inside of the page. Note: Valid only when use document bleed to print is true.
   * @type {Mixed}
   */
  bleedInside: undefined,
  
  /*
   * The width of the bleed area at the outside of the page. Note: Valid only when use document bleed to print is true.
   * @type {Mixed}
   */
  bleedOutside: undefined,
  
  /*
   * The height of the bleed area at the top of the page. Note: Valid only when use document bleed to print is true.
   * @type {Mixed}
   */
  bleedTop: undefined,
  
  /*
   * The color space for representing color in the exported EPS.
   * @type {EPSColorSpace}
   */
  epsColor: undefined,
  
  /*
   * The format in which to send image data to the printer.
   * @type {DataFormat}
   */
  dataFormat: undefined,
  
  /*
   * The transparency flattener preset to use.
   * @type {FlattenerPreset}
   */
  appliedFlattenerPreset: undefined,
  
  /*
   * Controls how fonts are embedded in the exported EPS.
   * @type {FontEmbedding}
   */
  fontEmbedding: undefined,
  
  /*
   * If true, ignores flattener spread overrides.
   * @type {Boolean}
   */
  ignoreSpreadOverrides: undefined,
  
  /*
   * If true, replaces bitmap images with OPI links.
   * @type {Boolean}
   */
  omitBitmaps: undefined,
  
  /*
   * If true, replaces EPS images with OPI links.
   * @type {Boolean}
   */
  omitEPS: undefined,
  
  /*
   * If true, replaces PDF images with OPI links.
   * @type {Boolean}
   */
  omitPDF: undefined,
  
  /*
   * If true, prints graphics that are either OPI comments stored in imported EPS files or linked using OPI comments. For information on linking files using OPI comments, see omit EPS, omit PDF, or omit bitmaps.
   * @type {Boolean}
   */
  opiImageReplacement: undefined,
  
  /*
   * The pages to print, specified either as an enumeration or a string. To specify a range, separate page numbers in the string with a hyphen (-). To specify separate pages, separate page numbers in the string with a comma (,). Can return: PageRange enumerator or String.
   * @type {Mixed}
   */
  pageRange: undefined,
  
  /*
   * The file format of the preview image saved with the exported EPS file.
   * @type {PreviewTypes}
   */
  preview: undefined,
  
  /*
   * The PostScript level of the printer.
   * @type {PostScriptLevels}
   */
  postscriptLevel: undefined,
  
  /*
   * If true, exports facing pages as a single page that has the width of the spread. If false, exports spread pages as separate pages.
   * @type {Boolean}
   */
  epsSpreads: undefined,
  
  /*
   * The image data to export to the EPS document.
   * @type {EPSImageData}
   */
  imageData: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the EPSExportPreference.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {EPSExportPreference}
   */
  getElements: function() {
    return new EPSExportPreference();
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
