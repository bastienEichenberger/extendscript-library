/*
 * A color sampler in a document.
 */
var ColorSampler = {
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
   * The position of the color sampler in the document.
   * @type {UnitPoint}
   */
  position: undefined,
  
  /*
   * The color of the color sampler.
   * @type {SolidColor}
   */
  color: undefined,
  
  /*
   * Adds an element.
   * @returns {ColorSampler}
   */
  add: function() {
    return new ColorSampler();
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
   * Moves the color sampler to a new location.
 *
   * @param {UnitPoint} position Position of destination (unit value)
   */
  move: function(position) {
  },
  
};
