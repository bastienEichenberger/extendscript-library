/*
 * Raster artwork item.
 */
var RasterItem = {
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
   * The file containing the raster artwork.
   * @type {File}
   */
  file: undefined,
  
  /*
   * The transformation matrix of the raster art object.
   * @type {Matrix}
   */
  matrix: undefined,
  
  /*
   * Dimensions of raster art object regardless of transformations.
   * @type {Rectangle}
   */
  boundingBox: undefined,
  
  /*
   * The color space of the raster image.
   * @type {ImageColorSpace}
   */
  imageColorSpace: undefined,
  
  /*
   * Is the raster art embedded within the illustration?
   * @type {Boolean}
   */
  embedded: undefined,
  
  /*
   * Is the raster art overprinting?
   * @type {Boolean}
   */
  overprint: undefined,
  
  /*
   * Is the raster art a colorized grayscale image?
   * @type {Boolean}
   */
  colorizedGrayscale: undefined,
  
  /*
   * Is the raster art transparent?
   * @type {Boolean}
   */
  transparent: undefined,
  
  /*
   * The number of image channels.
   * @type {Int32}
   */
  channels: undefined,
  
  /*
   * The number of bits per channel.
   * @type {Int32}
   */
  bitsPerChannel: undefined,
  
  /*
   * List of colorant names.
   * @type {String}
   */
  colorants: undefined,
  
  /*
   * Status of the linked image.
   * @type {RasterLinkState}
   */
  status: undefined,
  
  /*
   * The content variable bound to this raster art object.
   * @type {any}
   */
  contentVariable: undefined,
  
  /*
   * Move the object.
 *
   * @param {Object} relativeObject undefined
   * @param {ElementPlacement} insertionLocation undefined
   * @returns {RasterItem}
   */
  move: function(relativeObject, insertionLocation) {
    return new RasterItem();
  },
  
  /*
   * Duplicate this object.
 *
   * @param {Object} relativeObject undefined
   * @param {ElementPlacement} insertionLocation undefined
   * @returns {RasterItem}
   */
  duplicate: function(relativeObject, insertionLocation) {
    return new RasterItem();
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
   * Colorize the RasterItem with a CMYK or RGB Color.
 *
   * @param {Color} rasterColor The color to use for coloring the TIFF image.
   */
  colorize: function(rasterColor) {
  },
  
  /*
   * Trace this raster object using default options. Reorders this raster to the source art.
   * @returns {PluginItem}
   */
  trace: function() {
    return new PluginItem();
  },
  
};
