/*
 * The synchronization status of the file in Version Cue.
 */
var VersionCueSyncStatus = {
  /*
   * The project version of the file was downloaded to the local workspace.
   * @type {Number}
   */
  FILE_DOWNLOADED: undefined,
  
  /*
   * The local version of the file was uploaded to the project.
   * @type {Number}
   */
  FILE_UPLOADED: undefined,
  
  /*
   * The file was unlocked locally.
   * @type {Number}
   */
  FILE_UNLOCKED: undefined,
  
  /*
   * The file was not synchronized.
   * @type {Number}
   */
  FILE_SKIPPED: undefined,
  
  /*
   * The synchronization resulted in no change because the local and project versions were identical.
   * @type {Number}
   */
  FILE_NO_CHANGE: undefined,
  
};
