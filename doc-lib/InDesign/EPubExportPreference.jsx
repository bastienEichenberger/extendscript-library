/*
 * EPub export preferences.
 */
var EPubExportPreference = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the EPubExportPreference (a Book or Document).
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
   * If true, output document metadata into epub.
   * @type {Boolean}
   */
  includeDocumentMetadata: undefined,
  
  /*
   * The epub publisher.
   * @type {String}
   */
  epubPublisher: undefined,
  
  /*
   * The epub unique identifier, like ISBN.
   * @type {String}
   */
  id: undefined,
  
  /*
   * The export order.
   * @type {ExportOrder}
   */
  exportOrder: undefined,
  
  /*
   * The epub cover option.
   * @type {EpubCover}
   */
  epubCover: undefined,
  
  /*
   * The epub cover image file path.
   * @type {String}
   */
  coverImageFile: undefined,
  
  /*
   * The bullet export option.
   * @type {BulletListExportOption}
   */
  bulletExportOption: undefined,
  
  /*
   * The numbered list export option.
   * @type {NumberedListExportOption}
   */
  numberedListExportOption: undefined,
  
  /*
   * Left margin of the epub.
   * @type {Number}
   */
  leftMargin: undefined,
  
  /*
   * Right margin of the epub.
   * @type {Number}
   */
  rightMargin: undefined,
  
  /*
   * Top margin of the epub.
   * @type {Number}
   */
  topMargin: undefined,
  
  /*
   * Bottom margin of the epub.
   * @type {Number}
   */
  bottomMargin: undefined,
  
  /*
   * If true, open docuemnt in viewer after export.
   * @type {Boolean}
   */
  viewDocumentAfterExport: undefined,
  
  /*
   * The export resolution
   * @type {ImageResolution}
   */
  imageExportResolution: undefined,
  
  /*
   * Allows user to select the image size option for conversion
   * @type {ImageSizeOption}
   */
  customImageSizeOption: undefined,
  
  /*
   * If true, format image based on layout appearence.
   * @type {Boolean}
   */
  preserveLayoutAppearence: undefined,
  
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
   * apply image alignment to anchored object settings.
   * @type {Boolean}
   */
  applyImageAlignmentToAnchoredObjectSettings: undefined,
  
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
   * The PNG compression level.
   * @type {Number}
   */
  level: undefined,
  
  /*
   * ignore object level image conversion settings.
   * @type {Boolean}
   */
  ignoreObjectConversionSettings: undefined,
  
  /*
   * The name of TOC style to generate epub TOC.
   * @type {String}
   */
  tocStyleName: undefined,
  
  /*
   * If  true, break InDesign document into smaller piece when generating epub.
   * @type {Boolean}
   */
  breakDocument: undefined,
  
  /*
   * The name of paragraph style to break InDesign document.
   * @type {String}
   */
  paragraphStyleName: undefined,
  
  /*
   * If  true, output footnote immediately after its paragraph.
   * @type {Boolean}
   */
  footnoteFollowParagraph: undefined,
  
  /*
   * If  true, strip soft return.
   * @type {Boolean}
   */
  stripSoftReturn: undefined,
  
  /*
   * If true, output local style override.
   * @type {Boolean}
   */
  preserveLocalOverride: undefined,
  
  /*
   * If true, embed font in epub.
   * @type {Boolean}
   */
  embedFont: undefined,
  
  /*
   * The file path of external cascading style sheets.
   * @type {String}
   */
  externalStyleSheets: undefined,
  
  /*
   * The file path of external javascripts.
   * @type {String}
   */
  javascripts: undefined,
  
  /*
   * The version of EPUB.
   * @type {EpubVersion}
   */
  version: undefined,
  
  /*
   * If true, InDesign will generate cascade style sheet.
   * @type {Boolean}
   */
  generateCascadeStyleSheet: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the EPubExportPreference.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {EPubExportPreference}
   */
  getElements: function() {
    return new EPubExportPreference();
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
