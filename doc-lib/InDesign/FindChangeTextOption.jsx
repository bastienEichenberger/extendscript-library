/*
 * Find/change text options.
 */
var FindChangeTextOption = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the FindChangeTextOption (a Application).
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
   * If true, includes locked stories in the find query.
   * @type {Boolean}
   */
  includeLockedStoriesForFind: undefined,
  
  /*
   * If true, includes locked layers in the find query.
   * @type {Boolean}
   */
  includeLockedLayersForFind: undefined,
  
  /*
   * If true, includes hidden layers in the find/change query.
   * @type {Boolean}
   */
  includeHiddenLayers: undefined,
  
  /*
   * If true, includes master pages in the find/change query.
   * @type {Boolean}
   */
  includeMasterPages: undefined,
  
  /*
   * If true, includes footnotes in the find/change query.
   * @type {Boolean}
   */
  includeFootnotes: undefined,
  
  /*
   * If true, finds only the complete find text string. If false, also finds strings that contain the find text string.
   * @type {Boolean}
   */
  wholeWord: undefined,
  
  /*
   * If true, finds strings whose use of case matches the find text string. If false, finds strings that match the find text string regardless of case.
   * @type {Boolean}
   */
  caseSensitive: undefined,
  
  /*
   * If true, finds only text that matches the specified kana type.
   * @type {Boolean}
   */
  kanaSensitive: undefined,
  
  /*
   * If true, finds only text that matches the specified character width.
   * @type {Boolean}
   */
  widthSensitive: undefined,
  
  /*
   * If true, ignore kashidas in the find/change query.
   * @type {Boolean}
   */
  ignoreKashidas: undefined,
  
  /*
   * If true, ignore diacs in the find/change query.
   * @type {Boolean}
   */
  ignoreDiacritics: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the FindChangeTextOption.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {FindChangeTextOption}
   */
  getElements: function() {
    return new FindChangeTextOption();
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
