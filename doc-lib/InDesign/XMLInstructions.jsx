/*
 * A collection of XML instructions.
 */
var XMLInstructions = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the XMLInstruction.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Creates a new XML processing instruction.
 *
   * @param {String} target A name that identifies the processing instruction to an application reading the exported XML file.
   * @param {String} [data] A value that tells the application what to do with the processing instruction identified in the target. 
   * @param {Mixed} [storyOffset] The location within the story, specified as an insertion point. Can accept: InsertionPoint or Long Integer. 
   * @param {Object} [withProperties] Initial values for properties of the new XMLInstruction 
   * @returns {XMLInstruction}
   */
  add: function(target, data, storyOffset, withProperties) {
    return new XMLInstruction();
  },
  
  /*
   * Returns the XMLInstruction with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {XMLInstruction}
   */
  item: function(index) {
    return new XMLInstruction();
  },
  
  /*
   * Returns the XMLInstruction with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {XMLInstruction}
   */
  itemByID: function(id) {
    return new XMLInstruction();
  },
  
  /*
   * Returns the XMLInstructions within the specified range.
 *
   * @param {Mixed} from The XMLInstruction, index, or name at the beginning of the range. Can accept: XMLInstruction, Long Integer or String.
   * @param {Mixed} to The XMLInstruction, index, or name at the end of the range. Can accept: XMLInstruction, Long Integer or String.
   * @returns {XMLInstruction}
   */
  itemByRange: function(from, to) {
    return new XMLInstruction();
  },
  
  /*
   * Returns the first XMLInstruction in the collection.
   * @returns {XMLInstruction}
   */
  firstItem: function() {
    return new XMLInstruction();
  },
  
  /*
   * Returns the last XMLInstruction in the collection.
   * @returns {XMLInstruction}
   */
  lastItem: function() {
    return new XMLInstruction();
  },
  
  /*
   * Returns the middle XMLInstruction in the collection.
   * @returns {XMLInstruction}
   */
  middleItem: function() {
    return new XMLInstruction();
  },
  
  /*
   * Returns the XMLInstruction with the index previous to the specified index.
 *
   * @param {XMLInstruction} obj The index of the XMLInstruction that follows the desired XMLInstruction.
   * @returns {XMLInstruction}
   */
  previousItem: function(obj) {
    return new XMLInstruction();
  },
  
  /*
   * Returns the XMLInstruction whose index follows the specified XMLInstruction in the collection.
 *
   * @param {XMLInstruction} obj The XMLInstruction whose index comes before the desired XMLInstruction.
   * @returns {XMLInstruction}
   */
  nextItem: function(obj) {
    return new XMLInstruction();
  },
  
  /*
   * Returns any XMLInstruction in the collection.
   * @returns {XMLInstruction}
   */
  anyItem: function() {
    return new XMLInstruction();
  },
  
  /*
   * Returns every XMLInstruction in the collection.
   * @returns {XMLInstruction}
   */
  everyItem: function() {
    return new XMLInstruction();
  },
  
  /*
   * Generates a string which, if executed, will return the XMLInstruction.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the XMLInstruction with the specified index.
 *
   * @param {Number} index The index.
   * @returns {XMLInstruction}
   */
  []: function(index) {
    return new XMLInstruction();
  },
  
};
