/*
 * A collection of XML comments.
 */
var XMLComments = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new XML comment.
 *
   * @param {String} [value] The value of the comment. 
   * @param {Mixed} [storyOffset] The location within the story, specified as an insertion point. Can accept: InsertionPoint or Long Integer. 
   * @param {Object} [withProperties] Initial values for properties of the new XMLComment 
   * @returns {XMLComment}
   */
  add: function(value, storyOffset, withProperties) {
    return new XMLComment();
  },
  
  /*
   * Displays the number of elements in the XMLComment.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the XMLComment with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {XMLComment}
   */
  item: function(index) {
    return new XMLComment();
  },
  
  /*
   * Returns the XMLComment with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {XMLComment}
   */
  itemByID: function(id) {
    return new XMLComment();
  },
  
  /*
   * Returns the XMLComments within the specified range.
 *
   * @param {Mixed} from The XMLComment, index, or name at the beginning of the range. Can accept: XMLComment, Long Integer or String.
   * @param {Mixed} to The XMLComment, index, or name at the end of the range. Can accept: XMLComment, Long Integer or String.
   * @returns {XMLComment}
   */
  itemByRange: function(from, to) {
    return new XMLComment();
  },
  
  /*
   * Returns the first XMLComment in the collection.
   * @returns {XMLComment}
   */
  firstItem: function() {
    return new XMLComment();
  },
  
  /*
   * Returns the last XMLComment in the collection.
   * @returns {XMLComment}
   */
  lastItem: function() {
    return new XMLComment();
  },
  
  /*
   * Returns the middle XMLComment in the collection.
   * @returns {XMLComment}
   */
  middleItem: function() {
    return new XMLComment();
  },
  
  /*
   * Returns the XMLComment with the index previous to the specified index.
 *
   * @param {XMLComment} obj The index of the XMLComment that follows the desired XMLComment.
   * @returns {XMLComment}
   */
  previousItem: function(obj) {
    return new XMLComment();
  },
  
  /*
   * Returns the XMLComment whose index follows the specified XMLComment in the collection.
 *
   * @param {XMLComment} obj The XMLComment whose index comes before the desired XMLComment.
   * @returns {XMLComment}
   */
  nextItem: function(obj) {
    return new XMLComment();
  },
  
  /*
   * Returns any XMLComment in the collection.
   * @returns {XMLComment}
   */
  anyItem: function() {
    return new XMLComment();
  },
  
  /*
   * Returns every XMLComment in the collection.
   * @returns {XMLComment}
   */
  everyItem: function() {
    return new XMLComment();
  },
  
  /*
   * Generates a string which, if executed, will return the XMLComment.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the XMLComment with the specified index.
 *
   * @param {Number} index The index.
   * @returns {XMLComment}
   */
  []: function(index) {
    return new XMLComment();
  },
  
};
