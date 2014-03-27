/*
 * Options for fitting content in an empty frame.
 */
var EmptyFrameFittingOptions = {
  /*
   * Does not use a fitting option.
   * @type {Number}
   */
  NONE: undefined,
  
  /*
   * Resizes content to fit the frame. Note: Content that has different proportions than the frame appears stretched or squeezed.
   * @type {Number}
   */
  CONTENT_TO_FRAME: undefined,
  
  /*
   * Resizes content to fit the frame while preserving content proportions. If the content and frame have different proportions, some empty space appears in the frame.
   * @type {Number}
   */
  PROPORTIONALLY: undefined,
  
  /*
   * Resizes content to fill the frame while perserving the content's proportions. If the content and frame have different proportions, some of the content is obscured by the frame.
   * @type {Number}
   */
  FILL_PROPORTIONALLY: undefined,
  
};
