/*
 * Options for displaying row and column strokes at corners.
 */
var StrokeOrderTypes = {
  /*
   * Places row strokes in front of column strokes.
   * @type {Number}
   */
  ROW_ON_TOP: undefined,
  
  /*
   * Places column strokes in front of row strokes.
   * @type {Number}
   */
  COLUMN_ON_TOP: undefined,
  
  /*
   * Places row strokes in front of column strokes when row and column strokes are different colors; joins striped strokes and connects crossing points.
   * @type {Number}
   */
  BEST_JOINS: undefined,
  
  /*
   * Places row strokes in front when row and column strokes are different colors; joins striped strokes only at points where strokes cross in a T-shape.
   * @type {Number}
   */
  INDESIGN_2_COMPATIBILITY: undefined,
  
};
