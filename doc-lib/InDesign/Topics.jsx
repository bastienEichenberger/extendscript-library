/*
 * A collection of index topics.
 */
var Topics = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the Topic.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Creates a new index topic.
 *
   * @param {String} name The name of the topic. Note: This is the text that appears in the index.
   * @param {String} [sortBy] The string to sort this topic by instead of the topic name. Note: The actual topic text, rather than the sort order text, appears in the index. 
   * @param {Object} [withProperties] Initial values for properties of the new Topic 
   * @returns {Topic}
   */
  add: function(name, sortBy, withProperties) {
    return new Topic();
  },
  
  /*
   * Returns the Topic with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {Topic}
   */
  item: function(index) {
    return new Topic();
  },
  
  /*
   * Returns the Topic with the specified name.
 *
   * @param {String} name The name.
   * @returns {Topic}
   */
  itemByName: function(name) {
    return new Topic();
  },
  
  /*
   * Returns the Topics within the specified range.
 *
   * @param {Mixed} from The Topic, index, or name at the beginning of the range. Can accept: Topic, Long Integer or String.
   * @param {Mixed} to The Topic, index, or name at the end of the range. Can accept: Topic, Long Integer or String.
   * @returns {Topic}
   */
  itemByRange: function(from, to) {
    return new Topic();
  },
  
  /*
   * Returns the first Topic in the collection.
   * @returns {Topic}
   */
  firstItem: function() {
    return new Topic();
  },
  
  /*
   * Returns the last Topic in the collection.
   * @returns {Topic}
   */
  lastItem: function() {
    return new Topic();
  },
  
  /*
   * Returns the middle Topic in the collection.
   * @returns {Topic}
   */
  middleItem: function() {
    return new Topic();
  },
  
  /*
   * Returns the Topic with the index previous to the specified index.
 *
   * @param {Topic} obj The index of the Topic that follows the desired Topic.
   * @returns {Topic}
   */
  previousItem: function(obj) {
    return new Topic();
  },
  
  /*
   * Returns the Topic whose index follows the specified Topic in the collection.
 *
   * @param {Topic} obj The Topic whose index comes before the desired Topic.
   * @returns {Topic}
   */
  nextItem: function(obj) {
    return new Topic();
  },
  
  /*
   * Returns any Topic in the collection.
   * @returns {Topic}
   */
  anyItem: function() {
    return new Topic();
  },
  
  /*
   * Returns every Topic in the collection.
   * @returns {Topic}
   */
  everyItem: function() {
    return new Topic();
  },
  
  /*
   * Generates a string which, if executed, will return the Topic.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the Topic with the specified index.
 *
   * @param {Number} index The index.
   * @returns {Topic}
   */
  []: function(index) {
    return new Topic();
  },
  
};
