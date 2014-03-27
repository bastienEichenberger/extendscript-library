/*
 * The document raster effects settings.
 */
var RasterEffectOptions = {
  /*
   * The color model for the rasterization.
   * @type {RasterizationColorModel}
   */
  colorModel: undefined,
  
  /*
   * The rasterization resolution in dots-per-inch (dpi)
   * @type {Number}
   */
  resolution: undefined,
  
  /*
   * Should the resulting image use transparency.
   * @type {Boolean}
   */
  transparency: undefined,
  
  /*
   * Should the resulting image be antialiased.
   * @type {Boolean}
   */
  antiAliasing: undefined,
  
  /*
   * Should a clipping mask be created for the resulting image.
   * @type {Boolean}
   */
  clippingMask: undefined,
  
  /*
   * Whether to convert all spot colors to process colors in the resulting image.
   * @type {Boolean}
   */
  convertSpotColors: undefined,
  
  /*
   * The amount of white space (in points) to be added around the object during rasterization.
   * @type {Number}
   */
  padding: undefined,
  
};
