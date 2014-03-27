/*
 * The resolution strategy to employ for imported styles that have the same names as existing styles.
 */
var GlobalClashResolutionStrategy = {
  /*
   * Overwrites existing styles whose names clash with imported items.
   * @type {Number}
   */
  LOAD_ALL_WITH_OVERWRITE: undefined,
  
  /*
   * Renames imported styles whose names clash with existing items to preserve existing items.
   * @type {Number}
   */
  LOAD_ALL_WITH_RENAME: undefined,
  
  /*
   * Does not import styles whose names clash with existing items.
   * @type {Number}
   */
  DO_NOT_LOAD_THE_STYLE: undefined,
  
};
