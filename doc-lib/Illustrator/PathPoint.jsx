/*
 * A point on a path.
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
   * Location of the left direction point (in position)
   * @type {Point}
   */
  leftDirection: undefined,
  
  /*
   * Location of the right direction point (out position)
   * @type {Point}
   */
  rightDirection: undefined,
  
  /*
   * The type of point: smooth/corner.
   * @type {PointType}
   */
  pointType: undefined,
  
  /*
   * The path point selected state.
   * @type {PathPointSelection}
   */
  selected: undefined,
  
  /*
   * Deletes this object.
   */
  remove: function() {
  },
  
  /*
   * Deletes all elements.
   */
  removeAll: function() {
  },
  
};
