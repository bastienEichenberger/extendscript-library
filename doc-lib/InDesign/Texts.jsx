/*
 * A collection of text objects.
 */
var Texts = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the Text.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the Text with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {Text}
   */
  item: function(index) {
    return new Text();
  },
  
  /*
   * Returns the Texts within the specified range.
 *
   * @param {Mixed} from The Text, index, or name at the beginning of the range. Can accept: Text, Long Integer or String.
   * @param {Mixed} to The Text, index, or name at the end of the range. Can accept: Text, Long Integer or String.
   * @returns {Text}
   */
  itemByRange: function(from, to) {
    return new Text();
  },
  
  /*
   * Returns the first Text in the collection.
   * @returns {Text}
   */
  firstItem: function() {
    return new Text();
  },
  
  /*
   * Returns the last Text in the collection.
   * @returns {Text}
   */
  lastItem: function() {
    return new Text();
  },
  
  /*
   * Returns the middle Text in the collection.
   * @returns {Text}
   */
  middleItem: function() {
    return new Text();
  },
  
  /*
   * Returns the Text with the index previous to the specified index.
 *
   * @param {Text} obj The index of the Text that follows the desired Text.
   * @returns {Text}
   */
  previousItem: function(obj) {
    return new Text();
  },
  
  /*
   * Returns the Text whose index follows the specified Text in the collection.
 *
   * @param {Text} obj The Text whose index comes before the desired Text.
   * @returns {Text}
   */
  nextItem: function(obj) {
    return new Text();
  },
  
  /*
   * Returns any Text in the collection.
   * @returns {Text}
   */
  anyItem: function() {
    return new Text();
  },
  
  /*
   * Returns every Text in the collection.
   * @returns {Text}
   */
  everyItem: function() {
    return new Text();
  },
  
  /*
   * Generates a string which, if executed, will return the Text.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the Text with the specified index.
 *
   * @param {Number} index The index.
   * @returns {Text}
   */
  []: function(index) {
    return new Text();
  },
  
};
