/*
 * Display setting properties.
 */
var DisplaySettings = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the DisplaySetting.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the DisplaySetting with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {DisplaySetting}
   */
  item: function(index) {
    return new DisplaySetting();
  },
  
  /*
   * Returns the DisplaySettings within the specified range.
 *
   * @param {Mixed} from The DisplaySetting, index, or name at the beginning of the range. Can accept: DisplaySetting, Long Integer or String.
   * @param {Mixed} to The DisplaySetting, index, or name at the end of the range. Can accept: DisplaySetting, Long Integer or String.
   * @returns {DisplaySetting}
   */
  itemByRange: function(from, to) {
    return new DisplaySetting();
  },
  
  /*
   * Returns the first DisplaySetting in the collection.
   * @returns {DisplaySetting}
   */
  firstItem: function() {
    return new DisplaySetting();
  },
  
  /*
   * Returns the last DisplaySetting in the collection.
   * @returns {DisplaySetting}
   */
  lastItem: function() {
    return new DisplaySetting();
  },
  
  /*
   * Returns the middle DisplaySetting in the collection.
   * @returns {DisplaySetting}
   */
  middleItem: function() {
    return new DisplaySetting();
  },
  
  /*
   * Returns the DisplaySetting with the index previous to the specified index.
 *
   * @param {DisplaySetting} obj The index of the DisplaySetting that follows the desired DisplaySetting.
   * @returns {DisplaySetting}
   */
  previousItem: function(obj) {
    return new DisplaySetting();
  },
  
  /*
   * Returns the DisplaySetting whose index follows the specified DisplaySetting in the collection.
 *
   * @param {DisplaySetting} obj The DisplaySetting whose index comes before the desired DisplaySetting.
   * @returns {DisplaySetting}
   */
  nextItem: function(obj) {
    return new DisplaySetting();
  },
  
  /*
   * Returns any DisplaySetting in the collection.
   * @returns {DisplaySetting}
   */
  anyItem: function() {
    return new DisplaySetting();
  },
  
  /*
   * Returns every DisplaySetting in the collection.
   * @returns {DisplaySetting}
   */
  everyItem: function() {
    return new DisplaySetting();
  },
  
  /*
   * Generates a string which, if executed, will return the DisplaySetting.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the DisplaySetting with the specified index.
 *
   * @param {Number} index The index.
   * @returns {DisplaySetting}
   */
  []: function(index) {
    return new DisplaySetting();
  },
  
};
