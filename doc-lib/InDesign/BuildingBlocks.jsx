/*
 * A collection of cross reference building blocks.
 */
var BuildingBlocks = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new cross reference building block.
 *
   * @param {BuildingBlockTypes} blockType Type of the building block.
   * @param {CharacterStyle} [appliedCharacterStyle] Character style to be applied to the building block. 
   * @param {String} [customText] Building block custom text. Currently this is only useful in custom string building block. It is ignored for other types of building blocks. 
   * @param {Object} [withProperties] Initial values for properties of the new BuildingBlock 
   * @returns {BuildingBlock}
   */
  add: function(blockType, appliedCharacterStyle, customText, withProperties) {
    return new BuildingBlock();
  },
  
  /*
   * Displays the number of elements in the BuildingBlock.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the BuildingBlock with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {BuildingBlock}
   */
  item: function(index) {
    return new BuildingBlock();
  },
  
  /*
   * Returns the BuildingBlocks within the specified range.
 *
   * @param {Mixed} from The BuildingBlock, index, or name at the beginning of the range. Can accept: BuildingBlock, Long Integer or String.
   * @param {Mixed} to The BuildingBlock, index, or name at the end of the range. Can accept: BuildingBlock, Long Integer or String.
   * @returns {BuildingBlock}
   */
  itemByRange: function(from, to) {
    return new BuildingBlock();
  },
  
  /*
   * Returns the first BuildingBlock in the collection.
   * @returns {BuildingBlock}
   */
  firstItem: function() {
    return new BuildingBlock();
  },
  
  /*
   * Returns the last BuildingBlock in the collection.
   * @returns {BuildingBlock}
   */
  lastItem: function() {
    return new BuildingBlock();
  },
  
  /*
   * Returns the middle BuildingBlock in the collection.
   * @returns {BuildingBlock}
   */
  middleItem: function() {
    return new BuildingBlock();
  },
  
  /*
   * Returns the BuildingBlock with the index previous to the specified index.
 *
   * @param {BuildingBlock} obj The index of the BuildingBlock that follows the desired BuildingBlock.
   * @returns {BuildingBlock}
   */
  previousItem: function(obj) {
    return new BuildingBlock();
  },
  
  /*
   * Returns the BuildingBlock whose index follows the specified BuildingBlock in the collection.
 *
   * @param {BuildingBlock} obj The BuildingBlock whose index comes before the desired BuildingBlock.
   * @returns {BuildingBlock}
   */
  nextItem: function(obj) {
    return new BuildingBlock();
  },
  
  /*
   * Returns any BuildingBlock in the collection.
   * @returns {BuildingBlock}
   */
  anyItem: function() {
    return new BuildingBlock();
  },
  
  /*
   * Returns every BuildingBlock in the collection.
   * @returns {BuildingBlock}
   */
  everyItem: function() {
    return new BuildingBlock();
  },
  
  /*
   * Generates a string which, if executed, will return the BuildingBlock.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the BuildingBlock with the specified index.
 *
   * @param {Number} index The index.
   * @returns {BuildingBlock}
   */
  []: function(index) {
    return new BuildingBlock();
  },
  
};
