/*
 * A collection of user dictionaries.
 */
var UserDictionaries = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the UserDictionary.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the UserDictionary with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {UserDictionary}
   */
  item: function(index) {
    return new UserDictionary();
  },
  
  /*
   * Returns the UserDictionary with the specified name.
 *
   * @param {String} name The name.
   * @returns {UserDictionary}
   */
  itemByName: function(name) {
    return new UserDictionary();
  },
  
  /*
   * Returns the UserDictionaries within the specified range.
 *
   * @param {Mixed} from The UserDictionary, index, or name at the beginning of the range. Can accept: UserDictionary, Long Integer or String.
   * @param {Mixed} to The UserDictionary, index, or name at the end of the range. Can accept: UserDictionary, Long Integer or String.
   * @returns {UserDictionary}
   */
  itemByRange: function(from, to) {
    return new UserDictionary();
  },
  
  /*
   * Returns the first UserDictionary in the collection.
   * @returns {UserDictionary}
   */
  firstItem: function() {
    return new UserDictionary();
  },
  
  /*
   * Returns the last UserDictionary in the collection.
   * @returns {UserDictionary}
   */
  lastItem: function() {
    return new UserDictionary();
  },
  
  /*
   * Returns the middle UserDictionary in the collection.
   * @returns {UserDictionary}
   */
  middleItem: function() {
    return new UserDictionary();
  },
  
  /*
   * Returns the UserDictionary with the index previous to the specified index.
 *
   * @param {UserDictionary} obj The index of the UserDictionary that follows the desired UserDictionary.
   * @returns {UserDictionary}
   */
  previousItem: function(obj) {
    return new UserDictionary();
  },
  
  /*
   * Returns the UserDictionary whose index follows the specified UserDictionary in the collection.
 *
   * @param {UserDictionary} obj The UserDictionary whose index comes before the desired UserDictionary.
   * @returns {UserDictionary}
   */
  nextItem: function(obj) {
    return new UserDictionary();
  },
  
  /*
   * Returns any UserDictionary in the collection.
   * @returns {UserDictionary}
   */
  anyItem: function() {
    return new UserDictionary();
  },
  
  /*
   * Returns every UserDictionary in the collection.
   * @returns {UserDictionary}
   */
  everyItem: function() {
    return new UserDictionary();
  },
  
  /*
   * Generates a string which, if executed, will return the UserDictionary.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the UserDictionary with the specified index.
 *
   * @param {Number} index The index.
   * @returns {UserDictionary}
   */
  []: function(index) {
    return new UserDictionary();
  },
  
};
