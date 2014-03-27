/*
 * A collection of table style groups.
 */
var TableStyleGroups = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new TableStyleGroup.
 *
   * @param {Object} [withProperties] Initial values for properties of the new TableStyleGroup 
   * @returns {TableStyleGroup}
   */
  add: function(withProperties) {
    return new TableStyleGroup();
  },
  
  /*
   * Displays the number of elements in the TableStyleGroup.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the TableStyleGroup with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {TableStyleGroup}
   */
  item: function(index) {
    return new TableStyleGroup();
  },
  
  /*
   * Returns the TableStyleGroup with the specified name.
 *
   * @param {String} name The name.
   * @returns {TableStyleGroup}
   */
  itemByName: function(name) {
    return new TableStyleGroup();
  },
  
  /*
   * Returns the TableStyleGroup with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {TableStyleGroup}
   */
  itemByID: function(id) {
    return new TableStyleGroup();
  },
  
  /*
   * Returns the TableStyleGroups within the specified range.
 *
   * @param {Mixed} from The TableStyleGroup, index, or name at the beginning of the range. Can accept: TableStyleGroup, Long Integer or String.
   * @param {Mixed} to The TableStyleGroup, index, or name at the end of the range. Can accept: TableStyleGroup, Long Integer or String.
   * @returns {TableStyleGroup}
   */
  itemByRange: function(from, to) {
    return new TableStyleGroup();
  },
  
  /*
   * Returns the first TableStyleGroup in the collection.
   * @returns {TableStyleGroup}
   */
  firstItem: function() {
    return new TableStyleGroup();
  },
  
  /*
   * Returns the last TableStyleGroup in the collection.
   * @returns {TableStyleGroup}
   */
  lastItem: function() {
    return new TableStyleGroup();
  },
  
  /*
   * Returns the middle TableStyleGroup in the collection.
   * @returns {TableStyleGroup}
   */
  middleItem: function() {
    return new TableStyleGroup();
  },
  
  /*
   * Returns the TableStyleGroup with the index previous to the specified index.
 *
   * @param {TableStyleGroup} obj The index of the TableStyleGroup that follows the desired TableStyleGroup.
   * @returns {TableStyleGroup}
   */
  previousItem: function(obj) {
    return new TableStyleGroup();
  },
  
  /*
   * Returns the TableStyleGroup whose index follows the specified TableStyleGroup in the collection.
 *
   * @param {TableStyleGroup} obj The TableStyleGroup whose index comes before the desired TableStyleGroup.
   * @returns {TableStyleGroup}
   */
  nextItem: function(obj) {
    return new TableStyleGroup();
  },
  
  /*
   * Returns any TableStyleGroup in the collection.
   * @returns {TableStyleGroup}
   */
  anyItem: function() {
    return new TableStyleGroup();
  },
  
  /*
   * Returns every TableStyleGroup in the collection.
   * @returns {TableStyleGroup}
   */
  everyItem: function() {
    return new TableStyleGroup();
  },
  
  /*
   * Generates a string which, if executed, will return the TableStyleGroup.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the TableStyleGroup with the specified index.
 *
   * @param {Number} index The index.
   * @returns {TableStyleGroup}
   */
  []: function(index) {
    return new TableStyleGroup();
  },
  
};
