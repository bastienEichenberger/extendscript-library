/*
 * Information about an array of path point info objects. You do not use the path point object to create points that make up a path. Rather, you use the path point object to retrieve information about the points that describe path segments. To create path points, use the path point info object.
 */
var PathPoint = {
  /*
   * The object's container.
   * @type {Object}
   */
  parent: undefined,
  
  /*
   * The class name of the object.
   * @type {String}
   */
  typename: undefined,
  
  /*
   * The position (coordinates) of the anchor point.
   * @type {Point}
   */
  anchor: undefined,
  
  /*
   * The location of the left direction point (the "in" position).
   * @type {Point}
   */
  leftDirection: undefined,
  
  /*
   * The location of the right direction point (the "out" position).
   * @type {Point}
   */
  rightDirection: undefined,
  
  /*
   * The type of point.
   * @type {PointKind}
   */
  kind: undefined,
  
};
