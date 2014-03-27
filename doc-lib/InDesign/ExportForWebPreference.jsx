/*
 * Export for web preferences.
 */
var ExportForWebPreference = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the ExportForWebPreference (a Application or Document).
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
   * If true, copies formatted images to the images subfolder.
   * @type {Boolean}
   */
  copyFormattedImages: undefined,
  
  /*
   * If true, copies optimized images to the images subfolder.
   * @type {Boolean}
   */
  copyOptimizedImages: undefined,
  
  /*
   * If true, copies original images to the images subfolder.
   * @type {Boolean}
   */
  copyOriginalImages: undefined,
  
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
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the ExportForWebPreference.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {ExportForWebPreference}
   */
  getElements: function() {
    return new ExportForWebPreference();
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
