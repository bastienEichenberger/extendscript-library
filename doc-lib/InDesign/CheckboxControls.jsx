/*
 * A collection of checkbox controls.
 */
var CheckboxControls = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new CheckboxControl.
 *
   * @param {Object} [withProperties] Initial values for properties of the new CheckboxControl 
   * @returns {CheckboxControl}
   */
  add: function(withProperties) {
    return new CheckboxControl();
  },
  
  /*
   * Displays the number of elements in the CheckboxControl.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the CheckboxControl with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {CheckboxControl}
   */
  item: function(index) {
    return new CheckboxControl();
  },
  
  /*
   * Returns the CheckboxControl with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {CheckboxControl}
   */
  itemByID: function(id) {
    return new CheckboxControl();
  },
  
  /*
   * Returns the CheckboxControls within the specified range.
 *
   * @param {Mixed} from The CheckboxControl, index, or name at the beginning of the range. Can accept: CheckboxControl, Long Integer or String.
   * @param {Mixed} to The CheckboxControl, index, or name at the end of the range. Can accept: CheckboxControl, Long Integer or String.
   * @returns {CheckboxControl}
   */
  itemByRange: function(from, to) {
    return new CheckboxControl();
  },
  
  /*
   * Returns the first CheckboxControl in the collection.
   * @returns {CheckboxControl}
   */
  firstItem: function() {
    return new CheckboxControl();
  },
  
  /*
   * Returns the last CheckboxControl in the collection.
   * @returns {CheckboxControl}
   */
  lastItem: function() {
    return new CheckboxControl();
  },
  
  /*
   * Returns the middle CheckboxControl in the collection.
   * @returns {CheckboxControl}
   */
  middleItem: function() {
    return new CheckboxControl();
  },
  
  /*
   * Returns the CheckboxControl with the index previous to the specified index.
 *
   * @param {CheckboxControl} obj The index of the CheckboxControl that follows the desired CheckboxControl.
   * @returns {CheckboxControl}
   */
  previousItem: function(obj) {
    return new CheckboxControl();
  },
  
  /*
   * Returns the CheckboxControl whose index follows the specified CheckboxControl in the collection.
 *
   * @param {CheckboxControl} obj The CheckboxControl whose index comes before the desired CheckboxControl.
   * @returns {CheckboxControl}
   */
  nextItem: function(obj) {
    return new CheckboxControl();
  },
  
  /*
   * Returns any CheckboxControl in the collection.
   * @returns {CheckboxControl}
   */
  anyItem: function() {
    return new CheckboxControl();
  },
  
  /*
   * Returns every CheckboxControl in the collection.
   * @returns {CheckboxControl}
   */
  everyItem: function() {
    return new CheckboxControl();
  },
  
  /*
   * Generates a string which, if executed, will return the CheckboxControl.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the CheckboxControl with the specified index.
 *
   * @param {Number} index The index.
   * @returns {CheckboxControl}
   */
  []: function(index) {
    return new CheckboxControl();
  },
  
};
