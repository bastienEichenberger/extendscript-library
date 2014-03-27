/*
 * Text editing preferences.
 */
var TextEditingPreference = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the TextEditingPreference (a Application).
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
   * If true, allows text to be dragged and dropped on a layout page.
   * @type {Boolean}
   */
  dragAndDropTextInLayout: undefined,
  
  /*
   * If true, allows text to be dragged and dropped in the story editor or galley view.
   * @type {Boolean}
   */
  allowDragAndDropTextInStory: undefined,
  
  /*
   * If true, a triple click selects a line of text. If false, a triple click selects a paragraph.
   * @type {Boolean}
   */
  tripleClickSelectsLine: undefined,
  
  /*
   * If true, automatically adjusts spacing among words and between words and punctuation marks when cutting and pasting text.
   * @type {Boolean}
   */
  smartCutAndPaste: undefined,
  
  /*
   * If true, a single click (with the Type tool) converts non-text frames to text frames.
   * @type {Boolean}
   */
  singleClickConvertsFramesToTextFrames: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the TextEditingPreference.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {TextEditingPreference}
   */
  getElements: function() {
    return new TextEditingPreference();
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
