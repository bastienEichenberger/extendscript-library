/*
 * Transparency flattener preferences.
 */
var FlattenerPreference = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the FlattenerPreference (a Spread).
   * @type {Spread}
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
   * The amount of vector artwork to rasterize during flattening, specified as an enumerator or as a percentage in the range 0 to 100. Can return: FlattenerLevel enumerator or Real (0 - 100).
   * @type {Mixed}
   */
  rasterVectorBalance: undefined,
  
  /*
   * The resolution for vector objects rasterized as a result of flattening. (Range: 1 to 9600) For information, see raster vector balance.
   * @type {Number}
   */
  lineArtAndTextResolution: undefined,
  
  /*
   * The resolution for gradients rasterized as a result of flattening and for drop shadow and feathers when printed or exported. (Range: 0 to 1200) Note: Resolutions higher than 300 ppi increase file size and printing time but generally do not improve the image quality.
   * @type {Number}
   */
  gradientAndMeshResolution: undefined,
  
  /*
   * If true, ensures that the boundaries between vector and rasterized artwork fall along object paths.
   * @type {Boolean}
   */
  clipComplexRegions: undefined,
  
  /*
   * If true, converts all strokes to outlines and ensures that stroke widths remain constant during flattening. Note: Can cause thin strokes to appear slightly thicker than their original width. Affects all strokes, not only strokes involved in the transparency.
   * @type {Boolean}
   */
  convertAllStrokesToOutlines: undefined,
  
  /*
   * If true, converts all text to outlines and discards all type glyph information on spreads with transparency; ensures that the width of text strokes remains constant during flattening. Note: Can cause small fonts to appear slightly thicker when viewed in Acrobat or printed on low-quality desktop printers, but does not affect type quality when printed on high-resolution printers or imagesetters.
   * @type {Boolean}
   */
  convertAllTextToOutlines: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the FlattenerPreference.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {FlattenerPreference}
   */
  getElements: function() {
    return new FlattenerPreference();
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
