/*
 * Specifies how to combine the shapes if the destination image already has a selection.
 */
var ShapeOperation = {
  /*
   * Adds the shapes.
   * @type {int}
   */
  SHAPEADD: undefined,
  
  /*
   * Replaces the shape in the destination image with the loaded selection.
   * @type {int}
   */
  SHAPEXOR: undefined,
  
  /*
   * The resulting shape is the area of intersection between the two shapes.
   * @type {int}
   */
  SHAPEINTERSECT: undefined,
  
  /*
   * Subtracts the loaded shape from the selection is the destination image.
   * @type {int}
   */
  SHAPESUBTRACT: undefined,
  
};
