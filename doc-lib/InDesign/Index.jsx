/*
 * An index.
 */
var Index = {
  /*
   * The topics in the specified index section.
   * @type {Topic}
   */
  allTopics: undefined,
  
  /*
   * The unique ID of the Index.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the Index (a Document).
   * @type {Document}
   */
  parent: undefined,
  
  /*
   * The index of the Index within its containing object.
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
   * A collection of index sections.
   * @type {IndexSections}
   */
  indexSections: undefined,
  
  /*
   * A collection of index topics.
   * @type {Topics}
   */
  topics: undefined,
  
  /*
   * A property that can be set to any string.
   * @type {String}
   */
  label: undefined,
  
  /*
   * The name of the Index; this is an alias to the Index's label property.
   * @type {String}
   */
  name: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Imports a list of index topics.
 *
   * @param {File} from The file from which to import the topics.
   */
  importTopics: function(from) {
  },
  
  /*
   * Removes all index topics that do not have any index entries.
   */
  removeUnusedTopics: function() {
  },
  
  /*
   * Makes the initial letter for the specified index topic or group of index topics upper case.
 *
   * @param {IndexCapitalizationOptions} [capitalizationOption] The entry or entries to capitalize. 
   */
  capitalize: function(capitalizationOption) {
  },
  
  /*
   * Updates the index preview pane. Note: Does not update the index.
   */
  update: function() {
  },
  
  /*
   * Generates a new index story.
 *
   * @param {Mixed} [on] The spread or page on which to place the story. Can accept: Page, Spread or MasterSpread. 
   * @param {Mixed} [placePoint] The coordinates of the upper left corner of the story bounding box, in the format [x, y]. 
   * @param {Layer} [destinationLayer] The layer on which to place the story. 
   * @param {Boolean} [autoflowing] If true, allows the story to flow onto subsequent pages if the story does not fit on the specified page. If no subsequent pages exist in the document, creates the necessary pages. 
   * @param {Boolean} [includeOverset] If true, includes topics in overset text in the story.  
   * @returns {Story}
   */
  generate: function(on, placePoint, destinationLayer, autoflowing, includeOverset) {
    return new Story();
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
   * Generates a string which, if executed, will return the Index.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {Index}
   */
  getElements: function() {
    return new Index();
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
