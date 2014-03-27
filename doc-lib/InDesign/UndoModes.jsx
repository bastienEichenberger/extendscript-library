/*
 * Undo options for executing a script.
 */
var UndoModes = {
  /*
   * Undo each script request as a separate step.
   * @type {Number}
   */
  SCRIPT_REQUEST: undefined,
  
  /*
   * Undo the entire script as a single step.
   * @type {Number}
   */
  ENTIRE_SCRIPT: undefined,
  
  /*
   * Automatically undo the entire script as part of the previous step.
   * @type {Number}
   */
  AUTO_UNDO: undefined,
  
  /*
   * Fast undo the entire script as a single step.
   * @type {Number}
   */
  FAST_ENTIRE_SCRIPT: undefined,
  
};
