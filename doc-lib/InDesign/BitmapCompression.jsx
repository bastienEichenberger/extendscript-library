/*
 * The type of compression for bitmap images.
 */
var BitmapCompression = {
  /*
   * Uses no compression.
   * @type {Number}
   */
  NONE: undefined,
  
  /*
   * Uses JPEG compression and automatically determines the best quality type. Valid only when acrobat compatibility is acrobat 6 or higher.
   * @type {Number}
   */
  AUTO_COMPRESSION: undefined,
  
  /*
   * Uses JPEG compression.
   * @type {Number}
   */
  JPEG: undefined,
  
  /*
   * Uses ZIP compression.
   * @type {Number}
   */
  ZIP: undefined,
  
  /*
   * Uses JPEG 2000 compression. Valid only when acrobat compatibility is acrobat 6 or higher.
   * @type {Number}
   */
  JPEG_2000: undefined,
  
  /*
   * The Automatic JPEG 2000 compression method.
   * @type {Number}
   */
  AUTOMATIC_JPEG_2000: undefined,
  
};
