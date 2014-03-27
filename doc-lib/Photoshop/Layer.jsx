/*
 * A layer object.
 */
var Layer = {
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
   * The name of the layer.
   * @type {String}
   */
  name: undefined,
  
  /*
   * If true, the layer's contents and settings are locked.
   * @type {Boolean}
   */
  allLocked: undefined,
  
  /*
   * The mode to use when compositing an object.
   * @type {BlendMode}
   */
  blendMode: undefined,
  
  /*
   * The layers linked to this layer.
   * @type {Layer}
   */
  linkedLayers: undefined,
  
  /*
   * The layer's master opacity (as a percentage). Range: 0.0 to 100.0.
   * @type {Number}
   */
  opacity: undefined,
  
  /*
   * If true, the layer is visible.
   * @type {Boolean}
   */
  visible: undefined,
  
  /*
   * Bounding rectangle of the Layer.
   * @type {UnitRect}
   */
  bounds: undefined,
  
  /*
   * The XMP properties of the document. The Camera RAW settings are stored here.
   * @type {XMPMetadata}
   */
  xmpMetadata: undefined,
  
  /*
   * Move the object.
 *
   * @param {Object} relativeObject undefined
   * @param {ElementPlacement} insertionLocation undefined
   * @returns {Layer}
   */
  move: function(relativeObject, insertionLocation) {
    return new Layer();
  },
  
  /*
   * Duplicate this object.
 *
   * @param {Object} [relativeObject] undefined
   * @param {ElementPlacement} [insertionLocation] undefined
   * @returns {Layer}
   */
  duplicate: function(relativeObject, insertionLocation) {
    return new Layer();
  },
  
  /*
   * ...
 *
   * @param {LayerSet} [layerSet] undefined
   */
  moveToEnd: function(layerSet) {
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
   * Unlinks the layer.
   */
  unlink: function() {
  },
  
  /*
   * Links the layer with the specified layer.
 *
   * @param {Layer} with The layer to link to.
   */
  link: function(with) {
  },
  
  /*
   * Moves the object relative to its current position.
 *
   * @param {UnitValue} [deltaX] The amount to move the object horizontally.
   * @param {UnitValue} [deltaY] The amount to move the object vertically.
   */
  translate: function(deltaX, deltaY) {
  },
  
  /*
   * Rotates the object.
 *
   * @param {Number} angle The number of degrees to rotate the object.
   * @param {AnchorPosition} [anchor] The point to rotate about.
   */
  rotate: function(angle, anchor) {
  },
  
  /*
   * Scales the object.
 *
   * @param {Number} [horizontal] The amount to scale the object horizontally (as a percentage).
   * @param {Number} [vertical] The amount to scale the object vertically (as a percentage).
   * @param {AnchorPosition} [anchor] The point to resize about.
   */
  resize: function(horizontal, vertical, anchor) {
  },
  
};
