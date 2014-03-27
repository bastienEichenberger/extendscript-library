/*
 * Hyperlink destination page display options.
 */
var HyperlinkDestinationPageSetting = {
  /*
   * Fits the destination page within the specified rectangle. For information on specifying the rectangle size and position, see the entry for view bounds.
   * @type {Number}
   */
  FIXED: undefined,
  
  /*
   * Displays the visible portion of the destination page as the destination.
   * @type {Number}
   */
  FIT_VIEW: undefined,
  
  /*
   * Fits the entire destination page in the document window. Note: The magnification changes automatically when the window is resized.
   * @type {Number}
   */
  FIT_WINDOW: undefined,
  
  /*
   * Fits the destination page to the width of the window; may obscure the lower portion of the page. Note: The magnification changes automatically when the window is resized horizontally.
   * @type {Number}
   */
  FIT_WIDTH: undefined,
  
  /*
   * Fits the destination page to the window height; may obscure the right side the page. Note: The magnification changes automatically when the window is resized vertically.
   * @type {Number}
   */
  FIT_HEIGHT: undefined,
  
  /*
   * Fits the the text area of the destination page to the window width; obscures page margins and may obscure the lower portion of the page. Note: The magnification changes automatically when the window is resized horizontally.
   * @type {Number}
   */
  FIT_VISIBLE: undefined,
  
  /*
   * The destination page is displayed at the same zoom percent as the previously displayed page. Note: The magnification changes automatically when the window is resized.
   * @type {Number}
   */
  INHERIT_ZOOM: undefined,
  
};
