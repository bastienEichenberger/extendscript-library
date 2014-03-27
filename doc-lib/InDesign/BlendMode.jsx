/*
 * Blend mode options.
 */
var BlendMode = {
  /*
   * Colors the object with the blend color, without interaction with the base color.
   * @type {Number}
   */
  NORMAL: undefined,
  
  /*
   * Multiplies the base color by the blend color, resulting in a darker color. Note: Multiplying with black produces black; multiplying with white leaves the color unchanged.
   * @type {Number}
   */
  MULTIPLY: undefined,
  
  /*
   * Multiplies the inverse of the blend and base colors, resulting in a lighter color. Note: Screening with white produces white; screening with black leaves the color unchanged.
   * @type {Number}
   */
  SCREEN: undefined,
  
  /*
   * Multiplies or screens the colors, depending on the base color; patterns or colors overlay the existing artwork, preserving base color highlights and shadows while mixing in the blend color to reflect the lightness or darkness of the original color.
   * @type {Number}
   */
  OVERLAY: undefined,
  
  /*
   * For blend colors lighter than 50% gray, lightens the artwork as if it were dodged; for blend colors darker than 50% gray, darkens the artwork as if it were burned. Note: Painting with pure black or white produces a distinctly darker or lighter area, but does not result in pure black or white.
   * @type {Number}
   */
  SOFT_LIGHT: undefined,
  
  /*
   * For blend colors lighter than 50% gray, lightens the artwork as if it were screened; for blend colors darker than 50% gray, darkens the artwork as if it were multiplied. Note: Painting with pure black or white results in pure black or white.
   * @type {Number}
   */
  HARD_LIGHT: undefined,
  
  /*
   * Brightens the base color to reflect the blend color. Note: Blending with pure black produces no change.
   * @type {Number}
   */
  COLOR_DODGE: undefined,
  
  /*
   * Darkens the base color to reflect the blend color. Note: Blending with white produces no change.
   * @type {Number}
   */
  COLOR_BURN: undefined,
  
  /*
   * Selects the darker of the base or blend colors as the resulting color; replaces areas lighter than the blend color but does not change areas darker than the blend color.
   * @type {Number}
   */
  DARKEN: undefined,
  
  /*
   * Selects the lighter of the base or blend colors as the resulting color; replaces areas darker than the blend color but does not change areas lighter than the blend color
   * @type {Number}
   */
  LIGHTEN: undefined,
  
  /*
   * Subtracts either the blend color from the base color or vice versa, depending on which has the greater brightness value. Note: Blending with white inverts the base color values; blending with black produces no change.
   * @type {Number}
   */
  DIFFERENCE: undefined,
  
  /*
   * Creates an effect similar to--but lower in contrast than--the difference blend mode. Note: Blending with white inverts the base color values; blending with black produces no change
   * @type {Number}
   */
  EXCLUSION: undefined,
  
  /*
   * Creates a color with the luminance and saturation of the base color and the hue of the blend color.
   * @type {Number}
   */
  HUE: undefined,
  
  /*
   * Creates a color with the luminance and hue of the base color and the saturation of the blend color. Note: Does not change areas with no saturation (0% gray).
   * @type {Number}
   */
  SATURATION: undefined,
  
  /*
   * Creates a color with the luminance of the base color and the hue and saturation of the blend color. Note: Preserves gray levels and is useful for coloring monochrome images or tinting color images. Creates the inverse effect of the luminosity blend mode.
   * @type {Number}
   */
  COLOR: undefined,
  
  /*
   * Creates a color with the hue and saturation of the base color and the luminance of the blend color. Note: Creates the inverse effect of the color blend mode.
   * @type {Number}
   */
  LUMINOSITY: undefined,
  
};
