/*
 * The collection of color samplers in the document.
 */
var ColorSamplers = {
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
   * Creates a color sampler.
 *
   * @param {UnitPoint} position The horizontal and vertical (x,y) locations, respectively, of the color sampler.
   * @returns {ColorSampler}
   */
  add: function(position) {
    return new ColorSampler();
  },
  
  /*
   * Get the first element in the collection with the provided name.
 *
   * @param {String} name undefined
   * @returns {ColorSampler}
   */
  getByName: function(name) {
    return new ColorSampler();
  },
  
  /*
   * Get an element in the collection with the provided index.
 *
   * @param {uint} index undefined
   * @returns {ColorSampler}
   */
  []: function(index) {
    return new ColorSampler();
  },
  
};
