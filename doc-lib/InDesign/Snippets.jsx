/*
 * A collection of IDML snippets.
 */
var Snippets = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the Snippet.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the Snippet with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {Snippet}
   */
  item: function(index) {
    return new Snippet();
  },
  
  /*
   * Returns the Snippet with the specified name.
 *
   * @param {String} name The name.
   * @returns {Snippet}
   */
  itemByName: function(name) {
    return new Snippet();
  },
  
  /*
   * Returns the Snippet with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {Snippet}
   */
  itemByID: function(id) {
    return new Snippet();
  },
  
  /*
   * Returns the Snippets within the specified range.
 *
   * @param {Mixed} from The Snippet, index, or name at the beginning of the range. Can accept: Snippet, Long Integer or String.
   * @param {Mixed} to The Snippet, index, or name at the end of the range. Can accept: Snippet, Long Integer or String.
   * @returns {Snippet}
   */
  itemByRange: function(from, to) {
    return new Snippet();
  },
  
  /*
   * Returns the first Snippet in the collection.
   * @returns {Snippet}
   */
  firstItem: function() {
    return new Snippet();
  },
  
  /*
   * Returns the last Snippet in the collection.
   * @returns {Snippet}
   */
  lastItem: function() {
    return new Snippet();
  },
  
  /*
   * Returns the middle Snippet in the collection.
   * @returns {Snippet}
   */
  middleItem: function() {
    return new Snippet();
  },
  
  /*
   * Returns the Snippet with the index previous to the specified index.
 *
   * @param {Snippet} obj The index of the Snippet that follows the desired Snippet.
   * @returns {Snippet}
   */
  previousItem: function(obj) {
    return new Snippet();
  },
  
  /*
   * Returns the Snippet whose index follows the specified Snippet in the collection.
 *
   * @param {Snippet} obj The Snippet whose index comes before the desired Snippet.
   * @returns {Snippet}
   */
  nextItem: function(obj) {
    return new Snippet();
  },
  
  /*
   * Returns any Snippet in the collection.
   * @returns {Snippet}
   */
  anyItem: function() {
    return new Snippet();
  },
  
  /*
   * Returns every Snippet in the collection.
   * @returns {Snippet}
   */
  everyItem: function() {
    return new Snippet();
  },
  
  /*
   * Generates a string which, if executed, will return the Snippet.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the Snippet with the specified index.
 *
   * @param {Number} index The index.
   * @returns {Snippet}
   */
  []: function(index) {
    return new Snippet();
  },
  
};
