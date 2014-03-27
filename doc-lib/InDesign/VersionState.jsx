/*
 * The version state of the file in Version Cue.
 */
var VersionState = {
  /*
   * The version is not known.
   * @type {Number}
   */
  VERSION_UNKNOWN: undefined,
  
  /*
   * The project has a newer file.
   * @type {Number}
   */
  PROJECT_FILE_NEWER: undefined,
  
  /*
   * The version is identical to the project.
   * @type {Number}
   */
  LOCAL_PROJECT_MATCH: undefined,
  
  /*
   * The version has modifications that make it newer than the project.
   * @type {Number}
   */
  LOCAL_NEWER: undefined,
  
  /*
   * The version contains local edits but the project file is newer.
   * @type {Number}
   */
  VERSION_CONFLICT: undefined,
  
  /*
   * No resource and no local file.
   * @type {Number}
   */
  NO_RESOURCE: undefined,
  
};
