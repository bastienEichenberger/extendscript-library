/*
 * A collection of timing lists.
 */
var TimingLists = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the TimingList.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Adds a new event-triggered timing list object.
 *
   * @param {DynamicTriggerEvents} triggerEvent Trigger Event
   * @param {Object} [withProperties] Initial values for properties of the new TimingList 
   * @returns {TimingList}
   */
  add: function(triggerEvent, withProperties) {
    return new TimingList();
  },
  
  /*
   * Returns the TimingList with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {TimingList}
   */
  item: function(index) {
    return new TimingList();
  },
  
  /*
   * Returns the TimingLists within the specified range.
 *
   * @param {Mixed} from The TimingList, index, or name at the beginning of the range. Can accept: TimingList, Long Integer or String.
   * @param {Mixed} to The TimingList, index, or name at the end of the range. Can accept: TimingList, Long Integer or String.
   * @returns {TimingList}
   */
  itemByRange: function(from, to) {
    return new TimingList();
  },
  
  /*
   * Returns the first TimingList in the collection.
   * @returns {TimingList}
   */
  firstItem: function() {
    return new TimingList();
  },
  
  /*
   * Returns the last TimingList in the collection.
   * @returns {TimingList}
   */
  lastItem: function() {
    return new TimingList();
  },
  
  /*
   * Returns the middle TimingList in the collection.
   * @returns {TimingList}
   */
  middleItem: function() {
    return new TimingList();
  },
  
  /*
   * Returns the TimingList with the index previous to the specified index.
 *
   * @param {TimingList} obj The index of the TimingList that follows the desired TimingList.
   * @returns {TimingList}
   */
  previousItem: function(obj) {
    return new TimingList();
  },
  
  /*
   * Returns the TimingList whose index follows the specified TimingList in the collection.
 *
   * @param {TimingList} obj The TimingList whose index comes before the desired TimingList.
   * @returns {TimingList}
   */
  nextItem: function(obj) {
    return new TimingList();
  },
  
  /*
   * Returns any TimingList in the collection.
   * @returns {TimingList}
   */
  anyItem: function() {
    return new TimingList();
  },
  
  /*
   * Returns every TimingList in the collection.
   * @returns {TimingList}
   */
  everyItem: function() {
    return new TimingList();
  },
  
  /*
   * Generates a string which, if executed, will return the TimingList.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the TimingList with the specified index.
 *
   * @param {Number} index The index.
   * @returns {TimingList}
   */
  []: function(index) {
    return new TimingList();
  },
  
};
