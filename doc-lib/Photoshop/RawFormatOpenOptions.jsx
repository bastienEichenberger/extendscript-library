/*
 * Options that can be specified when opening a document in RAW format.
 */
var RawFormatOpenOptions = {
  /*
   * The image height (in pixels)
   * @type {int}
   */
  height: undefined,
  
  /*
   * The image width (in pixels)
   * @type {int}
   */
  width: undefined,
  
  /*
   * The number of channels in the image. Valid only when 'bits per channel' = 16. Range: 1 to 56.
   * @type {int}
   */
  channelNumber: undefined,
  
  /*
   * If true, color values are stored sequentially.
   * @type {Boolean}
   */
  interleaveChannels: undefined,
  
  /*
   * The number of bits for each channel. Valid values: 8 or 16.
   * @type {int}
   */
  bitsPerChannel: undefined,
  
  /*
   * The order in which bytes will be read. Valid only when 'bits per channel' = 16.
   * @type {ByteOrder}
   */
  byteOrder: undefined,
  
  /*
   * The number of bytes of information that will appear in the file before actual image information begins; that is, the number of zeroes inserted at the beginning of the file as placeholders. Range: 0 to 1919999.
   * @type {int}
   */
  headerSize: undefined,
  
  /*
   * If true, the header is retained when saving.
   * @type {Boolean}
   */
  retainHeader: undefined,
  
};
