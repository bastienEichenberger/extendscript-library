/*
 * Options for fitting content to a frame.
 */
var Fitting = {
  /*
   * Resizes content to fit the frame while preserving content proportions. If the content and frame have different proportions, some empty space occurs in the frame.
   * @type {Number}
   */
  PROPORTIONAL: undefined,
  
  /*
   * Resizes content to fit the frame. Note: Content that is a different size than the frame appears stretched or squeezed.
   * @type {Number}
   */
  FIT_CONTENT_TO_FRAME: undefined,
  
  /*
   * Resizes the frame to fit the content.
   * @type {Number}
   */
  FIT_FRAME_TO_CONTENT: undefined,
  
  /*
   * Preserves the original sizes of the frame and the content. Note: Content that is larger than the frame is obscured around the edges.
   * @type {Number}
   */
  PRESERVE_SIZES: undefined,
  
  /*
   * Resizes content to fill the frame while preserving content proportions. If the content and frame have different proportions, some content is obscured by the bounding box of the frame.
   * @type {Number}
   */
  FILL_PROPORTIONAL: undefined,
  
};
