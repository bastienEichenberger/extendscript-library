/*
 * The row type.
 */
var RowTypes = {
  /*
   * Makes the row a body row.
   * @type {Number}
   */
  BODY_ROW: undefined,
  
  /*
   * Makes the row a header row. Note: When setting row type as header row, the row must be either the top row in the table or adjacent to an existing header row.
   * @type {Number}
   */
  HEADER_ROW: undefined,
  
  /*
   * Makes the row a footer row. Note: When setting row type as footer row, the row must be either the bottom row in the table or adjacent to an existing footer row.
   * @type {Number}
   */
  FOOTER_ROW: undefined,
  
  /*
   * (Read-only) The column's rows are of multiple types.
   * @type {Number}
   */
  MIXED_STATE: undefined,
  
};
