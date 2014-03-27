/*
 * The type of the layer content to rasterize.
 */
var RasterizeType = {
  /*
   * Rasterizes the type on a type layer. Doesn't rasterize any other vector data on the layer.
   * @type {int}
   */
  TEXTCONTENTS: undefined,
  
  /*
   * Rasterizes a shape layer.
   * @type {int}
   */
  SHAPE: undefined,
  
  /*
   * Rasterizes the fill of a shape layer, leaving the vector mask.
   * @type {int}
   */
  FILLCONTENT: undefined,
  
  /*
   * Rasterizes the vector mask of a shape layer, turning it into a layer mask.
   * @type {int}
   */
  LAYERCLIPPINGPATH: undefined,
  
  /*
   * Rasterizes all vector data on the layer.
   * @type {int}
   */
  ENTIRELAYER: undefined,
  
  /*
   * Rasterizes the selected layers.
   * @type {int}
   */
  LINKEDLAYERS: undefined,
  
};
