/*
 * A collection of menu actions.
 */
var MenuActions = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the MenuAction.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the MenuAction with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {MenuAction}
   */
  item: function(index) {
    return new MenuAction();
  },
  
  /*
   * Returns the MenuAction with the specified name.
 *
   * @param {String} name The name.
   * @returns {MenuAction}
   */
  itemByName: function(name) {
    return new MenuAction();
  },
  
  /*
   * Returns the MenuAction with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {MenuAction}
   */
  itemByID: function(id) {
    return new MenuAction();
  },
  
  /*
   * Returns the MenuActions within the specified range.
 *
   * @param {Mixed} from The MenuAction, index, or name at the beginning of the range. Can accept: MenuAction, Long Integer or String.
   * @param {Mixed} to The MenuAction, index, or name at the end of the range. Can accept: MenuAction, Long Integer or String.
   * @returns {MenuAction}
   */
  itemByRange: function(from, to) {
    return new MenuAction();
  },
  
  /*
   * Returns the first MenuAction in the collection.
   * @returns {MenuAction}
   */
  firstItem: function() {
    return new MenuAction();
  },
  
  /*
   * Returns the last MenuAction in the collection.
   * @returns {MenuAction}
   */
  lastItem: function() {
    return new MenuAction();
  },
  
  /*
   * Returns the middle MenuAction in the collection.
   * @returns {MenuAction}
   */
  middleItem: function() {
    return new MenuAction();
  },
  
  /*
   * Returns the MenuAction with the index previous to the specified index.
 *
   * @param {MenuAction} obj The index of the MenuAction that follows the desired MenuAction.
   * @returns {MenuAction}
   */
  previousItem: function(obj) {
    return new MenuAction();
  },
  
  /*
   * Returns the MenuAction whose index follows the specified MenuAction in the collection.
 *
   * @param {MenuAction} obj The MenuAction whose index comes before the desired MenuAction.
   * @returns {MenuAction}
   */
  nextItem: function(obj) {
    return new MenuAction();
  },
  
  /*
   * Returns any MenuAction in the collection.
   * @returns {MenuAction}
   */
  anyItem: function() {
    return new MenuAction();
  },
  
  /*
   * Returns every MenuAction in the collection.
   * @returns {MenuAction}
   */
  everyItem: function() {
    return new MenuAction();
  },
  
  /*
   * Generates a string which, if executed, will return the MenuAction.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the MenuAction with the specified index.
 *
   * @param {Number} index The index.
   * @returns {MenuAction}
   */
  []: function(index) {
    return new MenuAction();
  },
  
};
