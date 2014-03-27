/*
 * A table row.
 */
var Row = {
  /*
   * The name of the Row.
   * @type {String}
   */
  name: undefined,
  
  /*
   * The index of the Row within its containing object.
   * @type {Number}
   */
  index: undefined,
  
  /*
   * The number of rows that the object spans.
   * @type {Number}
   */
  rowSpan: undefined,
  
  /*
   * The number of columns that the object spans.
   * @type {Number}
   */
  columnSpan: undefined,
  
  /*
   * If true, the story has overset text.
   * @type {Boolean}
   */
  overflows: undefined,
  
  /*
   * The parent row of the cell.
   * @type {Row}
   */
  parentRow: undefined,
  
  /*
   * The parent column of the cell.
   * @type {Column}
   */
  parentColumn: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the Row (a Table).
   * @type {Table}
   */
  parent: undefined,
  
  /*
   * A collection of table cells.
   * @type {Cells}
   */
  cells: undefined,
  
  /*
   * A collection of table rows.
   * @type {Rows}
   */
  rows: undefined,
  
  /*
   * A collection of table columns.
   * @type {Columns}
   */
  columns: undefined,
  
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
   * The height of the Row. For a table or column, specifies the sum of the row heights.
   * @type {Mixed}
   */
  height: undefined,
  
  /*
   * The width of the Row. For a table or row, specifies the sum of the column widths.
   * @type {Mixed}
   */
  width: undefined,
  
  /*
   * The text contents. For rows or columns, when specified as a string, the sting populates each cell in the row or column; when specified as an array, the first value in the array populates the left-most cell in the row or the top-most cell in the column; the next value populates the next cell to the right (for rows) or the next lowest cell (for columns), and so on. Can return: String, SpecialCharacters enumerator or Array of Strings or SpecialCharacters enumerators. Can also accept: NothingEnum enumerator or Array of Strings, SpecialCharacters enumerators or NothingEnum enumerators.
   * @type {Mixed}
   */
  contents: undefined,
  
  /*
   * The length (of a linear gradient) or radius (of a radial gradient) applied to the fill of the object.
   * @type {Number}
   */
  gradientFillLength: undefined,
  
  /*
   * The angle of a linear gradient applied to the fill of the object. (Range: -180 to 180)
   * @type {Number}
   */
  gradientFillAngle: undefined,
  
  /*
   * The starting point (in page coordinates) of a gradient applied to the fill of the Row, in the format [x, y].
   * @type {Mixed}
   */
  gradientFillStart: undefined,
  
  /*
   * The top inset of the cell.
   * @type {Mixed}
   */
  topInset: undefined,
  
  /*
   * The left inset of the cell.
   * @type {Mixed}
   */
  leftInset: undefined,
  
  /*
   * The bottom inset of the cell.
   * @type {Mixed}
   */
  bottomInset: undefined,
  
  /*
   * The right inset of the cell.
   * @type {Mixed}
   */
  rightInset: undefined,
  
  /*
   * The swatch (color, gradient, tint, or mixed ink) applied to the fill of the object. Can also accept: String.
   * @type {Swatch}
   */
  fillColor: undefined,
  
  /*
   * The tint (as a percentage) of the fill of the object.
   * @type {Number}
   */
  fillTint: undefined,
  
  /*
   * If true, the fill of the object will overprint.
   * @type {Boolean}
   */
  overprintFill: undefined,
  
  /*
   * If true, draws a diagonal line starting from the top left.
   * @type {Boolean}
   */
  topLeftDiagonalLine: undefined,
  
  /*
   * If true, draws a diagonal line starting from the top right.
   * @type {Boolean}
   */
  topRightDiagonalLine: undefined,
  
  /*
   * If true, draws the diagonal line in front of cell contents.
   * @type {Boolean}
   */
  diagonalLineInFront: undefined,
  
  /*
   * The diagonal line stroke weight.
   * @type {Mixed}
   */
  diagonalLineStrokeWeight: undefined,
  
  /*
   * The stroke type of the diagonal line(s). Can also accept: String.
   * @type {StrokeStyle}
   */
  diagonalLineStrokeType: undefined,
  
  /*
   * The diagonal line color, specified as a swatch.
   * @type {Swatch}
   */
  diagonalLineStrokeColor: undefined,
  
  /*
   * The diagonal line tint (as a percentage). (Range: 0 to 100)
   * @type {Number}
   */
  diagonalLineStrokeTint: undefined,
  
  /*
   * If true, the diagonal line stroke will overprint.
   * @type {Boolean}
   */
  diagonalLineStrokeOverprint: undefined,
  
  /*
   * The swatch (color, gradient, tint, or mixed ink) applied to the gap of the diagonal line stroke. Note: Not valid when diagonal line stroke type is solid.
   * @type {Swatch}
   */
  diagonalLineStrokeGapColor: undefined,
  
  /*
   * The tint (as a percentage) of the diagonal line stroke gap color. Note: Not valid when diagonal line stroke type is solid.
   * @type {Number}
   */
  diagonalLineStrokeGapTint: undefined,
  
  /*
   * If true, the stroke gap of the diagonal line will overprint. Note: Not valid when diagonal line stroke type is solid.
   * @type {Boolean}
   */
  diagonalLineStrokeGapOverprint: undefined,
  
  /*
   * If true, clips the cell's content to width and height of the cell.
   * @type {Boolean}
   */
  clipContentToCell: undefined,
  
  /*
   * The distance between the baseline of the text and the top inset of the cell.
   * @type {FirstBaseline}
   */
  firstBaselineOffset: undefined,
  
  /*
   * The vertical alignment of cell.
   * @type {VerticalJustification}
   */
  verticalJustification: undefined,
  
  /*
   * The maximum space that can be added between paragraphs in a cell. Note: Valid only when vertical justification is justified.
   * @type {Mixed}
   */
  paragraphSpacingLimit: undefined,
  
  /*
   * The space between the baseline of the text and the top inset of the frame or cell.
   * @type {Mixed}
   */
  minimumFirstBaselineOffset: undefined,
  
  /*
   * The rotation angle (in degrees) of the cell, specified as one of the following values: 0, 90, 180, or 270.
   * @type {Number}
   */
  rotationAngle: undefined,
  
  /*
   * The stroke weight of the left edge border stroke.
   * @type {Mixed}
   */
  leftEdgeStrokeWeight: undefined,
  
  /*
   * The stroke type of the left edge. Can also accept: String.
   * @type {StrokeStyle}
   */
  leftEdgeStrokeType: undefined,
  
  /*
   * The swatch (color, gradient, tint, or mixed ink) applied to the left edge border stroke.
   * @type {Swatch}
   */
  leftEdgeStrokeColor: undefined,
  
  /*
   * The tint (as a percentage) of the left edge border stroke. (Range: 0 to 100)
   * @type {Number}
   */
  leftEdgeStrokeTint: undefined,
  
  /*
   * If true, the left edge border stroke will overprint.
   * @type {Boolean}
   */
  leftEdgeStrokeOverprint: undefined,
  
  /*
   * The swatch (color, gradient, tint, or mixed ink) applied to the gap of the left edge border stroke. Note: Not valid when left edge stroke type is solid.
   * @type {Swatch}
   */
  leftEdgeStrokeGapColor: undefined,
  
  /*
   * The tint (as a percentage) of the left edge border stroke gap color. (Range: 0 to 100) Note: Not valid when left edge stroke type is solid.
   * @type {Number}
   */
  leftEdgeStrokeGapTint: undefined,
  
  /*
   * If true, the gap color of the left edge border stroke will overprint. Note: Not valid when left edge stroke type is solid.
   * @type {Boolean}
   */
  leftEdgeStrokeGapOverprint: undefined,
  
  /*
   * The stroke weight of the top edge border stroke.
   * @type {Mixed}
   */
  topEdgeStrokeWeight: undefined,
  
  /*
   * The stroke type of the top edge. Can also accept: String.
   * @type {StrokeStyle}
   */
  topEdgeStrokeType: undefined,
  
  /*
   * The swatch (color, gradient, tint, or mixed ink) applied to the top edge border stroke.
   * @type {Swatch}
   */
  topEdgeStrokeColor: undefined,
  
  /*
   * The tint (as a percentage) of the top edge border stroke. (Range: 0 to 100)
   * @type {Number}
   */
  topEdgeStrokeTint: undefined,
  
  /*
   * If true, the top edge border stroke will overprint.
   * @type {Boolean}
   */
  topEdgeStrokeOverprint: undefined,
  
  /*
   * The swatch (color, gradient, tint, or mixed ink) applied to the gap of the top edge border stroke. Note: Not valid when top edge stroke type is solid.
   * @type {Swatch}
   */
  topEdgeStrokeGapColor: undefined,
  
  /*
   * The tint (as a percentage) of the top edge border stroke gap color. (Range: 0 to 100) Note: Not valid when top edge stroke type is solid.
   * @type {Number}
   */
  topEdgeStrokeGapTint: undefined,
  
  /*
   * If true, the gap color of the top edge border stroke will overprint. Note: Not valid when top edge stroke type is solid.
   * @type {Boolean}
   */
  topEdgeStrokeGapOverprint: undefined,
  
  /*
   * The stroke weight of the right edge border stroke.
   * @type {Mixed}
   */
  rightEdgeStrokeWeight: undefined,
  
  /*
   * The stroke type of the right edge. Can also accept: String.
   * @type {StrokeStyle}
   */
  rightEdgeStrokeType: undefined,
  
  /*
   * The color, specified as a swatch, of the right edge border stroke.
   * @type {Swatch}
   */
  rightEdgeStrokeColor: undefined,
  
  /*
   * The tint (as a percentage) of the right edge border stroke. (Range: 0 to 100)
   * @type {Number}
   */
  rightEdgeStrokeTint: undefined,
  
  /*
   * If true, the right edge border stroke will overprint.
   * @type {Boolean}
   */
  rightEdgeStrokeOverprint: undefined,
  
  /*
   * The swatch (color, gradient, tint, or mixed ink) applied to the gap of the right edge border stroke. Note: Not valid when right edge stroke type is solid.
   * @type {Swatch}
   */
  rightEdgeStrokeGapColor: undefined,
  
  /*
   * The tint (as a percentage) of the right edge border stroke gap color. (Range: 0 to 100) Note: Not valid when right edge stroke type is solid.
   * @type {Number}
   */
  rightEdgeStrokeGapTint: undefined,
  
  /*
   * If true, the gap color of the right edge border stroke will overprint. Note: Not valid when right edge stroke type is solid.
   * @type {Boolean}
   */
  rightEdgeStrokeGapOverprint: undefined,
  
  /*
   * The stroke weight of the bottom edge border stroke.
   * @type {Mixed}
   */
  bottomEdgeStrokeWeight: undefined,
  
  /*
   * The stroke type of the bottom edge. Can also accept: String.
   * @type {StrokeStyle}
   */
  bottomEdgeStrokeType: undefined,
  
  /*
   * The swatch (color, gradient, tint, or mixed ink) applied to the bottom edge border stroke.
   * @type {Swatch}
   */
  bottomEdgeStrokeColor: undefined,
  
  /*
   * The tint (as a percentage) of the bottom edge border stroke.
   * @type {Number}
   */
  bottomEdgeStrokeTint: undefined,
  
  /*
   * If true, the bottom edge border stroke will overprint.
   * @type {Boolean}
   */
  bottomEdgeStrokeOverprint: undefined,
  
  /*
   * The swatch (color, gradient, tint, or mixed ink) applied to the gap of the bottom edge border stroke. Note: Not valid when bottom edge stroke type is solid.
   * @type {Swatch}
   */
  bottomEdgeStrokeGapColor: undefined,
  
  /*
   * The tint (as a percentage) of the bottom edge border stroke gap color. (Range: 0 to 100) Note: Not valid when bottom edge stroke type is solid.
   * @type {Number}
   */
  bottomEdgeStrokeGapTint: undefined,
  
  /*
   * If true, the gap color of the bottom edge border stroke will overprint. Note: Not valid when bottom edge stroke type is solid.
   * @type {Boolean}
   */
  bottomEdgeStrokeGapOverprint: undefined,
  
  /*
   * The stroke weight of the inner row border strokes.
   * @type {Mixed}
   */
  innerRowStrokeWeight: undefined,
  
  /*
   * The stroke type of the inner row. Can also accept: String.
   * @type {StrokeStyle}
   */
  innerRowStrokeType: undefined,
  
  /*
   * The color, specified as a swatch, of the inner row border stroke.
   * @type {Swatch}
   */
  innerRowStrokeColor: undefined,
  
  /*
   * The tint (as a percentage) of the inner row border stroke. (Range: 0 to 100)
   * @type {Number}
   */
  innerRowStrokeTint: undefined,
  
  /*
   * If true, the inner row border stroke will overprint.
   * @type {Boolean}
   */
  innerRowStrokeOverprint: undefined,
  
  /*
   * The swatch (color, gradient, tint, or mixed ink) applied to the gap of the inner row border stroke. Note: Not valid when inner row stroke type is solid.
   * @type {Swatch}
   */
  innerRowStrokeGapColor: undefined,
  
  /*
   * The tint (as a percentage) of the inner row border stroke. (Range: 0 to 100) Note: Not valid when inner row stroke type is solid.
   * @type {Number}
   */
  innerRowStrokeGapTint: undefined,
  
  /*
   * If true, the gap color of the inner row border stroke will overprint. Note: Not valid when inner row stroke type is solid.
   * @type {Boolean}
   */
  innerRowStrokeGapOverprint: undefined,
  
  /*
   * The stroke weight of the inner column border stroke.
   * @type {Mixed}
   */
  innerColumnStrokeWeight: undefined,
  
  /*
   * The stroke type of the inner column. Can also accept: String.
   * @type {StrokeStyle}
   */
  innerColumnStrokeType: undefined,
  
  /*
   * The color, specified as a swatch, of the inner column border stroke.
   * @type {Swatch}
   */
  innerColumnStrokeColor: undefined,
  
  /*
   * The tint (as a percentage) of the inner column border stroke. (Range: 0 to 100)
   * @type {Number}
   */
  innerColumnStrokeTint: undefined,
  
  /*
   * If true, the inner column border stroke will overprint.
   * @type {Boolean}
   */
  innerColumnStrokeOverprint: undefined,
  
  /*
   * The swatch (color, gradient, tint, or mixed ink) applied to the gap of the inner column border stroke. Note: Not valid when inner column stroke type is solid.
   * @type {Swatch}
   */
  innerColumnStrokeGapColor: undefined,
  
  /*
   * The tint (as a percentage) of the inner column border stroke gap color. (Range: 0 to 100) Note: Not valid when inner column stroke type is solid.
   * @type {Number}
   */
  innerColumnStrokeGapTint: undefined,
  
  /*
   * If true, the gap color of the inner column border stroke will overprint. Note: Not valid when inner column stroke type is solid.
   * @type {Boolean}
   */
  innerColumnStrokeGapOverprint: undefined,
  
  /*
   * The minimum height of the cells in the Row. Note: When auto grow is true, cells can automatically grow larger than this amount when content is added. Also, the minimum height can affect redistribution.
   * @type {Mixed}
   */
  minimumHeight: undefined,
  
  /*
   * The maximum height to which cells in the Row may grow. Note: The maximum height cannot be exceeded even when auto grow is set to true. Also, the maximum height can affect redistribution.
   * @type {Mixed}
   */
  maximumHeight: undefined,
  
  /*
   * If true, keeps the row with the next row when the table is split across text frames or pages.
   * @type {Boolean}
   */
  keepWithNextRow: undefined,
  
  /*
   * Indicates where to start the row.
   * @type {StartParagraph}
   */
  startRow: undefined,
  
  /*
   * If true, the height of the cell or the cells in the Row can increase or decrease automatically to fit cell content. Note: Allows cells to grow or shrink to the maximum or minimum height, if specified.
   * @type {Boolean}
   */
  autoGrow: undefined,
  
  /*
   * The row type.
   * @type {RowTypes}
   */
  rowType: undefined,
  
  /*
   * The direction of the text in the cell.
   * @type {HorizontalOrVertical}
   */
  writingDirection: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Recomposes the text in the Row.
   */
  recompose: function() {
  },
  
  /*
   * Finds text that matches the find what value.
 *
   * @param {Boolean} [reverseOrder] If true, returns the results in reverse order. 
   * @returns {Text}
   */
  findText: function(reverseOrder) {
    return new Text();
  },
  
  /*
   * Finds text that matches the find what value and replaces the text with the change to value.
 *
   * @param {Boolean} [reverseOrder] If true, returns the results in reverse order. 
   * @returns {Text}
   */
  changeText: function(reverseOrder) {
    return new Text();
  },
  
  /*
   * Finds text that matches the find what value.
 *
   * @param {Boolean} [reverseOrder] If true, returns the results in reverse order. 
   * @returns {Text}
   */
  findGrep: function(reverseOrder) {
    return new Text();
  },
  
  /*
   * Finds text that matches the find what value and replaces the text with the change to value.
 *
   * @param {Boolean} [reverseOrder] If true, returns the results in reverse order. 
   * @returns {Text}
   */
  changeGrep: function(reverseOrder) {
    return new Text();
  },
  
  /*
   * Finds glyphs that match the find what value.
 *
   * @param {Boolean} [reverseOrder] If true, returns the results in reverse order. 
   * @returns {Text}
   */
  findGlyph: function(reverseOrder) {
    return new Text();
  },
  
  /*
   * Finds glyphs that match the find what value and replaces the glyphs with the change to value.
 *
   * @param {Boolean} [reverseOrder] If true, returns the results in reverse order. 
   * @returns {Text}
   */
  changeGlyph: function(reverseOrder) {
    return new Text();
  },
  
  /*
   * Finds text that matches the find character type value.
 *
   * @param {Boolean} [reverseOrder] If true, returns the results in reverse order. 
   * @returns {Text}
   */
  findTransliterate: function(reverseOrder) {
    return new Text();
  },
  
  /*
   * Finds text that matches the find character type value and replaces the text with the change character type value.
 *
   * @param {Boolean} [reverseOrder] If true, returns the results in reverse order. 
   * @returns {Text}
   */
  changeTransliterate: function(reverseOrder) {
    return new Text();
  },
  
  /*
   * Deletes the Row.
   */
  remove: function() {
  },
  
  /*
   * Merges the cells.
 *
   * @param {Mixed} [with] The cell(s) to merge with. Can accept: Cell, Row or Column. 
   * @returns {Cell}
   */
  merge: function(with) {
    return new Cell();
  },
  
  /*
   * Unmerges all merged cells in the Row.
   * @returns {Cell}
   */
  unmerge: function() {
    return new Cell();
  },
  
  /*
   * Splits the cell along the specified axis.
 *
   * @param {HorizontalOrVertical} using The direction in which to split the cell.
   */
  split: function(using) {
  },
  
  /*
   * Redistributes the specified range of Rows so that the Rows have a uniform size. Note: The maximum or minimum height or width specified for some of the cells in the range may prevent them from being exactly even.
 *
   * @param {HorizontalOrVertical} using The direction in which to redistribute.
   * @param {Mixed} [thru] The last Row in the range. Can accept: Cell, Column or Row. 
   */
  redistribute: function(using, thru) {
  },
  
  /*
   * Selects the object.
 *
   * @param {SelectionOptions} [existingSelection] The selection status of the Row in relation to previously selected objects. 
   */
  select: function(existingSelection) {
  },
  
  /*
   * Converts text to outlines. Each line of text becomes a polygon object. When the converted text is a single letter that has no internal spaces or detached parts, the polygon contains only a single path. Note: To determine whether a font allows the creation of outlines, see allow outlines.
 *
   * @param {Boolean} [deleteOriginal] If true, deletes the original text. If false, creates the outlines as separate object(s) on top of the text.  
   * @returns {PageItem}
   */
  createOutlines: function(deleteOriginal) {
    return new PageItem();
  },
  
  /*
   * Generates a string which, if executed, will return the Row.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {Row}
   */
  getElements: function() {
    return new Row();
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
