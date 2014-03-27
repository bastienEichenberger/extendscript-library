/*
 * A table.
 */
var Table = {
  /*
   * The XML element associated with the Table.
   * @type {XMLItem}
   */
  associatedXMLElement: undefined,
  
  /*
   * The insertion point before the table in the story containing the table.
   * @type {InsertionPoint}
   */
  storyOffset: undefined,
  
  /*
   * The index of the Table within its containing object.
   * @type {Number}
   */
  index: undefined,
  
  /*
   * Lists all page items contained by the Table.
   * @type {PageItem}
   */
  allPageItems: undefined,
  
  /*
   * Lists all graphics contained by the Table.
   * @type {Graphic}
   */
  allGraphics: undefined,
  
  /*
   * The unique ID of the Table.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the Table (a XMLElement, XmlStory, TextFrame, Text, InsertionPoint, TextStyleRange, Paragraph, TextColumn, Line, Word, Character, Story or Cell).
   * @type {Mixed}
   */
  parent: undefined,
  
  /*
   * A collection of text variable instances.
   * @type {TextVariableInstances}
   */
  textVariableInstances: undefined,
  
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
   * A collection of ellipses.
   * @type {Ovals}
   */
  ovals: undefined,
  
  /*
   * The spline items collection.
   * @type {SplineItems}
   */
  splineItems: undefined,
  
  /*
   * The page items collection, which can be used to process all page items in a container (such as a document, page, or group), regardless of type.
   * @type {PageItems}
   */
  pageItems: undefined,
  
  /*
   * A collection of rectangles.
   * @type {Rectangles}
   */
  rectangles: undefined,
  
  /*
   * A collection of graphic lines.
   * @type {GraphicLines}
   */
  graphicLines: undefined,
  
  /*
   * A collection of text frames.
   * @type {TextFrames}
   */
  textFrames: undefined,
  
  /*
   * A collection of polygons.
   * @type {Polygons}
   */
  polygons: undefined,
  
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
   * A collection of changes.
   * @type {Changes}
   */
  changes: undefined,
  
  /*
   * A collection of notes.
   * @type {Notes}
   */
  notes: undefined,
  
  /*
   * A collection of groups.
   * @type {Groups}
   */
  groups: undefined,
  
  /*
   * EPSTexts
   * @type {EPSTexts}
   */
  epstexts: undefined,
  
  /*
   * A collection of form fields.
   * @type {FormFields}
   */
  formFields: undefined,
  
  /*
   * A collection of buttons.
   * @type {Buttons}
   */
  buttons: undefined,
  
  /*
   * A collection of multi-state objects.
   * @type {MultiStateObjects}
   */
  multiStateObjects: undefined,
  
  /*
   * A collection of checkboxes.
   * @type {CheckBoxes}
   */
  checkBoxes: undefined,
  
  /*
   * A collection of comboboxes.
   * @type {ComboBoxes}
   */
  comboBoxes: undefined,
  
  /*
   * A collection of listboxes.
   * @type {ListBoxes}
   */
  listBoxes: undefined,
  
  /*
   * A collection of radio buttons.
   * @type {RadioButtons}
   */
  radioButtons: undefined,
  
  /*
   * A collection of text boxes.
   * @type {TextBoxes}
   */
  textBoxes: undefined,
  
  /*
   * A collection of signature fields.
   * @type {SignatureFields}
   */
  signatureFields: undefined,
  
  /*
   * A collection of hidden text objects.
   * @type {HiddenTexts}
   */
  hiddenTexts: undefined,
  
  /*
   * The number of header rows.
   * @type {Number}
   */
  headerRowCount: undefined,
  
  /*
   * The number of footer rows.
   * @type {Number}
   */
  footerRowCount: undefined,
  
  /*
   * The height of the Table. For a table or column, specifies the sum of the row heights.
   * @type {Mixed}
   */
  height: undefined,
  
  /*
   * The width of the Table. For a table or row, specifies the sum of the column widths.
   * @type {Mixed}
   */
  width: undefined,
  
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
   * The header placement.
   * @type {HeaderFooterBreakTypes}
   */
  breakHeaders: undefined,
  
  /*
   * The footer placement.
   * @type {HeaderFooterBreakTypes}
   */
  breakFooters: undefined,
  
  /*
   * If true, skips the first occurrence of header rows.
   * @type {Boolean}
   */
  skipFirstHeader: undefined,
  
  /*
   * If true, skips the last occurrence of footer rows.
   * @type {Boolean}
   */
  skipLastFooter: undefined,
  
  /*
   * The order in which to display row and column strokes at corners.
   * @type {StrokeOrderTypes}
   */
  strokeOrder: undefined,
  
  /*
   * The pattern for alternating fills.
   * @type {AlternatingFillsTypes}
   */
  alternatingFills: undefined,
  
  /*
   * The contents to place in cells, specified as an array whose first item populates the top left cell and whose second item populates the next cell to the right, and so on until each cell in the top row is populated, at which point the next item populates the left-most cell in the second row, and so on. Note: If the array contains fewer strings than the table contains cells, the remaining cells are left blank. Can return: Array of Strings or SpecialCharacters enumerators. Can also accept: Array of Strings, SpecialCharacters enumerators or NothingEnum enumerators.
   * @type {Mixed}
   */
  contents: undefined,
  
  /*
   * A property that can be set to any string.
   * @type {String}
   */
  label: undefined,
  
  /*
   * The number of body rows.
   * @type {Number}
   */
  bodyRowCount: undefined,
  
  /*
   * The number of columns.
   * @type {Number}
   */
  columnCount: undefined,
  
  /*
   * The name of the Table; this is an alias to the Table's label property.
   * @type {String}
   */
  name: undefined,
  
  /*
   * The table style applied to the table. Can also accept: String.
   * @type {TableStyle}
   */
  appliedTableStyle: undefined,
  
  /*
   * The direction of the the table
   * @type {TableDirectionOptions}
   */
  tableDirection: undefined,
  
  /*
   * If true, then the table will show collapsed in story and galley views.
   * @type {Boolean}
   */
  displayCollapsed: undefined,
  
  /*
   * Specifies the order the table cells will display in when viewing in story and galley views.
   * @type {DisplayOrderOptions}
   */
  displayOrder: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Tag the object or the parent story using default tags defined in XML preference.
   */
  autoTag: function() {
  },
  
  /*
   * Associates the page item with the specified XML element while preserving existing content.
 *
   * @param {XMLElement} using The XML element.
   */
  markup: function(using) {
  },
  
  /*
   * Recomposes the text in the Table.
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
   * Deletes the Table.
   */
  remove: function() {
  },
  
  /*
   * Unmerges all merged cells in the Table.
   * @returns {Cell}
   */
  unmerge: function() {
    return new Cell();
  },
  
  /*
   * Converts the table to text.
 *
   * @param {String} [columnSeparator] The character to insert between the each column's content in the converted text. Note: Can be defined as any single character, such as a letter, number, or punctuation mark, or by typing a space or tab. Use the actual character rather than its name, such as ',' rather than 'Comma'. Precede double or single quotes or a backslash with an extra backslash as an escape character. For paragraphs, use ^p. 
   * @param {String} [rowSeparator] The character to use to separate each row's content in the converted text. Note: Can be defined as any single character, such as a letter, number, or punctuation mark, or by typing a space or tab. Use the actual character rather than its name, such as , rather than Comma. Precede double or single quotes or a backslash with an extra backslash as an escape character. For paragraphs, use ^p. 
   * @returns {Text}
   */
  convertToText: function(columnSeparator, rowSeparator) {
    return new Text();
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
   * Clear Table Style Overrides
   */
  clearTableStyleOverrides: function() {
  },
  
  /*
   * Convert bullets and numbering to text.
   */
  convertBulletsAndNumberingToText: function() {
  },
  
  /*
   * Selects the object.
 *
   * @param {SelectionOptions} [existingSelection] The selection status of the Table in relation to previously selected objects. 
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
   * Generates a string which, if executed, will return the Table.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {Table}
   */
  getElements: function() {
    return new Table();
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
