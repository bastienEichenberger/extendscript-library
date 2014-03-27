/*
 * A collection of timing target.
 */
var TimingTargets = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Adds a new target item.
 *
   * @param {Mixed} dynamicTarget A page item target that is an animation, media, or mso. Can accept: PageItem, Graphic, Behavior or MediaItem.
   * @param {Number} [delaySeconds] The time delay in seconds for a target. 
   * @param {Object} [withProperties] Initial values for properties of the new TimingTarget 
   * @returns {TimingTarget}
   */
  add: function(dynamicTarget, delaySeconds, withProperties) {
    return new TimingTarget();
  },
  
  /*
   * Displays the number of elements in the TimingTarget.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the TimingTarget with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {TimingTarget}
   */
  item: function(index) {
    return new TimingTarget();
  },
  
  /*
   * Returns the TimingTargets within the specified range.
 *
   * @param {Mixed} from The TimingTarget, index, or name at the beginning of the range. Can accept: TimingTarget, Long Integer or String.
   * @param {Mixed} to The TimingTarget, index, or name at the end of the range. Can accept: TimingTarget, Long Integer or String.
   * @returns {TimingTarget}
   */
  itemByRange: function(from, to) {
    return new TimingTarget();
  },
  
  /*
   * Returns the first TimingTarget in the collection.
   * @returns {TimingTarget}
   */
  firstItem: function() {
    return new TimingTarget();
  },
  
  /*
   * Returns the last TimingTarget in the collection.
   * @returns {TimingTarget}
   */
  lastItem: function() {
    return new TimingTarget();
  },
  
  /*
   * Returns the middle TimingTarget in the collection.
   * @returns {TimingTarget}
   */
  middleItem: function() {
    return new TimingTarget();
  },
  
  /*
   * Returns the TimingTarget with the index previous to the specified index.
 *
   * @param {TimingTarget} obj The index of the TimingTarget that follows the desired TimingTarget.
   * @returns {TimingTarget}
   */
  previousItem: function(obj) {
    return new TimingTarget();
  },
  
  /*
   * Returns the TimingTarget whose index follows the specified TimingTarget in the collection.
 *
   * @param {TimingTarget} obj The TimingTarget whose index comes before the desired TimingTarget.
   * @returns {TimingTarget}
   */
  nextItem: function(obj) {
    return new TimingTarget();
  },
  
  /*
   * Returns any TimingTarget in the collection.
   * @returns {TimingTarget}
   */
  anyItem: function() {
    return new TimingTarget();
  },
  
  /*
   * Returns every TimingTarget in the collection.
   * @returns {TimingTarget}
   */
  everyItem: function() {
    return new TimingTarget();
  },
  
  /*
   * Generates a string which, if executed, will return the TimingTarget.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the TimingTarget with the specified index.
 *
   * @param {Number} index The index.
   * @returns {TimingTarget}
   */
  []: function(index) {
    return new TimingTarget();
  },
  
};
