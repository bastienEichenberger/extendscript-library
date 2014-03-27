/*
 * The method to use to resample the image.
 */
var ResampleMethod = {
  /*
   * Does not resample.
   * @type {int}
   */
  NONE: undefined,
  
  /*
   * Chooses a pixel in the center of the sample area and replaces the entire area with that pixel color. Same as subsampling.
   * @type {int}
   */
  NEARESTNEIGHBOR: undefined,
  
  /*
   * Averages the pixels in a sample area and replaces the entire area with the average pixel color at the specified resolution. Same as average downsampling.
   * @type {int}
   */
  BILINEAR: undefined,
  
  /*
   * Uses a weighted average to determine pixel color, which usually yields better results than the simple averageing method of downsampling.
   * @type {int}
   */
  BICUBIC: undefined,
  
  /*
   * A good method for reducing the size of an image based on Bicubic interpolation with enhanced sharpening. Maintains the detail in a resampled image.
   * @type {int}
   */
  BICUBICSHARPER: undefined,
  
  /*
   * A good method for enlarging images based on Bicubic interpolation but designed to produce smoother results.
   * @type {int}
   */
  BICUBICSMOOTHER: undefined,
  
};
