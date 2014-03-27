/*
 * A collection of indexing sort options.
 */
var IndexingSortOptions = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the IndexingSortOption.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the IndexingSortOption with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {IndexingSortOption}
   */
  item: function(index) {
    return new IndexingSortOption();
  },
  
  /*
   * Returns the IndexingSortOption with the specified name.
 *
   * @param {String} name The name.
   * @returns {IndexingSortOption}
   */
  itemByName: function(name) {
    return new IndexingSortOption();
  },
  
  /*
   * Returns the IndexingSortOptions within the specified range.
 *
   * @param {Mixed} from The IndexingSortOption, index, or name at the beginning of the range. Can accept: IndexingSortOption, Long Integer or String.
   * @param {Mixed} to The IndexingSortOption, index, or name at the end of the range. Can accept: IndexingSortOption, Long Integer or String.
   * @returns {IndexingSortOption}
   */
  itemByRange: function(from, to) {
    return new IndexingSortOption();
  },
  
  /*
   * Returns the first IndexingSortOption in the collection.
   * @returns {IndexingSortOption}
   */
  firstItem: function() {
    return new IndexingSortOption();
  },
  
  /*
   * Returns the last IndexingSortOption in the collection.
   * @returns {IndexingSortOption}
   */
  lastItem: function() {
    return new IndexingSortOption();
  },
  
  /*
   * Returns the middle IndexingSortOption in the collection.
   * @returns {IndexingSortOption}
   */
  middleItem: function() {
    return new IndexingSortOption();
  },
  
  /*
   * Returns the IndexingSortOption with the index previous to the specified index.
 *
   * @param {IndexingSortOption} obj The index of the IndexingSortOption that follows the desired IndexingSortOption.
   * @returns {IndexingSortOption}
   */
  previousItem: function(obj) {
    return new IndexingSortOption();
  },
  
  /*
   * Returns the IndexingSortOption whose index follows the specified IndexingSortOption in the collection.
 *
   * @param {IndexingSortOption} obj The IndexingSortOption whose index comes before the desired IndexingSortOption.
   * @returns {IndexingSortOption}
   */
  nextItem: function(obj) {
    return new IndexingSortOption();
  },
  
  /*
   * Returns any IndexingSortOption in the collection.
   * @returns {IndexingSortOption}
   */
  anyItem: function() {
    return new IndexingSortOption();
  },
  
  /*
   * Returns every IndexingSortOption in the collection.
   * @returns {IndexingSortOption}
   */
  everyItem: function() {
    return new IndexingSortOption();
  },
  
  /*
   * Generates a string which, if executed, will return the IndexingSortOption.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the IndexingSortOption with the specified index.
 *
   * @param {Number} index The index.
   * @returns {IndexingSortOption}
   */
  []: function(index) {
    return new IndexingSortOption();
  },
  
};
