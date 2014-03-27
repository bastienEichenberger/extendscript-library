/*
 * Margin preferences.
 */
var MarginPreference = {
  /*
   * If false, columns are evenly spaced. If true, columns can have custom widths.
   * @type {Boolean}
   */
  customColumns: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the MarginPreference (a Application, Document or Page).
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
   * The number of columns to place on the page.
   * @type {Number}
   */
  columnCount: undefined,
  
  /*
   * The distance between columns.
   * @type {Mixed}
   */
  columnGutter: undefined,
  
  /*
   * The top edge of the MarginPreference.
   * @type {Mixed}
   */
  top: undefined,
  
  /*
   * The bottom edge of the MarginPreference.
   * @type {Mixed}
   */
  bottom: undefined,
  
  /*
   * The left edge of the MarginPreference.
   * @type {Mixed}
   */
  left: undefined,
  
  /*
   * The right edge of the MarginPreference.
   * @type {Mixed}
   */
  right: undefined,
  
  /*
   * The direction of text in the column.
   * @type {HorizontalOrVertical}
   */
  columnDirection: undefined,
  
  /*
   * The distance that each column guide is placed from the left margin, formatted as an array in the format [guide1, guide2, guide3].
   * @type {Mixed}
   */
  columnsPositions: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the MarginPreference.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {MarginPreference}
   */
  getElements: function() {
    return new MarginPreference();
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
