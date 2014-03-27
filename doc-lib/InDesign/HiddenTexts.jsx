/*
 * A collection of hidden text objects.
 */
var HiddenTexts = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the HiddenText.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the HiddenText with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {HiddenText}
   */
  item: function(index) {
    return new HiddenText();
  },
  
  /*
   * Returns the HiddenText with the specified name.
 *
   * @param {String} name The name.
   * @returns {HiddenText}
   */
  itemByName: function(name) {
    return new HiddenText();
  },
  
  /*
   * Returns the HiddenText with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {HiddenText}
   */
  itemByID: function(id) {
    return new HiddenText();
  },
  
  /*
   * Returns the HiddenTexts within the specified range.
 *
   * @param {Mixed} from The HiddenText, index, or name at the beginning of the range. Can accept: HiddenText, Long Integer or String.
   * @param {Mixed} to The HiddenText, index, or name at the end of the range. Can accept: HiddenText, Long Integer or String.
   * @returns {HiddenText}
   */
  itemByRange: function(from, to) {
    return new HiddenText();
  },
  
  /*
   * Returns the first HiddenText in the collection.
   * @returns {HiddenText}
   */
  firstItem: function() {
    return new HiddenText();
  },
  
  /*
   * Returns the last HiddenText in the collection.
   * @returns {HiddenText}
   */
  lastItem: function() {
    return new HiddenText();
  },
  
  /*
   * Returns the middle HiddenText in the collection.
   * @returns {HiddenText}
   */
  middleItem: function() {
    return new HiddenText();
  },
  
  /*
   * Returns the HiddenText with the index previous to the specified index.
 *
   * @param {HiddenText} obj The index of the HiddenText that follows the desired HiddenText.
   * @returns {HiddenText}
   */
  previousItem: function(obj) {
    return new HiddenText();
  },
  
  /*
   * Returns the HiddenText whose index follows the specified HiddenText in the collection.
 *
   * @param {HiddenText} obj The HiddenText whose index comes before the desired HiddenText.
   * @returns {HiddenText}
   */
  nextItem: function(obj) {
    return new HiddenText();
  },
  
  /*
   * Returns any HiddenText in the collection.
   * @returns {HiddenText}
   */
  anyItem: function() {
    return new HiddenText();
  },
  
  /*
   * Returns every HiddenText in the collection.
   * @returns {HiddenText}
   */
  everyItem: function() {
    return new HiddenText();
  },
  
  /*
   * Generates a string which, if executed, will return the HiddenText.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the HiddenText with the specified index.
 *
   * @param {Number} index The index.
   * @returns {HiddenText}
   */
  []: function(index) {
    return new HiddenText();
  },
  
};
