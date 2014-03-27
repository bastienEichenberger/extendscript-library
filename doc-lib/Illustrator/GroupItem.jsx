/*
 * An artwork group item.
 */
var GroupItem = {
  /*
   * The object's container.
   * @type {Object}
   */
  parent: undefined,
  
  /*
   * The class name of the object.
   * @type {String}
   */
  typename: undefined,
  
  /*
   * Are the group elements clipped to the clipping path?
   * @type {Boolean}
   */
  clipped: undefined,
  
  /*
   * The group items in this group.
   * @type {GroupItems}
   */
  groupItems: undefined,
  
  /*
   * All the artwork in this group.
   * @type {PageItems}
   */
  pageItems: undefined,
  
  /*
   * The compound path artwork in this group.
   * @type {CompoundPathItems}
   */
  compoundPathItems: undefined,
  
  /*
   * The path artwork in this group.
   * @type {PathItems}
   */
  pathItems: undefined,
  
  /*
   * The raster art items in this group.
   * @type {RasterItems}
   */
  rasterItems: undefined,
  
  /*
   * The placed art items in this group.
   * @type {PlacedItems}
   */
  placedItems: undefined,
  
  /*
   * The mesh art items in this group.
   * @type {MeshItems}
   */
  meshItems: undefined,
  
  /*
   * The plugin art items in this group.
   * @type {PluginItems}
   */
  pluginItems: undefined,
  
  /*
   * The graph art items in this group.
   * @type {GraphItems}
   */
  graphItems: undefined,
  
  /*
   * The non-native art items in this group.
   * @type {NonNativeItems}
   */
  nonNativeItems: undefined,
  
  /*
   * The text frame items in this group.
   * @type {TextFrameItems}
   */
  textFrames: undefined,
  
  /*
   * The symbol items in this group.
   * @type {SymbolItems}
   */
  symbolItems: undefined,
  
  /*
   * The text frame items in this story.
   * @type {LegacyTextItems}
   */
  legacyTextItems: undefined,
  
  /*
   * Move the object.
 *
   * @param {Object} relativeObject undefined
   * @param {ElementPlacement} insertionLocation undefined
   * @returns {GroupItem}
   */
  move: function(relativeObject, insertionLocation) {
    return new GroupItem();
  },
  
  /*
   * Duplicate this object.
 *
   * @param {Object} relativeObject undefined
   * @param {ElementPlacement} insertionLocation undefined
   * @returns {GroupItem}
   */
  duplicate: function(relativeObject, insertionLocation) {
    return new GroupItem();
  },
  
  /*
   * Deletes this object.
   */
  remove: function() {
  },
  
  /*
   * Deletes all elements.
   */
  removeAll: function() {
  },
  
};
