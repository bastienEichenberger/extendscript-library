/*
 * Options for fitting content to a frame.
 */
var FitOptions = {
  /*
   * Resizes content to fit the frame. Note: Content that is a different size than the frame appears stretched or squeezed.
   * @type {Number}
   */
  CONTENT_TO_FRAME: undefined,
  
  /*
   * Centers content in the frame; preserves the frame size as well as content size and proportions. Note: If the content is larger than the frame, content around the edges is obscured.
   * @type {Number}
   */
  CENTER_CONTENT: undefined,
  
  /*
   * Resizes content to fit the frame while preserving content proportions. If the content and frame have different proportions, some empty space appears in the frame.
   * @type {Number}
   */
  PROPORTIONALLY: undefined,
  
  /*
   * Resizes the frame so it fits the content.
   * @type {Number}
   */
  FRAME_TO_CONTENT: undefined,
  
  /*
   * Resizes content to fill the frame while perserving the proportions of the content. If the content and frame have different proportions, some of the content is obscured by the bounding box of the frame.
   * @type {Number}
   */
  FILL_PROPORTIONALLY: undefined,
  
  /*
   * Applies the current frame fitting options to the frame and content.
   * @type {Number}
   */
  APPLY_FRAME_FITTING_OPTIONS: undefined,
  
};
