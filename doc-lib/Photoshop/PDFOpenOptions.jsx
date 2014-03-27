/*
 * Options that can be specified when opening a generic PDF document.
 */
var PDFOpenOptions = {
  /*
   * The resolution of the document (in pixels per inch)
   * @type {Number}
   */
  resolution: undefined,
  
  /*
   * The document mode.
   * @type {OpenDocumentMode}
   */
  mode: undefined,
  
  /*
   * If true, anti-aliasing is used.
   * @type {Boolean}
   */
  antiAlias: undefined,
  
  /*
   * The number of the page or image to open.
   * @type {int}
   */
  page: undefined,
  
  /*
   * Deprecated for Adobe Photoshop CS3.
   * @type {Boolean}
   */
  constrainProportions: undefined,
  
  /*
   * Deprecated for Adobe Photoshop CS3.
   * @type {UnitValue}
   */
  height: undefined,
  
  /*
   * Deprecated for Adobe Photoshop CS3.
   * @type {UnitValue}
   */
  width: undefined,
  
  /*
   * The number of bits per channel.
   * @type {BitsPerChannelType}
   */
  bitsPerChannel: undefined,
  
  /*
   * If true, the value specified in the page property refers to a page number. If false, the value specifies an image number.
   * @type {Boolean}
   */
  usePageNumber: undefined,
  
  /*
   * The name of the document.
   * @type {String}
   */
  name: undefined,
  
  /*
   * The cropping method to use.
   * @type {CropToType}
   */
  cropPage: undefined,
  
  /*
   * If true, suppresses any warnings that may occur during opening.
   * @type {Boolean}
   */
  suppressWarnings: undefined,
  
};
