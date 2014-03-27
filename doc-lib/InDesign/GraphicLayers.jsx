/*
 * A collection of graphic layers.
 */
var GraphicLayers = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the GraphicLayer.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the GraphicLayer with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {GraphicLayer}
   */
  item: function(index) {
    return new GraphicLayer();
  },
  
  /*
   * Returns the GraphicLayer with the specified name.
 *
   * @param {String} name The name.
   * @returns {GraphicLayer}
   */
  itemByName: function(name) {
    return new GraphicLayer();
  },
  
  /*
   * Returns the GraphicLayer with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {GraphicLayer}
   */
  itemByID: function(id) {
    return new GraphicLayer();
  },
  
  /*
   * Returns the GraphicLayers within the specified range.
 *
   * @param {Mixed} from The GraphicLayer, index, or name at the beginning of the range. Can accept: GraphicLayer, Long Integer or String.
   * @param {Mixed} to The GraphicLayer, index, or name at the end of the range. Can accept: GraphicLayer, Long Integer or String.
   * @returns {GraphicLayer}
   */
  itemByRange: function(from, to) {
    return new GraphicLayer();
  },
  
  /*
   * Returns the first GraphicLayer in the collection.
   * @returns {GraphicLayer}
   */
  firstItem: function() {
    return new GraphicLayer();
  },
  
  /*
   * Returns the last GraphicLayer in the collection.
   * @returns {GraphicLayer}
   */
  lastItem: function() {
    return new GraphicLayer();
  },
  
  /*
   * Returns the middle GraphicLayer in the collection.
   * @returns {GraphicLayer}
   */
  middleItem: function() {
    return new GraphicLayer();
  },
  
  /*
   * Returns the GraphicLayer with the index previous to the specified index.
 *
   * @param {GraphicLayer} obj The index of the GraphicLayer that follows the desired GraphicLayer.
   * @returns {GraphicLayer}
   */
  previousItem: function(obj) {
    return new GraphicLayer();
  },
  
  /*
   * Returns the GraphicLayer whose index follows the specified GraphicLayer in the collection.
 *
   * @param {GraphicLayer} obj The GraphicLayer whose index comes before the desired GraphicLayer.
   * @returns {GraphicLayer}
   */
  nextItem: function(obj) {
    return new GraphicLayer();
  },
  
  /*
   * Returns any GraphicLayer in the collection.
   * @returns {GraphicLayer}
   */
  anyItem: function() {
    return new GraphicLayer();
  },
  
  /*
   * Returns every GraphicLayer in the collection.
   * @returns {GraphicLayer}
   */
  everyItem: function() {
    return new GraphicLayer();
  },
  
  /*
   * Generates a string which, if executed, will return the GraphicLayer.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the GraphicLayer with the specified index.
 *
   * @param {Number} index The index.
   * @returns {GraphicLayer}
   */
  []: function(index) {
    return new GraphicLayer();
  },
  
};
