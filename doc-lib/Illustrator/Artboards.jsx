/*
 * A collection of artboards.
 */
var Artboards = {
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
   * Add artboard object.
 *
   * @param {Rectangle} artboardRect Size and position of artboard.
   * @returns {Artboard}
   */
  add: function(artboardRect) {
    return new Artboard();
  },
  
  /*
   * Deletes all elements.
   */
  removeAll: function() {
  },
  
  /*
   * Get the first element in the collection with the provided name.
 *
   * @param {String} name undefined
   * @returns {Artboard}
   */
  getByName: function(name) {
    return new Artboard();
  },
  
  /*
   * Delete artboard object.
 *
   * @param {Int32} index Index of the crop area to be deleted.
   */
  remove: function(index) {
  },
  
  /*
   * Get the first Artboard with specified name.
 *
   * @param {String} artboardName The name of the artboard.
   * @returns {Artboard}
   */
  getByName: function(artboardName) {
    return new Artboard();
  },
  
  /*
   * Insert an Artboard at specified location.
 *
   * @param {Rectangle} artboardRect Size and position of artboard.
   * @param {Int32} index Index position where artboard should be inserted.
   */
  insert: function(artboardRect, index) {
  },
  
  /*
   * Retrieves the index position of the active artboard in the document's list.
   * @returns {Int32}
   */
  getActiveArtboardIndex: function() {
    return new Int32();
  },
  
  /*
   * Makes a specific artboard active, and makes it current in the iteration order.
 *
   * @param {Int32} index The 0-based index position of the artboard in the document list.
   */
  setActiveArtboardIndex: function(index) {
  },
  
};
