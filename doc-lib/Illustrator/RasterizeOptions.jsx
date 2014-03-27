/*
 * Options which may be supplied when rasterizing the artwork.
 */
var RasterizeOptions = {
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
   * The type of antialiasing method.
   * @type {AntiAliasingMethod}
   */
  antiAliasingMethod: undefined,
  
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
   * Should all text be converted to outlines before rasterization.
   * @type {Boolean}
   */
  convertTextToOutlines: undefined,
  
  /*
   * Should the resulting image incorporates the layer attributes (such as opacity and blend mode)
   * @type {Boolean}
   */
  includeLayers: undefined,
  
  /*
   * Should rasterize against a black background instead of white.
   * @type {Boolean}
   */
  backgroundBlack: undefined,
  
  /*
   * The amount of white space (in points) to be added around the object during rasterization.
   * @type {Number}
   */
  padding: undefined,
  
};
