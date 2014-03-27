/*
 * A point on a path, expressed as an array of three coordinate arrays: the anchor point, left direction point, and right direction point. For paths that are straight segments &amp;&#35;40;not curved&#41;, the coordinates of all three points are the same. For curved segements, the coordinates are different. The difference between the anchor point and the left or right direction points determines the arc of the curve. You use the left direction point to bend the curve &quot;outward" or make it convex; you use the right direction point to bend the curve "inward" or make it concave.
 */
var PathPointInfo = {
  /*
   * The x and y coordinates of one end point of the path segment.
   * @type {Point}
   */
  anchor: undefined,
  
  /*
   * The location of the left direction point ("in" position).
   * @type {Point}
   */
  leftDirection: undefined,
  
  /*
   * The location of the right direction point ("out" position).
   * @type {Point}
   */
  rightDirection: undefined,
  
  /*
   * The point type.
   * @type {PointKind}
   */
  kind: undefined,
  
  /*
   * The x and y coordinates of one end point of the path segment.
   * @type {Point}
   */
  anchor: undefined,
  
  /*
   * The location of the left direction point ("in" position).
   * @type {Point}
   */
  leftDirection: undefined,
  
  /*
   * The location of the right direction point ("out" position).
   * @type {Point}
   */
  rightDirection: undefined,
  
  /*
   * The point type.
   * @type {PointKind}
   */
  kind: undefined,
  
};
