/*
 * The type of pixels to trim around an image.
 */
var TrimType = {
  /*
   * Trims away transparency at the edges of the image, leaving the smallest image containing nontransparent pixels.
   * @type {int}
   */
  TRANSPARENT: undefined,
  
  /*
   * Removes from the image an area the color of the upper left pixel.
   * @type {int}
   */
  TOPLEFT: undefined,
  
  /*
   * Removes from the image an area the color of the lower right pixel.
   * @type {int}
   */
  BOTTOMRIGHT: undefined,
  
};
