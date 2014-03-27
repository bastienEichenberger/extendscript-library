/*
 * A degree entry field.
 */
var AngleEditbox = {
  /*
   * The unique ID of the AngleEditbox.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the AngleEditbox (a DialogColumn, DialogRow, EnablingGroup or BorderPanel).
   * @type {Mixed}
   */
  parent: undefined,
  
  /*
   * The index of the AngleEditbox within its containing object.
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
   * The minumim value that a user is allowed to type in a numeric editbox or combobox. Note: The value for a measurement editbox or combobox is interpreted in points, regardless of the edit units specified for the control. The points value is converted automatically to the edit unit when the dialog is opened.
   * @type {Number}
   */
  minimumValue: undefined,
  
  /*
   * The maximum value that a user is allowed to type in a numeric editbox or combobox. Note: The value for a measurement editbox or combobox is interpreted in points, regardless of the edit units specified for the control. The points value is converted automatically to the edit unit when the dialog is opened.
   * @type {Number}
   */
  maximumValue: undefined,
  
  /*
   * The amount to increment/decrement the value when the user selects the control and presses an arrow key on the keyboard.
   * @type {Number}
   */
  smallNudge: undefined,
  
  /*
   * The amount to increment/decrement the value when a user selects the control and holds down the Shift key while pressing an arrow key on the keyboard.
   * @type {Number}
   */
  largeNudge: undefined,
  
  /*
   * The default value in an editbox control. Note: Do not specify both edit contents and edit value. If both are specified, the one that occurs later in the script is used.
   * @type {String}
   */
  editContents: undefined,
  
  /*
   * The real number default value of the editbox or combobox. Note: For measurement controls, the value is interpreted in points. The points value is converted to edit units when the dialog opens. Note: Do not specify both edit value and edit contents. If both are specified, the one that occurs later in the script is used.
   * @type {Number}
   */
  editValue: undefined,
  
  /*
   * The width of the control. For an editbox or combobox, specifies the minimum width of the box.
   * @type {Number}
   */
  minWidth: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the AngleEditbox.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {AngleEditbox}
   */
  getElements: function() {
    return new AngleEditbox();
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
