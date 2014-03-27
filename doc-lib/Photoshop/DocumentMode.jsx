/*
 * The document&apos;s color mode.
 */
var DocumentMode = {
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
   * Bitmap, which uses one of two color values (black or white) to represent the pixels in an image.
   * @type {int}
   */
  BITMAP: undefined,
  
  /*
   * Indexed color, in which the number of colors in the image is at most 256, the standard number of colors supported by the GIF and PNG-8 formats and many multimedia applications.
   * @type {int}
   */
  INDEXEDCOLOR: undefined,
  
  /*
   * Image with multiple color channels.
   * @type {int}
   */
  MULTICHANNEL: undefined,
  
  /*
   * Duotone mode, which creates monotone, duotone (two-color), tritone (three-color), and quadtone (four-color) grayscale images using one to four custom inks.
   * @type {int}
   */
  DUOTONE: undefined,
  
};
