/*
 * Color space options for representing color in the exported PNG.
 */
var PNGColorSpaceEnum = {
  /*
   * Represents all color values using the RGB color space. Best suited for documents that will be viewed on-screen.
   * @type {Number}
   */
  RGB: undefined,
  
  /*
   * Converts all color values to high-quality black-and-white images. Gray levels of the converted objects represent the luminosity of the original objects.
   * @type {Number}
   */
  GRAY: undefined,
  
};
