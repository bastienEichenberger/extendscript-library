/*
 * A collection of notes.
 */
var Notes = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the Note.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Creates a new note.
 *
   * @param {LocationOptions} [at] The location relative to the reference object or within the containing object. 
   * @param {Mixed} [reference] The reference object. Note: Required when the at parameter specifies before or after. Can accept: Note or InsertionPoint. 
   * @param {Object} [withProperties] Initial values for properties of the new Note 
   * @returns {Note}
   */
  add: function(at, reference, withProperties) {
    return new Note();
  },
  
  /*
   * Returns the Note with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {Note}
   */
  item: function(index) {
    return new Note();
  },
  
  /*
   * Returns the Note with the specified name.
 *
   * @param {String} name The name.
   * @returns {Note}
   */
  itemByName: function(name) {
    return new Note();
  },
  
  /*
   * Returns the Note with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {Note}
   */
  itemByID: function(id) {
    return new Note();
  },
  
  /*
   * Returns the Notes within the specified range.
 *
   * @param {Mixed} from The Note, index, or name at the beginning of the range. Can accept: Note, Long Integer or String.
   * @param {Mixed} to The Note, index, or name at the end of the range. Can accept: Note, Long Integer or String.
   * @returns {Note}
   */
  itemByRange: function(from, to) {
    return new Note();
  },
  
  /*
   * Returns the first Note in the collection.
   * @returns {Note}
   */
  firstItem: function() {
    return new Note();
  },
  
  /*
   * Returns the last Note in the collection.
   * @returns {Note}
   */
  lastItem: function() {
    return new Note();
  },
  
  /*
   * Returns the middle Note in the collection.
   * @returns {Note}
   */
  middleItem: function() {
    return new Note();
  },
  
  /*
   * Returns the Note with the index previous to the specified index.
 *
   * @param {Note} obj The index of the Note that follows the desired Note.
   * @returns {Note}
   */
  previousItem: function(obj) {
    return new Note();
  },
  
  /*
   * Returns the Note whose index follows the specified Note in the collection.
 *
   * @param {Note} obj The Note whose index comes before the desired Note.
   * @returns {Note}
   */
  nextItem: function(obj) {
    return new Note();
  },
  
  /*
   * Returns any Note in the collection.
   * @returns {Note}
   */
  anyItem: function() {
    return new Note();
  },
  
  /*
   * Returns every Note in the collection.
   * @returns {Note}
   */
  everyItem: function() {
    return new Note();
  },
  
  /*
   * Generates a string which, if executed, will return the Note.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the Note with the specified index.
 *
   * @param {Number} index The index.
   * @returns {Note}
   */
  []: function(index) {
    return new Note();
  },
  
};
