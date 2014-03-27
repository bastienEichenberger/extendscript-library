/*
 * Color space options for representing color in the exported JPEG.
 */
var JpegColorSpaceEnum = {
  /*
   * Represents all color values using the RGB color space. Best suited for documents that will be viewed on-screen.
   * @type {Number}
   */
  RGB: undefined,
  
  /*
   * Represents all color values using the CMYK color space.
   * @type {Number}
   */
  CMYK: undefined,
  
  /*
   * Converts all color values to high-quality black-and-white images. Gray levels of the converted objects represent the luminosity of the original objects.
   * @type {Number}
   */
  GRAY: undefined,
  
};
