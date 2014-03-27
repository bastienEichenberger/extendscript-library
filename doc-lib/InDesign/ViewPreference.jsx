/*
 * View preferences.
 */
var ViewPreference = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the ViewPreference (a Application or Document).
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
   * The number of points per inch, typically 72. (Range: 60 to 80)
   * @type {Number}
   */
  pointsPerInch: undefined,
  
  /*
   * The distance (in points) between major tick marks on the horizontal ruler. (Range: 4 to 256) Valid only when horizontal measurement units is custom.
   * @type {Number}
   */
  horizontalCustomPoints: undefined,
  
  /*
   * The distance (in points) between major tick marks on the vertical ruler. (Range: 4 to 256) Valid only when vertical measurement units is custom.
   * @type {Number}
   */
  verticalCustomPoints: undefined,
  
  /*
   * The measurement unit for stroke measurements.
   * @type {MeasurementUnits}
   */
  strokeMeasurementUnits: undefined,
  
  /*
   * The range (in pixels) within which an object snaps to guides. (Range: 1 to 36) Note: Snapping occurs only when guides are shown.
   * @type {Number}
   */
  guideSnaptoZone: undefined,
  
  /*
   * The distance to move a specified object when an arrow key is pressed. (Range depends on the measurement unit. For points: 0.001 to 100; picas: 0p0.001 to 8p4; mm: 0 to 35.278; cm: 0 to 3.5278; inches: 0 to 1.3889; ciceros: 0c0.001 to 7c9.839)
   * @type {Mixed}
   */
  cursorKeyIncrement: undefined,
  
  /*
   * The measurement unit for the horizontal ruler and other horizontally-measured spaces such as grid columns, horizontal offsets, column gutters, or others.
   * @type {MeasurementUnits}
   */
  horizontalMeasurementUnits: undefined,
  
  /*
   * The measurement unit for the vertical ruler and other vertically-measured spaces such as grid rows, vertical offsets, row heights, or others.
   * @type {MeasurementUnits}
   */
  verticalMeasurementUnits: undefined,
  
  /*
   * The default zero point at the intersection of the vertical and horizontal rulers and the scope of the horizontal ruler.
   * @type {RulerOrigin}
   */
  rulerOrigin: undefined,
  
  /*
   * If true, displays the horizontal and vertical rulers.
   * @type {Boolean}
   */
  showRulers: undefined,
  
  /*
   * If true, displays borders of unselected frames and the diagonal lines in empty unselected frames.
   * @type {Boolean}
   */
  showFrameEdges: undefined,
  
  /*
   * The measurement units for typography.
   * @type {MeasurementUnits}
   */
  typographicMeasurementUnits: undefined,
  
  /*
   * The measurement unit for text size measurements.
   * @type {MeasurementUnits}
   */
  textSizeMeasurementUnits: undefined,
  
  /*
   * The measurement unit for the print dialog.
   * @type {MeasurementUnits}
   */
  printDialogMeasurementUnits: undefined,
  
  /*
   * If true, notes are displayed.
   * @type {Boolean}
   */
  showNotes: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the ViewPreference.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {ViewPreference}
   */
  getElements: function() {
    return new ViewPreference();
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
