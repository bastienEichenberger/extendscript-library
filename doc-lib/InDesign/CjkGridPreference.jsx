/*
 * Character grid preferences.
 */
var CjkGridPreference = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the CjkGridPreference (a Application or Document).
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
   * If true, displays the layout grids.
   * @type {Boolean}
   */
  showAllLayoutGrids: undefined,
  
  /*
   * If true, displays the frame (story) grids.
   * @type {Boolean}
   */
  showAllFrameGrids: undefined,
  
  /*
   * The view magnification (as a percentage) less than which grids do not appear. (Range: 5 to 4000)
   * @type {Number}
   */
  minimumScale: undefined,
  
  /*
   * If true, objects snap to the layout grid.
   * @type {Boolean}
   */
  snapToLayoutGrid: undefined,
  
  /*
   * The layout grid color, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
   * @type {Mixed}
   */
  layoutGridColorIndex: undefined,
  
  /*
   * Applies the grid color to every nth cell, where n is the value of this property.
   * @type {Number}
   */
  colorEveryNthCell: undefined,
  
  /*
   * If true, applies the grid color from the the edge of the line. If false, applies the grid color from the corner of the frame.
   * @type {Boolean}
   */
  singleLineColorMode: undefined,
  
  /*
   * If true, uses ICF mode for grid cells. If false, uses virtual body mode.
   * @type {Boolean}
   */
  icfMode: undefined,
  
  /*
   * If true, cell shape is circular. If false, cell shape is rectangular.
   * @type {Boolean}
   */
  useCircularCells: undefined,
  
  /*
   * If true, displays the character count for the frame.
   * @type {Boolean}
   */
  showCharacterCount: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the CjkGridPreference.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {CjkGridPreference}
   */
  getElements: function() {
    return new CjkGridPreference();
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
