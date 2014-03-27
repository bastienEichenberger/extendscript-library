/*
 * [object Object]
 */
var ScriptUIGraphics = {
  /*
   * undefined
   * @type {Object}
   */
  BrushType: undefined,
  
  /*
   * undefined
   * @type {Object}
   */
  PenType: undefined,
  
  /*
   * The background color for containers; for non-containers, the parent background color.
   * @type {ScriptUIBrush}
   */
  backgroundColor: undefined,
  
  /*
   * The background color for containers when disabled or inactive; for non-containers, the parent background color.
   * @type {ScriptUIBrush}
   */
  disabledBackgroundColor: undefined,
  
  /*
   * The text color when the element is disabled or inactive.
   * @type {ScriptUIPen}
   */
  disabledForegroundColor: undefined,
  
  /*
   * The default font to use for displaying text.
   * @type {ScriptUIFont}
   */
  font: undefined,
  
  /*
   * The text color.
   * @type {ScriptUIPen}
   */
  foregroundColor: undefined,
  
  /*
   * The current drawing path, encapsulated in a path object.
   * @type {ScriptUIPath}
   */
  currentPath: undefined,
  
  /*
   * The current position in the current drawing path.
   * @type {Point}
   */
  currentPoint: undefined,
  
  /*
   * Creates a new painting brush object.
 *
   * @param {Number} type The brush type, solid or theme.
   * @param {undefined} color The brush color.
   * @returns {ScriptUIBrush}
   */
  newBrush: function(type, color) {
    return new ScriptUIBrush();
  },
  
  /*
   * Creates a new drawing pen object.
 *
   * @param {Number} type The pen type, solid or theme.
   * @param {undefined} color The pen color.
   * @param {Number} width The width of the pen line in pixels.
   * @returns {ScriptUIPen}
   */
  newPen: function(type, color, width) {
    return new ScriptUIPen();
  },
  
  /*
   * Creates a new, empty path object.
   * @returns {ScriptUIPath}
   */
  newPath: function() {
    return new ScriptUIPath();
  },
  
  /*
   * Closes the current path.
   */
  closePath: function() {
  },
  
  /*
   * undefined
 *
   * @param {Number} x The X coordinate for the new point, relative to the origin of this element.
   * @param {Number} y The Y coordinate for the new point, relative to the origin of this element.
   * @returns {Point}
   */
  moveTo: function(x, y) {
    return new Point();
  },
  
  /*
   * undefined
 *
   * @param {Number} x The X coordinate for the destination point, relative to the origin of this element.
   * @param {Number} y The Y coordinate for the destination point, relative to the origin of this element.
   * @returns {Point}
   */
  lineTo: function(x, y) {
    return new Point();
  },
  
  /*
   * undefined
 *
   * @param {Number} left The left coordinate relative to the origin of this element.
   * @param {Number} top The top coordinate relative to the origin of this element.
   * @param {Number} width The width in pixels.
   * @param {Number} height The height in pixels.
   * @returns {Point}
   */
  rectPath: function(left, top, width, height) {
    return new Point();
  },
  
  /*
   * undefined
 *
   * @param {Number} left The left coordinate of the region, relative to the origin of this element.
   * @param {Number} top The top coordinate of the region, relative to the origin of this element.
   * @param {Number} width The width of the region in pixels.
   * @param {Number} height The height of the region in pixels.
   * @returns {Point}
   */
  ellipsePath: function(left, top, width, height) {
    return new Point();
  },
  
  /*
   * Strokes the path segments of a path with a given drawing pen.
 *
   * @param {ScriptUIPen} pen The drawing pen that defines the color and line width.
   * @param {ScriptUIPath} [path] undefined
   */
  strokePath: function(pen, path) {
  },
  
  /*
   * Fills a path using a given painting brush.
 *
   * @param {ScriptUIBrush} brush The brush object that defines the fill color.
   * @param {ScriptUIPath} [path] undefined
   */
  fillPath: function(brush, path) {
  },
  
  /*
   * Draws a focus ring within a region of this element.
 *
   * @param {Number} left The left coordinate of the region.
   * @param {Number} top The top coordinate of the region.
   * @param {Number} width The width of the region in pixels.
   * @param {Number} height The height of the region in pixels.
   */
  drawFocusRing: function(left, top, width, height) {
  },
  
  /*
   * Draws an image within a given region of the element.
 *
   * @param {ScriptUIImage} image The image to draw.
   * @param {Number} left The left coordinate of the region, relative to the origin of this element.
   * @param {Number} top The top coordinate of the region, relative to the origin of this element.
   * @param {Number} [width] The width in pixels. If provided, the image is stretched or shrunk to fit. If omitted, uses the original image width.
   * @param {Number} [height] The height in pixels. If provided, the image is stretched or shrunk to fit. If omitted, uses the original image height.
   */
  drawImage: function(image, left, top, width, height) {
  },
  
  /*
   * Draw the platform-specific control associated with this element.
   */
  drawOSControl: function() {
  },
  
  /*
   * Draw a string of text starting at a given point in this element, using a given drawing pen and font.
 *
   * @param {String} text The text string.
   * @param {ScriptUIPen} pen The drawing pen to use.
   * @param {Number} x The left coordinate, relative to the origin of this element.
   * @param {Number} y The top coordinate, relative to the origin of this element.
   * @param {ScriptUIFont} [font] undefined
   */
  drawString: function(text, pen, x, y, font) {
  },
  
  /*
   * Calculates the size needed to display a string using the given font.
 *
   * @param {String} text The text string to measure.
   * @param {ScriptUIFont} [font] undefined
   * @param {Number} [boundingWidth] The bounding width.
   * @returns {Dimension}
   */
  measureString: function(text, font, boundingWidth) {
    return new Dimension();
  },
  
};
