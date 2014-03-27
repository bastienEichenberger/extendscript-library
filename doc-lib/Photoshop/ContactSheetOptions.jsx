/*
 * Options that can be specified for a contact sheet.
 */
var ContactSheetOptions = {
  /*
   * The width (in pixels) of the resulting document. Range: 100 to 2900.
   * @type {int}
   */
  width: undefined,
  
  /*
   * The height (in pixels) of the resulting document. Range: 100 to 2900.
   * @type {int}
   */
  height: undefined,
  
  /*
   * The resolution of the document (in pixels per inch). Range: 35 to 1200.
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
   * If true, places the images horizontally first.
   * @type {Boolean}
   */
  acrossFirst: undefined,
  
  /*
   * If true, auto spaces the images in the contact sheet.
   * @type {Boolean}
   */
  useAutoSpacing: undefined,
  
  /*
   * The number of contact sheet columns.
   * @type {int}
   */
  columnCount: undefined,
  
  /*
   * The number of contact sheet rows.
   * @type {int}
   */
  rowCount: undefined,
  
  /*
   * The vertical spacing (in pixels) between images. Range: 0 to 29000.
   * @type {int}
   */
  vertical: undefined,
  
  /*
   * The horizontal spacing (in pixels) between images. Range: 0 to 29000.
   * @type {int}
   */
  horizontal: undefined,
  
  /*
   * If true, rotates images for best fit.
   * @type {Boolean}
   */
  bestFit: undefined,
  
  /*
   * If true, uses the filename as a caption for the image.
   * @type {Boolean}
   */
  caption: undefined,
  
  /*
   * The font used for the caption.
   * @type {GalleryFontType}
   */
  font: undefined,
  
  /*
   * The caption font size.
   * @type {int}
   */
  fontSize: undefined,
  
};
