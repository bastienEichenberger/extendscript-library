/*
 * All attachable idle tasks.
 */
var IdleTasks = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new IdleTask.
 *
   * @param {Object} [withProperties] Initial values for properties of the new IdleTask 
   * @returns {IdleTask}
   */
  add: function(withProperties) {
    return new IdleTask();
  },
  
  /*
   * Displays the number of elements in the IdleTask.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the IdleTask with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {IdleTask}
   */
  item: function(index) {
    return new IdleTask();
  },
  
  /*
   * Returns the IdleTask with the specified name.
 *
   * @param {String} name The name.
   * @returns {IdleTask}
   */
  itemByName: function(name) {
    return new IdleTask();
  },
  
  /*
   * Returns the IdleTask with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {IdleTask}
   */
  itemByID: function(id) {
    return new IdleTask();
  },
  
  /*
   * Returns the IdleTasks within the specified range.
 *
   * @param {Mixed} from The IdleTask, index, or name at the beginning of the range. Can accept: IdleTask, Long Integer or String.
   * @param {Mixed} to The IdleTask, index, or name at the end of the range. Can accept: IdleTask, Long Integer or String.
   * @returns {IdleTask}
   */
  itemByRange: function(from, to) {
    return new IdleTask();
  },
  
  /*
   * Returns the first IdleTask in the collection.
   * @returns {IdleTask}
   */
  firstItem: function() {
    return new IdleTask();
  },
  
  /*
   * Returns the last IdleTask in the collection.
   * @returns {IdleTask}
   */
  lastItem: function() {
    return new IdleTask();
  },
  
  /*
   * Returns the middle IdleTask in the collection.
   * @returns {IdleTask}
   */
  middleItem: function() {
    return new IdleTask();
  },
  
  /*
   * Returns the IdleTask with the index previous to the specified index.
 *
   * @param {IdleTask} obj The index of the IdleTask that follows the desired IdleTask.
   * @returns {IdleTask}
   */
  previousItem: function(obj) {
    return new IdleTask();
  },
  
  /*
   * Returns the IdleTask whose index follows the specified IdleTask in the collection.
 *
   * @param {IdleTask} obj The IdleTask whose index comes before the desired IdleTask.
   * @returns {IdleTask}
   */
  nextItem: function(obj) {
    return new IdleTask();
  },
  
  /*
   * Returns any IdleTask in the collection.
   * @returns {IdleTask}
   */
  anyItem: function() {
    return new IdleTask();
  },
  
  /*
   * Returns every IdleTask in the collection.
   * @returns {IdleTask}
   */
  everyItem: function() {
    return new IdleTask();
  },
  
  /*
   * Generates a string which, if executed, will return the IdleTask.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the IdleTask with the specified index.
 *
   * @param {Number} index The index.
   * @returns {IdleTask}
   */
  []: function(index) {
    return new IdleTask();
  },
  
};
