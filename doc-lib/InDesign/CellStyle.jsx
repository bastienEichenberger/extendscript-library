/*
 * A cell style.
 */
var CellStyle = {
  /*
   * The unique ID of the CellStyle.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the CellStyle (a Document, Application or CellStyleGroup).
   * @type {Mixed}
   */
  parent: undefined,
  
  /*
   * The index of the CellStyle within its containing object.
   * @type {Number}
   */
  index: undefined,
  
  /*
   * A collection of events.
   * @type {Events}
   */
  events: undefined,
  
  /*
   * A collection of event listeners.
   * @type {EventListeners}
   */
  eventListeners: undefined,
  
  /*
   * The style that this style is based on. Can return: CellStyle or String.
   * @type {Mixed}
   */
  basedOn: undefined,
  
  /*
   * The paragraph style applied to the text. Can return: ParagraphStyle or NothingEnum enumerator. Can also accept: String.
   * @type {Mixed}
   */
  appliedParagraphStyle: undefined,
  
  /*
   * The length (of a linear gradient) or radius (of a radial gradient) applied to the fill of the object. Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  gradientFillLength: undefined,
  
  /*
   * The angle of a linear gradient applied to the fill of the object. (Range: -180 to 180). Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  gradientFillAngle: undefined,
  
  /*
   * The starting point (in page coordinates) of a gradient applied to the fill of the CellStyle, in the format [x, y]. Can return: Array of 2 Units or NothingEnum enumerator.
   * @type {Mixed}
   */
  gradientFillStart: undefined,
  
  /*
   * The top inset of the cell. Can return: Unit or NothingEnum enumerator.
   * @type {Mixed}
   */
  topInset: undefined,
  
  /*
   * The left inset of the cell. Can return: Unit or NothingEnum enumerator.
   * @type {Mixed}
   */
  leftInset: undefined,
  
  /*
   * The bottom inset of the cell. Can return: Unit or NothingEnum enumerator.
   * @type {Mixed}
   */
  bottomInset: undefined,
  
  /*
   * The right inset of the cell. Can return: Unit or NothingEnum enumerator.
   * @type {Mixed}
   */
  rightInset: undefined,
  
  /*
   * The swatch (color, gradient, tint, or mixed ink) applied to the fill of the object. Can return: Swatch or NothingEnum enumerator. Can also accept: String.
   * @type {Mixed}
   */
  fillColor: undefined,
  
  /*
   * The tint (as a percentage) of the fill of the object. Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  fillTint: undefined,
  
  /*
   * If true, the fill of the object will overprint. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  overprintFill: undefined,
  
  /*
   * If true, draws a diagonal line starting from the top left. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  topLeftDiagonalLine: undefined,
  
  /*
   * If true, draws a diagonal line starting from the top right. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  topRightDiagonalLine: undefined,
  
  /*
   * If true, draws the diagonal line in front of cell contents. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  diagonalLineInFront: undefined,
  
  /*
   * The diagonal line stroke weight. Can return: Unit or NothingEnum enumerator.
   * @type {Mixed}
   */
  diagonalLineStrokeWeight: undefined,
  
  /*
   * The stroke type of the diagonal line(s). Can return: StrokeStyle or NothingEnum enumerator. Can also accept: String.
   * @type {Mixed}
   */
  diagonalLineStrokeType: undefined,
  
  /*
   * The diagonal line color, specified as a swatch. Can return: Swatch or NothingEnum enumerator.
   * @type {Mixed}
   */
  diagonalLineStrokeColor: undefined,
  
  /*
   * The diagonal line tint (as a percentage). (Range: 0 to 100). Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  diagonalLineStrokeTint: undefined,
  
  /*
   * If true, the diagonal line stroke will overprint. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  diagonalLineStrokeOverprint: undefined,
  
  /*
   * The swatch (color, gradient, tint, or mixed ink) applied to the gap of the diagonal line stroke. Note: Not valid when diagonal line stroke type is solid. Can return: Swatch or NothingEnum enumerator.
   * @type {Mixed}
   */
  diagonalLineStrokeGapColor: undefined,
  
  /*
   * The tint (as a percentage) of the diagonal line stroke gap color. Note: Not valid when diagonal line stroke type is solid. Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  diagonalLineStrokeGapTint: undefined,
  
  /*
   * If true, the stroke gap of the diagonal line will overprint. Note: Not valid when diagonal line stroke type is solid. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  diagonalLineStrokeGapOverprint: undefined,
  
  /*
   * If true, clips the cell's content to width and height of the cell. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  clipContentToCell: undefined,
  
  /*
   * The distance between the baseline of the text and the top inset of the cell. Can return: FirstBaseline enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  firstBaselineOffset: undefined,
  
  /*
   * The vertical alignment of cell. Can return: VerticalJustification enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  verticalJustification: undefined,
  
  /*
   * The maximum space that can be added between paragraphs in a cell. Note: Valid only when vertical justification is justified. Can return: Unit or NothingEnum enumerator.
   * @type {Mixed}
   */
  paragraphSpacingLimit: undefined,
  
  /*
   * The space between the baseline of the text and the top inset of the frame or cell. Can return: Unit (0 - 8640 points) or NothingEnum enumerator.
   * @type {Mixed}
   */
  minimumFirstBaselineOffset: undefined,
  
  /*
   * The rotation angle (in degrees) of the cell, specified as one of the following values: 0, 90, 180, or 270. Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  rotationAngle: undefined,
  
  /*
   * The stroke weight of the left edge border stroke. Can return: Unit or NothingEnum enumerator.
   * @type {Mixed}
   */
  leftEdgeStrokeWeight: undefined,
  
  /*
   * The stroke type of the left edge. Can return: StrokeStyle or NothingEnum enumerator. Can also accept: String.
   * @type {Mixed}
   */
  leftEdgeStrokeType: undefined,
  
  /*
   * The swatch (color, gradient, tint, or mixed ink) applied to the left edge border stroke. Can return: Swatch or NothingEnum enumerator.
   * @type {Mixed}
   */
  leftEdgeStrokeColor: undefined,
  
  /*
   * The tint (as a percentage) of the left edge border stroke. (Range: 0 to 100). Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  leftEdgeStrokeTint: undefined,
  
  /*
   * If true, the left edge border stroke will overprint. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  leftEdgeStrokeOverprint: undefined,
  
  /*
   * The swatch (color, gradient, tint, or mixed ink) applied to the gap of the left edge border stroke. Note: Not valid when left edge stroke type is solid. Can return: Swatch or NothingEnum enumerator.
   * @type {Mixed}
   */
  leftEdgeStrokeGapColor: undefined,
  
  /*
   * The tint (as a percentage) of the left edge border stroke gap color. (Range: 0 to 100) Note: Not valid when left edge stroke type is solid. Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  leftEdgeStrokeGapTint: undefined,
  
  /*
   * If true, the gap color of the left edge border stroke will overprint. Note: Not valid when left edge stroke type is solid. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  leftEdgeStrokeGapOverprint: undefined,
  
  /*
   * The stroke weight of the top edge border stroke. Can return: Unit or NothingEnum enumerator.
   * @type {Mixed}
   */
  topEdgeStrokeWeight: undefined,
  
  /*
   * The stroke type of the top edge. Can return: StrokeStyle or NothingEnum enumerator. Can also accept: String.
   * @type {Mixed}
   */
  topEdgeStrokeType: undefined,
  
  /*
   * The swatch (color, gradient, tint, or mixed ink) applied to the top edge border stroke. Can return: Swatch or NothingEnum enumerator.
   * @type {Mixed}
   */
  topEdgeStrokeColor: undefined,
  
  /*
   * The tint (as a percentage) of the top edge border stroke. (Range: 0 to 100). Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  topEdgeStrokeTint: undefined,
  
  /*
   * If true, the top edge border stroke will overprint. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  topEdgeStrokeOverprint: undefined,
  
  /*
   * The swatch (color, gradient, tint, or mixed ink) applied to the gap of the top edge border stroke. Note: Not valid when top edge stroke type is solid. Can return: Swatch or NothingEnum enumerator.
   * @type {Mixed}
   */
  topEdgeStrokeGapColor: undefined,
  
  /*
   * The tint (as a percentage) of the top edge border stroke gap color. (Range: 0 to 100) Note: Not valid when top edge stroke type is solid. Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  topEdgeStrokeGapTint: undefined,
  
  /*
   * If true, the gap color of the top edge border stroke will overprint. Note: Not valid when top edge stroke type is solid. . Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  topEdgeStrokeGapOverprint: undefined,
  
  /*
   * The stroke weight of the right edge border stroke. Can return: Unit or NothingEnum enumerator.
   * @type {Mixed}
   */
  rightEdgeStrokeWeight: undefined,
  
  /*
   * The stroke type of the right edge. Can return: StrokeStyle or NothingEnum enumerator. Can also accept: String.
   * @type {Mixed}
   */
  rightEdgeStrokeType: undefined,
  
  /*
   * The color, specified as a swatch, of the right edge border stroke. Can return: Swatch or NothingEnum enumerator.
   * @type {Mixed}
   */
  rightEdgeStrokeColor: undefined,
  
  /*
   * The tint (as a percentage) of the right edge border stroke. (Range: 0 to 100). Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  rightEdgeStrokeTint: undefined,
  
  /*
   * If true, the right edge border stroke will overprint. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  rightEdgeStrokeOverprint: undefined,
  
  /*
   * The swatch (color, gradient, tint, or mixed ink) applied to the gap of the right edge border stroke. Note: Not valid when right edge stroke type is solid. Can return: Swatch or NothingEnum enumerator.
   * @type {Mixed}
   */
  rightEdgeStrokeGapColor: undefined,
  
  /*
   * The tint (as a percentage) of the right edge border stroke gap color. (Range: 0 to 100) Note: Not valid when right edge stroke type is solid. Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  rightEdgeStrokeGapTint: undefined,
  
  /*
   * If true, the gap color of the right edge border stroke will overprint. Note: Not valid when right edge stroke type is solid. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  rightEdgeStrokeGapOverprint: undefined,
  
  /*
   * The stroke weight of the bottom edge border stroke. Can return: Unit or NothingEnum enumerator.
   * @type {Mixed}
   */
  bottomEdgeStrokeWeight: undefined,
  
  /*
   * The stroke type of the bottom edge. Can return: StrokeStyle or NothingEnum enumerator. Can also accept: String.
   * @type {Mixed}
   */
  bottomEdgeStrokeType: undefined,
  
  /*
   * The swatch (color, gradient, tint, or mixed ink) applied to the bottom edge border stroke. Can return: Swatch or NothingEnum enumerator.
   * @type {Mixed}
   */
  bottomEdgeStrokeColor: undefined,
  
  /*
   * The tint (as a percentage) of the bottom edge border stroke. Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  bottomEdgeStrokeTint: undefined,
  
  /*
   * If true, the bottom edge border stroke will overprint. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  bottomEdgeStrokeOverprint: undefined,
  
  /*
   * The swatch (color, gradient, tint, or mixed ink) applied to the gap of the bottom edge border stroke. Note: Not valid when bottom edge stroke type is solid. Can return: Swatch or NothingEnum enumerator.
   * @type {Mixed}
   */
  bottomEdgeStrokeGapColor: undefined,
  
  /*
   * The tint (as a percentage) of the bottom edge border stroke gap color. (Range: 0 to 100) Note: Not valid when bottom edge stroke type is solid. Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  bottomEdgeStrokeGapTint: undefined,
  
  /*
   * If true, the gap color of the bottom edge border stroke will overprint. Note: Not valid when bottom edge stroke type is solid. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  bottomEdgeStrokeGapOverprint: undefined,
  
  /*
   * The name of the style.
   * @type {String}
   */
  name: undefined,
  
  /*
   * A property that can be set to any string.
   * @type {String}
   */
  label: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Deletes the style.
 *
   * @param {CellStyle} [replacingWith] The style to apply in place of the deleted style. 
   */
  remove: function(replacingWith) {
  },
  
  /*
   * Duplicates the CellStyle.
   * @returns {CellStyle}
   */
  duplicate: function() {
    return new CellStyle();
  },
  
  /*
   * Moves the style to the specified location.
 *
   * @param {LocationOptions} to The location relative to the reference object or within the containing object.
   * @param {Mixed} [reference] The reference object. Note: Required when the to parameter specifies before or after. Can accept: ParagraphStyle, ParagraphStyleGroup, CharacterStyle, CharacterStyleGroup, CellStyle, CellStyleGroup, TableStyle, TableStyleGroup, Document or Application. 
   * @returns {CellStyle}
   */
  move: function(to, reference) {
    return new CellStyle();
  },
  
  /*
   * Sets the label to the value associated with the specified key.
 *
   * @param {String} key The key.
   * @param {String} value The value.
   */
  insertLabel: function(key, value) {
  },
  
  /*
   * Gets the label value associated with the specified key.
 *
   * @param {String} key The key.
   * @returns {String}
   */
  extractLabel: function(key) {
    return new String();
  },
  
  /*
   * Generates a string which, if executed, will return the CellStyle.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {CellStyle}
   */
  getElements: function() {
    return new CellStyle();
  },
  
  /*
   * Retrieves the object specifier.
   * @returns {String}
   */
  toSpecifier: function() {
    return new String();
  },
  
  /*
   * Adds an event listener.
 *
   * @param {String} eventType The event type.
   * @param {Mixed} handler The event handler. Can accept: File or JavaScript Function.
   * @param {Boolean} [captures] This parameter is obsolete. 
   * @returns {EventListener}
   */
  addEventListener: function(eventType, handler, captures) {
    return new EventListener();
  },
  
  /*
   * Removes the event listener.
 *
   * @param {String} eventType The registered event type.
   * @param {Mixed} handler The registered event handler. Can accept: File or JavaScript Function.
   * @param {Boolean} [captures] This parameter is obsolete. 
   * @returns {Boolean}
   */
  removeEventListener: function(eventType, handler, captures) {
    return new Boolean();
  },
  
};
