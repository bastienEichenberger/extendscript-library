/*
 * An item in a list box, drop-down list, or tree view.
 */
var ListItem = {
  /*
   * The checked state of an item in a list.
   * @type {Boolean}
   */
  checked: undefined,
  
  /*
   * undefined
   * @type {Boolean}
   */
  expanded: undefined,
  
  /*
   * undefined
   * @type {Number}
   */
  index: undefined,
  
  /*
   * The selection state of this item.
   * @type {Boolean}
   */
  selected: undefined,
  
  /*
   * An image object for an icon to display in the item.
   * @type {ScriptUIImage}
   */
  image: undefined,
  
  /*
   * The label text to display for the item, a localizable string.
   * @type {String}
   */
  text: undefined,
  
  /*
   * undefined
   * @type {Array}
   */
  subItems: undefined,
  
  /*
   * An object that contains one or more creation properties of the item (properties used only when the element is created).
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * The parent element, a list control.
   * @type {Object}
   */
  parent: undefined,
  
  /*
   * The element type.
   * @type {String}
   */
  type: undefined,
  
};
