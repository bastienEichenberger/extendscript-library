/*
 * A collection of path items.
 */
var PathItems = {
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
   * Number of elements in the collection.
   * @type {int}
   */
  length: undefined,
  
  /*
   * Create a path.
   * @returns {PathItem}
   */
  add: function() {
    return new PathItem();
  },
  
  /*
   * Create an elliptical path item.
 *
   * @param {Number} [top] The ellipse's bounds.
   * @param {Number} [left] The ellipse's bounds.
   * @param {Number} [width] The ellipse's bounds.
   * @param {Number} [height] The height of the ellipse.
   * @param {Boolean} [reversed] Is the ellipse path reversed?
   * @param {Boolean} [inscribed] Is the ellipse path inscribed?
   * @returns {PathItem}
   */
  ellipse: function(top, left, width, height, reversed, inscribed) {
    return new PathItem();
  },
  
  /*
   * Used to create a rectangular path item. Not for path item access.
 *
   * @param {Number} top The top coordinate of the rectangle's bounds.
   * @param {Number} left The left coordinate of the rectangle's bounds.
   * @param {Number} width The width of the rectangle.
   * @param {Number} height The height of the rectangle.
   * @param {Boolean} [reversed] Is the rectangle path reversed?
   * @returns {PathItem}
   */
  rectangle: function(top, left, width, height, reversed) {
    return new PathItem();
  },
  
  /*
   * Used to create a rounded-corner rectangular path item. Not for path item access.
 *
   * @param {Number} top undefined
   * @param {Number} left undefined
   * @param {Number} width undefined
   * @param {Number} height undefined
   * @param {Number} [horizontalRadius] Horizontal corner radius.
   * @param {Number} [verticalRadius] Vertical corner radius.
   * @param {Boolean} [reversed] Is the rectangle path reversed?
   * @returns {PathItem}
   */
  roundedRectangle: function(top, left, width, height, horizontalRadius, verticalRadius, reversed) {
    return new PathItem();
  },
  
  /*
   * Used to create a regular polygon path item. Not for path item access.
 *
   * @param {Number} [centerX] undefined
   * @param {Number} [centerY] undefined
   * @param {Number} [radius] The radius of the polygon points.
   * @param {Int32} [sides] The number of sides on the polygon.
   * @param {Boolean} [reversed] Is the polygon path reversed?
   * @returns {PathItem}
   */
  polygon: function(centerX, centerY, radius, sides, reversed) {
    return new PathItem();
  },
  
  /*
   * Used to create a star-shaped path item. Not for path item access.
 *
   * @param {Number} [centerX] undefined
   * @param {Number} [centerY] undefined
   * @param {Number} [radius] The outside radius of the star points.
   * @param {Number} [innerRadius] The inside radius of the star points.
   * @param {Int32} [points] The number of points on the star.
   * @param {Boolean} [reversed] Is the star path reversed?
   * @returns {PathItem}
   */
  star: function(centerX, centerY, radius, innerRadius, points, reversed) {
    return new PathItem();
  },
  
  /*
   * Deletes all elements.
   */
  removeAll: function() {
  },
  
  /*
   * Get the first element in the collection with the provided name.
 *
   * @param {String} name undefined
   * @returns {PathItem}
   */
  getByName: function(name) {
    return new PathItem();
  },
  
};
