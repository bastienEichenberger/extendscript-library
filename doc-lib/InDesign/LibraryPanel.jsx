/*
 * Library panel
 */
var LibraryPanel = {
  /*
   * The library displayed in this LibraryPanel
   * @type {Library}
   */
  associatedLibrary: undefined,
  
  /*
   * The name of the LibraryPanel.
   * @type {String}
   */
  name: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the LibraryPanel (a Application).
   * @type {Application}
   */
  parent: undefined,
  
  /*
   * The index of the LibraryPanel within its containing object.
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
   * LibraryPanel view
   * @type {LibraryPanelViews}
   */
  view: undefined,
  
  /*
   * The sort order of the assets in the LibraryPanel
   * @type {SortAssets}
   */
  sortOrder: undefined,
  
  /*
   * The selected object(s). Can also accept: Object or NothingEnum enumerator.
   * @type {Object}
   */
  selection: undefined,
  
  /*
   * If true, the panel is visible.
   * @type {Boolean}
   */
  visible: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Show all assets
   */
  showAll: function() {
  },
  
  /*
   * Selects the specified object(s).
 *
   * @param {Mixed} selectableItems The objects to select. Can accept: Object, Array of Objects, NothingEnum enumerator or SelectAll enumerator.
   * @param {SelectionOptions} [existingSelection] The selection status of the LibraryPanel in relation to previously selected objects. 
   */
  select: function(selectableItems, existingSelection) {
  },
  
  /*
   * Generates a string which, if executed, will return the LibraryPanel.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {LibraryPanel}
   */
  getElements: function() {
    return new LibraryPanel();
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
