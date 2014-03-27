/*
 * Options for exporting Save For Web files.
 */
var ExportOptionsSaveForWeb = {
  /*
   * The file format to use. Save For Web supports only Compuserve GIF, JPEG, PNG-8, PNG-24, and BMP formats.
   * @type {SaveDocumentType}
   */
  format: undefined,
  
  /*
   * If true, uses 8 bits. If false, uses 24 bits. Valid only when 'format' = PNG.
   * @type {Boolean}
   */
  PNG8: undefined,
  
  /*
   * The amount of lossiness allowed.
   * @type {int}
   */
  lossy: undefined,
  
  /*
   * The color reduction algorithm.
   * @type {ColorReductionType}
   */
  colorReduction: undefined,
  
  /*
   * The number of colors in the palette.
   * @type {int}
   */
  colors: undefined,
  
  /*
   * The type of dither.
   * @type {Dither}
   */
  dither: undefined,
  
  /*
   * The amount of dither. Valid only when 'dither' = diffusion.
   * @type {int}
   */
  ditherAmount: undefined,
  
  /*
   * If true, transparent areas of the image are included in the saved image.
   * @type {Boolean}
   */
  transparency: undefined,
  
  /*
   * The transparency dither algorithm.
   * @type {Dither}
   */
  transparencyDither: undefined,
  
  /*
   * The amount of transparency dither. Valid only when 'transparency' = true.
   * @type {int}
   */
  transparencyAmount: undefined,
  
  /*
   * If true, the image downloads in multiple passes, progressive.
   * @type {Boolean}
   */
  interlaced: undefined,
  
  /*
   * The colors to blend transparent pixels against.
   * @type {RGBColor}
   */
  matteColor: undefined,
  
  /*
   * The tolerance amount within which to snap close colors to web palette colors.
   * @type {int}
   */
  webSnap: undefined,
  
  /*
   * If true, creates smaller but less compatible files.
   * @type {Boolean}
   */
  optimized: undefined,
  
  /*
   * The quality of the produced image (as a percentage). Range: 0 to 100.
   * @type {int}
   */
  quality: undefined,
  
  /*
   * If true, includes the document's embedded profile.
   * @type {Boolean}
   */
  includeProfile: undefined,
  
  /*
   * The amount of blur to apply to the image to reduce artifacts.
   * @type {Number}
   */
  blur: undefined,
  
};
