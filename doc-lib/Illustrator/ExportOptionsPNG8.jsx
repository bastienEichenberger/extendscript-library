/*
 * Options which may be supplied when exporting a document as an 8 bit PNG file.
 */
var ExportOptionsPNG8 = {
  /*
   * Number of colors in exported color table.
   * @type {Int32}
   */
  colorCount: undefined,
  
  /*
   * Method used to reduce the number of colors.
   * @type {ColorReductionMethod}
   */
  colorReduction: undefined,
  
  /*
   * Method used to dither colors.
   * @type {ColorDitherMethod}
   */
  colorDither: undefined,
  
  /*
   * How much should the colors be dithered.
   * @type {Int32}
   */
  ditherPercent: undefined,
  
  /*
   * How much should the color table be changed to match the web palette.
   * @type {Int32}
   */
  webSnap: undefined,
  
  /*
   * Should the resulting image use transparency.
   * @type {Boolean}
   */
  transparency: undefined,
  
  /*
   * Should the resulting image be interlaced.
   * @type {Boolean}
   */
  interlaced: undefined,
  
  /*
   * Should the artboard be matted with a color.
   * @type {Boolean}
   */
  matte: undefined,
  
  /*
   * The color to use when matting the artboard (default: white)
   * @type {RGBColor}
   */
  matteColor: undefined,
  
  /*
   * Horizontal scaling factor.
   * @type {Number}
   */
  horizontalScale: undefined,
  
  /*
   * Vertical scaling factor.
   * @type {Number}
   */
  verticalScale: undefined,
  
  /*
   * Should the resulting image be antialiased.
   * @type {Boolean}
   */
  antiAliasing: undefined,
  
  /*
   * Should the resulting image be clipped to the artboard.
   * @type {Boolean}
   */
  artBoardClipping: undefined,
  
  /*
   * Should the resulting image be saved as HTML.
   * @type {Boolean}
   */
  saveAsHTML: undefined,
  
};
