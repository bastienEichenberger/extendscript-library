/*
 * The type of dither.
 */
var Dither = {
  /*
   * No dither is used.
   * @type {int}
   */
  NONE: undefined,
  
  /*
   * Diffuses dither effects in random patterns across adjacent pixels.
   * @type {int}
   */
  DIFFUSION: undefined,
  
  /*
   * Applies a halftone-like square pattern.
   * @type {int}
   */
  PATTERN: undefined,
  
  /*
   * Applies a random pattern but without diffusing the pattern across adjacent pixels; prevents the appearance of seams.
   * @type {int}
   */
  NOISE: undefined,
  
};
