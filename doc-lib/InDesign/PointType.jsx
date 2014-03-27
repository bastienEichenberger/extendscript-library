/*
 * The path point type.
 */
var PointType = {
  /*
   * The point is a smooth point, it has two direction lines which are parallel.
   * @type {Number}
   */
  SMOOTH: undefined,
  
  /*
   * The point is a corner point, it has either one direction line, or two independent direction lines.
   * @type {Number}
   */
  CORNER: undefined,
  
  /*
   * The point is a plain point, it has no direction lines.
   * @type {Number}
   */
  PLAIN: undefined,
  
  /*
   * A special type of smooth point with two direction lines of equal length.
   * @type {Number}
   */
  SYMMETRICAL: undefined,
  
};
