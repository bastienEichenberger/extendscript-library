/*
 * A text object that is on a path.
 */
var TextPath = {
  /*
   * Dispatched before a TextPath is placed. This event bubbles. This event is cancelable.
   * @type {String}
   */
  BEFORE_PLACE: undefined,
  
  /*
   * Dispatched after a TextPath is placed. This event bubbles. This event is not cancelable.
   * @type {String}
   */
  AFTER_PLACE: undefined,
  
  /*
   * The halfway point between the start bracket and the end bracket.
   * @type {Number}
   */
  centerBracket: undefined,
  
  /*
   * The story that contains the text.
   * @type {Story}
   */
  parentStory: undefined,
  
  /*
   * The first text frame in the thread. Can return: TextFrame or TextPath.
   * @type {Mixed}
   */
  startTextFrame: undefined,
  
  /*
   * The last text frame in the thread. Can return: TextFrame or TextPath.
   * @type {Mixed}
   */
  endTextFrame: undefined,
  
  /*
   * The index of the text frame within the story.
   * @type {Number}
   */
  textFrameIndex: undefined,
  
  /*
   * If true, the story has overset text.
   * @type {Boolean}
   */
  overflows: undefined,
  
  /*
   * The unique ID of the TextPath.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the TextPath (a SplineItem, Polygon, GraphicLine, Rectangle, Oval, TextFrame or EPSText).
   * @type {Mixed}
   */
  parent: undefined,
  
  /*
   * The index of the TextPath within its containing object.
   * @type {Number}
   */
  index: undefined,
  
  /*
   * A collection of text objects.
   * @type {Texts}
   */
  texts: undefined,
  
  /*
   * A collection of characters.
   * @type {Characters}
   */
  characters: undefined,
  
  /*
   * A collection of words.
   * @type {Words}
   */
  words: undefined,
  
  /*
   * A collection of lines.
   * @type {Lines}
   */
  lines: undefined,
  
  /*
   * A collection of text columns.
   * @type {TextColumns}
   */
  textColumns: undefined,
  
  /*
   * A collection of paragraphs.
   * @type {Paragraphs}
   */
  paragraphs: undefined,
  
  /*
   * A collection of insertion points.
   * @type {InsertionPoints}
   */
  insertionPoints: undefined,
  
  /*
   * A collection of text style ranges.
   * @type {TextStyleRanges}
   */
  textStyleRanges: undefined,
  
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
   * The alignment of the type on a path.
   * @type {PathTypeAlignments}
   */
  pathAlignment: undefined,
  
  /*
   * The alignment applied to the type on a path.
   * @type {TextTypeAlignments}
   */
  textAlignment: undefined,
  
  /*
   * The effect applied to the type on a path.
   * @type {TextPathEffects}
   */
  pathEffect: undefined,
  
  /*
   * The flip effect applied to the type on a path.
   * @type {FlipValues}
   */
  flipPathEffect: undefined,
  
  /*
   * The spacing applied to the type on a path.
   * @type {Number}
   */
  pathSpacing: undefined,
  
  /*
   * The location of the start of the type on the path, expressed in points. Note: 0 is the first point on the path.
   * @type {Number}
   */
  startBracket: undefined,
  
  /*
   * The end of the type on a path. Note: Additional text becomes overset text unless the text is linked to another path or text frame.
   * @type {Number}
   */
  endBracket: undefined,
  
  /*
   * The previous text frame in the thread. Can return: TextFrame or TextPath. Can also accept: NothingEnum enumerator.
   * @type {Mixed}
   */
  previousTextFrame: undefined,
  
  /*
   * The next text frame in the thread. Can return: TextFrame or TextPath. Can also accept: NothingEnum enumerator.
   * @type {Mixed}
   */
  nextTextFrame: undefined,
  
  /*
   * The contents of the text frame. Can return: String, TextFrameContents enumerator or SpecialCharacters enumerator.
   * @type {Mixed}
   */
  contents: undefined,
  
  /*
   * A property that can be set to any string.
   * @type {String}
   */
  label: undefined,
  
  /*
   * The name of the TextPath; this is an alias to the TextPath's label property.
   * @type {String}
   */
  name: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Finds text that matches the find what value.
 *
   * @param {Boolean} [reverseOrder] If true, returns the results in reverse order. 
   * @returns {Text}
   */
  findText: function(reverseOrder) {
    return new Text();
  },
  
  /*
   * Finds text that matches the find what value and replaces the text with the change to value.
 *
   * @param {Boolean} [reverseOrder] If true, returns the results in reverse order. 
   * @returns {Text}
   */
  changeText: function(reverseOrder) {
    return new Text();
  },
  
  /*
   * Finds text that matches the find what value.
 *
   * @param {Boolean} [reverseOrder] If true, returns the results in reverse order. 
   * @returns {Text}
   */
  findGrep: function(reverseOrder) {
    return new Text();
  },
  
  /*
   * Finds text that matches the find what value and replaces the text with the change to value.
 *
   * @param {Boolean} [reverseOrder] If true, returns the results in reverse order. 
   * @returns {Text}
   */
  changeGrep: function(reverseOrder) {
    return new Text();
  },
  
  /*
   * Finds glyphs that match the find what value.
 *
   * @param {Boolean} [reverseOrder] If true, returns the results in reverse order. 
   * @returns {Text}
   */
  findGlyph: function(reverseOrder) {
    return new Text();
  },
  
  /*
   * Finds glyphs that match the find what value and replaces the glyphs with the change to value.
 *
   * @param {Boolean} [reverseOrder] If true, returns the results in reverse order. 
   * @returns {Text}
   */
  changeGlyph: function(reverseOrder) {
    return new Text();
  },
  
  /*
   * Finds text that matches the find character type value.
 *
   * @param {Boolean} [reverseOrder] If true, returns the results in reverse order. 
   * @returns {Text}
   */
  findTransliterate: function(reverseOrder) {
    return new Text();
  },
  
  /*
   * Finds text that matches the find character type value and replaces the text with the change character type value.
 *
   * @param {Boolean} [reverseOrder] If true, returns the results in reverse order. 
   * @returns {Text}
   */
  changeTransliterate: function(reverseOrder) {
    return new Text();
  },
  
  /*
   * Deletes the TextPath.
   */
  remove: function() {
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
   * Generates a string which, if executed, will return the TextPath.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {TextPath}
   */
  getElements: function() {
    return new TextPath();
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
