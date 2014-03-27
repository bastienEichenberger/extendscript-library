/*
 * The editing state of the file in Version Cue.
 */
var EditingState = {
  /*
   * The editing status is not known.
   * @type {Number}
   */
  EDITING_UNKNOWN: undefined,
  
  /*
   * The file is not currently in use and is not locked.
   * @type {Number}
   */
  EDITING_NOWHERE: undefined,
  
  /*
   * Lock held but not usable.
   * @type {Number}
   */
  EDITING_REMOTELY: undefined,
  
  /*
   * The file has been modified locally and not locked.
   * @type {Number}
   */
  EDITING_LOCALLY: undefined,
  
  /*
   * The file has been locked locally and may be modified.
   * @type {Number}
   */
  EDITING_LOCALLY_LOCKED: undefined,
  
  /*
   * The file was modified locally or remotely while it was locked and therefore two versions exist.
   * @type {Number}
   */
  EDITING_CONFLICT: undefined,
  
};
