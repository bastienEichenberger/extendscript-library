/*
 * A footnote.
 */
var Footnote = {
  /*
   * The location of the footnote marker in the parent story.
   * @type {InsertionPoint}
   */
  storyOffset: undefined,
  
  /*
   * Lists all page items contained by the Footnote.
   * @type {PageItem}
   */
  allPageItems: undefined,
  
  /*
   * Lists all graphics contained by the Footnote.
   * @type {Graphic}
   */
  allGraphics: undefined,
  
  /*
   * The unique ID of the Footnote.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the Footnote (a XmlStory, Story, TextFrame or InsertionPoint).
   * @type {Mixed}
   */
  parent: undefined,
  
  /*
   * The index of the Footnote within its containing object.
   * @type {Number}
   */
  index: undefined,
  
  /*
   * A collection of text columns.
   * @type {TextColumns}
   */
  textColumns: undefined,
  
  /*
   * A collection of text objects.
   * @type {Texts}
   */
  texts: undefined,
  
  /*
   * A collection of text style ranges.
   * @type {TextStyleRanges}
   */
  textStyleRanges: undefined,
  
  /*
   * A collection of paragraphs.
   * @type {Paragraphs}
   */
  paragraphs: undefined,
  
  /*
   * A collection of lines.
   * @type {Lines}
   */
  lines: undefined,
  
  /*
   * A collection of words.
   * @type {Words}
   */
  words: undefined,
  
  /*
   * A collection of characters.
   * @type {Characters}
   */
  characters: undefined,
  
  /*
   * A collection of insertion points.
   * @type {InsertionPoints}
   */
  insertionPoints: undefined,
  
  /*
   * A collection of text variable instances.
   * @type {TextVariableInstances}
   */
  textVariableInstances: undefined,
  
  /*
   * A collection of ellipses.
   * @type {Ovals}
   */
  ovals: undefined,
  
  /*
   * The spline items collection.
   * @type {SplineItems}
   */
  splineItems: undefined,
  
  /*
   * The page items collection, which can be used to process all page items in a container (such as a document, page, or group), regardless of type.
   * @type {PageItems}
   */
  pageItems: undefined,
  
  /*
   * A collection of rectangles.
   * @type {Rectangles}
   */
  rectangles: undefined,
  
  /*
   * A collection of graphic lines.
   * @type {GraphicLines}
   */
  graphicLines: undefined,
  
  /*
   * A collection of text frames.
   * @type {TextFrames}
   */
  textFrames: undefined,
  
  /*
   * A collection of polygons.
   * @type {Polygons}
   */
  polygons: undefined,
  
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
   * A collection of groups.
   * @type {Groups}
   */
  groups: undefined,
  
  /*
   * EPSTexts
   * @type {EPSTexts}
   */
  epstexts: undefined,
  
  /*
   * A collection of hidden text objects.
   * @type {HiddenTexts}
   */
  hiddenTexts: undefined,
  
  /*
   * The text contents of the footnote. Can return: String, SpecialCharacters enumerator or Array of Strings or SpecialCharacters enumerators. Can also accept: NothingEnum enumerator or Array of Strings, SpecialCharacters enumerators or NothingEnum enumerators.
   * @type {Mixed}
   */
  contents: undefined,
  
  /*
   * A property that can be set to any string.
   * @type {String}
   */
  label: undefined,
  
  /*
   * The name of the Footnote; this is an alias to the Footnote's label property.
   * @type {String}
   */
  name: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Deletes the Footnote.
   */
  remove: function() {
  },
  
  /*
   * Converts the footnote to part of the story text and places the converted text at the former location of the footnote marker in the text.
   * @returns {Text}
   */
  convertToText: function() {
    return new Text();
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
   * Generates a string which, if executed, will return the Footnote.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {Footnote}
   */
  getElements: function() {
    return new Footnote();
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
