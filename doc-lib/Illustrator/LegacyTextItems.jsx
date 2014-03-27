/*
 * A collection of legacy text items.
 */
var LegacyTextItems = {
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
   * Get the first element in the collection with the provided name.
 *
   * @param {String} name undefined
   * @returns {LegacyTextItem}
   */
  getByName: function(name) {
    return new LegacyTextItem();
  },
  
  /*
   * Create text frames from all legacy text items. The original legacy text items will be deleted.
   * @returns {Boolean}
   */
  convertToNative: function() {
    return new Boolean();
  },
  
};
