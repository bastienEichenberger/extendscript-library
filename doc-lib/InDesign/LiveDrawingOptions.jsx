/*
 * Live drawing options for when user mouse actions trigger live screen drawing of page items.
 */
var LiveDrawingOptions = {
  /*
   * Never use live screen drawing during mouse operations, use sprite mode.
   * @type {Number}
   */
  NEVER: undefined,
  
  /*
   * Use live screen drawing during mouse operations.
   * @type {Number}
   */
  IMMEDIATELY: undefined,
  
  /*
   * Use live screen drawing during mouse operations after a delay if user pauses before the mouse moves.
   * @type {Number}
   */
  DELAYED: undefined,
  
};
