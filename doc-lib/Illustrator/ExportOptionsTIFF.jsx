/*
 * Options which may be supplied when exporting a document as a TIFF file.
 */
var ExportOptionsTIFF = {
  /*
   * The color space of the exported file.
   * @type {ImageColorSpace}
   */
  imageColorSpace: undefined,
  
  /*
   * The resolution of the exported file.
   * @type {Number}
   */
  resolution: undefined,
  
  /*
   * Should the resulting image be antialiased.
   * @type {AntiAliasingMethod}
   */
  antiAliasing: undefined,
  
  /*
   * Compress TIFF file with LZW Compression when exporting.
   * @type {Boolean}
   */
  lZWCompression: undefined,
  
  /*
   * Mac or PC byte order when exporting.
   * @type {TIFFByteOrder}
   */
  byteOrder: undefined,
  
  /*
   * Embed an ICC profile when exporting.
   * @type {Boolean}
   */
  embedICCProfile: undefined,
  
  /*
   * All the artboards or range of the artboards will be exported.
   * @type {Boolean}
   */
  saveMultipleArtboards: undefined,
  
  /*
   * If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string.
   * @type {String}
   */
  artboardRange: undefined,
  
};
