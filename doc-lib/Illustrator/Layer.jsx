/*
 * A layer.
 */
var Layer = {
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
   * Is the layer visible?
   * @type {Boolean}
   */
  visible: undefined,
  
  /*
   * Is the layer editable?
   * @type {Boolean}
   */
  locked: undefined,
  
  /*
   * Is the layer printable?
   * @type {Boolean}
   */
  printable: undefined,
  
  /*
   * Is any artwork in this layer selected? Setting this property to false deselects all artwork in the layer.
   * @type {Boolean}
   */
  hasSelectedArtwork: undefined,
  
  /*
   * Is the layer rendered in preview mode?
   * @type {Boolean}
   */
  preview: undefined,
  
  /*
   * Is rendered as dimmed in this layer?
   * @type {Boolean}
   */
  dimPlacedImages: undefined,
  
  /*
   * Color used when outlining artwork in this layer.
   * @type {RGBColor}
   */
  color: undefined,
  
  /*
   * The layer's name.
   * @type {String}
   */
  name: undefined,
  
  /*
   * The layer's opacity (between 0.0 and 100.0)
   * @type {Number}
   */
  opacity: undefined,
  
  /*
   * The drawing order of the layer.
   * @type {Int32}
   */
  zOrderPosition: undefined,
  
  /*
   * Is the layer sliced (default: false)
   * @type {Boolean}
   */
  sliced: undefined,
  
  /*
   * The mode used when compositing an object.
   * @type {BlendModes}
   */
  blendingMode: undefined,
  
  /*
   * Is the artwork isolated.
   * @type {Boolean}
   */
  isIsolated: undefined,
  
  /*
   * Is the artwork used to create a knockout.
   * @type {KnockoutState}
   */
  artworkKnockout: undefined,
  
  /*
   * The compound path artwork in this layer.
   * @type {CompoundPathItems}
   */
  compoundPathItems: undefined,
  
  /*
   * All the artwork in this layer.
   * @type {PageItems}
   */
  pageItems: undefined,
  
  /*
   * The path artwork in this layer.
   * @type {PathItems}
   */
  pathItems: undefined,
  
  /*
   * The raster art items in this layer.
   * @type {RasterItems}
   */
  rasterItems: undefined,
  
  /*
   * The placed art items in this layer.
   * @type {PlacedItems}
   */
  placedItems: undefined,
  
  /*
   * The mesh art items in this layer.
   * @type {MeshItems}
   */
  meshItems: undefined,
  
  /*
   * The plugin art items in this layer.
   * @type {PluginItems}
   */
  pluginItems: undefined,
  
  /*
   * The graph art items in this layer.
   * @type {GraphItems}
   */
  graphItems: undefined,
  
  /*
   * The non-native art items in this layer.
   * @type {NonNativeItems}
   */
  nonNativeItems: undefined,
  
  /*
   * The group items in this layer.
   * @type {GroupItems}
   */
  groupItems: undefined,
  
  /*
   * The text frame items in this layer.
   * @type {TextFrameItems}
   */
  textFrames: undefined,
  
  /*
   * Nested layers.
   * @type {Layers}
   */
  layers: undefined,
  
  /*
   * The symbol items in this layer.
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
   * @returns {Layer}
   */
  move: function(relativeObject, insertionLocation) {
    return new Layer();
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
   * Arranges the layer relative to other layers.
 *
   * @param {ZOrderMethod} zOrderCmd How to arrange the layer.
   */
  zOrder: function(zOrderCmd) {
  },
  
};
