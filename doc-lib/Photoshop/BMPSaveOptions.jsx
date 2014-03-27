/*
 * Options for saving a document in BMP format.
 */
var BMPSaveOptions = {
  /*
   * If true, the alpha channels are saved.
   * @type {Boolean}
   */
  alphaChannels: undefined,
  
  /*
   * The target operating system.
   * @type {OperatingSystem}
   */
  osType: undefined,
  
  /*
   * The number of bits per sample.
   * @type {BMPDepthType}
   */
  depth: undefined,
  
  /*
   * If true, RLE compression is used.
   * @type {Boolean}
   */
  rleCompression: undefined,
  
  /*
   * If true, the image is written from bottom to top.
   * @type {Boolean}
   */
  flipRowOrder: undefined,
  
};
