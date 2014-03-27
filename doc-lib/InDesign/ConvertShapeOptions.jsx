/*
 * Options for indicating the type of shape to which to covert an object.
 */
var ConvertShapeOptions = {
  /*
   * Converts the object to a rectangle.
   * @type {Number}
   */
  CONVERT_TO_RECTANGLE: undefined,
  
  /*
   * Converts the object to a rectangle with rounded corners.
   * @type {Number}
   */
  CONVERT_TO_ROUNDED_RECTANGLE: undefined,
  
  /*
   * Converts the object to a rectangle with beveled corners.
   * @type {Number}
   */
  CONVERT_TO_BEVELED_RECTANGLE: undefined,
  
  /*
   * Converts the object to a rectangle with inverse rounded corners.
   * @type {Number}
   */
  CONVERT_TO_INVERSE_ROUNDED_RECTANGLE: undefined,
  
  /*
   * Converts the object to an ellipse.
   * @type {Number}
   */
  CONVERT_TO_OVAL: undefined,
  
  /*
   * Converts the object to a triangle.
   * @type {Number}
   */
  CONVERT_TO_TRIANGLE: undefined,
  
  /*
   * Converts the object to a polygon.
   * @type {Number}
   */
  CONVERT_TO_POLYGON: undefined,
  
  /*
   * Converts the object to a line that connects the upper left and lower right corners of the object's bounding box.
   * @type {Number}
   */
  CONVERT_TO_LINE: undefined,
  
  /*
   * Converts the object to straight line. If the object is a square, circle, or its bounding box is wider than it is tall, the line is horizontal and connects the center points on the vertical sides of the bounding box. If the object's bounding box is taller than it is wide, the line connects the center points of the horizontal sides of the bounding box.
   * @type {Number}
   */
  CONVERT_TO_STRAIGHT_LINE: undefined,
  
  /*
   * Converts the object to an open path.
   * @type {Number}
   */
  CONVERT_TO_OPEN_PATH: undefined,
  
  /*
   * Converts the object to a closed path.
   * @type {Number}
   */
  CONVERT_TO_CLOSED_PATH: undefined,
  
};
