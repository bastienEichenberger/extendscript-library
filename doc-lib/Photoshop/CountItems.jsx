/*
 * The collection of count items in the document.
 */
var CountItems = {
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
   * Creates a count item.
 *
   * @param {UnitPoint} position The position of origin.
   * @returns {CountItem}
   */
  add: function(position) {
    return new CountItem();
  },
  
  /*
   * Get the first element in the collection with the provided name.
 *
   * @param {String} name undefined
   * @returns {CountItem}
   */
  getByName: function(name) {
    return new CountItem();
  },
  
  /*
   * Get an element in the collection with the provided index.
 *
   * @param {uint} index undefined
   * @returns {CountItem}
   */
  []: function(index) {
    return new CountItem();
  },
  
};
