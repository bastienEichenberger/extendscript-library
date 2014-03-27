/*
 * The resampling method.
 */
var Sampling = {
  /*
   * Uses no resampling.
   * @type {Number}
   */
  NONE: undefined,
  
  /*
   * Averages the pixels in a sample area and replaces the entire area with the average pixel color.
   * @type {Number}
   */
  DOWNSAMPLE: undefined,
  
  /*
   * Chooses a pixel in the center of the sample area and replaces the entire area with that pixel color.
   * @type {Number}
   */
  SUBSAMPLE: undefined,
  
  /*
   * Uses a weighted average to determine pixel color.
   * @type {Number}
   */
  BICUBIC_DOWNSAMPLE: undefined,
  
};
