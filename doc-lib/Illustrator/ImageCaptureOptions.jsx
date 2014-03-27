/*
 * Options which may be supplied when capturing a portion of the artwork as an 24 bit PNG file.
 */
var ImageCaptureOptions = {
  /*
   * The resolution of the captured image file.
   * @type {Number}
   */
  resolution: undefined,
  
  /*
   * Should the resulting image use transparency.
   * @type {Boolean}
   */
  transparency: undefined,
  
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
   * Should the resulting image be antialiased.
   * @type {Boolean}
   */
  antiAliasing: undefined,
  
};
