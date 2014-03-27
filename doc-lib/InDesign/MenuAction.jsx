/*
 * A menu action.
 */
var MenuAction = {
  /*
   * Dispatched before the MenuAction is invoked. This event does not bubble. This event is cancelable.
   * @type {String}
   */
  BEFORE_INVOKE: undefined,
  
  /*
   * Dispatched after the MenuAction is invoked. This event does not bubble. This event is not cancelable.
   * @type {String}
   */
  AFTER_INVOKE: undefined,
  
  /*
   * The name of the MenuAction.
   * @type {String}
   */
  name: undefined,
  
  /*
   * The name of the MenuAction for display in the user interface. The title includes any ampersand characters (&), which are used to tell the Windows OS to underline the following character in the name for use with the Alt key to navigate to a menu item. Double ampersands are used to display an actual ampersand character in the name. The Mac OS ignores and removes the extra ampersand characters.
   * @type {String}
   */
  title: undefined,
  
  /*
   * The menu action area.
   * @type {String}
   */
  area: undefined,
  
  /*
   * If true, the MenuAction is enabled.
   * @type {Boolean}
   */
  enabled: undefined,
  
  /*
   * If true, the menu item associated with the menu action is checked.
   * @type {Boolean}
   */
  checked: undefined,
  
  /*
   * The unique ID of the MenuAction.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the MenuAction (a Application).
   * @type {Application}
   */
  parent: undefined,
  
  /*
   * The index of the MenuAction within its containing object.
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
   * A property that can be set to any string.
   * @type {String}
   */
  label: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Invoke the action.
   */
  invoke: function() {
  },
  
  /*
   * Sets the label to the value associated with the specified key.
 *
   * @param {String} key The key.
   * @param {String} value The value.
   */
  insertLabel: function(key, value) {
  },
  
  /*
   * Gets the label value associated with the specified key.
 *
   * @param {String} key The key.
   * @returns {String}
   */
  extractLabel: function(key) {
    return new String();
  },
  
  /*
   * Generates a string which, if executed, will return the MenuAction.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {MenuAction}
   */
  getElements: function() {
    return new MenuAction();
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
