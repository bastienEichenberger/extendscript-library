/*
 * A group of layer objects, which can include art layer objects and other &amp;&#35;40;nested&#41; layer set objects. A single command or set of commands manipulates all layers in a layer set object.
 */
var LayerSet = {
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
   * The channels that are enabled for the layer set. Must be a list of component channels.
   * @type {Channel}
   */
  enabledChannels: undefined,
  
  /*
   * The layers in this layer set.
   * @type {Layers}
   */
  layers: undefined,
  
  /*
   * The layer sets contained within the layer set.
   * @type {LayerSets}
   */
  layerSets: undefined,
  
  /*
   * The art layers contained in this layer set.
   * @type {ArtLayers}
   */
  artLayers: undefined,
  
  /*
   * Merges the layer set.
   * @returns {ArtLayer}
   */
  merge: function() {
    return new ArtLayer();
  },
  
};
