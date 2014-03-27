/*
 * Kinsoku processing options.
 */
var KinsokuType = {
  /*
   * Attempts to move characters to the previous line; if the push-in is not possible, pushes characters to the next line.
   * @type {Number}
   */
  KINSOKU_PUSH_IN_FIRST: undefined,
  
  /*
   * Attempts to move characters to the next line; if the push-out is not possible, pushes characters to the previous line.
   * @type {Number}
   */
  KINSOKU_PUSH_OUT_FIRST: undefined,
  
  /*
   * Always moves characters to the next line. Does not attempt a push-in.
   * @type {Number}
   */
  KINSOKU_PUSH_OUT_ONLY: undefined,
  
  /*
   * The kinsoku prioritize adjustment amount.
   * @type {Number}
   */
  KINSOKU_PRIORITIZE_ADJUSTMENT_AMOUNT: undefined,
  
};
