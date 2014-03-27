/*
 * The automatic adjustment to make to the pattern of a dashed or dotted stroke to cover corner points in a path.
 */
var StrokeCornerAdjustment = {
  /*
   * No adjustment.
   * @type {Number}
   */
  NONE: undefined,
  
  /*
   * Changes the length of dashes so that dashes always occur at path ends and corners; maintains set gap length. Note: Can cause dashes to be different lengths on shapes whose sides are of different lengths, such as rectangles.
   * @type {Number}
   */
  DASHES: undefined,
  
  /*
   * Changes the length of gaps so that dashes or dots always occur at ends and corners; maintains dash length or dot diameter. Note: Can cause gaps to be different lengths on shapes whose sides are of different lengths, such as rectangles.
   * @type {Number}
   */
  GAPS: undefined,
  
  /*
   * Adjusts both dashes and gaps to cover corners and end points. Note: Causes dash and gap sizes to be consistent on all sides of the shape.
   * @type {Number}
   */
  DASHES_AND_GAPS: undefined,
  
};
