/*
 * Options for saving a document in GIF format.
 */
var GIFSaveOptions = {
  /*
   * The number of colors in palette. Not valid for all palette types.
   * @type {int}
   */
  colors: undefined,
  
  /*
   * The type of dither.
   * @type {Dither}
   */
  dither: undefined,
  
  /*
   * The amount of dither. Valid only when 'dither type' is diffusion. Range: 1 to 100.
   * @type {int}
   */
  ditherAmount: undefined,
  
  /*
   * The type of colors to force into the color palette.
   * @type {ForcedColors}
   */
  forced: undefined,
  
  /*
   * If true, rows are interlaced.
   * @type {Boolean}
   */
  interlaced: undefined,
  
  /*
   * The color to use to fill anti-aliased edges adjacent to transparent areas of the image. Default: white.
   * @type {MatteType}
   */
  matte: undefined,
  
  /*
   * The type of palette to use.
   * @type {Palette}
   */
  palette: undefined,
  
  /*
   * If true, protects colors in the image that contain entries in the color table from being dithered. Valid only when 'dither' = diffusion.
   * @type {Boolean}
   */
  preserveExactColors: undefined,
  
  /*
   * If true, preserves transparent ares of the image during GIF conversion.
   * @type {Boolean}
   */
  transparency: undefined,
  
};
