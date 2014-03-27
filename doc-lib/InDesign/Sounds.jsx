/*
 * A collection of sound clips.
 */
var Sounds = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new Sound
 *
   * @param {Layer} [layer] The layer on which to create the Sound. 
   * @param {LocationOptions} [at] The location at which to insert the Sound relative to the reference object or within the container object. 
   * @param {Mixed} [reference] The reference object. Note: Required when the at parameter is before or after. Can accept: Document, Spread, MasterSpread, Page, Layer or PageItem. 
   * @param {Object} [withProperties] Initial values for properties of the new Sound 
   * @returns {Sound}
   */
  add: function(layer, at, reference, withProperties) {
    return new Sound();
  },
  
  /*
   * Displays the number of elements in the Sound.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the Sound with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {Sound}
   */
  item: function(index) {
    return new Sound();
  },
  
  /*
   * Returns the Sound with the specified name.
 *
   * @param {String} name The name.
   * @returns {Sound}
   */
  itemByName: function(name) {
    return new Sound();
  },
  
  /*
   * Returns the Sound with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {Sound}
   */
  itemByID: function(id) {
    return new Sound();
  },
  
  /*
   * Returns the Sounds within the specified range.
 *
   * @param {Mixed} from The Sound, index, or name at the beginning of the range. Can accept: Sound, Long Integer or String.
   * @param {Mixed} to The Sound, index, or name at the end of the range. Can accept: Sound, Long Integer or String.
   * @returns {Sound}
   */
  itemByRange: function(from, to) {
    return new Sound();
  },
  
  /*
   * Returns the first Sound in the collection.
   * @returns {Sound}
   */
  firstItem: function() {
    return new Sound();
  },
  
  /*
   * Returns the last Sound in the collection.
   * @returns {Sound}
   */
  lastItem: function() {
    return new Sound();
  },
  
  /*
   * Returns the middle Sound in the collection.
   * @returns {Sound}
   */
  middleItem: function() {
    return new Sound();
  },
  
  /*
   * Returns the Sound with the index previous to the specified index.
 *
   * @param {Sound} obj The index of the Sound that follows the desired Sound.
   * @returns {Sound}
   */
  previousItem: function(obj) {
    return new Sound();
  },
  
  /*
   * Returns the Sound whose index follows the specified Sound in the collection.
 *
   * @param {Sound} obj The Sound whose index comes before the desired Sound.
   * @returns {Sound}
   */
  nextItem: function(obj) {
    return new Sound();
  },
  
  /*
   * Returns any Sound in the collection.
   * @returns {Sound}
   */
  anyItem: function() {
    return new Sound();
  },
  
  /*
   * Returns every Sound in the collection.
   * @returns {Sound}
   */
  everyItem: function() {
    return new Sound();
  },
  
  /*
   * Generates a string which, if executed, will return the Sound.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the Sound with the specified index.
 *
   * @param {Number} index The index.
   * @returns {Sound}
   */
  []: function(index) {
    return new Sound();
  },
  
};
