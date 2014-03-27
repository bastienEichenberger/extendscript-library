/*
 * The layer comp objects associated with the document.
 */
var LayerComps = {
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
   * Adds a layer comp.
 *
   * @param {String} name The name of the layer comp.
   * @param {String} [comment] The description of the layer comp.
   * @param {Boolean} [appearance] If true, uses the layer appearance or style for this layer comp.
   * @param {Boolean} [position] If true, uses the layer position for this layer comp.
   * @param {Boolean} [visibility] If true, uses the layer visibility for this layer comp.
   * @returns {LayerComp}
   */
  add: function(name, comment, appearance, position, visibility) {
    return new LayerComp();
  },
  
  /*
   * Get the first element in the collection with the provided name.
 *
   * @param {String} name undefined
   * @returns {LayerComp}
   */
  getByName: function(name) {
    return new LayerComp();
  },
  
  /*
   * Get an element in the collection with the provided index.
 *
   * @param {uint} index undefined
   * @returns {LayerComp}
   */
  []: function(index) {
    return new LayerComp();
  },
  
};
