/*
 * A menu item.
 */
var MenuItem = {
  /*
   * The name of the MenuItem.
   * @type {String}
   */
  name: undefined,
  
  /*
   * The name of the MenuItem for display in the user interface. The title includes any ampersand characters (&), which are used to tell the Windows OS to underline the following character in the name for use with the Alt key to navigate to a menu item. Double ampersands are used to display an actual ampersand character in the name. The Mac OS ignores and removes the extra ampersand characters.
   * @type {String}
   */
  title: undefined,
  
  /*
   * The unique ID of the MenuItem.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * If true, the MenuItem is enabled.
   * @type {Boolean}
   */
  enabled: undefined,
  
  /*
   * If true, the menu item associated with the menu action is checked.
   * @type {Boolean}
   */
  checked: undefined,
  
  /*
   * The menu action that implements the menu item.
   * @type {MenuAction}
   */
  associatedMenuAction: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the MenuItem (a Menu or Submenu).
   * @type {Mixed}
   */
  parent: undefined,
  
  /*
   * The index of the MenuItem within its containing object.
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
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Selects the MenuItem.
   */
  select: function() {
  },
  
  /*
   * Deletes the MenuItem.
   */
  remove: function() {
  },
  
  /*
   * Generates a string which, if executed, will return the MenuItem.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {MenuItem}
   */
  getElements: function() {
    return new MenuItem();
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
