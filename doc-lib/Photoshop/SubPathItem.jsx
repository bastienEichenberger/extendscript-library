/*
 * Information about a path. You do not use the sub path item object to create a path. Rather, you create path segments using the sub path info object. Use the sub path item object to retrieve information about a path. All properties are read-only.
 */
var SubPathItem = {
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
   * If true, the path is closed.
   * @type {Boolean}
   */
  closed: undefined,
  
  /*
   * The sub path operation on other sub paths.
   * @type {ShapeOperation}
   */
  operation: undefined,
  
  /*
   * The path points collection in the sub path.
   * @type {PathPoints}
   */
  pathPoints: undefined,
  
};
