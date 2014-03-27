/*
 * Options for sending image data to the printer or file.
 */
var ImageDataTypes = {
  /*
   * Sends full-resolution data.
   * @type {Number}
   */
  ALL_IMAGE_DATA: undefined,
  
  /*
   * Sends just enough data to print graphics at the best possible resolution for the output device.
   * @type {Number}
   */
  OPTIMIZED_SUBSAMPLING: undefined,
  
  /*
   * Sends screen-resolution versions (72 dpi) of placed bitmap images.
   * @type {Number}
   */
  PROXY_IMAGE_DATA: undefined,
  
  /*
   * Prints graphics frames with crossbars in place of graphics.
   * @type {Number}
   */
  NONE: undefined,
  
};
