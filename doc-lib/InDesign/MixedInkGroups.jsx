/*
 * A collection of mixed ink groups.
 */
var MixedInkGroups = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the MixedInkGroup.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Creates a new mixed ink group.
 *
   * @param {Ink} inkList The inks to include in the mix.
   * @param {Number} [inkPercentages] The percent of each ink in the ink list. (Range: 0 to 100 for each ink) 
   * @param {Number} [repeatValues] The number of repetitions for each ink in the ink list. (Range: 0 to 100 for each ink) 
   * @param {Number} [incrementValues] The increment percent per repetition for each ink. (Range: 0 to 100) Note: The cumulative ink percentage per ink cannot exceed 100.) 
   * @param {Object} [withProperties] Initial values for properties of the new MixedInkGroup 
   * @returns {MixedInkGroup}
   */
  add: function(inkList, inkPercentages, repeatValues, incrementValues, withProperties) {
    return new MixedInkGroup();
  },
  
  /*
   * Returns the MixedInkGroup with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {MixedInkGroup}
   */
  item: function(index) {
    return new MixedInkGroup();
  },
  
  /*
   * Returns the MixedInkGroup with the specified name.
 *
   * @param {String} name The name.
   * @returns {MixedInkGroup}
   */
  itemByName: function(name) {
    return new MixedInkGroup();
  },
  
  /*
   * Returns the MixedInkGroup with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {MixedInkGroup}
   */
  itemByID: function(id) {
    return new MixedInkGroup();
  },
  
  /*
   * Returns the MixedInkGroups within the specified range.
 *
   * @param {Mixed} from The MixedInkGroup, index, or name at the beginning of the range. Can accept: MixedInkGroup, Long Integer or String.
   * @param {Mixed} to The MixedInkGroup, index, or name at the end of the range. Can accept: MixedInkGroup, Long Integer or String.
   * @returns {MixedInkGroup}
   */
  itemByRange: function(from, to) {
    return new MixedInkGroup();
  },
  
  /*
   * Returns the first MixedInkGroup in the collection.
   * @returns {MixedInkGroup}
   */
  firstItem: function() {
    return new MixedInkGroup();
  },
  
  /*
   * Returns the last MixedInkGroup in the collection.
   * @returns {MixedInkGroup}
   */
  lastItem: function() {
    return new MixedInkGroup();
  },
  
  /*
   * Returns the middle MixedInkGroup in the collection.
   * @returns {MixedInkGroup}
   */
  middleItem: function() {
    return new MixedInkGroup();
  },
  
  /*
   * Returns the MixedInkGroup with the index previous to the specified index.
 *
   * @param {MixedInkGroup} obj The index of the MixedInkGroup that follows the desired MixedInkGroup.
   * @returns {MixedInkGroup}
   */
  previousItem: function(obj) {
    return new MixedInkGroup();
  },
  
  /*
   * Returns the MixedInkGroup whose index follows the specified MixedInkGroup in the collection.
 *
   * @param {MixedInkGroup} obj The MixedInkGroup whose index comes before the desired MixedInkGroup.
   * @returns {MixedInkGroup}
   */
  nextItem: function(obj) {
    return new MixedInkGroup();
  },
  
  /*
   * Returns any MixedInkGroup in the collection.
   * @returns {MixedInkGroup}
   */
  anyItem: function() {
    return new MixedInkGroup();
  },
  
  /*
   * Returns every MixedInkGroup in the collection.
   * @returns {MixedInkGroup}
   */
  everyItem: function() {
    return new MixedInkGroup();
  },
  
  /*
   * Generates a string which, if executed, will return the MixedInkGroup.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the MixedInkGroup with the specified index.
 *
   * @param {Number} index The index.
   * @returns {MixedInkGroup}
   */
  []: function(index) {
    return new MixedInkGroup();
  },
  
};
