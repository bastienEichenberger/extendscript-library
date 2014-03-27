/*
 * The destination, if any, for batch-processed files.
 */
var BatchDestinationType = {
  /*
   * Leaves all files open.
   * @type {int}
   */
  NODESTINATION: undefined,
  
  /*
   * Saves changes and closes all files.
   * @type {int}
   */
  SAVEANDCLOSE: undefined,
  
  /*
   * Outputs files to a folder.
   * @type {int}
   */
  FOLDER: undefined,
  
};
