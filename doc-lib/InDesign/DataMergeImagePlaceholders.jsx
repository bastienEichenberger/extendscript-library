/*
 * A collection of data merge image placeholders.
 */
var DataMergeImagePlaceholders = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a data merge image placeholder.
 *
   * @param {PageItem} placeholder The page item on which to place the placeholder.
   * @param {DataMergeField} field The data merge field to insert.
   * @param {Object} [withProperties] Initial values for properties of the new DataMergeImagePlaceholder 
   * @returns {DataMergeImagePlaceholder}
   */
  add: function(placeholder, field, withProperties) {
    return new DataMergeImagePlaceholder();
  },
  
  /*
   * Displays the number of elements in the DataMergeImagePlaceholder.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the DataMergeImagePlaceholder with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {DataMergeImagePlaceholder}
   */
  item: function(index) {
    return new DataMergeImagePlaceholder();
  },
  
  /*
   * Returns the DataMergeImagePlaceholders within the specified range.
 *
   * @param {Mixed} from The DataMergeImagePlaceholder, index, or name at the beginning of the range. Can accept: DataMergeImagePlaceholder, Long Integer or String.
   * @param {Mixed} to The DataMergeImagePlaceholder, index, or name at the end of the range. Can accept: DataMergeImagePlaceholder, Long Integer or String.
   * @returns {DataMergeImagePlaceholder}
   */
  itemByRange: function(from, to) {
    return new DataMergeImagePlaceholder();
  },
  
  /*
   * Returns the first DataMergeImagePlaceholder in the collection.
   * @returns {DataMergeImagePlaceholder}
   */
  firstItem: function() {
    return new DataMergeImagePlaceholder();
  },
  
  /*
   * Returns the last DataMergeImagePlaceholder in the collection.
   * @returns {DataMergeImagePlaceholder}
   */
  lastItem: function() {
    return new DataMergeImagePlaceholder();
  },
  
  /*
   * Returns the middle DataMergeImagePlaceholder in the collection.
   * @returns {DataMergeImagePlaceholder}
   */
  middleItem: function() {
    return new DataMergeImagePlaceholder();
  },
  
  /*
   * Returns the DataMergeImagePlaceholder with the index previous to the specified index.
 *
   * @param {DataMergeImagePlaceholder} obj The index of the DataMergeImagePlaceholder that follows the desired DataMergeImagePlaceholder.
   * @returns {DataMergeImagePlaceholder}
   */
  previousItem: function(obj) {
    return new DataMergeImagePlaceholder();
  },
  
  /*
   * Returns the DataMergeImagePlaceholder whose index follows the specified DataMergeImagePlaceholder in the collection.
 *
   * @param {DataMergeImagePlaceholder} obj The DataMergeImagePlaceholder whose index comes before the desired DataMergeImagePlaceholder.
   * @returns {DataMergeImagePlaceholder}
   */
  nextItem: function(obj) {
    return new DataMergeImagePlaceholder();
  },
  
  /*
   * Returns any DataMergeImagePlaceholder in the collection.
   * @returns {DataMergeImagePlaceholder}
   */
  anyItem: function() {
    return new DataMergeImagePlaceholder();
  },
  
  /*
   * Returns every DataMergeImagePlaceholder in the collection.
   * @returns {DataMergeImagePlaceholder}
   */
  everyItem: function() {
    return new DataMergeImagePlaceholder();
  },
  
  /*
   * Generates a string which, if executed, will return the DataMergeImagePlaceholder.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the DataMergeImagePlaceholder with the specified index.
 *
   * @param {Number} index The index.
   * @returns {DataMergeImagePlaceholder}
   */
  []: function(index) {
    return new DataMergeImagePlaceholder();
  },
  
};
