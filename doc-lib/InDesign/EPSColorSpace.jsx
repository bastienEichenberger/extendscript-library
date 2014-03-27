/*
 * Color space options for representing color in the exported EPS.
 */
var EPSColorSpace = {
  /*
   * Represents all color values using the RGB color space. Best suited for documents that will be viewed on-screen.
   * @type {Number}
   */
  RGB: undefined,
  
  /*
   * Creates a separable file by representing all color values using the gamut of CYMK process color inks.
   * @type {Number}
   */
  CMYK: undefined,
  
  /*
   * Converts all color values to high-quality black-and-white images. Gray levels of the converted objects represent the luminosity of the original objects.
   * @type {Number}
   */
  GRAY: undefined,
  
  /*
   * Leaves each image in its original color space.
   * @type {Number}
   */
  UNCHANGED_COLOR_SPACE: undefined,
  
  /*
   * Uses PostScript color management (includes profiles).
   * @type {Number}
   */
  POSTSCRIPT_COLOR_MANAGEMENT: undefined,
  
};
