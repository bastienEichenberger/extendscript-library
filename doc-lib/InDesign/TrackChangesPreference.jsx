/*
 * Track changes preferences.
 */
var TrackChangesPreference = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the TrackChangesPreference (a Application).
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
   * The change bar color, specified as an InCopy UI color. Can return: Array of 3 Reals (0 - 255) or InCopyUIColors enumerator.
   * @type {Mixed}
   */
  changeBarColor: undefined,
  
  /*
   * If true, displays added text.
   * @type {Boolean}
   */
  showAddedText: undefined,
  
  /*
   * If true, displays change bars,
   * @type {Boolean}
   */
  showChangeBars: undefined,
  
  /*
   * If true, displays deleted text.
   * @type {Boolean}
   */
  showDeletedText: undefined,
  
  /*
   * If true, displays moved text.
   * @type {Boolean}
   */
  showMovedText: undefined,
  
  /*
   * If true, includes deleted text when using the Spell Check command.
   * @type {Boolean}
   */
  spellCheckDeletedText: undefined,
  
  /*
   * The color for added text, specified as an InCopy UI color. Note: Valid only when added text color choice is change uses change pref color. Can return: Array of 3 Reals (0 - 255) or InCopyUIColors enumerator.
   * @type {Mixed}
   */
  textColorForAddedText: undefined,
  
  /*
   * The background color for added text, specified as an InCopy UI color. Note: Valid only when added background color choice is change background uses change pref color. Can return: Array of 3 Reals (0 - 255) or InCopyUIColors enumerator.
   * @type {Mixed}
   */
  backgroundColorForAddedText: undefined,
  
  /*
   * The color for deleted text, specified as an InCopy UI color. Note: Valid only when deleted text color choice is change uses change pref color. Can return: Array of 3 Reals (0 - 255) or InCopyUIColors enumerator.
   * @type {Mixed}
   */
  textColorForDeletedText: undefined,
  
  /*
   * The background color for deleted text, specified as an InCopy UI color. Note: Valid only when deleted background color choice is change background uses change pref color. Can return: Array of 3 Reals (0 - 255) or InCopyUIColors enumerator.
   * @type {Mixed}
   */
  backgroundColorForDeletedText: undefined,
  
  /*
   * The color for moved text, specified as an InCopy UI color. Note: Valid only when moved text color choice is change uses change pref color. Can return: Array of 3 Reals (0 - 255) or InCopyUIColors enumerator.
   * @type {Mixed}
   */
  textColorForMovedText: undefined,
  
  /*
   * The background color for moved text, specified as an InCopy UI color. Note: Valid only when moved background color choice is change background uses change pref color. Can return: Array of 3 Reals (0 - 255) or InCopyUIColors enumerator.
   * @type {Mixed}
   */
  backgroundColorForMovedText: undefined,
  
  /*
   * The marking that identifies added text.
   * @type {ChangeMarkings}
   */
  markingForAddedText: undefined,
  
  /*
   * The marking that identifies deleted text.
   * @type {ChangeMarkings}
   */
  markingForDeletedText: undefined,
  
  /*
   * The marking that identifies moved text.
   * @type {ChangeMarkings}
   */
  markingForMovedText: undefined,
  
  /*
   * The change bar location.
   * @type {ChangebarLocations}
   */
  locationForChangeBar: undefined,
  
  /*
   * The color option for added text.
   * @type {ChangeTextColorChoices}
   */
  addedTextColorChoice: undefined,
  
  /*
   * The background color option for added text.
   * @type {ChangeBackgroundColorChoices}
   */
  addedBackgroundColorChoice: undefined,
  
  /*
   * The color option for deleted text.
   * @type {ChangeTextColorChoices}
   */
  deletedTextColorChoice: undefined,
  
  /*
   * The background color option for deleted text.
   * @type {ChangeBackgroundColorChoices}
   */
  deletedBackgroundColorChoice: undefined,
  
  /*
   * The color option for moved text.
   * @type {ChangeTextColorChoices}
   */
  movedTextColorChoice: undefined,
  
  /*
   * The background color option for moved text.
   * @type {ChangeBackgroundColorChoices}
   */
  movedBackgroundColorChoice: undefined,
  
  /*
   * If true, prevent duplicate user color for tracked changes background color.
   * @type {Boolean}
   */
  preventDuplicateColor: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the TrackChangesPreference.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {TrackChangesPreference}
   */
  getElements: function() {
    return new TrackChangesPreference();
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
