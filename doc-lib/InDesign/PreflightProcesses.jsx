/*
 * A collection of preflight processes.
 */
var PreflightProcesses = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Adds a new preflight process.
 *
   * @param {Document} targetObject The document the process should inspect.
   * @param {PreflightProfile} appliedProfile The preflight profile that should be used.
   * @param {PreflightOption} [preflightOptions] The preflight options that should be used. 
   * @param {Object} [withProperties] Initial values for properties of the new PreflightProcess 
   * @returns {PreflightProcess}
   */
  add: function(targetObject, appliedProfile, preflightOptions, withProperties) {
    return new PreflightProcess();
  },
  
  /*
   * Displays the number of elements in the PreflightProcess.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the PreflightProcess with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {PreflightProcess}
   */
  item: function(index) {
    return new PreflightProcess();
  },
  
  /*
   * Returns the PreflightProcesses within the specified range.
 *
   * @param {Mixed} from The PreflightProcess, index, or name at the beginning of the range. Can accept: PreflightProcess, Long Integer or String.
   * @param {Mixed} to The PreflightProcess, index, or name at the end of the range. Can accept: PreflightProcess, Long Integer or String.
   * @returns {PreflightProcess}
   */
  itemByRange: function(from, to) {
    return new PreflightProcess();
  },
  
  /*
   * Returns the first PreflightProcess in the collection.
   * @returns {PreflightProcess}
   */
  firstItem: function() {
    return new PreflightProcess();
  },
  
  /*
   * Returns the last PreflightProcess in the collection.
   * @returns {PreflightProcess}
   */
  lastItem: function() {
    return new PreflightProcess();
  },
  
  /*
   * Returns the middle PreflightProcess in the collection.
   * @returns {PreflightProcess}
   */
  middleItem: function() {
    return new PreflightProcess();
  },
  
  /*
   * Returns the PreflightProcess with the index previous to the specified index.
 *
   * @param {PreflightProcess} obj The index of the PreflightProcess that follows the desired PreflightProcess.
   * @returns {PreflightProcess}
   */
  previousItem: function(obj) {
    return new PreflightProcess();
  },
  
  /*
   * Returns the PreflightProcess whose index follows the specified PreflightProcess in the collection.
 *
   * @param {PreflightProcess} obj The PreflightProcess whose index comes before the desired PreflightProcess.
   * @returns {PreflightProcess}
   */
  nextItem: function(obj) {
    return new PreflightProcess();
  },
  
  /*
   * Returns any PreflightProcess in the collection.
   * @returns {PreflightProcess}
   */
  anyItem: function() {
    return new PreflightProcess();
  },
  
  /*
   * Returns every PreflightProcess in the collection.
   * @returns {PreflightProcess}
   */
  everyItem: function() {
    return new PreflightProcess();
  },
  
  /*
   * Generates a string which, if executed, will return the PreflightProcess.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the PreflightProcess with the specified index.
 *
   * @param {Number} index The index.
   * @returns {PreflightProcess}
   */
  []: function(index) {
    return new PreflightProcess();
  },
  
};
