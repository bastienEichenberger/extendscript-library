/*
 * XML preferences.
 */
var XMLPreference = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the XMLPreference (a Application or Document).
   * @type {Mixed}
   */
  parent: undefined,
  
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
   * The name of the default tag to use for new story elements. Note: Either specifies an existing tag or creates a new tag.
   * @type {String}
   */
  defaultStoryTagName: undefined,
  
  /*
   * The color of the default story tag, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. Notes: Valid only when default story tag name value creates a new tag. Does not update the color of an existing tag. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
   * @type {Mixed}
   */
  defaultStoryTagColor: undefined,
  
  /*
   * The name of the default tag to use for new table elements. Note: Either specifies an existing tag or creates a new tag.
   * @type {String}
   */
  defaultTableTagName: undefined,
  
  /*
   * The color of the default table tag, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. Notes: Valid only when default table tag name value creates a new tag. Does not update the color of an existing tag. . Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
   * @type {Mixed}
   */
  defaultTableTagColor: undefined,
  
  /*
   * The name of the default tag to use for new table cell elements. Note: Either specifies an existing tag or creates a new tag.
   * @type {String}
   */
  defaultCellTagName: undefined,
  
  /*
   * The color of the default cell tag, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. Note: Valid only when default cell tag name value creates a new tag. Does not update the color of an existing tag. . Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
   * @type {Mixed}
   */
  defaultCellTagColor: undefined,
  
  /*
   * The default name for new image elements created automatically.
   * @type {String}
   */
  defaultImageTagName: undefined,
  
  /*
   * The color to give a new image tag, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. Note: Used only when the tag needs to be created. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
   * @type {Mixed}
   */
  defaultImageTagColor: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the XMLPreference.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {XMLPreference}
   */
  getElements: function() {
    return new XMLPreference();
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
