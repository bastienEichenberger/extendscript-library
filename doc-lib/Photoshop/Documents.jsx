/*
 * A collection of documents.
 */
var Documents = {
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
   * Number of elements in the collection.
   * @type {int}
   */
  length: undefined,
  
  /*
   * A document.
 *
   * @param {UnitValue} [width] The width of the document.
   * @param {UnitValue} [height] The height of the document.
   * @param {Number} [resolution] The resolution of the document (in pixels per inch)
   * @param {String} [name] The name of the document.
   * @param {NewDocumentMode} [mode] The document mode.
   * @param {DocumentFill} [initialFill] The initial fill of the document.
   * @param {Number} [pixelAspectRatio] The initial pixel aspect ratio of the document.
   * @param {BitsPerChannelType} [bitsPerChannel] The number of bits per channel.
   * @param {String} [colorProfileName] The name of color profile for document.
   * @returns {Document}
   */
  add: function(width, height, resolution, name, mode, initialFill, pixelAspectRatio, bitsPerChannel, colorProfileName) {
    return new Document();
  },
  
  /*
   * Get the first element in the collection with the provided name.
 *
   * @param {String} name undefined
   * @returns {Document}
   */
  getByName: function(name) {
    return new Document();
  },
  
  /*
   * Get an element in the collection with the provided index.
 *
   * @param {uint} index undefined
   * @returns {Document}
   */
  []: function(index) {
    return new Document();
  },
  
};
