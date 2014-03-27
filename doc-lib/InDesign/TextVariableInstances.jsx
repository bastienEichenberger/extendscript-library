/*
 * A collection of text variable instances.
 */
var TextVariableInstances = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the TextVariableInstance.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Creates a text variable instance at the specified location.
 *
   * @param {LocationOptions} [to] The location relative to the reference object or within the containing object. 
   * @param {Mixed} [reference] The reference object. Note: Required only when the to parameter specifies before or after. Can accept: TextVariableInstance, XmlStory, TextFrame, Story, Note, Cell, Footnote, Table, TextColumn, TextStyleRange, Text, InsertionPoint, Paragraph, Line, Word, Character or Change. 
   * @param {Object} [withProperties] Initial values for properties of the new TextVariableInstance 
   * @returns {TextVariableInstance}
   */
  add: function(to, reference, withProperties) {
    return new TextVariableInstance();
  },
  
  /*
   * Returns the TextVariableInstance with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {TextVariableInstance}
   */
  item: function(index) {
    return new TextVariableInstance();
  },
  
  /*
   * Returns the TextVariableInstance with the specified name.
 *
   * @param {String} name The name.
   * @returns {TextVariableInstance}
   */
  itemByName: function(name) {
    return new TextVariableInstance();
  },
  
  /*
   * Returns the TextVariableInstance with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {TextVariableInstance}
   */
  itemByID: function(id) {
    return new TextVariableInstance();
  },
  
  /*
   * Returns the TextVariableInstances within the specified range.
 *
   * @param {Mixed} from The TextVariableInstance, index, or name at the beginning of the range. Can accept: TextVariableInstance, Long Integer or String.
   * @param {Mixed} to The TextVariableInstance, index, or name at the end of the range. Can accept: TextVariableInstance, Long Integer or String.
   * @returns {TextVariableInstance}
   */
  itemByRange: function(from, to) {
    return new TextVariableInstance();
  },
  
  /*
   * Returns the first TextVariableInstance in the collection.
   * @returns {TextVariableInstance}
   */
  firstItem: function() {
    return new TextVariableInstance();
  },
  
  /*
   * Returns the last TextVariableInstance in the collection.
   * @returns {TextVariableInstance}
   */
  lastItem: function() {
    return new TextVariableInstance();
  },
  
  /*
   * Returns the middle TextVariableInstance in the collection.
   * @returns {TextVariableInstance}
   */
  middleItem: function() {
    return new TextVariableInstance();
  },
  
  /*
   * Returns the TextVariableInstance with the index previous to the specified index.
 *
   * @param {TextVariableInstance} obj The index of the TextVariableInstance that follows the desired TextVariableInstance.
   * @returns {TextVariableInstance}
   */
  previousItem: function(obj) {
    return new TextVariableInstance();
  },
  
  /*
   * Returns the TextVariableInstance whose index follows the specified TextVariableInstance in the collection.
 *
   * @param {TextVariableInstance} obj The TextVariableInstance whose index comes before the desired TextVariableInstance.
   * @returns {TextVariableInstance}
   */
  nextItem: function(obj) {
    return new TextVariableInstance();
  },
  
  /*
   * Returns any TextVariableInstance in the collection.
   * @returns {TextVariableInstance}
   */
  anyItem: function() {
    return new TextVariableInstance();
  },
  
  /*
   * Returns every TextVariableInstance in the collection.
   * @returns {TextVariableInstance}
   */
  everyItem: function() {
    return new TextVariableInstance();
  },
  
  /*
   * Generates a string which, if executed, will return the TextVariableInstance.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the TextVariableInstance with the specified index.
 *
   * @param {Number} index The index.
   * @returns {TextVariableInstance}
   */
  []: function(index) {
    return new TextVariableInstance();
  },
  
};
