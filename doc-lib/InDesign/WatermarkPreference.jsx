/*
 * Watermark preference
 */
var WatermarkPreference = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the WatermarkPreference (a Document or Application).
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
   * Watermark visibility for a document
   * @type {Boolean}
   */
  watermarkVisibility: undefined,
  
  /*
   * Watermark do print for a document
   * @type {Boolean}
   */
  watermarkDoPrint: undefined,
  
  /*
   * Watermark draw in back for a document
   * @type {Boolean}
   */
  watermarkDrawInBack: undefined,
  
  /*
   * Watermark text for a document
   * @type {String}
   */
  watermarkText: undefined,
  
  /*
   * Watermark font family display name
   * @type {String}
   */
  watermarkFontFamily: undefined,
  
  /*
   * Watermark font style name
   * @type {String}
   */
  watermarkFontStyle: undefined,
  
  /*
   * Watermark font point size for a document
   * @type {Number}
   */
  watermarkFontPointSize: undefined,
  
  /*
   * Watermark font color for a document. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
   * @type {Mixed}
   */
  watermarkFontColor: undefined,
  
  /*
   * Watermark opacity (as a percentage). (Range: 0 to 100)
   * @type {Number}
   */
  watermarkOpacity: undefined,
  
  /*
   * Watermark rotation for a document
   * @type {Number}
   */
  watermarkRotation: undefined,
  
  /*
   * Watermark horizontal position enum for a document
   * @type {WatermarkHorizontalPositionEnum}
   */
  watermarkHorizontalPosition: undefined,
  
  /*
   * Watermark horizontal offset for a document
   * @type {Mixed}
   */
  watermarkHorizontalOffset: undefined,
  
  /*
   * Watermark vertical position enum for a document
   * @type {WatermarkVerticalPositionEnum}
   */
  watermarkVerticalPosition: undefined,
  
  /*
   * Watermark vertical offset for a document
   * @type {Mixed}
   */
  watermarkVerticalOffset: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the WatermarkPreference.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {WatermarkPreference}
   */
  getElements: function() {
    return new WatermarkPreference();
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
