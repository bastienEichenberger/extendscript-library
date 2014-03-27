/*
 * Zero point placement options.
 */
var RulerOrigin = {
  /*
   * The zero point is at the top-left corner of the spread and the ruler increments continuously across all pages of the spread.
   * @type {Number}
   */
  SPREAD_ORIGIN: undefined,
  
  /*
   * The top-left corner of each page is a new zero point on the horizontal ruler.
   * @type {Number}
   */
  PAGE_ORIGIN: undefined,
  
  /*
   * The zero point is at the top-left corner of the left-most page and at the top of the binding spine. The horizontal ruler measures from the leftmost page to the binding edge, and from the binding spine through the right edge of the right-most page. Also locks the zero point and prevents manual overrides.
   * @type {Number}
   */
  SPINE_ORIGIN: undefined,
  
};
