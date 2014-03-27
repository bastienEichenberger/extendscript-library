/*
 * A collection of groups.
 */
var Groups = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the Group.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Creates a new Group.
 *
   * @param {PageItem} groupItems The objects to group.
   * @param {Layer} [layer] The layer on which to create the Group. 
   * @param {LocationOptions} [at] The location at which to insert the Group relative to the reference object or within the container object. 
   * @param {Mixed} [reference] The reference object. Note: Required when the at parameter is before or after. Can accept: Document, Spread, MasterSpread, Page, Layer or PageItem. 
   * @param {Object} [withProperties] Initial values for properties of the new Group 
   * @returns {Group}
   */
  add: function(groupItems, layer, at, reference, withProperties) {
    return new Group();
  },
  
  /*
   * Returns the Group with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {Group}
   */
  item: function(index) {
    return new Group();
  },
  
  /*
   * Returns the Group with the specified name.
 *
   * @param {String} name The name.
   * @returns {Group}
   */
  itemByName: function(name) {
    return new Group();
  },
  
  /*
   * Returns the Group with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {Group}
   */
  itemByID: function(id) {
    return new Group();
  },
  
  /*
   * Returns the Groups within the specified range.
 *
   * @param {Mixed} from The Group, index, or name at the beginning of the range. Can accept: Group, Long Integer or String.
   * @param {Mixed} to The Group, index, or name at the end of the range. Can accept: Group, Long Integer or String.
   * @returns {Group}
   */
  itemByRange: function(from, to) {
    return new Group();
  },
  
  /*
   * Returns the first Group in the collection.
   * @returns {Group}
   */
  firstItem: function() {
    return new Group();
  },
  
  /*
   * Returns the last Group in the collection.
   * @returns {Group}
   */
  lastItem: function() {
    return new Group();
  },
  
  /*
   * Returns the middle Group in the collection.
   * @returns {Group}
   */
  middleItem: function() {
    return new Group();
  },
  
  /*
   * Returns the Group with the index previous to the specified index.
 *
   * @param {Group} obj The index of the Group that follows the desired Group.
   * @returns {Group}
   */
  previousItem: function(obj) {
    return new Group();
  },
  
  /*
   * Returns the Group whose index follows the specified Group in the collection.
 *
   * @param {Group} obj The Group whose index comes before the desired Group.
   * @returns {Group}
   */
  nextItem: function(obj) {
    return new Group();
  },
  
  /*
   * Returns any Group in the collection.
   * @returns {Group}
   */
  anyItem: function() {
    return new Group();
  },
  
  /*
   * Returns every Group in the collection.
   * @returns {Group}
   */
  everyItem: function() {
    return new Group();
  },
  
  /*
   * Generates a string which, if executed, will return the Group.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the Group with the specified index.
 *
   * @param {Number} index The index.
   * @returns {Group}
   */
  []: function(index) {
    return new Group();
  },
  
};
