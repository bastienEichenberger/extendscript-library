/*
 * A collection of widgets.
 */
var Widgets = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the Widget.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the Widget with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {Widget}
   */
  item: function(index) {
    return new Widget();
  },
  
  /*
   * Returns the Widget with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {Widget}
   */
  itemByID: function(id) {
    return new Widget();
  },
  
  /*
   * Returns the Widgets within the specified range.
 *
   * @param {Mixed} from The Widget, index, or name at the beginning of the range. Can accept: Widget, Long Integer or String.
   * @param {Mixed} to The Widget, index, or name at the end of the range. Can accept: Widget, Long Integer or String.
   * @returns {Widget}
   */
  itemByRange: function(from, to) {
    return new Widget();
  },
  
  /*
   * Returns the first Widget in the collection.
   * @returns {Widget}
   */
  firstItem: function() {
    return new Widget();
  },
  
  /*
   * Returns the last Widget in the collection.
   * @returns {Widget}
   */
  lastItem: function() {
    return new Widget();
  },
  
  /*
   * Returns the middle Widget in the collection.
   * @returns {Widget}
   */
  middleItem: function() {
    return new Widget();
  },
  
  /*
   * Returns the Widget with the index previous to the specified index.
 *
   * @param {Widget} obj The index of the Widget that follows the desired Widget.
   * @returns {Widget}
   */
  previousItem: function(obj) {
    return new Widget();
  },
  
  /*
   * Returns the Widget whose index follows the specified Widget in the collection.
 *
   * @param {Widget} obj The Widget whose index comes before the desired Widget.
   * @returns {Widget}
   */
  nextItem: function(obj) {
    return new Widget();
  },
  
  /*
   * Returns any Widget in the collection.
   * @returns {Widget}
   */
  anyItem: function() {
    return new Widget();
  },
  
  /*
   * Returns every Widget in the collection.
   * @returns {Widget}
   */
  everyItem: function() {
    return new Widget();
  },
  
  /*
   * Generates a string which, if executed, will return the Widget.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the Widget with the specified index.
 *
   * @param {Number} index The index.
   * @returns {Widget}
   */
  []: function(index) {
    return new Widget();
  },
  
};
