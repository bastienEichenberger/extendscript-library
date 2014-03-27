/*
 * A collection of numbered lists.
 */
var NumberingLists = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Create a new list style.
 *
   * @param {String} name Name
   * @param {Boolean} [continueNumbersAcrossStories] If true, numbering will continue across stories. 
   * @param {Boolean} [continueNumbersAcrossDocuments] If true, numbering will continue across book documents. 
   * @param {Object} [withProperties] Initial values for properties of the new NumberingList 
   * @returns {NumberingList}
   */
  add: function(name, continueNumbersAcrossStories, continueNumbersAcrossDocuments, withProperties) {
    return new NumberingList();
  },
  
  /*
   * Displays the number of elements in the NumberingList.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the NumberingList with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {NumberingList}
   */
  item: function(index) {
    return new NumberingList();
  },
  
  /*
   * Returns the NumberingList with the specified name.
 *
   * @param {String} name The name.
   * @returns {NumberingList}
   */
  itemByName: function(name) {
    return new NumberingList();
  },
  
  /*
   * Returns the NumberingList with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {NumberingList}
   */
  itemByID: function(id) {
    return new NumberingList();
  },
  
  /*
   * Returns the NumberingLists within the specified range.
 *
   * @param {Mixed} from The NumberingList, index, or name at the beginning of the range. Can accept: NumberingList, Long Integer or String.
   * @param {Mixed} to The NumberingList, index, or name at the end of the range. Can accept: NumberingList, Long Integer or String.
   * @returns {NumberingList}
   */
  itemByRange: function(from, to) {
    return new NumberingList();
  },
  
  /*
   * Returns the first NumberingList in the collection.
   * @returns {NumberingList}
   */
  firstItem: function() {
    return new NumberingList();
  },
  
  /*
   * Returns the last NumberingList in the collection.
   * @returns {NumberingList}
   */
  lastItem: function() {
    return new NumberingList();
  },
  
  /*
   * Returns the middle NumberingList in the collection.
   * @returns {NumberingList}
   */
  middleItem: function() {
    return new NumberingList();
  },
  
  /*
   * Returns the NumberingList with the index previous to the specified index.
 *
   * @param {NumberingList} obj The index of the NumberingList that follows the desired NumberingList.
   * @returns {NumberingList}
   */
  previousItem: function(obj) {
    return new NumberingList();
  },
  
  /*
   * Returns the NumberingList whose index follows the specified NumberingList in the collection.
 *
   * @param {NumberingList} obj The NumberingList whose index comes before the desired NumberingList.
   * @returns {NumberingList}
   */
  nextItem: function(obj) {
    return new NumberingList();
  },
  
  /*
   * Returns any NumberingList in the collection.
   * @returns {NumberingList}
   */
  anyItem: function() {
    return new NumberingList();
  },
  
  /*
   * Returns every NumberingList in the collection.
   * @returns {NumberingList}
   */
  everyItem: function() {
    return new NumberingList();
  },
  
  /*
   * Generates a string which, if executed, will return the NumberingList.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the NumberingList with the specified index.
 *
   * @param {Number} index The index.
   * @returns {NumberingList}
   */
  []: function(index) {
    return new NumberingList();
  },
  
};
