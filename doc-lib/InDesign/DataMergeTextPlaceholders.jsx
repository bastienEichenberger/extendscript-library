/*
 * A collection of data merge text placeholders.
 */
var DataMergeTextPlaceholders = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a data merge text placeholder.
 *
   * @param {Story} parentStory The story in which to insert the placeholder.
   * @param {Mixed} storyOffset The position within the story at which to insert the placeholder, specified as an offset number or an insertion point. Can accept: InsertionPoint or Long Integer.
   * @param {DataMergeField} field The field to insert.
   * @param {Object} [withProperties] Initial values for properties of the new DataMergeTextPlaceholder 
   * @returns {DataMergeTextPlaceholder}
   */
  add: function(parentStory, storyOffset, field, withProperties) {
    return new DataMergeTextPlaceholder();
  },
  
  /*
   * Displays the number of elements in the DataMergeTextPlaceholder.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the DataMergeTextPlaceholder with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {DataMergeTextPlaceholder}
   */
  item: function(index) {
    return new DataMergeTextPlaceholder();
  },
  
  /*
   * Returns the DataMergeTextPlaceholders within the specified range.
 *
   * @param {Mixed} from The DataMergeTextPlaceholder, index, or name at the beginning of the range. Can accept: DataMergeTextPlaceholder, Long Integer or String.
   * @param {Mixed} to The DataMergeTextPlaceholder, index, or name at the end of the range. Can accept: DataMergeTextPlaceholder, Long Integer or String.
   * @returns {DataMergeTextPlaceholder}
   */
  itemByRange: function(from, to) {
    return new DataMergeTextPlaceholder();
  },
  
  /*
   * Returns the first DataMergeTextPlaceholder in the collection.
   * @returns {DataMergeTextPlaceholder}
   */
  firstItem: function() {
    return new DataMergeTextPlaceholder();
  },
  
  /*
   * Returns the last DataMergeTextPlaceholder in the collection.
   * @returns {DataMergeTextPlaceholder}
   */
  lastItem: function() {
    return new DataMergeTextPlaceholder();
  },
  
  /*
   * Returns the middle DataMergeTextPlaceholder in the collection.
   * @returns {DataMergeTextPlaceholder}
   */
  middleItem: function() {
    return new DataMergeTextPlaceholder();
  },
  
  /*
   * Returns the DataMergeTextPlaceholder with the index previous to the specified index.
 *
   * @param {DataMergeTextPlaceholder} obj The index of the DataMergeTextPlaceholder that follows the desired DataMergeTextPlaceholder.
   * @returns {DataMergeTextPlaceholder}
   */
  previousItem: function(obj) {
    return new DataMergeTextPlaceholder();
  },
  
  /*
   * Returns the DataMergeTextPlaceholder whose index follows the specified DataMergeTextPlaceholder in the collection.
 *
   * @param {DataMergeTextPlaceholder} obj The DataMergeTextPlaceholder whose index comes before the desired DataMergeTextPlaceholder.
   * @returns {DataMergeTextPlaceholder}
   */
  nextItem: function(obj) {
    return new DataMergeTextPlaceholder();
  },
  
  /*
   * Returns any DataMergeTextPlaceholder in the collection.
   * @returns {DataMergeTextPlaceholder}
   */
  anyItem: function() {
    return new DataMergeTextPlaceholder();
  },
  
  /*
   * Returns every DataMergeTextPlaceholder in the collection.
   * @returns {DataMergeTextPlaceholder}
   */
  everyItem: function() {
    return new DataMergeTextPlaceholder();
  },
  
  /*
   * Generates a string which, if executed, will return the DataMergeTextPlaceholder.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the DataMergeTextPlaceholder with the specified index.
 *
   * @param {Number} index The index.
   * @returns {DataMergeTextPlaceholder}
   */
  []: function(index) {
    return new DataMergeTextPlaceholder();
  },
  
};
