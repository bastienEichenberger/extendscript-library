/*
 * The type of conflict resolution to employ during Version Cue synchronization.
 */
var SyncConflictResolution = {
  /*
   * Skips conflicting files.
   * @type {Number}
   */
  SKIP_CONFLICTS: undefined,
  
  /*
   * Asks the user how to resolve conflicts.
   * @type {Number}
   */
  ASK_ABOUT_CONFLICTS: undefined,
  
  /*
   * Uses the local version.
   * @type {Number}
   */
  PREFER_LOCAL: undefined,
  
  /*
   * Uses the project version.
   * @type {Number}
   */
  PREFER_PROJECT: undefined,
  
};
