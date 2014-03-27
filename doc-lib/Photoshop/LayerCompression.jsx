/*
 * The layer compression type.
 */
var LayerCompression = {
  /*
   * Run Length Encoding, which is lossless.
   * @type {int}
   */
  RLE: undefined,
  
  /*
   * Zip compression, which is lossless and most effective for images that contain large areas of single color.
   * @type {int}
   */
  ZIP: undefined,
  
};
