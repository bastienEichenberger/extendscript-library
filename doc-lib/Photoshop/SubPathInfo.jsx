/*
 * An array of path point info objects that describes a straight or curved segment of a path.
 */
var SubPathInfo = {
  /*
   * The sub path operation on other sub paths.
   * @type {ShapeOperation}
   */
  operation: undefined,
  
  /*
   * If true, the path is closed.
   * @type {Boolean}
   */
  closed: undefined,
  
  /*
   * All of the sub path item's path points.
   * @type {PathPointInfo}
   */
  entireSubPath: undefined,
  
};
