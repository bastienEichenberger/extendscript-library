/*
 * Options for saving a document as a PICT resource file.
 */
var PICTResourceSaveOptions = {
  /*
   * If true, the alpha channels are saved.
   * @type {Boolean}
   */
  alphaChannels: undefined,
  
  /*
   * If true, the color profile is embedded in the document.
   * @type {Boolean}
   */
  embedColorProfile: undefined,
  
  /*
   * The number of bits per pixel.
   * @type {PICTBitsPerPixels}
   */
  resolution: undefined,
  
  /*
   * The compression type.
   * @type {PICTCompression}
   */
  compression: undefined,
  
  /*
   * The ID of the PICT resource.
   * @type {int}
   */
  resourceID: undefined,
  
  /*
   * The name of PICT resource.
   * @type {String}
   */
  name: undefined,
  
};
