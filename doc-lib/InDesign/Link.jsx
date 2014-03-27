/*
 * A link to a placed file.
 */
var Link = {
  /*
   * Dispatched after a Link is created. This event bubbles. This event is not cancelable.
   * @type {String}
   */
  AFTER_NEW: undefined,
  
  /*
   * Dispatched before a Link is deleted. This event bubbles. This event is cancelable.
   * @type {String}
   */
  BEFORE_DELETE: undefined,
  
  /*
   * Dispatched after a Link is deleted. This event bubbles. This event is not cancelable.
   * @type {String}
   */
  AFTER_DELETE: undefined,
  
  /*
   * Dispatched before a Link is updated. This event bubbles. This event is cancelable.
   * @type {String}
   */
  BEFORE_UPDATE: undefined,
  
  /*
   * Dispatched after a Link is updated. This event bubbles. This event is not cancelable.
   * @type {String}
   */
  AFTER_UPDATE: undefined,
  
  /*
   * Dispatched before a Link is embedded. This event bubbles. This event is cancelable.
   * @type {String}
   */
  BEFORE_EMBED: undefined,
  
  /*
   * Dispatched after a Link is embedded. This event bubbles. This event is not cancelable.
   * @type {String}
   */
  AFTER_EMBED: undefined,
  
  /*
   * Dispatched before a Link is unembedded. This event bubbles. This event is cancelable.
   * @type {String}
   */
  BEFORE_UNEMBED: undefined,
  
  /*
   * Dispatched after a Link is unembedded. This event bubbles. This event is not cancelable.
   * @type {String}
   */
  AFTER_UNEMBED: undefined,
  
  /*
   * Dispatched before a Link is relocated from one object to another. This event bubbles. This event is cancelable.
   * @type {String}
   */
  BEFORE_MOVE: undefined,
  
  /*
   * Dispatched after a Link is relocated from one object to another. This event bubbles. This event is not cancelable.
   * @type {String}
   */
  AFTER_MOVE: undefined,
  
  /*
   * Dispatched when the value of a property changes on this Link. This event bubbles. This event is not cancelable.
   * @type {String}
   */
  AFTER_ATTRIBUTE_CHANGED: undefined,
  
  /*
   * The Version Cue version state of the file.
   * @type {VersionState}
   */
  versionState: undefined,
  
  /*
   * The Version Cue editing state of the file.
   * @type {EditingState}
   */
  editingState: undefined,
  
  /*
   * XMP data for the link source file.
   * @type {LinkMetadata}
   */
  linkXmp: undefined,
  
  /*
   * The index of the link in the links collection.
   * @type {Number}
   */
  index: undefined,
  
  /*
   * The linked object. Can return: Story, Graphic, Movie or Sound.
   * @type {Mixed}
   */
  parent: undefined,
  
  /*
   * The asset URL of the linked object.
   * @type {String}
   */
  assetURL: undefined,
  
  /*
   * The asset ID of the linked object.
   * @type {String}
   */
  assetID: undefined,
  
  /*
   * If true, indicates the linked object has been edited in the current document but the source file has not been updated.
   * @type {Boolean}
   */
  edited: undefined,
  
  /*
   * The name of the Link.
   * @type {String}
   */
  name: undefined,
  
  /*
   * If true, indicates a link to a full-resolution version of the source file is needed. If false, indicates the object is embedded.
   * @type {Boolean}
   */
  needed: undefined,
  
  /*
   * The status of the link.
   * @type {LinkStatus}
   */
  status: undefined,
  
  /*
   * The file type of the linked object.
   * @type {String}
   */
  linkType: undefined,
  
  /*
   * The date and time the Link was created.
   * @type {Date}
   */
  date: undefined,
  
  /*
   * The size of the Link file.
   * @type {Number}
   */
  size: undefined,
  
  /*
   * The file path (colon delimited on the Mac OS). Can also accept: File.
   * @type {String}
   */
  filePath: undefined,
  
  /*
   * The unique ID of the Link.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
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
   * A collection of preferences objects.
   * @type {Preferences}
   */
  preferences: undefined,
  
  /*
   * A collection of links.
   * @type {Links}
   */
  links: undefined,
  
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
   * Check in to Version Cue.
 *
   * @param {String} [versionComments] The comment for this version 
   * @param {Boolean} [forceSave] Forcibly save a version 
   */
  checkIn: function(versionComments, forceSave) {
  },
  
  /*
   * Points the link to a new source file.
 *
   * @param {Mixed} to The full path name of the new source file. Can accept: File or String.
   */
  relink: function(to) {
  },
  
  /*
   * Embeds the source file in the document.
   */
  unlink: function() {
  },
  
  /*
   * Updates the link if the source file has been changed.
   * @returns {Link}
   */
  update: function() {
    return new Link();
  },
  
  /*
   * Unembeds the source file. If no folder is specified, creates a link to the original source file; if a folder is specified, copies the file to the folder and creates a link to the copied file.
 *
   * @param {File} [to] The folder to which to copy the unembedded file. 
   * @param {String} [versionComments] The comment for this version. 
   * @param {Boolean} [forceSave] If true, forcibly saves a version. 
   */
  unembed: function(to, versionComments, forceSave) {
  },
  
  /*
   * Opens the source file of the link in the default editor for the source file type.
   */
  editOriginal: function() {
  },
  
  /*
   * Selects the link.
   */
  show: function() {
  },
  
  /*
   * Opens the file system to the folder that contains the source file of the link, and selects the file.
   */
  revealInSystem: function() {
  },
  
  /*
   * Opens Adobe Bridge and selects the source file of the link.
   */
  revealInBridge: function() {
  },
  
  /*
   * Copies the link file to the specified location.
 *
   * @param {File} to The file or folder to which to copy the file.
   * @param {String} [versionComments] The comment for this version. 
   * @param {Boolean} [forceSave] If true, forcibly saves a version. 
   */
  copyLink: function(to, versionComments, forceSave) {
  },
  
  /*
   * Opens the source file of the link in InDesign for SharedContent links.
   */
  goToSource: function() {
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
   * Generates a string which, if executed, will return the Link.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {Link}
   */
  getElements: function() {
    return new Link();
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
