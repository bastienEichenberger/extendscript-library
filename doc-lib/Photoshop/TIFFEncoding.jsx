/*
 * The encoding to use when saving to TIFF format.
 */
var TIFFEncoding = {
  /*
   * No compression.
   * @type {int}
   */
  NONE: undefined,
  
  /*
   * LZW compression, which is lossless and most useful for images with large areas of single color.
   * @type {int}
   */
  TIFFLZW: undefined,
  
  /*
   * JPEG compression, which is lossy and recommended for continuous-tone images, such as photographs.
   * @type {int}
   */
  JPEG: undefined,
  
  /*
   * Zip compression, which is lossless and most effective for images that contain large areas of single color.
   * @type {int}
   */
  TIFFZIP: undefined,
  
};
