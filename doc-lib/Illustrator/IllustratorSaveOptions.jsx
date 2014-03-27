/*
 * Options which may be supplied when saving a document as an Illustrator file.
 */
var IllustratorSaveOptions = {
  /*
   * What Illustrator file format version to create.
   * @type {Compatibility}
   */
  compatibility: undefined,
  
  /*
   * Include a subset of fonts when less than this percentage of characters are used (version 9 or later)
   * @type {Number}
   */
  fontSubsetThreshold: undefined,
  
  /*
   * Embed the document's ICC profile in the saved file (version 9 or later)
   * @type {Boolean}
   */
  embedICCProfile: undefined,
  
  /*
   * Are linked image files to be included in the saved document (versions 7 or later)
   * @type {Boolean}
   */
  embedLinkedFiles: undefined,
  
  /*
   * How should transparency be flattened for older file format versions (pre-version 9)
   * @type {OutputFlattening}
   */
  flattenOutput: undefined,
  
  /*
   * Save as a PDF compatible file (version 10 or later)
   * @type {Boolean}
   */
  pdfCompatible: undefined,
  
  /*
   * Should the saved file be compressed (version 10 or later)
   * @type {Boolean}
   */
  compressed: undefined,
  
  /*
   * All the artboards or range of the artboards will be saved.
   * @type {Boolean}
   */
  saveMultipleArtboards: undefined,
  
  /*
   * If SaveMultipleArtboards is true ,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string.
   * @type {String}
   */
  artboardRange: undefined,
  
};
