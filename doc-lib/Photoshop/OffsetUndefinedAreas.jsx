/*
 * The method to use to fill the empty space left by offsetting a an image or selection.
 */
var OffsetUndefinedAreas = {
  /*
   * For background layers, sets pixels to the background layer color. For nonbackground layers, sets the pixels to transparent.
   * @type {int}
   */
  SETTOBACKGROUND: undefined,
  
  /*
   * Fills the undefined space with content from the opposite edge of the image.
   * @type {int}
   */
  WRAPAROUND: undefined,
  
  /*
   * Extends the colors of pixels along the edge of the image in the direction specified. Banding may result if the edge pixels are different colors.
   * @type {int}
   */
  REPEATEDGEPIXELS: undefined,
  
};
