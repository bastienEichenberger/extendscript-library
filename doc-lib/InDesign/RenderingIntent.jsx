/*
 * Rendering intent options.
 */
var RenderingIntent = {
  /*
   * Uses the current color settings.
   * @type {Number}
   */
  USE_COLOR_SETTINGS: undefined,
  
  /*
   * Preserves the visual relationship between colors at the expense of actual color values; most suitable for photographic images with high percentages of out-of-gamut colors.
   * @type {Number}
   */
  PERCEPTUAL: undefined,
  
  /*
   * Produces vivid colors at the expense of color accuracy; most suitable for business graphics such as graphs or charts.
   * @type {Number}
   */
  SATURATION: undefined,
  
  /*
   * Compares the extreme highlight of the source color space to that of the desination color space and shifts all colors accordingly; out-of-gamut colors are shifted to the closest reproducible color in the destination color space.
   * @type {Number}
   */
  RELATIVE_COLORIMETRIC: undefined,
  
  /*
   * Maintains color accuracy at the expense of preserving relationships between colors; most suitable for previewing how paper color affects printed colors.
   * @type {Number}
   */
  ABSOLUTE_COLORIMETRIC: undefined,
  
};
