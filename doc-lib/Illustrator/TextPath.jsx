/*
 * A text path item.
 */
var TextPath = {
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
   * The position of the top left corner of the text path.
   * @type {Point}
   */
  position: undefined,
  
  /*
   * The width of the text path.
   * @type {Number}
   */
  width: undefined,
  
  /*
   * The height of the text path.
   * @type {Number}
   */
  height: undefined,
  
  /*
   * The mode used when compositing an object.
   * @type {BlendModes}
   */
  blendingMode: undefined,
  
  /*
   * The object's opacity (between 0.0 and 100.0)
   * @type {Number}
   */
  opacity: undefined,
  
  /*
   * Can the text path be modified.
   * @type {Boolean}
   */
  editable: undefined,
  
  /*
   * The top position of the text path.
   * @type {Number}
   */
  top: undefined,
  
  /*
   * The left position of the text path.
   * @type {Number}
   */
  left: undefined,
  
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
   * Note assigned to the path.
   * @type {String}
   */
  note: undefined,
  
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
   * Set the path using the provided array of anchor points.
 *
   * @param {any} pathPoints Array of anchor values for the path points.
   */
  setEntirePath: function(pathPoints) {
  },
  
};
