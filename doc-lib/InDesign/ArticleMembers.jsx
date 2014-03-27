/*
 * A collection of article members.
 */
var ArticleMembers = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Adds a new member.
 *
   * @param {PageItem} itemRef page item to be added to article
   * @param {LocationOptions} [at] The location relative to the reference object or within the containing object. 
   * @param {ArticleMember} [reference] The reference object. Note: Required when the to value specifies before or after. 
   * @param {Object} [withProperties] Initial values for properties of the new ArticleMember 
   * @returns {ArticleMember}
   */
  add: function(itemRef, at, reference, withProperties) {
    return new ArticleMember();
  },
  
  /*
   * Displays the number of elements in the ArticleMember.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the ArticleMember with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {ArticleMember}
   */
  item: function(index) {
    return new ArticleMember();
  },
  
  /*
   * Returns the ArticleMember with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {ArticleMember}
   */
  itemByID: function(id) {
    return new ArticleMember();
  },
  
  /*
   * Returns the ArticleMembers within the specified range.
 *
   * @param {Mixed} from The ArticleMember, index, or name at the beginning of the range. Can accept: ArticleMember, Long Integer or String.
   * @param {Mixed} to The ArticleMember, index, or name at the end of the range. Can accept: ArticleMember, Long Integer or String.
   * @returns {ArticleMember}
   */
  itemByRange: function(from, to) {
    return new ArticleMember();
  },
  
  /*
   * Returns the first ArticleMember in the collection.
   * @returns {ArticleMember}
   */
  firstItem: function() {
    return new ArticleMember();
  },
  
  /*
   * Returns the last ArticleMember in the collection.
   * @returns {ArticleMember}
   */
  lastItem: function() {
    return new ArticleMember();
  },
  
  /*
   * Returns the middle ArticleMember in the collection.
   * @returns {ArticleMember}
   */
  middleItem: function() {
    return new ArticleMember();
  },
  
  /*
   * Returns the ArticleMember with the index previous to the specified index.
 *
   * @param {ArticleMember} obj The index of the ArticleMember that follows the desired ArticleMember.
   * @returns {ArticleMember}
   */
  previousItem: function(obj) {
    return new ArticleMember();
  },
  
  /*
   * Returns the ArticleMember whose index follows the specified ArticleMember in the collection.
 *
   * @param {ArticleMember} obj The ArticleMember whose index comes before the desired ArticleMember.
   * @returns {ArticleMember}
   */
  nextItem: function(obj) {
    return new ArticleMember();
  },
  
  /*
   * Returns any ArticleMember in the collection.
   * @returns {ArticleMember}
   */
  anyItem: function() {
    return new ArticleMember();
  },
  
  /*
   * Returns every ArticleMember in the collection.
   * @returns {ArticleMember}
   */
  everyItem: function() {
    return new ArticleMember();
  },
  
  /*
   * Generates a string which, if executed, will return the ArticleMember.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the ArticleMember with the specified index.
 *
   * @param {Number} index The index.
   * @returns {ArticleMember}
   */
  []: function(index) {
    return new ArticleMember();
  },
  
};
