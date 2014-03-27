/*
 * A collection of background task objects.
 */
var BackgroundTasks = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the BackgroundTask.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the BackgroundTask with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {BackgroundTask}
   */
  item: function(index) {
    return new BackgroundTask();
  },
  
  /*
   * Returns the BackgroundTask with the specified name.
 *
   * @param {String} name The name.
   * @returns {BackgroundTask}
   */
  itemByName: function(name) {
    return new BackgroundTask();
  },
  
  /*
   * Returns the BackgroundTask with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {BackgroundTask}
   */
  itemByID: function(id) {
    return new BackgroundTask();
  },
  
  /*
   * Returns the BackgroundTasks within the specified range.
 *
   * @param {Mixed} from The BackgroundTask, index, or name at the beginning of the range. Can accept: BackgroundTask, Long Integer or String.
   * @param {Mixed} to The BackgroundTask, index, or name at the end of the range. Can accept: BackgroundTask, Long Integer or String.
   * @returns {BackgroundTask}
   */
  itemByRange: function(from, to) {
    return new BackgroundTask();
  },
  
  /*
   * Returns the first BackgroundTask in the collection.
   * @returns {BackgroundTask}
   */
  firstItem: function() {
    return new BackgroundTask();
  },
  
  /*
   * Returns the last BackgroundTask in the collection.
   * @returns {BackgroundTask}
   */
  lastItem: function() {
    return new BackgroundTask();
  },
  
  /*
   * Returns the middle BackgroundTask in the collection.
   * @returns {BackgroundTask}
   */
  middleItem: function() {
    return new BackgroundTask();
  },
  
  /*
   * Returns the BackgroundTask with the index previous to the specified index.
 *
   * @param {BackgroundTask} obj The index of the BackgroundTask that follows the desired BackgroundTask.
   * @returns {BackgroundTask}
   */
  previousItem: function(obj) {
    return new BackgroundTask();
  },
  
  /*
   * Returns the BackgroundTask whose index follows the specified BackgroundTask in the collection.
 *
   * @param {BackgroundTask} obj The BackgroundTask whose index comes before the desired BackgroundTask.
   * @returns {BackgroundTask}
   */
  nextItem: function(obj) {
    return new BackgroundTask();
  },
  
  /*
   * Returns any BackgroundTask in the collection.
   * @returns {BackgroundTask}
   */
  anyItem: function() {
    return new BackgroundTask();
  },
  
  /*
   * Returns every BackgroundTask in the collection.
   * @returns {BackgroundTask}
   */
  everyItem: function() {
    return new BackgroundTask();
  },
  
  /*
   * Generates a string which, if executed, will return the BackgroundTask.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the BackgroundTask with the specified index.
 *
   * @param {Number} index The index.
   * @returns {BackgroundTask}
   */
  []: function(index) {
    return new BackgroundTask();
  },
  
};
