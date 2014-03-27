/*
 * Sync preferences.
 */
var SyncPreference = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the SyncPreference (a Application).
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
   * If true, Sync settings feature is enabled
   * @type {Boolean}
   */
  syncSettingsEnabled: undefined,
  
  /*
   * If true, Workspaces are allowed to be synced
   * @type {Boolean}
   */
  workspaceSyncEnabled: undefined,
  
  /*
   * If true, PDF Presets are allowed to be synced
   * @type {Boolean}
   */
  pdfPresetsSyncEnabled: undefined,
  
  /*
   * If true, Keyboard Shortcuts are allowed to be synced
   * @type {Boolean}
   */
  keyboardShortcutsSyncEnabled: undefined,
  
  /*
   * If true, Glyphs are allowed to be synced
   * @type {Boolean}
   */
  glyphsSyncEnabled: undefined,
  
  /*
   * If true, Customized Menus are allowed to be synced
   * @type {Boolean}
   */
  customizedMenusSyncEnabled: undefined,
  
  /*
   * Which setting to be used in case of conflict between server and local machinre
   * @type {ConflictResolutionChoiceEnum}
   */
  conflictResolutionChoice: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the SyncPreference.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {SyncPreference}
   */
  getElements: function() {
    return new SyncPreference();
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
