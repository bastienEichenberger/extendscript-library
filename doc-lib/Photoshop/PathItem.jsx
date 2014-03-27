/*
 * A path or drawing object, such as the outline of a shape or a straight or curved line, which contains sub paths that comprise its geometry.
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
   * The name of the path item.
   * @type {String}
   */
  name: undefined,
  
  /*
   * The sub path objects for this path item.
   * @type {SubPathItems}
   */
  subPathItems: undefined,
  
  /*
   * The type of path.
   * @type {PathKind}
   */
  kind: undefined,
  
  /*
   * Adds an element.
   * @returns {PathItem}
   */
  add: function() {
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
   * Duplicates this path item.
 *
   * @param {String} [name] The name for the new path.
   * @returns {PathItem}
   */
  duplicate: function(name) {
    return new PathItem();
  },
  
  /*
   * Makes a selection object, whose border is the path, from this path item object.
 *
   * @param {Number} [feather] The feather amount in pixels. Range: 0.0 to 250.0.
   * @param {Boolean} [antiAlias] If true, the selection uses anti-aliasing.
   * @param {SelectionType} [operation] The selection behavior relative to the existing selection (when a selection already exists).
   */
  makeSelection: function(feather, antiAlias, operation) {
  },
  
  /*
   * Fills the area enclosed by the path.
 *
   * @param {any} [fillColor] The color of the fill for this path.
   * @param {ColorBlendMode} [mode] The blending mode of the fill for this path.
   * @param {Number} [opacity] The opacity of the fill for this path (as a percentage). Range: 0.0 to 100.0.
   * @param {Boolean} [preserveTransparency] If true, transparency is preserved.
   * @param {Number} [feather] The feather amount in pixels. Range: 0.0 to 250.0.
   * @param {Boolean} [antiAlias] If true, uses anti-aliasing for the selection.
   * @param {Boolean} [wholePath] If true, uses all subpaths when doing the fill.
   */
  fillPath: function(fillColor, mode, opacity, preserveTransparency, feather, antiAlias, wholePath) {
  },
  
  /*
   * Strokes the path.
 *
   * @param {ToolType} [tool] The tool to use when stroking the path.
   * @param {Boolean} [simulatePressure] If true, simulates the pressure when using the tool.
   */
  strokePath: function(tool, simulatePressure) {
  },
  
  /*
   * Makes this path item the clipping path for this document.
 *
   * @param {Number} [flatness] Flatness in device pixels; tells the PostScript printer how to approximate curves. Range: 0.2 to 100).
   */
  makeClippingPath: function(flatness) {
  },
  
  /*
   * Makes this path item the active or selected path item.
   */
  select: function() {
  },
  
  /*
   * Unselects the selection, no path items are selected.
   */
  deselect: function() {
  },
  
};
