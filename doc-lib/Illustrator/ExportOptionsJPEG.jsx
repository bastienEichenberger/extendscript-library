/*
 * Options which may be supplied when exporting a document as a JPEG file.
 */
var ExportOptionsJPEG = {
  /*
   * Quality of resulting image.
   * @type {Int32}
   */
  qualitySetting: undefined,
  
  /*
   * Should the image be optimized for web viewing.
   * @type {Boolean}
   */
  optimization: undefined,
  
  /*
   * Blur the resulting image this much.
   * @type {Number}
   */
  blurAmount: undefined,
  
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
