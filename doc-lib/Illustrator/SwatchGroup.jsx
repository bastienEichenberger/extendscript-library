/*
 * A Swatch group.
 */
var SwatchGroup = {
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
   * Name of the swatch group.
   * @type {String}
   */
  name: undefined,
  
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
   * Add a swatch to the group.
 *
   * @param {Swatch} swatch The swatch to be added to the group.
   */
  addSwatch: function(swatch) {
  },
  
  /*
   * Get all swatches in the swatch group.
   * @returns {Swatch}
   */
  getAllSwatches: function() {
    return new Swatch();
  },
  
  /*
   * Add a spot swatch to the group.
 *
   * @param {Spot} spot The spot swatch to be added to the group.
   */
  addSpot: function(spot) {
  },
  
};
