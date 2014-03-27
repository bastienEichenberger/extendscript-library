/*
 * A guide.
 */
var Guide = {
  /*
   * Dispatched after a Guide is placed. This event bubbles. This event is not cancelable.
   * @type {String}
   */
  AFTER_PLACE: undefined,
  
  /*
   * If true, the object originated on a master spread and was overridden. If false, the object either originated on a master spread and was not overridden, or the object did not originate on a master page.
   * @type {Boolean}
   */
  overridden: undefined,
  
  /*
   * An object that originated on a master page and has been overridden. Can return: PageItem, Guide, Graphic, Movie or Sound.
   * @type {Mixed}
   */
  overriddenMasterPageItem: undefined,
  
  /*
   * The page on which this page item appears.
   * @type {Page}
   */
  parentPage: undefined,
  
  /*
   * The unique ID of the Guide.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the Guide (a Spread or MasterSpread).
   * @type {Mixed}
   */
  parent: undefined,
  
  /*
   * The index of the Guide within its containing object.
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
   * If true, the master page item can be overridden.
   * @type {Boolean}
   */
  allowOverrides: undefined,
  
  /*
   * The color of the guide, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
   * @type {Mixed}
   */
  guideColor: undefined,
  
  /*
   * The orientation of the guide.
   * @type {HorizontalOrVertical}
   */
  orientation: undefined,
  
  /*
   * The location at which to place the guide relative to the current ruler zero point.
   * @type {Mixed}
   */
  location: undefined,
  
  /*
   * If true, horizontal orientation guides stop at the edges of the specified page. If false, the guides extends across the width of the spread and into the pasteboard area.
   * @type {Boolean}
   */
  fitToPage: undefined,
  
  /*
   * The view magnification as a percentage below which guides are no longer displayed. (Range: 5.0 to 4000.0)
   * @type {Number}
   */
  viewThreshold: undefined,
  
  /*
   * If true, the Guide is locked.
   * @type {Boolean}
   */
  locked: undefined,
  
  /*
   * The layer that the Guide is on.
   * @type {Layer}
   */
  itemLayer: undefined,
  
  /*
   * The type of the guide.
   * @type {GuideTypeOptions}
   */
  guideType: undefined,
  
  /*
   * The zone of the guide.
   * @type {Mixed}
   */
  guideZone: undefined,
  
  /*
   * A property that can be set to any string.
   * @type {String}
   */
  label: undefined,
  
  /*
   * The name of the Guide; this is an alias to the Guide's label property.
   * @type {String}
   */
  name: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Overrides a master page item and places the item on the document page as a new object.
 *
   * @param {Page} destinationPage The document page that contains the master page item to override.
   * @returns {Mixed}
   */
  override: function(destinationPage) {
    return new Mixed();
  },
  
  /*
   * Removes the override from a previously overridden master page item.
   */
  removeOverride: function() {
  },
  
  /*
   * Detaches an overridden master page item from the master page.
   */
  detach: function() {
  },
  
  /*
   * Deletes the Guide.
   */
  remove: function() {
  },
  
  /*
   * Moves the guide to a new location. Note: Either the to or the by parameter is required; if both parameters are defined, only the to value is used.
 *
   * @param {Mixed} [to] The new location of the guide, in the format [x, y]. 
   * @param {Mixed} [by] The amount to move the guide relative to its current position, in the format [x, y]. 
   */
  move: function(to, by) {
  },
  
  /*
   * Duplicates the Guide.
   * @returns {Guide}
   */
  duplicate: function() {
    return new Guide();
  },
  
  /*
   * Get the transformation values of the page item.
 *
   * @param {CoordinateSpaces} in The coordinate space to use
   * @returns {TransformationMatrix}
   */
  transformValuesOf: function(in) {
    return new TransformationMatrix();
  },
  
  /*
   * Get the coordinates of the given location in the specified coordinate system.
 *
   * @param {Mixed} location The location requested. Can accept: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers.
   * @param {CoordinateSpaces} in The coordinate space to use.
   * @param {Boolean} [consideringRulerUnits] If true then a ruler location is interpreted using ruler units rather than points. The default value is false. This parameter has no effect unless the reference point is specified relative to a page. 
   * @returns {Mixed}
   */
  resolve: function(location, in, consideringRulerUnits) {
    return new Mixed();
  },
  
  /*
   * Selects the object.
 *
   * @param {SelectionOptions} [existingSelection] The selection status of the Guide in relation to previously selected objects. 
   */
  select: function(existingSelection) {
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
   * Generates a string which, if executed, will return the Guide.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {Guide}
   */
  getElements: function() {
    return new Guide();
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
