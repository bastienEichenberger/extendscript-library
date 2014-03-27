/*
 * A collection of object style groups.
 */
var ObjectStyleGroups = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new ObjectStyleGroup.
 *
   * @param {Object} [withProperties] Initial values for properties of the new ObjectStyleGroup 
   * @returns {ObjectStyleGroup}
   */
  add: function(withProperties) {
    return new ObjectStyleGroup();
  },
  
  /*
   * Displays the number of elements in the ObjectStyleGroup.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the ObjectStyleGroup with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {ObjectStyleGroup}
   */
  item: function(index) {
    return new ObjectStyleGroup();
  },
  
  /*
   * Returns the ObjectStyleGroup with the specified name.
 *
   * @param {String} name The name.
   * @returns {ObjectStyleGroup}
   */
  itemByName: function(name) {
    return new ObjectStyleGroup();
  },
  
  /*
   * Returns the ObjectStyleGroup with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {ObjectStyleGroup}
   */
  itemByID: function(id) {
    return new ObjectStyleGroup();
  },
  
  /*
   * Returns the ObjectStyleGroups within the specified range.
 *
   * @param {Mixed} from The ObjectStyleGroup, index, or name at the beginning of the range. Can accept: ObjectStyleGroup, Long Integer or String.
   * @param {Mixed} to The ObjectStyleGroup, index, or name at the end of the range. Can accept: ObjectStyleGroup, Long Integer or String.
   * @returns {ObjectStyleGroup}
   */
  itemByRange: function(from, to) {
    return new ObjectStyleGroup();
  },
  
  /*
   * Returns the first ObjectStyleGroup in the collection.
   * @returns {ObjectStyleGroup}
   */
  firstItem: function() {
    return new ObjectStyleGroup();
  },
  
  /*
   * Returns the last ObjectStyleGroup in the collection.
   * @returns {ObjectStyleGroup}
   */
  lastItem: function() {
    return new ObjectStyleGroup();
  },
  
  /*
   * Returns the middle ObjectStyleGroup in the collection.
   * @returns {ObjectStyleGroup}
   */
  middleItem: function() {
    return new ObjectStyleGroup();
  },
  
  /*
   * Returns the ObjectStyleGroup with the index previous to the specified index.
 *
   * @param {ObjectStyleGroup} obj The index of the ObjectStyleGroup that follows the desired ObjectStyleGroup.
   * @returns {ObjectStyleGroup}
   */
  previousItem: function(obj) {
    return new ObjectStyleGroup();
  },
  
  /*
   * Returns the ObjectStyleGroup whose index follows the specified ObjectStyleGroup in the collection.
 *
   * @param {ObjectStyleGroup} obj The ObjectStyleGroup whose index comes before the desired ObjectStyleGroup.
   * @returns {ObjectStyleGroup}
   */
  nextItem: function(obj) {
    return new ObjectStyleGroup();
  },
  
  /*
   * Returns any ObjectStyleGroup in the collection.
   * @returns {ObjectStyleGroup}
   */
  anyItem: function() {
    return new ObjectStyleGroup();
  },
  
  /*
   * Returns every ObjectStyleGroup in the collection.
   * @returns {ObjectStyleGroup}
   */
  everyItem: function() {
    return new ObjectStyleGroup();
  },
  
  /*
   * Generates a string which, if executed, will return the ObjectStyleGroup.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the ObjectStyleGroup with the specified index.
 *
   * @param {Number} index The index.
   * @returns {ObjectStyleGroup}
   */
  []: function(index) {
    return new ObjectStyleGroup();
  },
  
};
