/*
 * A collection of script menu actions.
 */
var ScriptMenuActions = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new action.
 *
   * @param {String} [title] The name of the ScriptMenuAction for display in the user interface. The title includes any ampersand characters (&), which are used to tell the Windows OS to underline the following character in the name for use with the Alt key to navigate to a menu item. Double ampersands are used to display an actual ampersand character in the name. The Mac OS ignores and removes the extra ampersand characters. 
   * @param {Object} [withProperties] Initial values for properties of the new ScriptMenuAction 
   * @returns {ScriptMenuAction}
   */
  add: function(title, withProperties) {
    return new ScriptMenuAction();
  },
  
  /*
   * Displays the number of elements in the ScriptMenuAction.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the ScriptMenuAction with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {ScriptMenuAction}
   */
  item: function(index) {
    return new ScriptMenuAction();
  },
  
  /*
   * Returns the ScriptMenuAction with the specified name.
 *
   * @param {String} name The name.
   * @returns {ScriptMenuAction}
   */
  itemByName: function(name) {
    return new ScriptMenuAction();
  },
  
  /*
   * Returns the ScriptMenuAction with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {ScriptMenuAction}
   */
  itemByID: function(id) {
    return new ScriptMenuAction();
  },
  
  /*
   * Returns the ScriptMenuActions within the specified range.
 *
   * @param {Mixed} from The ScriptMenuAction, index, or name at the beginning of the range. Can accept: ScriptMenuAction, Long Integer or String.
   * @param {Mixed} to The ScriptMenuAction, index, or name at the end of the range. Can accept: ScriptMenuAction, Long Integer or String.
   * @returns {ScriptMenuAction}
   */
  itemByRange: function(from, to) {
    return new ScriptMenuAction();
  },
  
  /*
   * Returns the first ScriptMenuAction in the collection.
   * @returns {ScriptMenuAction}
   */
  firstItem: function() {
    return new ScriptMenuAction();
  },
  
  /*
   * Returns the last ScriptMenuAction in the collection.
   * @returns {ScriptMenuAction}
   */
  lastItem: function() {
    return new ScriptMenuAction();
  },
  
  /*
   * Returns the middle ScriptMenuAction in the collection.
   * @returns {ScriptMenuAction}
   */
  middleItem: function() {
    return new ScriptMenuAction();
  },
  
  /*
   * Returns the ScriptMenuAction with the index previous to the specified index.
 *
   * @param {ScriptMenuAction} obj The index of the ScriptMenuAction that follows the desired ScriptMenuAction.
   * @returns {ScriptMenuAction}
   */
  previousItem: function(obj) {
    return new ScriptMenuAction();
  },
  
  /*
   * Returns the ScriptMenuAction whose index follows the specified ScriptMenuAction in the collection.
 *
   * @param {ScriptMenuAction} obj The ScriptMenuAction whose index comes before the desired ScriptMenuAction.
   * @returns {ScriptMenuAction}
   */
  nextItem: function(obj) {
    return new ScriptMenuAction();
  },
  
  /*
   * Returns any ScriptMenuAction in the collection.
   * @returns {ScriptMenuAction}
   */
  anyItem: function() {
    return new ScriptMenuAction();
  },
  
  /*
   * Returns every ScriptMenuAction in the collection.
   * @returns {ScriptMenuAction}
   */
  everyItem: function() {
    return new ScriptMenuAction();
  },
  
  /*
   * Generates a string which, if executed, will return the ScriptMenuAction.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the ScriptMenuAction with the specified index.
 *
   * @param {Number} index The index.
   * @returns {ScriptMenuAction}
   */
  []: function(index) {
    return new ScriptMenuAction();
  },
  
};
