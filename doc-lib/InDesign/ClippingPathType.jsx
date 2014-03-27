/*
 * The type of clipping path to create.
 */
var ClippingPathType = {
  /*
   * No clipping path applied.
   * @type {Number}
   */
  NONE: undefined,
  
  /*
   * The clipping path is based on pixel value threshold and tolerance.
   * @type {Number}
   */
  DETECT_EDGES: undefined,
  
  /*
   * The clipping path is based on an alpha channel defined for the graphic in a graphics application.
   * @type {Number}
   */
  ALPHA_CHANNEL: undefined,
  
  /*
   * The clipping path is defined for the graphic in Photoshop.
   * @type {Number}
   */
  PHOTOSHOP_PATH: undefined,
  
  /*
   * (Read-only) The clipping path has been manually edited.
   * @type {Number}
   */
  USER_MODIFIED_PATH: undefined,
  
};
