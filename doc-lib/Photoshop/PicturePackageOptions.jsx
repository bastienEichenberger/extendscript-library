/*
 * Options that can be specified for a Picture Package.
 */
var PicturePackageOptions = {
  /*
   * The layout to use to generate the picture package.
   * @type {String}
   */
  layout: undefined,
  
  /*
   * The resolution of the document (in pixels per inch)
   * @type {Number}
   */
  resolution: undefined,
  
  /*
   * The document color mode.
   * @type {NewDocumentMode}
   */
  mode: undefined,
  
  /*
   * If true, flattens all layers in the final document.
   * @type {Boolean}
   */
  flatten: undefined,
  
  /*
   * The content information.
   * @type {PicturePackageTextType}
   */
  content: undefined,
  
  /*
   * The picture package custom text.
   * @type {String}
   */
  text: undefined,
  
  /*
   * The font used for security text.
   * @type {GalleryFontType}
   */
  font: undefined,
  
  /*
   * The font size.
   * @type {int}
   */
  fontSize: undefined,
  
  /*
   * The web page security text opacity (as a percentage) Range: 0 to 100.
   * @type {int}
   */
  opacity: undefined,
  
  /*
   * The color of the security text.
   * @type {RGBColor}
   */
  textColor: undefined,
  
  /*
   * The position of the security text.
   * @type {GallerySecurityTextPositionType}
   */
  textPosition: undefined,
  
  /*
   * The orientation of the security text.
   * @type {GallerySecurityTextRotateType}
   */
  textRotate: undefined,
  
};
