/*
 * Placed artwork item.
 */
var PlacedItem = {
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
   * The file containing the placed artwork.
   * @type {File}
   */
  file: undefined,
  
  /*
   * The transformation matrix of the placed art object.
   * @type {Matrix}
   */
  matrix: undefined,
  
  /*
   * Dimensions of placed art object, regardless of transformations.
   * @type {Rectangle}
   */
  boundingBox: undefined,
  
  /*
   * The content variable bound to this placed art object.
   * @type {any}
   */
  contentVariable: undefined,
  
  /*
   * Move the object.
 *
   * @param {Object} relativeObject undefined
   * @param {ElementPlacement} insertionLocation undefined
   * @returns {PlacedItem}
   */
  move: function(relativeObject, insertionLocation) {
    return new PlacedItem();
  },
  
  /*
   * Duplicate this object.
 *
   * @param {Object} relativeObject undefined
   * @param {ElementPlacement} insertionLocation undefined
   * @returns {PlacedItem}
   */
  duplicate: function(relativeObject, insertionLocation) {
    return new PlacedItem();
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
  
  /*
   * Embed the placed art within the illustration.
   */
  embed: function() {
  },
  
  /*
   * Trace this raster object using default options. Reorders this placed to the source art.
   * @returns {PluginItem}
   */
  trace: function() {
    return new PluginItem();
  },
  
  /*
   * Relink the placed art with supplied art from file.
 *
   * @param {File} fileSpec File spec to relink from.
   */
  relink: function(fileSpec) {
  },
  
};
