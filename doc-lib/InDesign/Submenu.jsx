/*
 * A submenu.
 */
var Submenu = {
  /*
   * Dispatched before the Submenu is displayed. This event does not bubble. This event is not cancelable.
   * @type {String}
   */
  BEFORE_DISPLAY: undefined,
  
  /*
   * The name of the Submenu.
   * @type {String}
   */
  name: undefined,
  
  /*
   * The name of the Submenu for display in the user interface. The title includes any ampersand characters (&), which are used to tell the Windows OS to underline the following character in the name for use with the Alt key to navigate to a menu item. Double ampersands are used to display an actual ampersand character in the name. The Mac OS ignores and removes the extra ampersand characters.
   * @type {String}
   */
  title: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the Submenu (a Menu or Submenu).
   * @type {Mixed}
   */
  parent: undefined,
  
  /*
   * The index of the Submenu within its containing object.
   * @type {Number}
   */
  index: undefined,
  
  /*
   * A collection of events.
   * @type {Events}
   */
  events: undefined,
  
  /*
   * A collection of event listeners.
   * @type {EventListeners}
   */
  eventListeners: undefined,
  
  /*
   * A collection of menu elements.
   * @type {MenuElements}
   */
  menuElements: undefined,
  
  /*
   * A collection of submenus.
   * @type {Submenus}
   */
  submenus: undefined,
  
  /*
   * A collection of menu items.
   * @type {MenuItems}
   */
  menuItems: undefined,
  
  /*
   * A collection of menu separators.
   * @type {MenuSeparators}
   */
  menuSeparators: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Deletes the Submenu.
   */
  remove: function() {
  },
  
  /*
   * Generates a string which, if executed, will return the Submenu.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {Submenu}
   */
  getElements: function() {
    return new Submenu();
  },
  
  /*
   * Retrieves the object specifier.
   * @returns {String}
   */
  toSpecifier: function() {
    return new String();
  },
  
  /*
   * Adds an event listener.
 *
   * @param {String} eventType The event type.
   * @param {Mixed} handler The event handler. Can accept: File or JavaScript Function.
   * @param {Boolean} [captures] This parameter is obsolete. 
   * @returns {EventListener}
   */
  addEventListener: function(eventType, handler, captures) {
    return new EventListener();
  },
  
  /*
   * Removes the event listener.
 *
   * @param {String} eventType The registered event type.
   * @param {Mixed} handler The registered event handler. Can accept: File or JavaScript Function.
   * @param {Boolean} [captures] This parameter is obsolete. 
   * @returns {Boolean}
   */
  removeEventListener: function(eventType, handler, captures) {
    return new Boolean();
  },
  
};
