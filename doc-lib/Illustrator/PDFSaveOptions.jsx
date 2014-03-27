/*
 * Options which may be supplied when saving a document as a PDF file.
 */
var PDFSaveOptions = {
  /*
   * The max string length is 255 bytes. Name of PDF preset to use.
   * @type {String}
   */
  pDFPreset: undefined,
  
  /*
   * The version of the Acrobat file format to create.
   * @type {PDFCompatibility}
   */
  compatibility: undefined,
  
  /*
   * This control includes the None option for when the user is not complying with any PDF standard.
   * @type {PDFXStandard}
   */
  pDFXStandard: undefined,
  
  /*
   * This displays the description from the selected preset.
   * @type {String}
   */
  pDFXStandardDescription: undefined,
  
  /*
   * Preserve Illustrator editing capabilities when saving the document.
   * @type {Boolean}
   */
  preserveEditability: undefined,
  
  /*
   * Generate thumbnails for the saved document.
   * @type {Boolean}
   */
  generateThumbnails: undefined,
  
  /*
   * Should the PDF document be optimized for fast web viewing.
   * @type {Boolean}
   */
  optimization: undefined,
  
  /*
   * View PDF after saving.
   * @type {Boolean}
   */
  viewAfterSaving: undefined,
  
  /*
   * How should color bitmap images be compressed.
   * @type {CompressionQuality}
   */
  colorCompression: undefined,
  
  /*
   * Tile size when compressing with JPEG2000.
   * @type {Int32}
   */
  colorTileSize: undefined,
  
  /*
   * How should color bitmap images be resampled.
   * @type {DownsampleMethod}
   */
  colorDownsamplingMethod: undefined,
  
  /*
   * If zero, no downsampling, otherwise, the resolution to downsample color bitmap images to.
   * @type {Number}
   */
  colorDownsampling: undefined,
  
  /*
   * Downsample if the image's resolution is above this value.
   * @type {Number}
   */
  colorDownsamplingImageThreshold: undefined,
  
  /*
   * How should grayscale bitmap images be compressed.
   * @type {CompressionQuality}
   */
  grayscaleCompression: undefined,
  
  /*
   * Tile size when compressing with JPEG2000.
   * @type {Int32}
   */
  grayscaleTileSize: undefined,
  
  /*
   * How should grayscale bitmap images be resampled.
   * @type {DownsampleMethod}
   */
  grayscaleDownsamplingMethod: undefined,
  
  /*
   * If zero, no downsampling, otherwise, the resolution to downsample grayscale images to.
   * @type {Number}
   */
  grayscaleDownsampling: undefined,
  
  /*
   * Downsample if the image's resolution is above this value.
   * @type {Number}
   */
  grayscaleDownsamplingImageThreshold: undefined,
  
  /*
   * How should monochrome bitmap images be compressed.
   * @type {MonochromeCompression}
   */
  monochromeCompression: undefined,
  
  /*
   * How should monochrome bitmap images be resampled.
   * @type {DownsampleMethod}
   */
  monochromeDownsamplingMethod: undefined,
  
  /*
   * If zero, no downsampling, otherwise, the resolution to downsample images to.
   * @type {Number}
   */
  monochromeDownsampling: undefined,
  
  /*
   * Downsample if the image's resolution is above this value.
   * @type {Number}
   */
  monochromeDownsamplingImageThreshold: undefined,
  
  /*
   * Should line art and text be compressed?
   * @type {Boolean}
   */
  compressArt: undefined,
  
  /*
   * Draw trim marks.
   * @type {Boolean}
   */
  trimMarks: undefined,
  
  /*
   * Draw registration marks.
   * @type {Boolean}
   */
  registrationMarks: undefined,
  
  /*
   * Draw color bars.
   * @type {Boolean}
   */
  colorBars: undefined,
  
  /*
   * Draw page information.
   * @type {Boolean}
   */
  pageInformation: undefined,
  
  /*
   * The page marks style.
   * @type {PageMarksTypes}
   */
  pageMarksType: undefined,
  
  /*
   * Trim mark weight.
   * @type {PDFTrimMarkWeight}
   */
  trimMarkWeight: undefined,
  
  /*
   * Custom offset (in points) for using the custom paper.
   * @type {Number}
   */
  offset: undefined,
  
  /*
   * The bleed offset rect.
   * @type {Rectangle}
   */
  bleedOffsetRect: undefined,
  
  /*
   * Link 4 bleed values.
   * @type {Boolean}
   */
  bleedLink: undefined,
  
  /*
   * PDF color conversion policy. Three choices are available: (1)No Color Conversion (2) Repurpose (3) Convert to Destination.
   * @type {ColorConversion}
   */
  colorConversionID: undefined,
  
  /*
   * When NoColorConversion is specified for Color Conversion, NoColorDestination is set.
   * @type {ColorDestination}
   */
  colorDestinationID: undefined,
  
  /*
   * If CMS is off, Don't Include Profiles is set.
   * @type {ColorProfile}
   */
  colorProfileID: undefined,
  
  /*
   * When CMS is on, the output intent profile is the same profile selected for Destination in the Color group box.
   * @type {String}
   */
  outputIntentProfile: undefined,
  
  /*
   * This is an optional comment which, if present, is added to the PDF file and describes the intended printing condition.
   * @type {String}
   */
  outputCondition: undefined,
  
  /*
   * If selected for Output Intent Profile Name, you can set the name of a registered printing condition.
   * @type {String}
   */
  outputConditionID: undefined,
  
  /*
   * URL to the site where the specified output condition is registered. No validation is performed on the URL.
   * @type {String}
   */
  registryName: undefined,
  
  /*
   * This indicates if manual trapping has been prepared in the document.
   * @type {Boolean}
   */
  trapped: undefined,
  
  /*
   * Include a subset of fonts when less than this percentage of characters are used.
   * @type {Number}
   */
  fontSubsetThreshold: undefined,
  
  /*
   * The transparency flattener preset name.
   * @type {String}
   */
  flattenerPreset: undefined,
  
  /*
   * The printing flattener options.
   * @type {PrintFlattenerOptions}
   */
  flattenerOptions: undefined,
  
  /*
   * Flattening printer resolution.
   * @type {Number}
   */
  printerResolution: undefined,
  
  /*
   * Create acrobat layers from top-level layers - acrobat 6 only option.
   * @type {Boolean}
   */
  acrobatLayers: undefined,
  
  /*
   * Require a password to open the document.
   * @type {Boolean}
   */
  requireDocumentPassword: undefined,
  
  /*
   * A password string to open the document.
   * @type {String}
   */
  documentPassword: undefined,
  
  /*
   * Use a password to restrict editing security settings.
   * @type {Boolean}
   */
  requirePermissionPassword: undefined,
  
  /*
   * A password string to restrict editing security settings.
   * @type {String}
   */
  permissionPassword: undefined,
  
  /*
   * PDF security printing permission.
   * @type {PDFPrintAllowedEnum}
   */
  pDFAllowPrinting: undefined,
  
  /*
   * PDF security changes allowed.
   * @type {PDFChangesAllowedEnum}
   */
  pDFChangesAllowed: undefined,
  
  /*
   * Enable copying of text 128-bit.
   * @type {Boolean}
   */
  enableCopy: undefined,
  
  /*
   * Enable accessing 128-bit.
   * @type {Boolean}
   */
  enableAccess: undefined,
  
  /*
   * Enable plaintext metadata 128-bit - available only for acrobat 6.
   * @type {Boolean}
   */
  enablePlainText: undefined,
  
  /*
   * Enable copying and accessing 40-bit.
   * @type {Boolean}
   */
  enableCopyAccess: undefined,
  
  /*
   * Considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string.
   * @type {String}
   */
  artboardRange: undefined,
  
};
