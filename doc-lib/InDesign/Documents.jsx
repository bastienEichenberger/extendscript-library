/*
 * A collection of documents.
 */
var Documents = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new document.
 *
   * @param {Boolean} [showingWindow] If true, displays the document. 
   * @param {DocumentPreset} [documentPreset] The document preset to use. 
   * @param {Object} [withProperties] Initial values for properties of the new Document 
   * @returns {Document}
   */
  add: function(showingWindow, documentPreset, withProperties) {
    return new Document();
  },
  
  /*
   * Displays the number of elements in the Document.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the Document with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {Document}
   */
  item: function(index) {
    return new Document();
  },
  
  /*
   * Returns the Document with the specified name.
 *
   * @param {String} name The name.
   * @returns {Document}
   */
  itemByName: function(name) {
    return new Document();
  },
  
  /*
   * Returns the Document with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {Document}
   */
  itemByID: function(id) {
    return new Document();
  },
  
  /*
   * Returns the Documents within the specified range.
 *
   * @param {Mixed} from The Document, index, or name at the beginning of the range. Can accept: Document, Long Integer or String.
   * @param {Mixed} to The Document, index, or name at the end of the range. Can accept: Document, Long Integer or String.
   * @returns {Document}
   */
  itemByRange: function(from, to) {
    return new Document();
  },
  
  /*
   * Returns the first Document in the collection.
   * @returns {Document}
   */
  firstItem: function() {
    return new Document();
  },
  
  /*
   * Returns the last Document in the collection.
   * @returns {Document}
   */
  lastItem: function() {
    return new Document();
  },
  
  /*
   * Returns the middle Document in the collection.
   * @returns {Document}
   */
  middleItem: function() {
    return new Document();
  },
  
  /*
   * Returns the Document with the index previous to the specified index.
 *
   * @param {Document} obj The index of the Document that follows the desired Document.
   * @returns {Document}
   */
  previousItem: function(obj) {
    return new Document();
  },
  
  /*
   * Returns the Document whose index follows the specified Document in the collection.
 *
   * @param {Document} obj The Document whose index comes before the desired Document.
   * @returns {Document}
   */
  nextItem: function(obj) {
    return new Document();
  },
  
  /*
   * Returns any Document in the collection.
   * @returns {Document}
   */
  anyItem: function() {
    return new Document();
  },
  
  /*
   * Returns every Document in the collection.
   * @returns {Document}
   */
  everyItem: function() {
    return new Document();
  },
  
  /*
   * Generates a string which, if executed, will return the Document.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the Document with the specified index.
 *
   * @param {Number} index The index.
   * @returns {Document}
   */
  []: function(index) {
    return new Document();
  },
  
};
