/*
 * A collection of articles.
 */
var Articles = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new Article
 *
   * @param {String} [name] The article name 
   * @param {Boolean} [articleExportStatus] The article's export status 
   * @param {LocationOptions} [at] The location relative to the reference object or within the containing object. 
   * @param {Article} [reference] The reference object. Note: Required when the to value specifies before or after. 
   * @param {Object} [withProperties] Initial values for properties of the new Article 
   * @returns {Article}
   */
  add: function(name, articleExportStatus, at, reference, withProperties) {
    return new Article();
  },
  
  /*
   * Displays the number of elements in the Article.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the Article with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {Article}
   */
  item: function(index) {
    return new Article();
  },
  
  /*
   * Returns the Article with the specified name.
 *
   * @param {String} name The name.
   * @returns {Article}
   */
  itemByName: function(name) {
    return new Article();
  },
  
  /*
   * Returns the Article with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {Article}
   */
  itemByID: function(id) {
    return new Article();
  },
  
  /*
   * Returns the Articles within the specified range.
 *
   * @param {Mixed} from The Article, index, or name at the beginning of the range. Can accept: Article, Long Integer or String.
   * @param {Mixed} to The Article, index, or name at the end of the range. Can accept: Article, Long Integer or String.
   * @returns {Article}
   */
  itemByRange: function(from, to) {
    return new Article();
  },
  
  /*
   * Returns the first Article in the collection.
   * @returns {Article}
   */
  firstItem: function() {
    return new Article();
  },
  
  /*
   * Returns the last Article in the collection.
   * @returns {Article}
   */
  lastItem: function() {
    return new Article();
  },
  
  /*
   * Returns the middle Article in the collection.
   * @returns {Article}
   */
  middleItem: function() {
    return new Article();
  },
  
  /*
   * Returns the Article with the index previous to the specified index.
 *
   * @param {Article} obj The index of the Article that follows the desired Article.
   * @returns {Article}
   */
  previousItem: function(obj) {
    return new Article();
  },
  
  /*
   * Returns the Article whose index follows the specified Article in the collection.
 *
   * @param {Article} obj The Article whose index comes before the desired Article.
   * @returns {Article}
   */
  nextItem: function(obj) {
    return new Article();
  },
  
  /*
   * Returns any Article in the collection.
   * @returns {Article}
   */
  anyItem: function() {
    return new Article();
  },
  
  /*
   * Returns every Article in the collection.
   * @returns {Article}
   */
  everyItem: function() {
    return new Article();
  },
  
  /*
   * Generates a string which, if executed, will return the Article.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the Article with the specified index.
 *
   * @param {Number} index The index.
   * @returns {Article}
   */
  []: function(index) {
    return new Article();
  },
  
};
