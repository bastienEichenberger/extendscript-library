/*
 * A trap preset.
 */
var TrapPreset = {
  /*
   * The unique ID of the TrapPreset.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the TrapPreset (a Application or Document).
   * @type {Mixed}
   */
  parent: undefined,
  
  /*
   * The index of the TrapPreset within its containing object.
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
   * The name of the TrapPreset.
   * @type {String}
   */
  name: undefined,
  
  /*
   * The default width for trapping all colors except those involving solid black. (Range depends on unit. For points: 0.0 to 8.0; picas: 0p0 to 0p8; inches: 0 to 0.1111; mm: 0 to 2.822; cm: 0 to .2822; ciceros: 0c0 to 0c7.507)
   * @type {Mixed}
   */
  defaultTrapWidth: undefined,
  
  /*
   * The black width. (Range depends on unit. For points: 0.0 to 8.0; picas: 0p0 to 0p8; inches: 0 to 0.1111; mm: 0 to 2.822; cm: 0 to .2822; ciceros: 0c0 to 0c7.507)
   * @type {Mixed}
   */
  blackWidth: undefined,
  
  /*
   * The join type of the trap preset.
   * @type {EndJoin}
   */
  trapJoin: undefined,
  
  /*
   * The shape to use at the intersection of three-way traps.
   * @type {TrapEndTypes}
   */
  trapEnd: undefined,
  
  /*
   * If true, ensures that vector objects overlap bitmap images.
   * @type {Boolean}
   */
  objectsToImages: undefined,
  
  /*
   * If true, turns on trapping along the boundary of overlapping or abutting bitmap images.
   * @type {Boolean}
   */
  imagesToImages: undefined,
  
  /*
   * If true, turns on trapping among colors within individual bitmap images.
   * @type {Boolean}
   */
  internalImages: undefined,
  
  /*
   * If true, ensures that one-bit images trap to abutting objects.
   * @type {Boolean}
   */
  oneBitImages: undefined,
  
  /*
   * The trap placement between vector objects and bitmap images.
   * @type {TrapImagePlacementTypes}
   */
  imagePlacement: undefined,
  
  /*
   * The amount (as a percentage) that components of abutting colors must vary before a trap is created. (Range: 1 to 100)
   * @type {Number}
   */
  stepThreshold: undefined,
  
  /*
   * The minimum amount (as a percentage) of black ink required before the black width setting is applied. (Range: 0 to 100)
   * @type {Number}
   */
  blackColorThreshold: undefined,
  
  /*
   * The neutral density value at or above which an ink is considered black. (Range: .001 to 10)
   * @type {Number}
   */
  blackDensity: undefined,
  
  /*
   * The difference (as a percentage) between the neutral densities of abutting colors at which the trap is moved from the darker side of a color edge toward the centerline. (Range: 0 to 100)
   * @type {Number}
   */
  slidingTrapThreshold: undefined,
  
  /*
   * The degree (as a percentage) to which components from abutting colors are used to reduce the trap color. (Range: 0 to 100) Note: 0% makes a trap whose neutral density is equal to the neutral density of the darker color.
   * @type {Number}
   */
  colorReduction: undefined,
  
  /*
   * A property that can be set to any string.
   * @type {String}
   */
  label: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Duplicates the TrapPreset.
   * @returns {TrapPreset}
   */
  duplicate: function() {
    return new TrapPreset();
  },
  
  /*
   * Deletes the trap preset.
 *
   * @param {TrapPreset} replacingWith The trap preset to apply in place of the deleted preset.
   */
  remove: function(replacingWith) {
  },
  
  /*
   * Sets the label to the value associated with the specified key.
 *
   * @param {String} key The key.
   * @param {String} value The value.
   */
  insertLabel: function(key, value) {
  },
  
  /*
   * Gets the label value associated with the specified key.
 *
   * @param {String} key The key.
   * @returns {String}
   */
  extractLabel: function(key) {
    return new String();
  },
  
  /*
   * Generates a string which, if executed, will return the TrapPreset.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {TrapPreset}
   */
  getElements: function() {
    return new TrapPreset();
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
