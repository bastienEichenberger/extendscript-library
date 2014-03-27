/*
 * A collection of events.
 */
var Events = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the Event.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the Event with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {Event}
   */
  item: function(index) {
    return new Event();
  },
  
  /*
   * Returns the Event with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {Event}
   */
  itemByID: function(id) {
    return new Event();
  },
  
  /*
   * Returns the Events within the specified range.
 *
   * @param {Mixed} from The Event, index, or name at the beginning of the range. Can accept: Event, Long Integer or String.
   * @param {Mixed} to The Event, index, or name at the end of the range. Can accept: Event, Long Integer or String.
   * @returns {Event}
   */
  itemByRange: function(from, to) {
    return new Event();
  },
  
  /*
   * Returns the first Event in the collection.
   * @returns {Event}
   */
  firstItem: function() {
    return new Event();
  },
  
  /*
   * Returns the last Event in the collection.
   * @returns {Event}
   */
  lastItem: function() {
    return new Event();
  },
  
  /*
   * Returns the middle Event in the collection.
   * @returns {Event}
   */
  middleItem: function() {
    return new Event();
  },
  
  /*
   * Returns the Event with the index previous to the specified index.
 *
   * @param {Event} obj The index of the Event that follows the desired Event.
   * @returns {Event}
   */
  previousItem: function(obj) {
    return new Event();
  },
  
  /*
   * Returns the Event whose index follows the specified Event in the collection.
 *
   * @param {Event} obj The Event whose index comes before the desired Event.
   * @returns {Event}
   */
  nextItem: function(obj) {
    return new Event();
  },
  
  /*
   * Returns any Event in the collection.
   * @returns {Event}
   */
  anyItem: function() {
    return new Event();
  },
  
  /*
   * Returns every Event in the collection.
   * @returns {Event}
   */
  everyItem: function() {
    return new Event();
  },
  
  /*
   * Generates a string which, if executed, will return the Event.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the Event with the specified index.
 *
   * @param {Number} index The index.
   * @returns {Event}
   */
  []: function(index) {
    return new Event();
  },
  
};
