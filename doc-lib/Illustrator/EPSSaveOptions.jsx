/*
 * Options which may be supplied when saving a document as an Illustrator EPS file.
 */
var EPSSaveOptions = {
  /*
   * What Illustrator file format version to create.
   * @type {Compatibility}
   */
  compatibility: undefined,
  
  /*
   * EPS preview format.
   * @type {EPSPreview}
   */
  preview: undefined,
  
  /*
   * Are linked image files to be included in the saved document.
   * @type {Boolean}
   */
  embedLinkedFiles: undefined,
  
  /*
   * Include thumbnail image of the EPS artwork.
   * @type {Boolean}
   */
  includeDocumentThumbnails: undefined,
  
  /*
   * Embed all fonts used by the document in the saved file (version 7 or later)
   * @type {Boolean}
   */
  embedAllFonts: undefined,
  
  /*
   * Use CMYK PostScript.
   * @type {Boolean}
   */
  cmykPostScript: undefined,
  
  /*
   * PostScript level to use (level 1 valid for file format version 8 or older)
   * @type {EPSPostScriptLevelEnum}
   */
  postScript: undefined,
  
  /*
   * How should transparency be flattened for older file format versions (pre-version 9)
   * @type {OutputFlattening}
   */
  flattenOutput: undefined,
  
  /*
   * Create a raster item of the gradient or gradient mesh so that PostScript Level 2 printers can print the object.
   * @type {Boolean}
   */
  compatibleGradientPrinting: undefined,
  
  /*
   * undefined
   * @type {PDFOverprint}
   */
  overprint: undefined,
  
  /*
   * All the artboards or range of the artboards will be saved.
   * @type {Boolean}
   */
  saveMultipleArtboards: undefined,
  
  /*
   * If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string.
   * @type {String}
   */
  artboardRange: undefined,
  
};
