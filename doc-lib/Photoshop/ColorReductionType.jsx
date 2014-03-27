/*
 * The color reduction algorithm.
 */
var ColorReductionType = {
  /*
   * Gives priority to colors for which the human eye has greater sensitivity.
   * @type {int}
   */
  PERCEPTUAL: undefined,
  
  /*
   * Gives priority to broad areas of color and the preservation of web colors; usually produces images with the greatest color integrity.
   * @type {int}
   */
  SELECTIVE: undefined,
  
  /*
   * Samples color from the spectrum appearing most commonly in the image.
   * @type {int}
   */
  ADAPTIVE: undefined,
  
  /*
   * Uses the standard 216-color color table common to Windows and Mac OS 8-bit (256-color or web-safe palette); ensures that no browser dither is applied when the image is displayed using 8-bit color.
   * @type {int}
   */
  RESTRICTIVE: undefined,
  
  /*
   * Uses a color palette that is created or modified by the user. If you open an existing GIF or PNG-8 file, it will have a custom color palette.
   * @type {int}
   */
  CUSTOM: undefined,
  
  /*
   * Uses a set palette of colors.
   * @type {int}
   */
  BLACKWHITE: undefined,
  
  /*
   * Uses a set palette of colors.
   * @type {int}
   */
  GRAYSCALE: undefined,
  
  /*
   * Uses a set palette of colors.
   * @type {int}
   */
  MACINTOSH: undefined,
  
  /*
   * Uses a set palette of colors.
   * @type {int}
   */
  WINDOWS: undefined,
  
};
