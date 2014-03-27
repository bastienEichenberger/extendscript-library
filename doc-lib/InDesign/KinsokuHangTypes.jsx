/*
 * Hanging punctuation options when a kinsoku set is in effect.
 */
var KinsokuHangTypes = {
  /*
   * Disables hanging punctuation.
   * @type {Number}
   */
  NONE: undefined,
  
  /*
   * Enables hanging punctuation and allows punctuation marks to be placed on or outside the text frame but allows burasagari characters to hang as little as possible. Note: Differs for justified and nonjustified text. For information on justification, see line alignment.
   * @type {Number}
   */
  KINSOKU_HANG_REGULAR: undefined,
  
  /*
   * Enables hanging punctuation but forces hanging punctuation outside the text frame and does not allow the punctuation to be placed on the text frame.
   * @type {Number}
   */
  KINSOKU_HANG_FORCE: undefined,
  
};
