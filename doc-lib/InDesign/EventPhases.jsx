/*
 * Phase options for event propagation.
 */
var EventPhases = {
  /*
   * Not yet propagating.
   * @type {Number}
   */
  NOT_DISPATCHING: undefined,
  
  /*
   * The at-target phase of propagation.
   * @type {Number}
   */
  AT_TARGET: undefined,
  
  /*
   * The bubbling phase of propagation.
   * @type {Number}
   */
  BUBBLING_PHASE: undefined,
  
  /*
   * The propagation is complete.
   * @type {Number}
   */
  DONE: undefined,
  
};
