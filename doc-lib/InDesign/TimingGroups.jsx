/*
 * A collection of timing data objects.
 */
var TimingGroups = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Adds a new timing group.
 *
   * @param {Mixed} dynamicTarget A page item target that is an animation, media, or mso. Can accept: PageItem, Graphic, Behavior or MediaItem.
   * @param {Number} [delaySeconds] The time delay in seconds for a target. 
   * @param {Object} [withProperties] Initial values for properties of the new TimingGroup 
   * @returns {TimingGroup}
   */
  add: function(dynamicTarget, delaySeconds, withProperties) {
    return new TimingGroup();
  },
  
  /*
   * Displays the number of elements in the TimingGroup.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the TimingGroup with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {TimingGroup}
   */
  item: function(index) {
    return new TimingGroup();
  },
  
  /*
   * Returns the TimingGroups within the specified range.
 *
   * @param {Mixed} from The TimingGroup, index, or name at the beginning of the range. Can accept: TimingGroup, Long Integer or String.
   * @param {Mixed} to The TimingGroup, index, or name at the end of the range. Can accept: TimingGroup, Long Integer or String.
   * @returns {TimingGroup}
   */
  itemByRange: function(from, to) {
    return new TimingGroup();
  },
  
  /*
   * Returns the first TimingGroup in the collection.
   * @returns {TimingGroup}
   */
  firstItem: function() {
    return new TimingGroup();
  },
  
  /*
   * Returns the last TimingGroup in the collection.
   * @returns {TimingGroup}
   */
  lastItem: function() {
    return new TimingGroup();
  },
  
  /*
   * Returns the middle TimingGroup in the collection.
   * @returns {TimingGroup}
   */
  middleItem: function() {
    return new TimingGroup();
  },
  
  /*
   * Returns the TimingGroup with the index previous to the specified index.
 *
   * @param {TimingGroup} obj The index of the TimingGroup that follows the desired TimingGroup.
   * @returns {TimingGroup}
   */
  previousItem: function(obj) {
    return new TimingGroup();
  },
  
  /*
   * Returns the TimingGroup whose index follows the specified TimingGroup in the collection.
 *
   * @param {TimingGroup} obj The TimingGroup whose index comes before the desired TimingGroup.
   * @returns {TimingGroup}
   */
  nextItem: function(obj) {
    return new TimingGroup();
  },
  
  /*
   * Returns any TimingGroup in the collection.
   * @returns {TimingGroup}
   */
  anyItem: function() {
    return new TimingGroup();
  },
  
  /*
   * Returns every TimingGroup in the collection.
   * @returns {TimingGroup}
   */
  everyItem: function() {
    return new TimingGroup();
  },
  
  /*
   * Generates a string which, if executed, will return the TimingGroup.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the TimingGroup with the specified index.
 *
   * @param {Number} index The index.
   * @returns {TimingGroup}
   */
  []: function(index) {
    return new TimingGroup();
  },
  
};
