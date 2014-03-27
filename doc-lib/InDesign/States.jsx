/*
 * A collection of states.
 */
var States = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new State.
 *
   * @param {Object} [withProperties] Initial values for properties of the new State 
   * @returns {State}
   */
  add: function(withProperties) {
    return new State();
  },
  
  /*
   * Displays the number of elements in the State.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the State with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {State}
   */
  item: function(index) {
    return new State();
  },
  
  /*
   * Returns the State with the specified name.
 *
   * @param {String} name The name.
   * @returns {State}
   */
  itemByName: function(name) {
    return new State();
  },
  
  /*
   * Returns the State with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {State}
   */
  itemByID: function(id) {
    return new State();
  },
  
  /*
   * Returns the States within the specified range.
 *
   * @param {Mixed} from The State, index, or name at the beginning of the range. Can accept: State, Long Integer or String.
   * @param {Mixed} to The State, index, or name at the end of the range. Can accept: State, Long Integer or String.
   * @returns {State}
   */
  itemByRange: function(from, to) {
    return new State();
  },
  
  /*
   * Returns the first State in the collection.
   * @returns {State}
   */
  firstItem: function() {
    return new State();
  },
  
  /*
   * Returns the last State in the collection.
   * @returns {State}
   */
  lastItem: function() {
    return new State();
  },
  
  /*
   * Returns the middle State in the collection.
   * @returns {State}
   */
  middleItem: function() {
    return new State();
  },
  
  /*
   * Returns the State with the index previous to the specified index.
 *
   * @param {State} obj The index of the State that follows the desired State.
   * @returns {State}
   */
  previousItem: function(obj) {
    return new State();
  },
  
  /*
   * Returns the State whose index follows the specified State in the collection.
 *
   * @param {State} obj The State whose index comes before the desired State.
   * @returns {State}
   */
  nextItem: function(obj) {
    return new State();
  },
  
  /*
   * Returns any State in the collection.
   * @returns {State}
   */
  anyItem: function() {
    return new State();
  },
  
  /*
   * Returns every State in the collection.
   * @returns {State}
   */
  everyItem: function() {
    return new State();
  },
  
  /*
   * Generates a string which, if executed, will return the State.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the State with the specified index.
 *
   * @param {Number} index The index.
   * @returns {State}
   */
  []: function(index) {
    return new State();
  },
  
};
