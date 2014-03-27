/*
 * A table style.
 */
var TableStyle = {
  /*
   * The unique ID of the TableStyle.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the TableStyle (a Document, Application or TableStyleGroup).
   * @type {Mixed}
   */
  parent: undefined,
  
  /*
   * The index of the TableStyle within its containing object.
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
   * The name of the TableStyle.
   * @type {String}
   */
  name: undefined,
  
  /*
   * The style that this style is based on. Can return: TableStyle or String.
   * @type {Mixed}
   */
  basedOn: undefined,
  
  /*
   * The order in which to display row and column strokes at corners.
   * @type {StrokeOrderTypes}
   */
  strokeOrder: undefined,
  
  /*
   * The stroke weight of the table's top border stroke.
   * @type {Mixed}
   */
  topBorderStrokeWeight: undefined,
  
  /*
   * The stroke type of the top border. Can also accept: String.
   * @type {StrokeStyle}
   */
  topBorderStrokeType: undefined,
  
  /*
   * The color, specified as a swatch (color, gradient, tint, or mixed ink), of the table's top border stroke.
   * @type {Swatch}
   */
  topBorderStrokeColor: undefined,
  
  /*
   * The tint (as a percentage) of the table's top border stroke. (Range: 0 to 100)
   * @type {Number}
   */
  topBorderStrokeTint: undefined,
  
  /*
   * If true, the top border strokes will overprint.
   * @type {Boolean}
   */
  topBorderStrokeOverprint: undefined,
  
  /*
   * The gap color, specified as a swatch (color, gradient, tint, or mixed ink), of the table's top border stroke. Note: Valid only when top border stroke type is not solid.
   * @type {Swatch}
   */
  topBorderStrokeGapColor: undefined,
  
  /*
   * The tint (as a percentage) of the gap color of the table's top border stroke. (Range: 0 to 100) Note: Valid only when top border stroke type is not solid.
   * @type {Number}
   */
  topBorderStrokeGapTint: undefined,
  
  /*
   * If true, the gap of the top border stroke will overprint. Note: Valid only when top border stroke type is not solid.
   * @type {Boolean}
   */
  topBorderStrokeGapOverprint: undefined,
  
  /*
   * The stroke weight of the left border stroke.
   * @type {Mixed}
   */
  leftBorderStrokeWeight: undefined,
  
  /*
   * The stroke type of the left border. Can also accept: String.
   * @type {StrokeStyle}
   */
  leftBorderStrokeType: undefined,
  
  /*
   * The color, specified as a swatch (color, gradient, tint, or mixed ink), of the left border stroke.
   * @type {Swatch}
   */
  leftBorderStrokeColor: undefined,
  
  /*
   * The tint (as a percentage) of the left border stroke. (Range: 0 to 100)
   * @type {Number}
   */
  leftBorderStrokeTint: undefined,
  
  /*
   * If true, the left border stroke will overprint.
   * @type {Boolean}
   */
  leftBorderStrokeOverprint: undefined,
  
  /*
   * The gap color, specified as a swatch (color, gradient, tint, or mixed ink), of the left border stroke. Note: Valid only when left border stroke type is not solid.
   * @type {Swatch}
   */
  leftBorderStrokeGapColor: undefined,
  
  /*
   * The tint (as a percentage) of the gap color of the left border stroke. (Range: 0 to 100) Note: Valid only when left border stroke type is not solid.
   * @type {Number}
   */
  leftBorderStrokeGapTint: undefined,
  
  /*
   * If true, the gap of the left border stroke will overprint. Note: Valid only when left border stroke type is not solid.
   * @type {Boolean}
   */
  leftBorderStrokeGapOverprint: undefined,
  
  /*
   * The stroke weight of the bottom border stroke.
   * @type {Mixed}
   */
  bottomBorderStrokeWeight: undefined,
  
  /*
   * The stroke type of the bottom border. Can also accept: String.
   * @type {StrokeStyle}
   */
  bottomBorderStrokeType: undefined,
  
  /*
   * The color, specified as a swatch (color, gradient, tint, or mixed ink), of the bottom border stroke.
   * @type {Swatch}
   */
  bottomBorderStrokeColor: undefined,
  
  /*
   * The tint (as a percentage) of the bottom border stroke. (Range: 0 to 100)
   * @type {Number}
   */
  bottomBorderStrokeTint: undefined,
  
  /*
   * If true, the bottom border stroke will overprint.
   * @type {Boolean}
   */
  bottomBorderStrokeOverprint: undefined,
  
  /*
   * The gap color, specified as a swatch (color, gradient, tint, or mixed ink), of the bottom border stroke. Note: Valid only when bottom border stroke type is not solid.
   * @type {Swatch}
   */
  bottomBorderStrokeGapColor: undefined,
  
  /*
   * The tint (as a percentage) of the gap color of the bottom border stroke. (Range: 0 to 100) Note: Valid only when bottom border stroke type is not solid.
   * @type {Number}
   */
  bottomBorderStrokeGapTint: undefined,
  
  /*
   * If true, the gap of the bottom border stroke will overprint. Note: Valid only when bottom border stroke type is not solid.
   * @type {Boolean}
   */
  bottomBorderStrokeGapOverprint: undefined,
  
  /*
   * The stroke weight of the right border stroke.
   * @type {Mixed}
   */
  rightBorderStrokeWeight: undefined,
  
  /*
   * The stroke type of the right border. Can also accept: String.
   * @type {StrokeStyle}
   */
  rightBorderStrokeType: undefined,
  
  /*
   * The color, specified as a swatch (color, gradient, tint, or mixed ink), of the right border stroke.
   * @type {Swatch}
   */
  rightBorderStrokeColor: undefined,
  
  /*
   * The tint (as a percentage) of the right border stroke. (Range: 0 to 100)
   * @type {Number}
   */
  rightBorderStrokeTint: undefined,
  
  /*
   * If true, the right border stroke will overprint.
   * @type {Boolean}
   */
  rightBorderStrokeOverprint: undefined,
  
  /*
   * The gap color, specified as a swatch (color, gradient, tint, or mixed ink), of the right border stroke. Note: Valid only when right border stroke type is not solid.
   * @type {Swatch}
   */
  rightBorderStrokeGapColor: undefined,
  
  /*
   * The tint (as a percentage) of the gap color of the right border stroke. (Range: 0 to 100) Note: Valid only when right border stroke type is not solid.
   * @type {Number}
   */
  rightBorderStrokeGapTint: undefined,
  
  /*
   * If true, the gap color of the right border stroke will overprint. Note: Valid only when right border stroke type is not solid.
   * @type {Boolean}
   */
  rightBorderStrokeGapOverprint: undefined,
  
  /*
   * The space above the table.
   * @type {Mixed}
   */
  spaceBefore: undefined,
  
  /*
   * The space below the table.
   * @type {Mixed}
   */
  spaceAfter: undefined,
  
  /*
   * The number of body rows at the beginning of the table in which to skip border stroke formatting. Note: Valid when start row stroke count is 1 or greater and/or end row stroke count is 1 or greater.
   * @type {Number}
   */
  skipFirstAlternatingStrokeRows: undefined,
  
  /*
   * The number of body rows at the end of the table in which to skip border stroke formatting. Note: Valid when start row stroke count is 1 or greater and/or end row stroke count is 1 or greater.
   * @type {Number}
   */
  skipLastAlternatingStrokeRows: undefined,
  
  /*
   * The number of rows in the first alternating row strokes group.
   * @type {Number}
   */
  startRowStrokeCount: undefined,
  
  /*
   * The color, specified as a swatch (color, gradient, tint, or mixed ink), of row borders in the first alternating row strokes group. Note: Valid when start row stroke count is 1 or greater.
   * @type {Swatch}
   */
  startRowStrokeColor: undefined,
  
  /*
   * The stroke weight of row borders in the first alternating row strokes group. Note: Valid when start row stroke count is 1 or greater.
   * @type {Mixed}
   */
  startRowStrokeWeight: undefined,
  
  /*
   * The stroke type of rows in the first alternating strokes group. Can also accept: String.
   * @type {StrokeStyle}
   */
  startRowStrokeType: undefined,
  
  /*
   * The tint (as a percentage) of the borders in the first alternating row strokes group. (Range: 0 to 100) Note: Valid when start row stroke count is 1 or greater.
   * @type {Number}
   */
  startRowStrokeTint: undefined,
  
  /*
   * If true, the gap color of the row border stroke in the first alternating row strokes group will overprint. Note: Valid when start row stroke count is 1 or greater.
   * @type {Boolean}
   */
  startRowStrokeGapOverprint: undefined,
  
  /*
   * The stroke gap color of row borders in the first alternating row strokes group, specified as a swatch (color, gradient, tint, or mixed ink). Note: Valid when start row stroke count is 1 or greater.
   * @type {Swatch}
   */
  startRowStrokeGapColor: undefined,
  
  /*
   * The tint (as a percentage) of the gap color of row borders in the first alternating rows group. (Range: 0 to 100) Note: Valid when start row stroke count is 1 or greater.
   * @type {Number}
   */
  startRowStrokeGapTint: undefined,
  
  /*
   * If true, the row borders in the first alternating row strokes group will overprint. Note: Valid when start row stroke count is 1 or greater.
   * @type {Boolean}
   */
  startRowStrokeOverprint: undefined,
  
  /*
   * The number of rows in the second alternating row strokes group.
   * @type {Number}
   */
  endRowStrokeCount: undefined,
  
  /*
   * The stroke color, specified as a swatch (color, gradient, tint, or mixed ink), of row borders in the second alternating row strokes group. Note: Valid when end row stroke count is 1 or greater.
   * @type {Swatch}
   */
  endRowStrokeColor: undefined,
  
  /*
   * The stroke weight of row borders in the second alternating row strokes group. Note: Valid when end row stroke count is 1 or greater.
   * @type {Mixed}
   */
  endRowStrokeWeight: undefined,
  
  /*
   * The stroke type of rows in the second alternating strokes group. Can also accept: String.
   * @type {StrokeStyle}
   */
  endRowStrokeType: undefined,
  
  /*
   * The tint (as a percentage) of the row borders in the second alternating strokes group. (Range: 0 to 100) Note: Valid when end row stroke count is 1 or greater.
   * @type {Number}
   */
  endRowStrokeTint: undefined,
  
  /*
   * If true, the rows in the second alternating rows group will overprint. Note: Valid when end row stroke count is 1 or greater.
   * @type {Boolean}
   */
  endRowStrokeOverprint: undefined,
  
  /*
   * The gap color, specified as a swatch (color, gradient, tint, or mixed ink), of row borders in the second alternating rows group. Note: Valid when end row stroke count is 1 or greater.
   * @type {Swatch}
   */
  endRowStrokeGapColor: undefined,
  
  /*
   * The tint (as a percentage) of the gap color of rows in the second alternating strokes group. (Range: 0 to 100) Note: Valid when end row stroke count is 1 or greater and end row stroke type is not solid.
   * @type {Number}
   */
  endRowStrokeGapTint: undefined,
  
  /*
   * If true, the gap of the row borders in the second alternating rows group will overprint. Note: Valid when end row stroke count is 1 or greater.
   * @type {Boolean}
   */
  endRowStrokeGapOverprint: undefined,
  
  /*
   * The number of columns on the left of the table in which to skip border stroke formatting. Note: Valid when start column stroke count is 1 or greater and/or end column stroke count is 1 or greater.
   * @type {Number}
   */
  skipFirstAlternatingStrokeColumns: undefined,
  
  /*
   * The number of columns on the right side of the table in which to skip border stroke formatting. Note: Valid when start column stroke count is 1 or greater and/or end column stroke count is 1 or greater.
   * @type {Number}
   */
  skipLastAlternatingStrokeColumns: undefined,
  
  /*
   * The number of columns in the first alternating column strokes group.
   * @type {Number}
   */
  startColumnStrokeCount: undefined,
  
  /*
   * The stroke color, specified as a swatch (color, gradient, tint, or mixed ink), of column borders in the first alternating column strokes group.
   * @type {Swatch}
   */
  startColumnStrokeColor: undefined,
  
  /*
   * The stroke weight of column borders in the first alternating column strokes group. Note: Valid when start column stroke count is 1 or greater.
   * @type {Mixed}
   */
  startColumnStrokeWeight: undefined,
  
  /*
   * The stroke type of columns in the first alternating strokes group. Can also accept: String.
   * @type {StrokeStyle}
   */
  startColumnStrokeType: undefined,
  
  /*
   * The tint (as a percentage) of column borders in the first alternating column strokes group. (Range: 0 to 100) Note: Valid when start column stroke count is 1 or greater.
   * @type {Number}
   */
  startColumnStrokeTint: undefined,
  
  /*
   * If true, the column borders in the first alternating column strokes group will overprint. Note: Valid when start column stroke count is 1 or greater.
   * @type {Boolean}
   */
  startColumnStrokeOverprint: undefined,
  
  /*
   * The stroke gap color, specified as a swatch (color, gradient, tint, or mixed ink), of column borders in the first alternating column strokes group. Note: Valid when start column stroke count is 1 or greater.
   * @type {Swatch}
   */
  startColumnStrokeGapColor: undefined,
  
  /*
   * The tint (as a percentage) of the gap color of column borders in the first alternating column strokes group. (Range: 0 to 100) Note: Valid when start column stroke count is 1 or greater.
   * @type {Number}
   */
  startColumnStrokeGapTint: undefined,
  
  /*
   * If true, the gap of the column borders in the first alternating column strokes group will overprint. Note: Valid when start column stroke count is 1 or greater.
   * @type {Boolean}
   */
  startColumnStrokeGapOverprint: undefined,
  
  /*
   * The number of columns in the second alternating column strokes group.
   * @type {Number}
   */
  endColumnStrokeCount: undefined,
  
  /*
   * The stroke color, specified as a swatch (color, gradient, tint, or mixed ink), of column borders in the second alternating column strokes group. Note: Valid when end column stroke count is 1 or greater.
   * @type {Swatch}
   */
  endColumnStrokeColor: undefined,
  
  /*
   * The stroke weight of column borders in the second alternating column strokes group. Note: Valid when end column stroke count is 1 or greater.
   * @type {Mixed}
   */
  endColumnStrokeWeight: undefined,
  
  /*
   * The stroke type of columns in the second alternating strokes group. Can also accept: String.
   * @type {StrokeStyle}
   */
  endColumnLineStyle: undefined,
  
  /*
   * The tint (as a percentage) of column borders in the second alternating column strokes group. (Range: 0 to 100) Note: Valid when end column stroke count is 1 or greater.
   * @type {Number}
   */
  endColumnStrokeTint: undefined,
  
  /*
   * If true, the column borders in the second alternating column strokes group will overprint. Note: Valid when end column stroke count is 1 or greater.
   * @type {Boolean}
   */
  endColumnStrokeOverprint: undefined,
  
  /*
   * The stroke gap color, specified as a swatch (color, gradient, tint, or mixed ink), of column borders in the second alternating column strokes group. Note: Valid when end column stroke count is 1 or greater.
   * @type {Swatch}
   */
  endColumnStrokeGapColor: undefined,
  
  /*
   * The tint (as a percentage) of the gap color of column borders in the second alternating column strokes group. (Range: 0 to 100) Note: Valid when end column stroke count is 1 or greater.
   * @type {Number}
   */
  endColumnStrokeGapTint: undefined,
  
  /*
   * If true, the gap of the column border stroke in the second alternating column strokes group will overprint. Note: Valid when end column stroke count is 1 or greater.
   * @type {Boolean}
   */
  endColumnStrokeGapOverprint: undefined,
  
  /*
   * If true, hides alternating row fills. If false, hides alternating column fills.
   * @type {Boolean}
   */
  columnFillsPriority: undefined,
  
  /*
   * The number of body rows at the beginning of the table to skip before applying the row fill color. Note: Valid when alternating fills are defined for table rows.
   * @type {Number}
   */
  skipFirstAlternatingFillRows: undefined,
  
  /*
   * The number of body rows at the end of the table in which to not apply the row fill color. Note: Valid when alternating fills are defined for table rows.
   * @type {Number}
   */
  skipLastAlternatingFillRows: undefined,
  
  /*
   * The fill color, specified as a swatch (color, gradient, tint, or mixed ink), of rows in the first alternating fills group. Note: Valid when alternating fills are defined for table rows.
   * @type {Swatch}
   */
  startRowFillColor: undefined,
  
  /*
   * The number of rows in the first alternating fills group. Note: Valid when alternating fills are defined for table rows.
   * @type {Number}
   */
  startRowFillCount: undefined,
  
  /*
   * The tint (as a percentage) of the rows in the first alternating fills group. (Range: 0 to 100) Note: Valid when alternating fills are defined for table rows.
   * @type {Number}
   */
  startRowFillTint: undefined,
  
  /*
   * If true, the rows in the first alternating fills group will overprint. Note: Valid when alternating fills are defined for table rows.
   * @type {Boolean}
   */
  startRowFillOverprint: undefined,
  
  /*
   * The number of rows in the second alternating fills group. Note: Valid when alternating fills are defined for table rows.
   * @type {Number}
   */
  endRowFillCount: undefined,
  
  /*
   * The fill color, specified as a swatch (color, gradient, tint, or mixed ink), of rows in the second alternating fills group. Note: Valid when alternating fills are defined for table rows.
   * @type {Swatch}
   */
  endRowFillColor: undefined,
  
  /*
   * The tint (as a percentage) of the rows in the second alternating fills group. (Range: 0 to 100) Note: Valid when alternating fills are defined for table rows.
   * @type {Number}
   */
  endRowFillTint: undefined,
  
  /*
   * If true, the rows in the second alternating fills group will overprint. Note: Valid when alternating fills are defined for table rows.
   * @type {Boolean}
   */
  endRowFillOverprint: undefined,
  
  /*
   * The number of columns on the left side of the table to skip before applying the column fill color. Note: Valid when alternating fills are defined for table columns.
   * @type {Number}
   */
  skipFirstAlternatingFillColumns: undefined,
  
  /*
   * The number columns on the right side of the table in which to not apply the column fill color. Note: Valid when alternating fills are defined for table columns.
   * @type {Number}
   */
  skipLastAlternatingFillColumns: undefined,
  
  /*
   * The number of columns in the first alternating fills group. Note: Valid when alternating fills are defined for table columns.
   * @type {Number}
   */
  startColumnFillCount: undefined,
  
  /*
   * The fill color, specified as a swatch (color, gradient, tint, or mixed ink), of columns in the first alternating fills group. Note: Valid when alternating fills are defined for table columns.
   * @type {Swatch}
   */
  startColumnFillColor: undefined,
  
  /*
   * The tint (as a percentage) of the columns in the first alternating fills group. (Range: 0 to 100) Note: Valid when alternating fills are defined for table columns.
   * @type {Number}
   */
  startColumnFillTint: undefined,
  
  /*
   * If true, the columns in the first alternating fills group will overprint. Note: Valid when alternating fills are defined for table columns.
   * @type {Boolean}
   */
  startColumnFillOverprint: undefined,
  
  /*
   * The number of columns in the second alternating fills group. Note: Valid when alternating fills are defined for table columns.
   * @type {Number}
   */
  endColumnFillCount: undefined,
  
  /*
   * The fill color, specified as a swatch (color, gradient, tint, or mixed ink), of columns in the second alternating fill group. Note: Valid when alternating fills are defined for table columns.
   * @type {Swatch}
   */
  endColumnFillColor: undefined,
  
  /*
   * The tint (as a percentage) of the columns in the second alternating fills group. (Range: 0 to 100) Note: Valid when alternating fills are defined for table columns.
   * @type {Number}
   */
  endColumnFillTint: undefined,
  
  /*
   * If true, the columns in the second alternating fills group will overprint. Note: Valid when alternating fills are defined for table columns.
   * @type {Boolean}
   */
  endColumnFillOverprint: undefined,
  
  /*
   * If true, use the cell style of the body region for the header region.
   * @type {Boolean}
   */
  headerRegionSameAsBodyRegion: undefined,
  
  /*
   * If true, uses the cell style of the body region for the footer region.
   * @type {Boolean}
   */
  footerRegionSameAsBodyRegion: undefined,
  
  /*
   * If true, uses the cell style of the body region for the left column region.
   * @type {Boolean}
   */
  leftColumnRegionSameAsBodyRegion: undefined,
  
  /*
   * If true, uses the cell style of the body region for the right column region.
   * @type {Boolean}
   */
  rightColumnRegionSameAsBodyRegion: undefined,
  
  /*
   * The cell style of the header region. Can also accept: String.
   * @type {CellStyle}
   */
  headerRegionCellStyle: undefined,
  
  /*
   * The cell style of the footer region. Can also accept: String.
   * @type {CellStyle}
   */
  footerRegionCellStyle: undefined,
  
  /*
   * The cell style of the left column region. Can also accept: String.
   * @type {CellStyle}
   */
  leftColumnRegionCellStyle: undefined,
  
  /*
   * The cell style of the right column region. Can also accept: String.
   * @type {CellStyle}
   */
  rightColumnRegionCellStyle: undefined,
  
  /*
   * The cell style of the body region. Can also accept: String.
   * @type {CellStyle}
   */
  bodyRegionCellStyle: undefined,
  
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
   * @param {TableStyle} [replacingWith] The style to apply in place of the deleted style. 
   */
  remove: function(replacingWith) {
  },
  
  /*
   * Duplicates the TableStyle.
   * @returns {TableStyle}
   */
  duplicate: function() {
    return new TableStyle();
  },
  
  /*
   * Moves the style to the specified location.
 *
   * @param {LocationOptions} to The location relative to the reference object or within the containing object.
   * @param {Mixed} [reference] The reference object. Note: Required when the to parameter specifies before or after. Can accept: ParagraphStyle, ParagraphStyleGroup, CharacterStyle, CharacterStyleGroup, CellStyle, CellStyleGroup, TableStyle, TableStyleGroup, Document or Application. 
   * @returns {TableStyle}
   */
  move: function(to, reference) {
    return new TableStyle();
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
   * Generates a string which, if executed, will return the TableStyle.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {TableStyle}
   */
  getElements: function() {
    return new TableStyle();
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
