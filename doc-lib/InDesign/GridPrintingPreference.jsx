/*
 * Grid printing and exporting preferences.
 */
var GridPrintingPreference = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the GridPrintingPreference (a Application).
   * @type {Application}
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
   * If true, displays layout grids in the printed or exported document.
   * @type {Boolean}
   */
  layoutGridPrinting: undefined,
  
  /*
   * If true, displays frame (story) grids in the printed or exported document.
   * @type {Boolean}
   */
  frameGridPrinting: undefined,
  
  /*
   * If true, displays text in the printed or exported document.
   * @type {Boolean}
   */
  textPrinting: undefined,
  
  /*
   * If true, displays page items other than text, frame grids, and layout grids in the printed or exported document. For information on printing and exporting text and grids, see text printing, frame grid printing, and layout grid printing.
   * @type {Boolean}
   */
  pageItemPrinting: undefined,
  
  /*
   * The stroke weight (in points) of the layout grid.
   * @type {Number}
   */
  layoutGridStrokeWeight: undefined,
  
  /*
   * The stroke weight (in points) of the frame grid.
   * @type {Number}
   */
  frameGridStrokeWeight: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the GridPrintingPreference.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {GridPrintingPreference}
   */
  getElements: function() {
    return new GridPrintingPreference();
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
