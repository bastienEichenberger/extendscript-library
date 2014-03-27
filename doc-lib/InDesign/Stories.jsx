/*
 * A collection of stories.
 */
var Stories = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the Story.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the Story with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {Story}
   */
  item: function(index) {
    return new Story();
  },
  
  /*
   * Returns the Story with the specified name.
 *
   * @param {String} name The name.
   * @returns {Story}
   */
  itemByName: function(name) {
    return new Story();
  },
  
  /*
   * Returns the Story with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {Story}
   */
  itemByID: function(id) {
    return new Story();
  },
  
  /*
   * Returns the Stories within the specified range.
 *
   * @param {Mixed} from The Story, index, or name at the beginning of the range. Can accept: Story, Long Integer or String.
   * @param {Mixed} to The Story, index, or name at the end of the range. Can accept: Story, Long Integer or String.
   * @returns {Story}
   */
  itemByRange: function(from, to) {
    return new Story();
  },
  
  /*
   * Returns the first Story in the collection.
   * @returns {Story}
   */
  firstItem: function() {
    return new Story();
  },
  
  /*
   * Returns the last Story in the collection.
   * @returns {Story}
   */
  lastItem: function() {
    return new Story();
  },
  
  /*
   * Returns the middle Story in the collection.
   * @returns {Story}
   */
  middleItem: function() {
    return new Story();
  },
  
  /*
   * Returns the Story with the index previous to the specified index.
 *
   * @param {Story} obj The index of the Story that follows the desired Story.
   * @returns {Story}
   */
  previousItem: function(obj) {
    return new Story();
  },
  
  /*
   * Returns the Story whose index follows the specified Story in the collection.
 *
   * @param {Story} obj The Story whose index comes before the desired Story.
   * @returns {Story}
   */
  nextItem: function(obj) {
    return new Story();
  },
  
  /*
   * Returns any Story in the collection.
   * @returns {Story}
   */
  anyItem: function() {
    return new Story();
  },
  
  /*
   * Returns every Story in the collection.
   * @returns {Story}
   */
  everyItem: function() {
    return new Story();
  },
  
  /*
   * Generates a string which, if executed, will return the Story.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the Story with the specified index.
 *
   * @param {Number} index The index.
   * @returns {Story}
   */
  []: function(index) {
    return new Story();
  },
  
};
