/*
 * The selected area of the document or layer.
 */
var Selection = {
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
   * The bounding rectangle of the entire selection.
   * @type {UnitRect}
   */
  bounds: undefined,
  
  /*
   * If true, the bounding rectangle a solid rectangle.
   * @type {Boolean}
   */
  solid: undefined,
  
  /*
   * Clears the selection and does not copy it to the clipboard.
   */
  clear: function() {
  },
  
  /*
   * Copies the selection to the clipboard.
 *
   * @param {Boolean} [merge] If true the copy includes all visible layers. If false, copies only from the current layer.
   */
  copy: function(merge) {
  },
  
  /*
   * Cuts the current selection to the clipboard.
   */
  cut: function() {
  },
  
  /*
   * Selects the selection border only (in the specified width); subsequent actions do not affect the selected area within the borders.
 *
   * @param {UnitValue} width The width of the border selection.
   */
  selectBorder: function(width) {
  },
  
  /*
   * Contracts the selection.
 *
   * @param {UnitValue} by The amount to contract the selection.
   */
  contract: function(by) {
  },
  
  /*
   * Fills the selection.
 *
   * @param {any} fillType The color or history state with which to fill the object.
   * @param {ColorBlendMode} [mode] The color blend mode.
   * @param {int} [opacity] The opacity as a percentage. Range: 1 to 100.
   * @param {Boolean} [preserveTransparency] If true, perserves transparencies.
   */
  fill: function(fillType, mode, opacity, preserveTransparency) {
  },
  
  /*
   * Strokes the selection.
 *
   * @param {any} strokeColor The color to stroke the selection with.
   * @param {int} width The stroke width.
   * @param {StrokeLocation} [location] The stroke location.
   * @param {ColorBlendMode} [mode] The color blend mode.
   * @param {int} [opacity] The opacity of the stroke color as a percentage. Range: 1 to 100.
   * @param {Boolean} [preserveTransparency] If true, preserves transparency.
   */
  stroke: function(strokeColor, width, location, mode, opacity, preserveTransparency) {
  },
  
  /*
   * Selects the entire layer.
   */
  selectAll: function() {
  },
  
  /*
   * Deselects the current selection.
   */
  deselect: function() {
  },
  
  /*
   * Selects the specified region.
 *
   * @param {any} region Array of x and y coordinates that describe the corners of the selection, in the format [[x1, y1], [x2,y2],[x3, y3], [x4,y4]]
   * @param {SelectionType} [type] The method for combining the new selection with the existing selection.
   * @param {Number} [feather] The feather amount.
   * @param {Boolean} [antiAlias] If true, anti-aliasing is used.
   */
  select: function(region, type, feather, antiAlias) {
  },
  
  /*
   * Expands the selection.
 *
   * @param {UnitValue} by The amount to expand the selection.
   */
  expand: function(by) {
  },
  
  /*
   * Feathers the edges of the selection.
 *
   * @param {UnitValue} by The amount to feather the edge.
   */
  feather: function(by) {
  },
  
  /*
   * Grows the selection to include all adjacent pixels falling within the specified tolerance range.
 *
   * @param {int} tolerance The tolerance range. Range: 0 to 255.
   * @param {Boolean} antiAlias If true, anti-aliasing is used.
   */
  grow: function(tolerance, antiAlias) {
  },
  
  /*
   * Inverts the selection.
   */
  invert: function() {
  },
  
  /*
   * Grows the selection to include pixels throughout the image falling within the tolerance range.
 *
   * @param {int} tolerance The tolerance range. Range: 0 to 255.
   * @param {Boolean} antiAlias If true, anti-aliasing is used.
   */
  similar: function(tolerance, antiAlias) {
  },
  
  /*
   * Cleans up stray pixels left inside or outside a color-based selection (within the radius specified in pixels).
 *
   * @param {int} radius The sample radius in pixels. Range: 0 to 100.
   */
  smooth: function(radius) {
  },
  
  /*
   * Saves the selection as a channel.
 *
   * @param {Channel} into The channel to save the selection to.
   * @param {SelectionType} [combination] How to add the selection to the existing contents of the channel.
   */
  store: function(into, combination) {
  },
  
  /*
   * Loads the selection from the specified channel.
 *
   * @param {Channel} from The channel to load the selection from.
   * @param {SelectionType} [combination] How to combine the channel contents with the existing selection.
   * @param {Boolean} [inverting] If true, selects the inverse of the channel contents.
   */
  load: function(from, combination, inverting) {
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
   * Moves the boundary of selection relative to its current position.
 *
   * @param {UnitValue} [deltaX] The amount to move the object horizontally.
   * @param {UnitValue} [deltaY] The amount to move the object vertically.
   */
  translateBoundary: function(deltaX, deltaY) {
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
   * Rotates the boundary of the selection.
 *
   * @param {Number} angle The rotation angle (in degrees)
   * @param {AnchorPosition} [anchor] The point to rotate about.
   */
  rotateBoundary: function(angle, anchor) {
  },
  
  /*
   * Resizes the selected area to the specified dimensions and anchor position.
 *
   * @param {Number} [horizontal] The amount to scale the selection horizontally (as a percentage).
   * @param {Number} [vertical] The amount to scale the selection vertically (as a percentage).
   * @param {AnchorPosition} [anchor] The point to scale around.
   */
  resize: function(horizontal, vertical, anchor) {
  },
  
  /*
   * Scales the boundary of the selection.
 *
   * @param {Number} [horizontal] The amount to scale the object horizontally (as a percentage).
   * @param {Number} [vertical] The amount to scale the object vertically (as a percentage).
   * @param {AnchorPosition} [anchor] The point to scale around.
   */
  resizeBoundary: function(horizontal, vertical, anchor) {
  },
  
  /*
   * Makes this selection item the workpath for this document.
 *
   * @param {Number} [tolerance] The tolerance in pixels.
   */
  makeWorkPath: function(tolerance) {
  },
  
};
