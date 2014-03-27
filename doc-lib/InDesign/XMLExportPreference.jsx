/*
 * XML export preferences.
 */
var XMLExportPreference = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the XMLExportPreference (a Application or Document).
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
   * If true, displays exported XML content in a specified viewer.
   * @type {Boolean}
   */
  viewAfterExport: undefined,
  
  /*
   * The preferred browser for viewing XML. Can return: File or NothingEnum enumerator.
   * @type {Mixed}
   */
  preferredBrowser: undefined,
  
  /*
   * If true, exports XML content from the selected XML element. If false, exports the entire document.
   * @type {Boolean}
   */
  exportFromSelected: undefined,
  
  /*
   * The file encoding type for exporting XML content.
   * @type {XMLFileEncoding}
   */
  fileEncoding: undefined,
  
  /*
   * If true, includes Ruby text in the exported XML content.
   * @type {Boolean}
   */
  ruby: undefined,
  
  /*
   * If true, excludes the DTD from the exported XML content.
   * @type {Boolean}
   */
  excludeDtd: undefined,
  
  /*
   * If true, copies original images to the images subfolder.
   * @type {Boolean}
   */
  copyOriginalImages: undefined,
  
  /*
   * If true, copies optimized images to the images subfolder.
   * @type {Boolean}
   */
  copyOptimizedImages: undefined,
  
  /*
   * If true, copies formatted images to the images subfolder.
   * @type {Boolean}
   */
  copyFormattedImages: undefined,
  
  /*
   * The file format to use for converted images. Note: Valid only when copy optimized images and/or copy formatted images is true.
   * @type {ImageConversion}
   */
  imageConversion: undefined,
  
  /*
   * The color palette for GIF conversion. Note: Not valid when image conversion is JPEG.
   * @type {GIFOptionsPalette}
   */
  gifOptionsPalette: undefined,
  
  /*
   * If true, generates interlaced GIFs. Note: Not valid  when image conversion is JPEG.
   * @type {Boolean}
   */
  gifOptionsInterlaced: undefined,
  
  /*
   * The quality of converted JPEG images. Note: Not valid when image conversion is GIF.
   * @type {JPEGOptionsQuality}
   */
  jpegOptionsQuality: undefined,
  
  /*
   * The formatting method for converted JPEG images. Note: Not valid  when image conversion is GIF.
   * @type {JPEGOptionsFormat}
   */
  jpegOptionsFormat: undefined,
  
  /*
   * If true, transforms the XML using an XSLT file.
   * @type {Boolean}
   */
  allowTransform: undefined,
  
  /*
   * The name of the XSLT file. Note: Valid when allow transform is true. Can return: File or XMLTransformFile enumerator.
   * @type {Mixed}
   */
  transformFilename: undefined,
  
  /*
   * If true, replaces special characters with character references.
   * @type {Boolean}
   */
  characterReferences: undefined,
  
  /*
   * The export format for untagged tables in tagged stories.
   * @type {XMLExportUntaggedTablesFormat}
   */
  exportUntaggedTablesFormat: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the XMLExportPreference.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {XMLExportPreference}
   */
  getElements: function() {
    return new XMLExportPreference();
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
