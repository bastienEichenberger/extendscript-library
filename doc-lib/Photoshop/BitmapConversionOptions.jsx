/*
 * Options for changing the document mode to Bitmap.
 */
var BitmapConversionOptions = {
  /*
   * The output resolution (in pixels per inch)
   * @type {Number}
   */
  resolution: undefined,
  
  /*
   * The conversion method.
   * @type {BitmapConversionType}
   */
  method: undefined,
  
  /*
   * The name of the pattern to use. Valid only when 'method' = custom.
   * @type {String}
   */
  patternName: undefined,
  
  /*
   * The number of printer dots per inch. Valid only when 'method' = halftone screen. Range: 1.0 to 999.99.
   * @type {Number}
   */
  frequency: undefined,
  
  /*
   * The angle (in degrees) at which to orient individual dots. Valid only when 'method' = halftone screen. Range: -180 to 180.
   * @type {Number}
   */
  angle: undefined,
  
  /*
   * The dot shape. Valid only when 'method' = halftone screen.
   * @type {BitmapHalfToneType}
   */
  shape: undefined,
  
};
