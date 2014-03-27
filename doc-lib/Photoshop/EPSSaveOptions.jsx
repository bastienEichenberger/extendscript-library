/*
 * Options for saving a document in EPS format.
 */
var EPSSaveOptions = {
  /*
   * If true, the color profile is embedded in the document.
   * @type {Boolean}
   */
  embedColorProfile: undefined,
  
  /*
   * The type of preview.
   * @type {Preview}
   */
  preview: undefined,
  
  /*
   * The type of encoding to use for the document.
   * @type {SaveEncoding}
   */
  encoding: undefined,
  
  /*
   * If true, includes the halftone screen.
   * @type {Boolean}
   */
  halftoneScreen: undefined,
  
  /*
   * If true, includes the transfer functions in the document to compensate for dot gain between the image and film.
   * @type {Boolean}
   */
  transferFunction: undefined,
  
  /*
   * If true, uses PostScript color management.
   * @type {Boolean}
   */
  psColorManagement: undefined,
  
  /*
   * If true, includes vector data. Valid only when the document contains vector data (un-rasterized text).
   * @type {Boolean}
   */
  vectorData: undefined,
  
  /*
   * If true, uses image interpolation.
   * @type {Boolean}
   */
  interpolation: undefined,
  
  /*
   * If true, displays white areas as transparent. Valid only for documents in BitMap mode.
   * @type {Boolean}
   */
  transparentWhites: undefined,
  
};
