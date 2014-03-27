/*
 * Grid preferences.
 */
var GridPreference = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the GridPreference (a Application or Document).
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
   * If true, displays the document grid.
   * @type {Boolean}
   */
  documentGridShown: undefined,
  
  /*
   * If true, an object snaps to the nearest grid line when the object is created, moved, or resized.
   * @type {Boolean}
   */
  documentGridSnapto: undefined,
  
  /*
   * The amount of space between major horizontal lines in the document grid.
   * @type {Mixed}
   */
  horizontalGridlineDivision: undefined,
  
  /*
   * The amount of space between major vertical lines in the document grid.
   * @type {Mixed}
   */
  verticalGridlineDivision: undefined,
  
  /*
   * The number of rows into which to subdivide the space between horizontal document grid lines.
   * @type {Number}
   */
  horizontalGridSubdivision: undefined,
  
  /*
   * The number of columns into which to subdivide the space between vertical document grid lines.
   * @type {Number}
   */
  verticalGridSubdivision: undefined,
  
  /*
   * The color of the document grid, specified either as an array of three doubles, each in the range 0 to 255, representing R, G, and B values, or as a UI color. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
   * @type {Mixed}
   */
  gridColor: undefined,
  
  /*
   * If true, places grids behind all other objects on the spread.
   * @type {Boolean}
   */
  gridsInBack: undefined,
  
  /*
   * If true, displays the baseline grid.
   * @type {Boolean}
   */
  baselineGridShown: undefined,
  
  /*
   * The amount to offset the baseline grid from the zero point.
   * @type {Mixed}
   */
  baselineStart: undefined,
  
  /*
   * The amount of space between baseline grid lines.
   * @type {Mixed}
   */
  baselineDivision: undefined,
  
  /*
   * The magnification (as a percentage) less than which ruler guides do not appear. (Range: 5 to 4000)
   * @type {Number}
   */
  baselineViewThreshold: undefined,
  
  /*
   * The color of the baseline grid, specified either as an array of three doubles, each in the range 0 to 255, representing R, G, and B values, or as a UI color. . Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
   * @type {Mixed}
   */
  baselineColor: undefined,
  
  /*
   * The zero point for the baseline grid offset.
   * @type {BaselineGridRelativeOption}
   */
  baselineGridRelativeOption: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the GridPreference.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {GridPreference}
   */
  getElements: function() {
    return new GridPreference();
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
