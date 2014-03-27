/*
 * A collection of text editboxes.
 */
var TextEditboxes = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new TextEditbox.
 *
   * @param {Object} [withProperties] Initial values for properties of the new TextEditbox 
   * @returns {TextEditbox}
   */
  add: function(withProperties) {
    return new TextEditbox();
  },
  
  /*
   * Displays the number of elements in the TextEditbox.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the TextEditbox with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {TextEditbox}
   */
  item: function(index) {
    return new TextEditbox();
  },
  
  /*
   * Returns the TextEditbox with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {TextEditbox}
   */
  itemByID: function(id) {
    return new TextEditbox();
  },
  
  /*
   * Returns the TextEditboxes within the specified range.
 *
   * @param {Mixed} from The TextEditbox, index, or name at the beginning of the range. Can accept: TextEditbox, Long Integer or String.
   * @param {Mixed} to The TextEditbox, index, or name at the end of the range. Can accept: TextEditbox, Long Integer or String.
   * @returns {TextEditbox}
   */
  itemByRange: function(from, to) {
    return new TextEditbox();
  },
  
  /*
   * Returns the first TextEditbox in the collection.
   * @returns {TextEditbox}
   */
  firstItem: function() {
    return new TextEditbox();
  },
  
  /*
   * Returns the last TextEditbox in the collection.
   * @returns {TextEditbox}
   */
  lastItem: function() {
    return new TextEditbox();
  },
  
  /*
   * Returns the middle TextEditbox in the collection.
   * @returns {TextEditbox}
   */
  middleItem: function() {
    return new TextEditbox();
  },
  
  /*
   * Returns the TextEditbox with the index previous to the specified index.
 *
   * @param {TextEditbox} obj The index of the TextEditbox that follows the desired TextEditbox.
   * @returns {TextEditbox}
   */
  previousItem: function(obj) {
    return new TextEditbox();
  },
  
  /*
   * Returns the TextEditbox whose index follows the specified TextEditbox in the collection.
 *
   * @param {TextEditbox} obj The TextEditbox whose index comes before the desired TextEditbox.
   * @returns {TextEditbox}
   */
  nextItem: function(obj) {
    return new TextEditbox();
  },
  
  /*
   * Returns any TextEditbox in the collection.
   * @returns {TextEditbox}
   */
  anyItem: function() {
    return new TextEditbox();
  },
  
  /*
   * Returns every TextEditbox in the collection.
   * @returns {TextEditbox}
   */
  everyItem: function() {
    return new TextEditbox();
  },
  
  /*
   * Generates a string which, if executed, will return the TextEditbox.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the TextEditbox with the specified index.
 *
   * @param {Number} index The index.
   * @returns {TextEditbox}
   */
  []: function(index) {
    return new TextEditbox();
  },
  
};
