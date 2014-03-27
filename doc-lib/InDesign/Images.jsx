/*
 * A collection of bitmap images in any bitmap file format &amp;&#35;40;including TIFF, JPEG, or GIF&#41;.
 */
var Images = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the Image.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the Image with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {Image}
   */
  item: function(index) {
    return new Image();
  },
  
  /*
   * Returns the Image with the specified name.
 *
   * @param {String} name The name.
   * @returns {Image}
   */
  itemByName: function(name) {
    return new Image();
  },
  
  /*
   * Returns the Image with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {Image}
   */
  itemByID: function(id) {
    return new Image();
  },
  
  /*
   * Returns the Images within the specified range.
 *
   * @param {Mixed} from The Image, index, or name at the beginning of the range. Can accept: Image, Long Integer or String.
   * @param {Mixed} to The Image, index, or name at the end of the range. Can accept: Image, Long Integer or String.
   * @returns {Image}
   */
  itemByRange: function(from, to) {
    return new Image();
  },
  
  /*
   * Returns the first Image in the collection.
   * @returns {Image}
   */
  firstItem: function() {
    return new Image();
  },
  
  /*
   * Returns the last Image in the collection.
   * @returns {Image}
   */
  lastItem: function() {
    return new Image();
  },
  
  /*
   * Returns the middle Image in the collection.
   * @returns {Image}
   */
  middleItem: function() {
    return new Image();
  },
  
  /*
   * Returns the Image with the index previous to the specified index.
 *
   * @param {Image} obj The index of the Image that follows the desired Image.
   * @returns {Image}
   */
  previousItem: function(obj) {
    return new Image();
  },
  
  /*
   * Returns the Image whose index follows the specified Image in the collection.
 *
   * @param {Image} obj The Image whose index comes before the desired Image.
   * @returns {Image}
   */
  nextItem: function(obj) {
    return new Image();
  },
  
  /*
   * Returns any Image in the collection.
   * @returns {Image}
   */
  anyItem: function() {
    return new Image();
  },
  
  /*
   * Returns every Image in the collection.
   * @returns {Image}
   */
  everyItem: function() {
    return new Image();
  },
  
  /*
   * Generates a string which, if executed, will return the Image.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the Image with the specified index.
 *
   * @param {Number} index The index.
   * @returns {Image}
   */
  []: function(index) {
    return new Image();
  },
  
};
