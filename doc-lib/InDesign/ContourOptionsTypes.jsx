/*
 * The path on which to base the contour text wrap.
 */
var ContourOptionsTypes = {
  /*
   * Sets the text wrap shape to the object's bounding box.
   * @type {Number}
   */
  BOUNDING_BOX: undefined,
  
  /*
   * Sets the text wrap shape to the specified Photoshop path. To specify the Photoshop path, see contour path name.
   * @type {Number}
   */
  PHOTOSHOP_PATH: undefined,
  
  /*
   * Sets the text wrap shape to the edges of the image.
   * @type {Number}
   */
  DETECT_EDGES: undefined,
  
  /*
   * Sets the text wrap shape to the edges of the specified alpha channel. To specify the alpha channel, see contour path name.
   * @type {Number}
   */
  ALPHA_CHANNEL: undefined,
  
  /*
   * Sets the text wrap shape to the wrapped object's graphics frame.
   * @type {Number}
   */
  GRAPHIC_FRAME: undefined,
  
  /*
   * Sets the text wrap shape to the clipping path (if any) defined in Photoshop. Note: A path cannot be specified using this enumeration. To set the text wrap shape to a specific path, use the photoshop path contour options type enumeration value.
   * @type {Number}
   */
  SAME_AS_CLIPPING: undefined,
  
};
