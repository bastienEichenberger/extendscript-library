/*
 * A collection of sound behavior objects.
 */
var SoundBehaviors = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the SoundBehavior.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Creates a new SoundBehavior.
 *
   * @param {Object} [withProperties] Initial values for properties of the new SoundBehavior 
   * @returns {SoundBehavior}
   */
  add: function(withProperties) {
    return new SoundBehavior();
  },
  
  /*
   * Returns the SoundBehavior with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {SoundBehavior}
   */
  item: function(index) {
    return new SoundBehavior();
  },
  
  /*
   * Returns the SoundBehavior with the specified name.
 *
   * @param {String} name The name.
   * @returns {SoundBehavior}
   */
  itemByName: function(name) {
    return new SoundBehavior();
  },
  
  /*
   * Returns the SoundBehavior with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {SoundBehavior}
   */
  itemByID: function(id) {
    return new SoundBehavior();
  },
  
  /*
   * Returns the SoundBehaviors within the specified range.
 *
   * @param {Mixed} from The SoundBehavior, index, or name at the beginning of the range. Can accept: SoundBehavior, Long Integer or String.
   * @param {Mixed} to The SoundBehavior, index, or name at the end of the range. Can accept: SoundBehavior, Long Integer or String.
   * @returns {SoundBehavior}
   */
  itemByRange: function(from, to) {
    return new SoundBehavior();
  },
  
  /*
   * Returns the first SoundBehavior in the collection.
   * @returns {SoundBehavior}
   */
  firstItem: function() {
    return new SoundBehavior();
  },
  
  /*
   * Returns the last SoundBehavior in the collection.
   * @returns {SoundBehavior}
   */
  lastItem: function() {
    return new SoundBehavior();
  },
  
  /*
   * Returns the middle SoundBehavior in the collection.
   * @returns {SoundBehavior}
   */
  middleItem: function() {
    return new SoundBehavior();
  },
  
  /*
   * Returns the SoundBehavior with the index previous to the specified index.
 *
   * @param {SoundBehavior} obj The index of the SoundBehavior that follows the desired SoundBehavior.
   * @returns {SoundBehavior}
   */
  previousItem: function(obj) {
    return new SoundBehavior();
  },
  
  /*
   * Returns the SoundBehavior whose index follows the specified SoundBehavior in the collection.
 *
   * @param {SoundBehavior} obj The SoundBehavior whose index comes before the desired SoundBehavior.
   * @returns {SoundBehavior}
   */
  nextItem: function(obj) {
    return new SoundBehavior();
  },
  
  /*
   * Returns any SoundBehavior in the collection.
   * @returns {SoundBehavior}
   */
  anyItem: function() {
    return new SoundBehavior();
  },
  
  /*
   * Returns every SoundBehavior in the collection.
   * @returns {SoundBehavior}
   */
  everyItem: function() {
    return new SoundBehavior();
  },
  
  /*
   * Generates a string which, if executed, will return the SoundBehavior.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the SoundBehavior with the specified index.
 *
   * @param {Number} index The index.
   * @returns {SoundBehavior}
   */
  []: function(index) {
    return new SoundBehavior();
  },
  
};
