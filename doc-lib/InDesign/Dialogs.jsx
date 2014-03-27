/*
 * A collection of dialogs.
 */
var Dialogs = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new Dialog.
 *
   * @param {Object} [withProperties] Initial values for properties of the new Dialog 
   * @returns {Dialog}
   */
  add: function(withProperties) {
    return new Dialog();
  },
  
  /*
   * Displays the number of elements in the Dialog.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the Dialog with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {Dialog}
   */
  item: function(index) {
    return new Dialog();
  },
  
  /*
   * Returns the Dialog with the specified name.
 *
   * @param {String} name The name.
   * @returns {Dialog}
   */
  itemByName: function(name) {
    return new Dialog();
  },
  
  /*
   * Returns the Dialog with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {Dialog}
   */
  itemByID: function(id) {
    return new Dialog();
  },
  
  /*
   * Returns the Dialogs within the specified range.
 *
   * @param {Mixed} from The Dialog, index, or name at the beginning of the range. Can accept: Dialog, Long Integer or String.
   * @param {Mixed} to The Dialog, index, or name at the end of the range. Can accept: Dialog, Long Integer or String.
   * @returns {Dialog}
   */
  itemByRange: function(from, to) {
    return new Dialog();
  },
  
  /*
   * Returns the first Dialog in the collection.
   * @returns {Dialog}
   */
  firstItem: function() {
    return new Dialog();
  },
  
  /*
   * Returns the last Dialog in the collection.
   * @returns {Dialog}
   */
  lastItem: function() {
    return new Dialog();
  },
  
  /*
   * Returns the middle Dialog in the collection.
   * @returns {Dialog}
   */
  middleItem: function() {
    return new Dialog();
  },
  
  /*
   * Returns the Dialog with the index previous to the specified index.
 *
   * @param {Dialog} obj The index of the Dialog that follows the desired Dialog.
   * @returns {Dialog}
   */
  previousItem: function(obj) {
    return new Dialog();
  },
  
  /*
   * Returns the Dialog whose index follows the specified Dialog in the collection.
 *
   * @param {Dialog} obj The Dialog whose index comes before the desired Dialog.
   * @returns {Dialog}
   */
  nextItem: function(obj) {
    return new Dialog();
  },
  
  /*
   * Returns any Dialog in the collection.
   * @returns {Dialog}
   */
  anyItem: function() {
    return new Dialog();
  },
  
  /*
   * Returns every Dialog in the collection.
   * @returns {Dialog}
   */
  everyItem: function() {
    return new Dialog();
  },
  
  /*
   * Generates a string which, if executed, will return the Dialog.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the Dialog with the specified index.
 *
   * @param {Number} index The index.
   * @returns {Dialog}
   */
  []: function(index) {
    return new Dialog();
  },
  
};
