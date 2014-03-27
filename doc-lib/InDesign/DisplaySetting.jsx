/*
 * Object-level display settings.
 */
var DisplaySetting = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the DisplaySetting (a Application).
   * @type {Application}
   */
  parent: undefined,
  
  /*
   * The index of the DisplaySetting within its containing object.
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
   * The display method for raster images.
   * @type {TagRaster}
   */
  raster: undefined,
  
  /*
   * The display method for vector images.
   * @type {TagVector}
   */
  vector: undefined,
  
  /*
   * The display setting for transparencies.
   * @type {TagTransparency}
   */
  transparency: undefined,
  
  /*
   * If true, uses anti-aliasing for text and bitmap images.
   * @type {Boolean}
   */
  antialiasing: undefined,
  
  /*
   * The point size below which text is greeked.
   * @type {Number}
   */
  greekBelow: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the DisplaySetting.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {DisplaySetting}
   */
  getElements: function() {
    return new DisplaySetting();
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
