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
   * Create a document from the preset.
 *
   * @param {String} startupPreset The name of startup document preset.
   * @param {DocumentPreset} presetSettings The custom document preset settings.
   * @returns {Document}
   */
  addDocument: function(startupPreset, presetSettings) {
    return new Document();
  },
  
  /*
   * A document.
 *
   * @param {DocumentColorSpace} [documentColorSpace] The color model used for the document.
   * @param {Number} [width] Width of the artboard.
   * @param {Number} [height] Height of the artboard.
   * @param {Int32} [numArtboards] Number of artboards for new document.Range (1:100).
   * @param {DocumentArtboardLayout} [artboardLayout] Layout of artboards for new document.
   * @param {Number} [artboardSpacing] Spacing between artboards for new document.
   * @param {Int32} [artboardRowsOrCols] Number of rows (for rows layout) OR column(for column layouts)of artboards.Range is 1 to (docNumArtboards - 1) or 1 for single row or column layouts.
   * @returns {Document}
   */
  add: function(documentColorSpace, width, height, numArtboards, artboardLayout, artboardSpacing, artboardRowsOrCols) {
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
   * Arranges the documents in the specified style.
 *
   * @param {DocumentLayoutStyle} layoutStyle The document layout style.
   * @returns {Boolean}
   */
  arrange: function(layoutStyle) {
    return new Boolean();
  },
  
};
