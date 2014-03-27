/*
 * An object library asset.
 */
var Asset = {
  /*
   * The date and time the Asset was created.
   * @type {Date}
   */
  date: undefined,
  
  /*
   * The unique ID of the Asset.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the Asset (a Library).
   * @type {Library}
   */
  parent: undefined,
  
  /*
   * The index of the Asset within its containing object.
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
   * The name of the Asset.
   * @type {String}
   */
  name: undefined,
  
  /*
   * The description of the Asset.
   * @type {String}
   */
  description: undefined,
  
  /*
   * The type of object library asset.
   * @type {AssetType}
   */
  assetType: undefined,
  
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
   * Deletes the Asset.
   */
  remove: function() {
  },
  
  /*
   * Places the asset in the specified document or text.
 *
   * @param {Mixed} on The document or text object in which to place the asset. Can accept: Document or Text.
   * @returns {Mixed}
   */
  placeAsset: function(on) {
    return new Mixed();
  },
  
  /*
   * Selects the object.
 *
   * @param {SelectionOptions} [existingSelection] The selection status of the Asset in relation to previously selected objects. 
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
   * Generates a string which, if executed, will return the Asset.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {Asset}
   */
  getElements: function() {
    return new Asset();
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
