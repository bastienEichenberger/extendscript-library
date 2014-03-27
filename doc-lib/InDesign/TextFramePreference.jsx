/*
 * Text frame preferences.
 */
var TextFramePreference = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the TextFramePreference (a Application, Document, TextFrame or ObjectStyle).
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
   * The number of columns in the text frame. Note: Depending on the value of use fixed column width, the number of columns can change automatically when the text frame size changes.
   * @type {Number}
   */
  textColumnCount: undefined,
  
  /*
   * The space between columns in the text frame.
   * @type {Mixed}
   */
  textColumnGutter: undefined,
  
  /*
   * The column width of the columns in the text frame.
   * @type {Mixed}
   */
  textColumnFixedWidth: undefined,
  
  /*
   * If true, maintains column width when the text frame is resized. If false, causes columns to resize when the text frame is resized. Note: When true, resizing the frame can change the number of columns in the frame.
   * @type {Boolean}
   */
  useFixedColumnWidth: undefined,
  
  /*
   * The amount to offset text from the edges of the text frame, specified either as a single value applied uniformly to all sides of the text frame or as an array of 4 values in the format [top inset, left inset, bottom inset, right inset]. Can return: Unit (0 - 8640 points) or Array of 4 Units (0 - 8640 points).
   * @type {Mixed}
   */
  insetSpacing: undefined,
  
  /*
   * The distance between the baseline of the text and the top inset of the text frame or cell.
   * @type {FirstBaseline}
   */
  firstBaselineOffset: undefined,
  
  /*
   * The minimum distance between the baseline of the text and the top inset of the text frame or cell.
   * @type {Mixed}
   */
  minimumFirstBaselineOffset: undefined,
  
  /*
   * The vertical alignment of the text content.
   * @type {VerticalJustification}
   */
  verticalJustification: undefined,
  
  /*
   * The maximum amount of vertical space between two paragraphs. Note: Valid only when vertical justification is justified; the specified amount is applied in addition to the space before or space after values defined for the paragraph.
   * @type {Mixed}
   */
  verticalThreshold: undefined,
  
  /*
   * If true, ignores text wrap settings for drawn or placed objects in the text frame.
   * @type {Boolean}
   */
  ignoreWrap: undefined,
  
  /*
   * If true, maintains column width between a min and max range when the text frame is resized. If false, causes columns to resize when the text frame is resized. Note: When true, resizing the frame can change the number of columns in the frame.
   * @type {Boolean}
   */
  useFlexibleColumnWidth: undefined,
  
  /*
   * The maximum column width of the columns in the text frame. Use 0 to indicate no upper limit.
   * @type {Mixed}
   */
  textColumnMaxWidth: undefined,
  
  /*
   * Auto-sizing type of text frame. Based on type, reference value is automatically adjusted. For example, for height only type, top-left reference point becomes top-center. Recommended to change auto-sizing type, after setting other auto-sizing attributes
   * @type {AutoSizingTypeEnum}
   */
  autoSizingType: undefined,
  
  /*
   * The reference point for auto sizing of text frame. Reference point is automatically adjusted to the suitable value depending on the auto-sizing type value. As an example, top left reference point becomes top center for height only dimension
   * @type {AutoSizingReferenceEnum}
   */
  autoSizingReferencePoint: undefined,
  
  /*
   * If true, minimum height value is used during the auto-sizing of text frame.
   * @type {Boolean}
   */
  useMinimumHeightForAutoSizing: undefined,
  
  /*
   * The minimum height for auto-sizing of the text frame.
   * @type {Mixed}
   */
  minimumHeightForAutoSizing: undefined,
  
  /*
   * If true, minimum width value is used during the auto-sizing of text frame.
   * @type {Boolean}
   */
  useMinimumWidthForAutoSizing: undefined,
  
  /*
   * The minimum width for auto-sizing of the text frame.
   * @type {Mixed}
   */
  minimumWidthForAutoSizing: undefined,
  
  /*
   * If true, line-breaks are not introduced after auto sizing.
   * @type {Boolean}
   */
  useNoLineBreaksForAutoSizing: undefined,
  
  /*
   * Vertically justify balanced across all columns.
   * @type {Boolean}
   */
  verticalBalanceColumns: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the TextFramePreference.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {TextFramePreference}
   */
  getElements: function() {
    return new TextFramePreference();
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
