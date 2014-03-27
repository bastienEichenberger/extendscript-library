/*
 * Baseline frame grid options.
 */
var BaselineFrameGridOption = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the BaselineFrameGridOption (a Application, Document, TextFrame or ObjectStyle).
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
   * If true, uses a custom baseline frame grid.
   * @type {Boolean}
   */
  useCustomBaselineFrameGrid: undefined,
  
  /*
   * The amount to offset the baseline grid.
   * @type {Mixed}
   */
  startingOffsetForBaselineFrameGrid: undefined,
  
  /*
   * The location (top of page, top margin, top of frame, or frame inset) on which to base the custom baseline grid.
   * @type {BaselineFrameGridRelativeOption}
   */
  baselineFrameGridRelativeOption: undefined,
  
  /*
   * The distance between grid lines.
   * @type {Mixed}
   */
  baselineFrameGridIncrement: undefined,
  
  /*
   * The grid line color, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
   * @type {Mixed}
   */
  baselineFrameGridColor: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the BaselineFrameGridOption.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {BaselineFrameGridOption}
   */
  getElements: function() {
    return new BaselineFrameGridOption();
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
