/*
 * A custom color.
 */
var Spot = {
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
   * The custom color's name.
   * @type {String}
   */
  name: undefined,
  
  /*
   * undefined
   * @type {Color}
   */
  color: undefined,
  
  /*
   * Type of the custom color.
   * @type {ColorModel}
   */
  colorType: undefined,
  
  /*
   * Kind of the spot color (i.e. RGB, CMYK or LAB), it is the name of color kind contained in spot.
   * @type {SpotColorKind}
   */
  spotKind: undefined,
  
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
   * Gets the internal color of a spot.
   * @returns {Number}
   */
  getInternalColor: function() {
    return new Number();
  },
  
};
