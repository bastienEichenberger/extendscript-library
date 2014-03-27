/*
 * An artwork path item.
 */
var PathItem = {
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
   * Is this path closed?
   * @type {Boolean}
   */
  closed: undefined,
  
  /*
   * The area of this path in square points.
   * @type {Number}
   */
  area: undefined,
  
  /*
   * The length of this path in points.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Is this path a guide object?
   * @type {Boolean}
   */
  guides: undefined,
  
  /*
   * Should the path be filled?
   * @type {Boolean}
   */
  filled: undefined,
  
  /*
   * Fill color.
   * @type {Color}
   */
  fillColor: undefined,
  
  /*
   * Will art beneath a filled object be overprinted?
   * @type {Boolean}
   */
  fillOverprint: undefined,
  
  /*
   * Should the path be stroked?
   * @type {Boolean}
   */
  stroked: undefined,
  
  /*
   * Stroke color.
   * @type {Color}
   */
  strokeColor: undefined,
  
  /*
   * Will art beneath a stroked object be overprinted?
   * @type {Boolean}
   */
  strokeOverprint: undefined,
  
  /*
   * Width of stroke.
   * @type {Number}
   */
  strokeWidth: undefined,
  
  /*
   * Dash lengths (set to {} for a solid line)
   * @type {Number}
   */
  strokeDashes: undefined,
  
  /*
   * The default distance into the dash pattern at which the pattern should be started.
   * @type {Number}
   */
  strokeDashOffset: undefined,
  
  /*
   * Type of line capping.
   * @type {StrokeCap}
   */
  strokeCap: undefined,
  
  /*
   * Type of joints.
   * @type {StrokeJoin}
   */
  strokeJoin: undefined,
  
  /*
   * Whether a join is mitered (pointed) or beveled (squared-off)
   * @type {Number}
   */
  strokeMiterLimit: undefined,
  
  /*
   * Should this be used as a clipping path?
   * @type {Boolean}
   */
  clipping: undefined,
  
  /*
   * Should the even-odd rule be used to determine insideness?
   * @type {Boolean}
   */
  evenodd: undefined,
  
  /*
   * The resolution of the path.
   * @type {Number}
   */
  resolution: undefined,
  
  /*
   * All the selected points in the path.
   * @type {ObjectArray}
   */
  selectedPathPoints: undefined,
  
  /*
   * The polarity the path.
   * @type {PolarityValues}
   */
  polarity: undefined,
  
  /*
   * undefined
   * @type {PathPoints}
   */
  pathPoints: undefined,
  
  /*
   * Move the object.
 *
   * @param {Object} relativeObject undefined
   * @param {ElementPlacement} insertionLocation undefined
   * @returns {PathItem}
   */
  move: function(relativeObject, insertionLocation) {
    return new PathItem();
  },
  
  /*
   * Duplicate this object.
 *
   * @param {Object} relativeObject undefined
   * @param {ElementPlacement} insertionLocation undefined
   * @returns {PathItem}
   */
  duplicate: function(relativeObject, insertionLocation) {
    return new PathItem();
  },
  
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
  
  /*
   * Set the path using the provided array of path point (x, y) coordinate pairs.
 *
   * @param {any} pathPoints Array of (x, y) coordinate pairs for the path points.
   */
  setEntirePath: function(pathPoints) {
  },
  
};
