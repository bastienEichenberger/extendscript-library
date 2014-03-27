/*
 * Note preferences.
 */
var NotePreference = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the NotePreference (a Application).
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
   * The background color for notes.
   * @type {NoteBackgrounds}
   */
  noteBackgroundColor: undefined,
  
  /*
   * The note color, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as an InCopy UI color. Can return: Array of 3 Reals (0 - 255) or InCopyUIColors enumerator.
   * @type {Mixed}
   */
  noteColor: undefined,
  
  /*
   * If true, displays note information and some note content when the mouse pointer hovers over a note anchor in layout view or a note bookend in galley or story view.
   * @type {Boolean}
   */
  showNoteTips: undefined,
  
  /*
   * If true, includes inline notes content when using Find/Change commands (in Galley and Story views only).
   * @type {Boolean}
   */
  findAndReplaceNoteContents: undefined,
  
  /*
   * If true, includes inline notes content when using Spell Check (in Galley and Story views only).
   * @type {Boolean}
   */
  spellCheckNotes: undefined,
  
  /*
   * The color to use for notes.
   * @type {NoteColorChoices}
   */
  noteColorChoices: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the NotePreference.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {NotePreference}
   */
  getElements: function() {
    return new NotePreference();
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
