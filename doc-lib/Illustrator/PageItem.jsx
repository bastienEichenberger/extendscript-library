/*
 * A page item object.
 */
var PageItem = {
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
   * The value of the Adobe URL tag assigned to this artwork item.
   * @type {String}
   */
  URL: undefined,
  
  /*
   * The note assigned to this artwork item.
   * @type {String}
   */
  note: undefined,
  
  /*
   * The layer to which this artwork belongs.
   * @type {Layer}
   */
  layer: undefined,
  
  /*
   * Is this artwork item locked?
   * @type {Boolean}
   */
  locked: undefined,
  
  /*
   * Is this artwork item hidden?
   * @type {Boolean}
   */
  hidden: undefined,
  
  /*
   * Is this artwork item selected?
   * @type {Boolean}
   */
  selected: undefined,
  
  /*
   * The position of the top left corner of the art item.
   * @type {Point}
   */
  position: undefined,
  
  /*
   * The width of the art item.
   * @type {Number}
   */
  width: undefined,
  
  /*
   * The height of the art item.
   * @type {Number}
   */
  height: undefined,
  
  /*
   * The bounds of the artwork excluding stroke width.
   * @type {Rectangle}
   */
  geometricBounds: undefined,
  
  /*
   * The visible bounds of the artwork including stroke width.
   * @type {Rectangle}
   */
  visibleBounds: undefined,
  
  /*
   * The bounds of the artwork including stroke width and controls.
   * @type {Rectangle}
   */
  controlBounds: undefined,
  
  /*
   * The item's name.
   * @type {String}
   */
  name: undefined,
  
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
   * Is the artwork isolated.
   * @type {Boolean}
   */
  isIsolated: undefined,
  
  /*
   * Is the artwork used to create a knockout.
   * @type {KnockoutState}
   */
  artworkKnockout: undefined,
  
  /*
   * The drawing order of the art within it's group or layer.
   * @type {Int32}
   */
  zOrderPosition: undefined,
  
  /*
   * Can the art item be modified.
   * @type {Boolean}
   */
  editable: undefined,
  
  /*
   * Is the art item sliced (default: false)
   * @type {Boolean}
   */
  sliced: undefined,
  
  /*
   * The top position of the art item.
   * @type {Number}
   */
  top: undefined,
  
  /*
   * The left position of the art item.
   * @type {Number}
   */
  left: undefined,
  
  /*
   * The visibility variable bound to this page item.
   * @type {any}
   */
  visibilityVariable: undefined,
  
  /*
   * The collection of tags associated with this page item.
   * @type {Tags}
   */
  tags: undefined,
  
  /*
   * Is this artwork item aligned to Pixel Grid?
   * @type {Boolean}
   */
  pixelAligned: undefined,
  
  /*
   * Wrap text frame objects around this object (text frame must be above the object)
   * @type {Boolean}
   */
  wrapped: undefined,
  
  /*
   * Use this offset when wrapping text around this object.
   * @type {Number}
   */
  wrapOffset: undefined,
  
  /*
   * Should the text frame object be wrapped inside this object?
   * @type {Boolean}
   */
  wrapInside: undefined,
  
  /*
   * Move the object.
 *
   * @param {Object} relativeObject undefined
   * @param {ElementPlacement} insertionLocation undefined
   * @returns {PageItem}
   */
  move: function(relativeObject, insertionLocation) {
    return new PageItem();
  },
  
  /*
   * Duplicate this object.
 *
   * @param {Object} relativeObject undefined
   * @param {ElementPlacement} insertionLocation undefined
   * @returns {PageItem}
   */
  duplicate: function(relativeObject, insertionLocation) {
    return new PageItem();
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
   * Reposition art object(s)
 *
   * @param {Number} [deltaX] Horizontal transformation.
   * @param {Number} [deltaY] Vertical transformation.
   * @param {Boolean} [transformObjects] Are art object positions and orientations affected?
   * @param {Boolean} [transformFillPatterns] Are the fill patterns assigned to paths to be transformed?
   * @param {Boolean} [transformFillGradients] Are the fill gradients assigned to paths to be transformed?
   * @param {Boolean} [transformStrokePattern] Are the stroke patterns assigned to paths to be transformed?
   */
  translate: function(deltaX, deltaY, transformObjects, transformFillPatterns, transformFillGradients, transformStrokePattern) {
  },
  
  /*
   * Scale art object(s)
 *
   * @param {Number} scaleX Horizontal scaling factor expressed as a percentage (100 = 100%)
   * @param {Number} scaleY Vertical scaling factor expressed as a percentage (100 = 100%)
   * @param {Boolean} [changePositions] Are art object positions and orientations effected?
   * @param {Boolean} [changeFillPatterns] Are the fill patterns assigned to paths to be transformed?
   * @param {Boolean} [changeFillGradients] Are the fill gradients assigned to paths to be transformed?
   * @param {Boolean} [changeStrokePattern] Are the stroke patterns assigned to paths to be transformed?
   * @param {Number} [changeLineWidths] The amount line widths are to be scaled (expressed as a percentage)
   * @param {Transformation} [scaleAbout] The point on the art item's bounding box to which the scale is applied.
   */
  resize: function(scaleX, scaleY, changePositions, changeFillPatterns, changeFillGradients, changeStrokePattern, changeLineWidths, scaleAbout) {
  },
  
  /*
   * Rotate art object(s)
 *
   * @param {Number} angle Angle of rotation (in degrees). Rotation is performed counter-clock wise.
   * @param {Boolean} [changePositions] Are art object positions and orientations effected?
   * @param {Boolean} [changeFillPatterns] Are the fill patterns assigned to paths to be transformed?
   * @param {Boolean} [changeFillGradients] Are the fill gradients assigned to paths to be transformed?
   * @param {Boolean} [changeStrokePattern] Are the stroke patterns assigned to paths to be transformed?
   * @param {Transformation} [rotateAbout] The point on the art item's bounding box to which the rotation is applied.
   */
  rotate: function(angle, changePositions, changeFillPatterns, changeFillGradients, changeStrokePattern, rotateAbout) {
  },
  
  /*
   * Transform art object(s) using a transformation matrix.
 *
   * @param {Matrix} transformationMatrix The transformation matrix to be applied to the objects.
   * @param {Boolean} [changePositions] Are art object positions and orientations effected?
   * @param {Boolean} [changeFillPatterns] Are the fill patterns assigned to paths to be transformed?
   * @param {Boolean} [changeFillGradients] Are the fill gradients assigned to paths to be transformed?
   * @param {Boolean} [changeStrokePattern] Are the stroke patterns assigned to paths to be transformed?
   * @param {Number} [changeLineWidths] The amount line widths are to be scaled (expressed as a percentage)
   * @param {Transformation} [transformAbout] The point on the art item's bounding box to which scale and rotation operations apply.
   */
  transform: function(transformationMatrix, changePositions, changeFillPatterns, changeFillGradients, changeStrokePattern, changeLineWidths, transformAbout) {
  },
  
  /*
   * Place art object(s)in perspective grid at spedified perspective plane and coordinate.
 *
   * @param {Number} positionX Position towards X direction of specified or active perspective grid plane.
   * @param {Number} positionY Position towards Y direction of specified or active perspective grid plane.
   * @param {PerspectiveGridPlaneType} perspectiveGridPlane Type of perspective grid plane.
   */
  bringInPerspective: function(positionX, positionY, perspectiveGridPlane) {
  },
  
  /*
   * Arranges the art relative to other art in the group or layer.
 *
   * @param {ZOrderMethod} zOrderCmd How to arrange the art.
   */
  zOrder: function(zOrderCmd) {
  },
  
  /*
   * Apply effect to selected artItem.
 *
   * @param {String} liveEffectXML undefined
   */
  applyEffect: function(liveEffectXML) {
  },
  
  /*
   * Sends the script message to the required plugin.
 *
   * @param {String} pluginName Plugin to which message needs to be sent.
   * @param {String} messageSelector Functionality that is to be executed.
   * @param {String} inputString Pass any data encoded in a string.
   * @returns {String}
   */
  sendScriptMessage: function(pluginName, messageSelector, inputString) {
    return new String();
  },
  
};
