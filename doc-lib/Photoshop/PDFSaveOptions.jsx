/*
 * Options for saving a document in PDF format.
 */
var PDFSaveOptions = {
  /*
   * If true, the alpha channels are saved.
   * @type {Boolean}
   */
  alphaChannels: undefined,
  
  /*
   * If true, the layers are saved.
   * @type {Boolean}
   */
  layers: undefined,
  
  /*
   * If true, the annotations are saved.
   * @type {Boolean}
   */
  annotations: undefined,
  
  /*
   * If true, the spot colors are saved.
   * @type {Boolean}
   */
  spotColors: undefined,
  
  /*
   * If true, the color profile is embedded in the document.
   * @type {Boolean}
   */
  embedColorProfile: undefined,
  
  /*
   * Deprecated for Adobe Photoshop CS3.
   * @type {Boolean}
   */
  downgradeColorProfile: undefined,
  
  /*
   * Deprecated for Adobe Photoshop CS3.
   * @type {Boolean}
   */
  transparency: undefined,
  
  /*
   * Deprecated for Adobe Photoshop CS3.
   * @type {Boolean}
   */
  interpolation: undefined,
  
  /*
   * Deprecated for Adobe Photoshop CS3.
   * @type {Boolean}
   */
  vectorData: undefined,
  
  /*
   * Deprecated for Adobe Photoshop CS3.
   * @type {Boolean}
   */
  embedFonts: undefined,
  
  /*
   * Deprecated for Adobe Photoshop CS3.
   * @type {Boolean}
   */
  useOutlines: undefined,
  
  /*
   * The encoding method to use.
   * @type {PDFEncodingType}
   */
  encoding: undefined,
  
  /*
   * The quality of the produced image. Valid only for JPEG-encoded PDF documents. Range: 0 to 12.
   * @type {int}
   */
  jpegQuality: undefined,
  
  /*
   * The preset file to use for settings; overrides other settings.
   * @type {String}
   */
  presetFile: undefined,
  
  /*
   * The PDF standard to make the document compatible with.
   * @type {PDFStandard}
   */
  PDFStandard: undefined,
  
  /*
   * The PDF version to make the document compatible with.
   * @type {PDFCompatibility}
   */
  PDFCompatibility: undefined,
  
  /*
   * Description of the save options in use.
   * @type {String}
   */
  description: undefined,
  
  /*
   * If true, allows users to reopen the PDF in Photoshop with native Photoshop data intact.
   * @type {Boolean}
   */
  preserveEditing: undefined,
  
  /*
   * If true, includes a small preview image in Acrobat.
   * @type {Boolean}
   */
  embedThumbnail: undefined,
  
  /*
   * If true, improves performance of PDFs on Web servers.
   * @type {Boolean}
   */
  optimizeForWeb: undefined,
  
  /*
   * If true, opens the saved PDF in Acrobat.
   * @type {Boolean}
   */
  view: undefined,
  
  /*
   * The downsample method to use.
   * @type {PDFResample}
   */
  downSample: undefined,
  
  /*
   * The size (in pixels per inch) to downsample images to if they exceed the value specified for 'down sample size limit'.
   * @type {Number}
   */
  downSampleSize: undefined,
  
  /*
   * Limits downsampling or subsampling to images that exceed this value (in pixels per inch).
   * @type {Number}
   */
  downSampleSizeLimit: undefined,
  
  /*
   * The compression option. Valid only when encoding is JPEG2000.
   * @type {int}
   */
  tileSize: undefined,
  
  /*
   * If true, converts a 16-bit image to 8-bit for better compatibility with other applications.
   * @type {Boolean}
   */
  convertToEightBit: undefined,
  
  /*
   * If true, converts the color profile to the destination profile.
   * @type {Boolean}
   */
  colorConversion: undefined,
  
  /*
   * Describes the final RGB or CMYK output device, such as a monitor or press standard.
   * @type {String}
   */
  destinationProfile: undefined,
  
  /*
   * If true, shows which profiles to include.
   * @type {Boolean}
   */
  profileInclusionPolicy: undefined,
  
  /*
   * An optional comment field for inserting descriptions of the output condition. The text is stored in the PDF/X file.
   * @type {String}
   */
  outputCondition: undefined,
  
  /*
   * The identifier for the output condition.
   * @type {String}
   */
  outputConditionID: undefined,
  
  /*
   * The URL where the output condition is registered.
   * @type {String}
   */
  registryName: undefined,
  
};
