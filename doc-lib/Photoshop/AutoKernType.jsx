/*
 * The type of kerning to use for characters.
 */
var AutoKernType = {
  /*
   * Allows manual kerning.
   * @type {int}
   */
  MANUAL: undefined,
  
  /*
   * Uses kern pairs, which contain information about the spacing of specific pairs of letters.
   * @type {int}
   */
  METRICS: undefined,
  
  /*
   * Adjusts the spacing between adjacent characters based on their shapes.
   * @type {int}
   */
  OPTICAL: undefined,
  
};
