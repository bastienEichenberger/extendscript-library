/*
 * Modes that control which nearby snapshots, by size and shape, are blended into the new layout.
 */
var SnapshotBlendingModes = {
  /*
   * Turns off the influence of layout snapshots completely.
   * @type {Number}
   */
  IGNORE_LAYOUT_SNAPSHOTS: undefined,
  
  /*
   * Use the layout snapshot nearest in size and shape to the new layout.
   * @type {Number}
   */
  USE_NEAREST_SNAPSHOT: undefined,
  
  /*
   * Use only layout snapshots within the same class as the new layout.
   * @type {Number}
   */
  LIMITED_SNAPSHOT_BLENDING: undefined,
  
  /*
   * Use up to three nearest snapshots even if a snapshot is in a different class that the new layout.
   * @type {Number}
   */
  FULL_SNAPSHOT_BLENDING: undefined,
  
};
