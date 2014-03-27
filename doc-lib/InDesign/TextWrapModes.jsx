/*
 * Options for wrapping text around an object.
 */
var TextWrapModes = {
  /*
   * No text wrap.
   * @type {Number}
   */
  NONE: undefined,
  
  /*
   * Forces text to jump above or below the object, so that no text appears on the object's right or left.
   * @type {Number}
   */
  JUMP_OBJECT_TEXT_WRAP: undefined,
  
  /*
   * Forces text to jump to the next available column.
   * @type {Number}
   */
  NEXT_COLUMN_TEXT_WRAP: undefined,
  
  /*
   * Wraps text around the object's bounding box.
   * @type {Number}
   */
  BOUNDING_BOX_TEXT_WRAP: undefined,
  
  /*
   * Wraps text around the object following the specified contour options.
   * @type {Number}
   */
  CONTOUR: undefined,
  
};
