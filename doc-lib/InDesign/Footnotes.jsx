/*
 * A collection of footnotes.
 */
var Footnotes = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the Footnote.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Creates a new footnote.
 *
   * @param {LocationOptions} [at] The location of the footnote reference number in the main text relative to the reference object or within the story. 
   * @param {Mixed} [reference] The reference object. Note: Must be an insertion point or a note. Required when the at parameter specifies before or after. Can accept: Note or InsertionPoint. 
   * @param {Object} [withProperties] Initial values for properties of the new Footnote 
   * @returns {Footnote}
   */
  add: function(at, reference, withProperties) {
    return new Footnote();
  },
  
  /*
   * Returns the Footnote with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {Footnote}
   */
  item: function(index) {
    return new Footnote();
  },
  
  /*
   * Returns the Footnote with the specified name.
 *
   * @param {String} name The name.
   * @returns {Footnote}
   */
  itemByName: function(name) {
    return new Footnote();
  },
  
  /*
   * Returns the Footnote with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {Footnote}
   */
  itemByID: function(id) {
    return new Footnote();
  },
  
  /*
   * Returns the Footnotes within the specified range.
 *
   * @param {Mixed} from The Footnote, index, or name at the beginning of the range. Can accept: Footnote, Long Integer or String.
   * @param {Mixed} to The Footnote, index, or name at the end of the range. Can accept: Footnote, Long Integer or String.
   * @returns {Footnote}
   */
  itemByRange: function(from, to) {
    return new Footnote();
  },
  
  /*
   * Returns the first Footnote in the collection.
   * @returns {Footnote}
   */
  firstItem: function() {
    return new Footnote();
  },
  
  /*
   * Returns the last Footnote in the collection.
   * @returns {Footnote}
   */
  lastItem: function() {
    return new Footnote();
  },
  
  /*
   * Returns the middle Footnote in the collection.
   * @returns {Footnote}
   */
  middleItem: function() {
    return new Footnote();
  },
  
  /*
   * Returns the Footnote with the index previous to the specified index.
 *
   * @param {Footnote} obj The index of the Footnote that follows the desired Footnote.
   * @returns {Footnote}
   */
  previousItem: function(obj) {
    return new Footnote();
  },
  
  /*
   * Returns the Footnote whose index follows the specified Footnote in the collection.
 *
   * @param {Footnote} obj The Footnote whose index comes before the desired Footnote.
   * @returns {Footnote}
   */
  nextItem: function(obj) {
    return new Footnote();
  },
  
  /*
   * Returns any Footnote in the collection.
   * @returns {Footnote}
   */
  anyItem: function() {
    return new Footnote();
  },
  
  /*
   * Returns every Footnote in the collection.
   * @returns {Footnote}
   */
  everyItem: function() {
    return new Footnote();
  },
  
  /*
   * Generates a string which, if executed, will return the Footnote.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the Footnote with the specified index.
 *
   * @param {Number} index The index.
   * @returns {Footnote}
   */
  []: function(index) {
    return new Footnote();
  },
  
};
