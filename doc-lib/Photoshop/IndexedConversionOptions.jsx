/*
 * Options for converting an RGB image to an indexed color model.
 */
var IndexedConversionOptions = {
  /*
   * The type of palette.
   * @type {Palette}
   */
  palette: undefined,
  
  /*
   * The number of colors in the palette. Not valid for all palette types.
   * @type {int}
   */
  colors: undefined,
  
  /*
   * The type of colors to force into the color palette.
   * @type {ForcedColors}
   */
  forced: undefined,
  
  /*
   * If true, preserves transparent areas of the image during conversion to GIF format.
   * @type {Boolean}
   */
  transparency: undefined,
  
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
   * If true, protects colors in the image that contain entries in the color table from being dithered. Valid only when 'dither' = diffusion.
   * @type {Boolean}
   */
  preserveExactColors: undefined,
  
  /*
   * The color to use to fill anti-aliased edges adjacent to transparent areas of the image. When transparency = false, the matte color is applied to transparent areas.
   * @type {MatteType}
   */
  matte: undefined,
  
};
