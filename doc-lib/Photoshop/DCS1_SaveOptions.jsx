/*
 * Options for saving a document in Photoshop DCS 1.0 format.
 */
var DCS1_SaveOptions = {
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
   * The DCS type.
   * @type {DCSType}
   */
  DCS: undefined,
  
  /*
   * The type of encoding to use for the document.
   * @type {SaveEncoding}
   */
  encoding: undefined,
  
  /*
   * If true, includes halftone screen.
   * @type {Boolean}
   */
  halftoneScreen: undefined,
  
  /*
   * If true, includes transfer functions in the document to compensate for dot gain between the image and film.
   * @type {Boolean}
   */
  transferFunction: undefined,
  
  /*
   * If true, includes vector data. Valid only if the document contains vector data (un-rasterized text).
   * @type {Boolean}
   */
  vectorData: undefined,
  
  /*
   * If true, image interpolation is used.
   * @type {Boolean}
   */
  interpolation: undefined,
  
};
