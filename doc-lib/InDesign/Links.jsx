/*
 * A collection of links.
 */
var Links = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the Link.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the Link with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {Link}
   */
  item: function(index) {
    return new Link();
  },
  
  /*
   * Returns the Link with the specified name.
 *
   * @param {String} name The name.
   * @returns {Link}
   */
  itemByName: function(name) {
    return new Link();
  },
  
  /*
   * Returns the Link with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {Link}
   */
  itemByID: function(id) {
    return new Link();
  },
  
  /*
   * Returns the Links within the specified range.
 *
   * @param {Mixed} from The Link, index, or name at the beginning of the range. Can accept: Link, Long Integer or String.
   * @param {Mixed} to The Link, index, or name at the end of the range. Can accept: Link, Long Integer or String.
   * @returns {Link}
   */
  itemByRange: function(from, to) {
    return new Link();
  },
  
  /*
   * Returns the first Link in the collection.
   * @returns {Link}
   */
  firstItem: function() {
    return new Link();
  },
  
  /*
   * Returns the last Link in the collection.
   * @returns {Link}
   */
  lastItem: function() {
    return new Link();
  },
  
  /*
   * Returns the middle Link in the collection.
   * @returns {Link}
   */
  middleItem: function() {
    return new Link();
  },
  
  /*
   * Returns the Link with the index previous to the specified index.
 *
   * @param {Link} obj The index of the Link that follows the desired Link.
   * @returns {Link}
   */
  previousItem: function(obj) {
    return new Link();
  },
  
  /*
   * Returns the Link whose index follows the specified Link in the collection.
 *
   * @param {Link} obj The Link whose index comes before the desired Link.
   * @returns {Link}
   */
  nextItem: function(obj) {
    return new Link();
  },
  
  /*
   * Returns any Link in the collection.
   * @returns {Link}
   */
  anyItem: function() {
    return new Link();
  },
  
  /*
   * Returns every Link in the collection.
   * @returns {Link}
   */
  everyItem: function() {
    return new Link();
  },
  
  /*
   * Generates a string which, if executed, will return the Link.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the Link with the specified index.
 *
   * @param {Number} index The index.
   * @returns {Link}
   */
  []: function(index) {
    return new Link();
  },
  
};
