/*
 * A collection of group items that are also part of an article.
 */
var ArticleChildren = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the ArticleChild.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the ArticleChild with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {ArticleChild}
   */
  item: function(index) {
    return new ArticleChild();
  },
  
  /*
   * Returns the ArticleChild with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {ArticleChild}
   */
  itemByID: function(id) {
    return new ArticleChild();
  },
  
  /*
   * Returns the ArticleChildren within the specified range.
 *
   * @param {Mixed} from The ArticleChild, index, or name at the beginning of the range. Can accept: ArticleChild, Long Integer or String.
   * @param {Mixed} to The ArticleChild, index, or name at the end of the range. Can accept: ArticleChild, Long Integer or String.
   * @returns {ArticleChild}
   */
  itemByRange: function(from, to) {
    return new ArticleChild();
  },
  
  /*
   * Returns the first ArticleChild in the collection.
   * @returns {ArticleChild}
   */
  firstItem: function() {
    return new ArticleChild();
  },
  
  /*
   * Returns the last ArticleChild in the collection.
   * @returns {ArticleChild}
   */
  lastItem: function() {
    return new ArticleChild();
  },
  
  /*
   * Returns the middle ArticleChild in the collection.
   * @returns {ArticleChild}
   */
  middleItem: function() {
    return new ArticleChild();
  },
  
  /*
   * Returns the ArticleChild with the index previous to the specified index.
 *
   * @param {ArticleChild} obj The index of the ArticleChild that follows the desired ArticleChild.
   * @returns {ArticleChild}
   */
  previousItem: function(obj) {
    return new ArticleChild();
  },
  
  /*
   * Returns the ArticleChild whose index follows the specified ArticleChild in the collection.
 *
   * @param {ArticleChild} obj The ArticleChild whose index comes before the desired ArticleChild.
   * @returns {ArticleChild}
   */
  nextItem: function(obj) {
    return new ArticleChild();
  },
  
  /*
   * Returns any ArticleChild in the collection.
   * @returns {ArticleChild}
   */
  anyItem: function() {
    return new ArticleChild();
  },
  
  /*
   * Returns every ArticleChild in the collection.
   * @returns {ArticleChild}
   */
  everyItem: function() {
    return new ArticleChild();
  },
  
  /*
   * Generates a string which, if executed, will return the ArticleChild.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the ArticleChild with the specified index.
 *
   * @param {Number} index The index.
   * @returns {ArticleChild}
   */
  []: function(index) {
    return new ArticleChild();
  },
  
};
