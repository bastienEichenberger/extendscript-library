/*
 * A collection of tables.
 */
var Tables = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the Table.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Creates a new table.
 *
   * @param {LocationOptions} [to] The location of the new table relative to the reference object or within the container object.  
   * @param {Mixed} [reference] The reference object. Note: Required when the to value specifies before or after. Can accept: Table, XMLElement, XmlStory, TextFrame, Text, InsertionPoint, TextStyleRange, Paragraph, TextColumn, Line, Word, Character, Story or Cell. 
   * @param {Object} [withProperties] Initial values for properties of the new Table 
   * @returns {Table}
   */
  add: function(to, reference, withProperties) {
    return new Table();
  },
  
  /*
   * Returns the Table with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {Table}
   */
  item: function(index) {
    return new Table();
  },
  
  /*
   * Returns the Table with the specified name.
 *
   * @param {String} name The name.
   * @returns {Table}
   */
  itemByName: function(name) {
    return new Table();
  },
  
  /*
   * Returns the Table with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {Table}
   */
  itemByID: function(id) {
    return new Table();
  },
  
  /*
   * Returns the Tables within the specified range.
 *
   * @param {Mixed} from The Table, index, or name at the beginning of the range. Can accept: Table, Long Integer or String.
   * @param {Mixed} to The Table, index, or name at the end of the range. Can accept: Table, Long Integer or String.
   * @returns {Table}
   */
  itemByRange: function(from, to) {
    return new Table();
  },
  
  /*
   * Returns the first Table in the collection.
   * @returns {Table}
   */
  firstItem: function() {
    return new Table();
  },
  
  /*
   * Returns the last Table in the collection.
   * @returns {Table}
   */
  lastItem: function() {
    return new Table();
  },
  
  /*
   * Returns the middle Table in the collection.
   * @returns {Table}
   */
  middleItem: function() {
    return new Table();
  },
  
  /*
   * Returns the Table with the index previous to the specified index.
 *
   * @param {Table} obj The index of the Table that follows the desired Table.
   * @returns {Table}
   */
  previousItem: function(obj) {
    return new Table();
  },
  
  /*
   * Returns the Table whose index follows the specified Table in the collection.
 *
   * @param {Table} obj The Table whose index comes before the desired Table.
   * @returns {Table}
   */
  nextItem: function(obj) {
    return new Table();
  },
  
  /*
   * Returns any Table in the collection.
   * @returns {Table}
   */
  anyItem: function() {
    return new Table();
  },
  
  /*
   * Returns every Table in the collection.
   * @returns {Table}
   */
  everyItem: function() {
    return new Table();
  },
  
  /*
   * Generates a string which, if executed, will return the Table.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the Table with the specified index.
 *
   * @param {Number} index The index.
   * @returns {Table}
   */
  []: function(index) {
    return new Table();
  },
  
};
