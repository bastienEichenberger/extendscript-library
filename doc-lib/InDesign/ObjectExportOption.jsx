/*
 * Export options for the object
 */
var ObjectExportOption = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the ObjectExportOption (a ObjectStyle, SplineItem, Polygon, GraphicLine, Rectangle, Oval, Group or TextFrame).
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
   * The source type of alternate text
   * @type {SourceType}
   */
  altTextSourceType: undefined,
  
  /*
   * The source type of actual text
   * @type {SourceType}
   */
  actualTextSourceType: undefined,
  
  /*
   * The custom alternate text entered by the user
   * @type {String}
   */
  customAltText: undefined,
  
  /*
   * The custom actual text entered by the user
   * @type {String}
   */
  customActualText: undefined,
  
  /*
   * The metadata property to use as source of alternate text. Can return: Ordered array containing namespacePrefix:String, propertyPath:String.
   * @type {Mixed}
   */
  altMetadataProperty: undefined,
  
  /*
   * The metadata property to use as source of actual text. Can return: Ordered array containing namespacePrefix:String, propertyPath:String.
   * @type {Mixed}
   */
  actualMetadataProperty: undefined,
  
  /*
   * The tag type of page item
   * @type {TagType}
   */
  applyTagType: undefined,
  
  /*
   * If true, custom image conversion is enabled for object
   * @type {Boolean}
   */
  customImageConversion: undefined,
  
  /*
   * Allows user to select the image format for conversion
   * @type {ImageFormat}
   */
  imageConversionType: undefined,
  
  /*
   * Allows user to select the image size option for conversion
   * @type {ImageSizeOption}
   */
  customImageSizeOption: undefined,
  
  /*
   * The export resolution
   * @type {ImageResolution}
   */
  imageExportResolution: undefined,
  
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
   * Alignment applied to images
   * @type {ImageAlignmentType}
   */
  imageAlignment: undefined,
  
  /*
   * Space Before applied to images
   * @type {Number}
   */
  imageSpaceBefore: undefined,
  
  /*
   * Space After applied to images
   * @type {Number}
   */
  imageSpaceAfter: undefined,
  
  /*
   * If true, image page break settings will be used in objects
   * @type {Boolean}
   */
  useImagePageBreak: undefined,
  
  /*
   * Image page break settings to be used with objects
   * @type {ImagePageBreakType}
   */
  imagePageBreak: undefined,
  
  /*
   * If true, custom layout is enabled for object
   * @type {Boolean}
   */
  customLayout: undefined,
  
  /*
   * Custom Layout settings to be used for object
   * @type {CustomLayoutTypeEnum}
   */
  customLayoutType: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Provides the alternate text for the object
   * @returns {String}
   */
  altText: function() {
    return new String();
  },
  
  /*
   * Provides the actual text for the object
   * @returns {String}
   */
  actualText: function() {
    return new String();
  },
  
  /*
   * Generates a string which, if executed, will return the ObjectExportOption.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {ObjectExportOption}
   */
  getElements: function() {
    return new ObjectExportOption();
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
