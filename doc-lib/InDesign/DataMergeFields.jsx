/*
 * A collection of data merge fields.
 */
var DataMergeFields = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the DataMergeField.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the DataMergeField with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {DataMergeField}
   */
  item: function(index) {
    return new DataMergeField();
  },
  
  /*
   * Returns the DataMergeFields within the specified range.
 *
   * @param {Mixed} from The DataMergeField, index, or name at the beginning of the range. Can accept: DataMergeField, Long Integer or String.
   * @param {Mixed} to The DataMergeField, index, or name at the end of the range. Can accept: DataMergeField, Long Integer or String.
   * @returns {DataMergeField}
   */
  itemByRange: function(from, to) {
    return new DataMergeField();
  },
  
  /*
   * Returns the first DataMergeField in the collection.
   * @returns {DataMergeField}
   */
  firstItem: function() {
    return new DataMergeField();
  },
  
  /*
   * Returns the last DataMergeField in the collection.
   * @returns {DataMergeField}
   */
  lastItem: function() {
    return new DataMergeField();
  },
  
  /*
   * Returns the middle DataMergeField in the collection.
   * @returns {DataMergeField}
   */
  middleItem: function() {
    return new DataMergeField();
  },
  
  /*
   * Returns the DataMergeField with the index previous to the specified index.
 *
   * @param {DataMergeField} obj The index of the DataMergeField that follows the desired DataMergeField.
   * @returns {DataMergeField}
   */
  previousItem: function(obj) {
    return new DataMergeField();
  },
  
  /*
   * Returns the DataMergeField whose index follows the specified DataMergeField in the collection.
 *
   * @param {DataMergeField} obj The DataMergeField whose index comes before the desired DataMergeField.
   * @returns {DataMergeField}
   */
  nextItem: function(obj) {
    return new DataMergeField();
  },
  
  /*
   * Returns any DataMergeField in the collection.
   * @returns {DataMergeField}
   */
  anyItem: function() {
    return new DataMergeField();
  },
  
  /*
   * Returns every DataMergeField in the collection.
   * @returns {DataMergeField}
   */
  everyItem: function() {
    return new DataMergeField();
  },
  
  /*
   * Generates a string which, if executed, will return the DataMergeField.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the DataMergeField with the specified index.
 *
   * @param {Number} index The index.
   * @returns {DataMergeField}
   */
  []: function(index) {
    return new DataMergeField();
  },
  
};
