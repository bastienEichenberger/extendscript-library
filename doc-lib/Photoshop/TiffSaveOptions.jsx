/*
 * Options for saving a document in TIFF format.
 */
var TiffSaveOptions = {
  /*
   * If true, the alpha channels are saved.
   * @type {Boolean}
   */
  alphaChannels: undefined,
  
  /*
   * If true, the layers are saved.
   * @type {Boolean}
   */
  layers: undefined,
  
  /*
   * If true, the annotations are saved.
   * @type {Boolean}
   */
  annotations: undefined,
  
  /*
   * If true, spot colors are saved.
   * @type {Boolean}
   */
  spotColors: undefined,
  
  /*
   * If true, the color profile is embedded in the document.
   * @type {Boolean}
   */
  embedColorProfile: undefined,
  
  /*
   * The compression type.
   * @type {TIFFEncoding}
   */
  imageCompression: undefined,
  
  /*
   * The quality of the produced image, which is inversely proportionate to the amount of JPEG compression. Valid only for JPEG compressed TIFF documents. Range: 0 to 12.
   * @type {int}
   */
  jpegQuality: undefined,
  
  /*
   * The order in which the bytes will be read. Default: Mac OS when running in Mac OS, and IBM PC when running in Windows.
   * @type {ByteOrder}
   */
  byteOrder: undefined,
  
  /*
   * If true, preserves multi-resolution information.
   * @type {Boolean}
   */
  saveImagePyramid: undefined,
  
  /*
   * If true, saves the transparency as an additional alpha channel when the file is opened in another application.
   * @type {Boolean}
   */
  transparency: undefined,
  
  /*
   * The method of compression to use when saving layers (as opposed to saving composite data). Valid only when 'layers' = true.
   * @type {LayerCompression}
   */
  layerCompression: undefined,
  
  /*
   * If true, the channels in the image are interleaved.
   * @type {Boolean}
   */
  interleaveChannels: undefined,
  
};
