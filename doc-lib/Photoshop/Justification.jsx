/*
 * The placement of paragraph text within the bounding box.
 */
var Justification = {
  /*
   * Aligns the left edges, leaving the right edge ragged.
   * @type {int}
   */
  LEFT: undefined,
  
  /*
   * Text is centered on each line.
   * @type {int}
   */
  CENTER: undefined,
  
  /*
   * Aligns the right edges, leaving the left edge ragged.
   * @type {int}
   */
  RIGHT: undefined,
  
  /*
   * Justifies all lines except the last, which is left-aligned.
   * @type {int}
   */
  LEFTJUSTIFIED: undefined,
  
  /*
   * Justifies all lines except the last, which is center-aligned.
   * @type {int}
   */
  CENTERJUSTIFIED: undefined,
  
  /*
   * Justifies all lines except the last, which is right-aligned.
   * @type {int}
   */
  RIGHTJUSTIFIED: undefined,
  
  /*
   * Justifies all lines including the last, which is force-justified.
   * @type {int}
   */
  FULLYJUSTIFIED: undefined,
  
};
