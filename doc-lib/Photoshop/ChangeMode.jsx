/*
 * The destination color mode. Note: Color images must be changed to Grayscale mode before you can change them to Bitmap mode.
 */
var ChangeMode = {
  /*
   * Grayscale.
   * @type {int}
   */
  GRAYSCALE: undefined,
  
  /*
   * RGB.
   * @type {int}
   */
  RGB: undefined,
  
  /*
   * CMYK.
   * @type {int}
   */
  CMYK: undefined,
  
  /*
   * Lab.
   * @type {int}
   */
  LAB: undefined,
  
  /*
   * Bitmap. Note: Color images must be changed to Grayscale mode before you can change them to Bitmap mode.
   * @type {int}
   */
  BITMAP: undefined,
  
  /*
   * Indexed color, in which the number of colors in the image is reduced to at most 256, the standard number of colors supported by the GIF and PNG-8 formats and many multimedia applications.
   * @type {int}
   */
  INDEXEDCOLOR: undefined,
  
  /*
   * Image with multiple color channels.
   * @type {int}
   */
  MULTICHANNEL: undefined,
  
};
