/*
 * A tracing object.
 */
var TracingObject = {
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
   * The source art used when creating a new tracing object.
   * @type {PageItem}
   */
  sourceArt: undefined,
  
  /*
   * The options used when tracing the artwork.
   * @type {TracingOptions}
   */
  tracingOptions: undefined,
  
  /*
   * The number of paths in the tracing result.
   * @type {Int32}
   */
  pathCount: undefined,
  
  /*
   * The number of anchors in the tracing result.
   * @type {Int32}
   */
  anchorCount: undefined,
  
  /*
   * The number of colors used in the tracing result.
   * @type {Int32}
   */
  usedColorCount: undefined,
  
  /*
   * Release the source artwork for the tracing object. Deletes this tracing object.
   * @returns {PageItem}
   */
  releaseTracing: function() {
    return new PageItem();
  },
  
  /*
   * Expand the tracing to paths. Deletes this tracing object.
 *
   * @param {Boolean} [viewed] Expand as viewed with the raster and vector view modes.
   * @returns {GroupItem}
   */
  expandTracing: function(viewed) {
    return new GroupItem();
  },
  
};
