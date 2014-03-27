/*
 * Options which are applied when opening or placing a Photoshop file.
 */
var OpenOptionsPhotoshop = {
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
   * Should layers be Preserve when the document is converted (default: true)
   * @type {Boolean}
   */
  preserveLayers: undefined,
  
  /*
   * Should image maps be preserved when the document is converted (default: true)
   * @type {Boolean}
   */
  preserveImageMaps: undefined,
  
  /*
   * Should slices be preserved when the document is converted (default: true)
   * @type {Boolean}
   */
  preserveSlices: undefined,
  
  /*
   * Should hidden layers be preserved when the document is converted (default: false)
   * @type {Boolean}
   */
  preserveHiddenLayers: undefined,
  
  /*
   * Should use the specified LayerComp.
   * @type {String}
   */
  layerComp: undefined,
  
};
