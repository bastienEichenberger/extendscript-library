/*
 * Options for saving a document in JPEG format.
 */
var JPEGSaveOptions = {
  /*
   * If true, the color profile is embedded in the document.
   * @type {Boolean}
   */
  embedColorProfile: undefined,
  
  /*
   * The download format to use.
   * @type {FormatOptions}
   */
  formatOptions: undefined,
  
  /*
   * The color to use to fill anti-aliased edges adjacent to transparent areas of the image. Default: white.
   * @type {MatteType}
   */
  matte: undefined,
  
  /*
   * The number of scans. Valid only for progressive type JPEG files.
   * @type {int}
   */
  scans: undefined,
  
  /*
   * The quality of the produced image.
   * @type {int}
   */
  quality: undefined,
  
};
