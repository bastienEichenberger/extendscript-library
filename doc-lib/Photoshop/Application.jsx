/*
 * The Adobe Photoshop application object.
 */
var Application = {
  /*
   * The object's container.
   * @type {Object}
   */
  parent: undefined,
  
  /*
   * The class name of the object.
   * @type {String}
   */
  typename: undefined,
  
  /*
   * The name of the selected color setting's set.
   * @type {any}
   */
  colorSettings: undefined,
  
  /*
   * The frontmost document.
   * @type {Document}
   */
  activeDocument: undefined,
  
  /*
   * The application name.
   * @type {String}
   */
  name: undefined,
  
  /*
   * The full path of the location of the Adobe Photoshop application.
   * @type {Folder}
   */
  path: undefined,
  
  /*
   * The application preference settings (equivalent to selecting Edit&gt;Preferences in the Adobe Photoshop application in Windows or Photoshop&gt;Preferences in Mac OS).
   * @type {Preferences}
   */
  preferences: undefined,
  
  /*
   * The version of the Scripting interface.
   * @type {String}
   */
  scriptingVersion: undefined,
  
  /*
   * The amount of unused memory available to Photoshop.
   * @type {Number}
   */
  freeMemory: undefined,
  
  /*
   * The version of Adobe Photoshop application that you are running.
   * @type {String}
   */
  version: undefined,
  
  /*
   * The dialog mode for the document, which indicates whether or not Photoshop displays dialogs when the script runs.
   * @type {DialogModes}
   */
  displayDialogs: undefined,
  
  /*
   * The default foreground color (used to paint, fill, and stroke selections).
   * @type {SolidColor}
   */
  foregroundColor: undefined,
  
  /*
   * The default background color (used to paint, fill, and stroke selections).
   * @type {SolidColor}
   */
  backgroundColor: undefined,
  
  /*
   * The playback options, which indicate the speed at which Photoshop plays actions.
   * @type {ActionDescriptor}
   */
  playbackParameters: undefined,
  
  /*
   * The dialog mode for playback mode, which indicates whether or not Photoshop displays dialogs in playback mode.
   * @type {DialogModes}
   */
  playbackDisplayDialogs: undefined,
  
  /*
   * If true, notifiers are enabled.
   * @type {Boolean}
   */
  notifiersEnabled: undefined,
  
  /*
   * A list of the image file extensions Photoshop can open.
   * @type {String}
   */
  windowsFileTypes: undefined,
  
  /*
   * A list of the image file types Photoshop can open.
   * @type {String}
   */
  macintoshFileTypes: undefined,
  
  /*
   * The full path to the preferences folder.
   * @type {File}
   */
  preferencesFolder: undefined,
  
  /*
   * The language locale of the application.
   * @type {String}
   */
  locale: undefined,
  
  /*
   * The collection of open documents.
   * @type {Documents}
   */
  documents: undefined,
  
  /*
   * The fonts installed on this system.
   * @type {TextFonts}
   */
  fonts: undefined,
  
  /*
   * The notifiers currently configured (in the Scripts Events Manager menu in the application).
   * @type {Notifiers}
   */
  notifiers: undefined,
  
  /*
   * The build date of the scripting interface.
   * @type {String}
   */
  scriptingBuildDate: undefined,
  
  /*
   * Files in the Recent Files list.
   * @type {FileArray}
   */
  recentFiles: undefined,
  
  /*
   * The build number.
   * @type {String}
   */
  build: undefined,
  
  /*
   * The system and applicaiton information.
   * @type {String}
   */
  systemInformation: undefined,
  
  /*
   * The log of measurements taken.
   * @type {MeasurementLog}
   */
  measurementLog: undefined,
  
  /*
   * Toggle palette visibility.
   */
  togglePalettes: function() {
  },
  
  /*
   * Plays the specified action from the Actions palette.
 *
   * @param {String} action The name of the action to play. (Note that the action name is case-sensitive and must match the name as it appears in the Actions palette.)
   * @param {String} from The name of the action set containing the action being played. (Note that the Action Set name is case-sensitive and must match the name as it appears in the Actions palette.)
   */
  doAction: function(action, from) {
  },
  
  /*
   * Loads a support document.
 *
   * @param {File} document The document to load.
   */
  load: function(document) {
  },
  
  /*
   * Opens the specified document file(s).
 *
   * @param {File} document The document(s) to opend.
   * @param {any} [as] The document type (The default is to let Photoshop deduce the format).
   * @param {Boolean} [asSmartObject] Creates a smart object around the document.
   * @returns {Document}
   */
  open: function(document, as, asSmartObject) {
    return new Document();
  },
  
  /*
   * Purges one or more caches.
 *
   * @param {PurgeTarget} target The caches to purge.
   */
  purge: function(target) {
  },
  
  /*
   * Deprecated for Adobe Photoshop CS3. Creates a web photo gallery.
 *
   * @param {any} inputFolder Folder to process or an array of files to process.
   * @param {File} outputFolder Location for output files.
   * @param {GalleryOptions} [options] Options for the web photo gallery.
   * @returns {String}
   */
  makePhotoGallery: function(inputFolder, outputFolder, options) {
    return new String();
  },
  
  /*
   * Creates a PDF presentation file.
 *
   * @param {AliasArray} inputFiles The input files to include in the presentation.
   * @param {File} outputFile The location of the output file.
   * @param {PresentationOptions} [options] Options for the PDF presentation.
   * @returns {String}
   */
  makePDFPresentation: function(inputFiles, outputFile, options) {
    return new String();
  },
  
  /*
   * Deprecated for Adobe Photoshop CS3. Merges multiple files into one, user interaction required.
 *
   * @param {AliasArray} inputFiles List of input files to include.
   * @returns {String}
   */
  makePhotomerge: function(inputFiles) {
    return new String();
  },
  
  /*
   * Creates a contact sheet from multiple files.
 *
   * @param {AliasArray} inputFiles The files to include.
   * @param {ContactSheetOptions} [options] Options for creating the contact sheet.
   * @returns {String}
   */
  makeContactSheet: function(inputFiles, options) {
    return new String();
  },
  
  /*
   * Creates a picture package from multiple files.
 *
   * @param {AliasArray} inputFiles The files to include.
   * @param {PicturePackageOptions} [options] Options for creating a Picture Package.
   * @returns {String}
   */
  makePicturePackage: function(inputFiles, options) {
    return new String();
  },
  
  /*
   * Runs the batch automation routine; analogous to using the Batch command in Photoshop.
 *
   * @param {AliasArray} inputFiles The files to operate on.
   * @param {String} action The name of the action to play (note that the Action name is case-sensitive and must match the name in the Actions palette).
   * @param {String} from The name of the action set containing the action being played (note that the Action Set name is case-sensitive and must match the name in the Actions palette).
   * @param {BatchOptions} [options] Options for batch automation.
   * @returns {String}
   */
  batch: function(inputFiles, action, from, options) {
    return new String();
  },
  
  /*
   * Makes Photoshop the active application.
   */
  bringToFront: function() {
  },
  
  /*
   * Pauses the script until the application refreshes.
   */
  refresh: function() {
  },
  
  /*
   * Saves user objects in the Photoshop registry.
 *
   * @param {String} key The unique string ID for the user object.
   * @param {ActionDescriptor} customObject The user-defined custom object to save in the registry.
   * @param {Boolean} [persistent] If true, the object persists after the script has finished.
   */
  putCustomOptions: function(key, customObject, persistent) {
  },
  
  /*
   * Retrieves user objects from the Photoshop registry for the ID with value key.
 *
   * @param {String} key The unique string ID for the user object.
   * @returns {ActionDescriptor}
   */
  getCustomOptions: function(key) {
    return new ActionDescriptor();
  },
  
  /*
   * Removes the specified user objects from the Photoshop registry.
 *
   * @param {String} key The unique string ID for user object(s) to remove.
   */
  eraseCustomOptions: function(key) {
  },
  
  /*
   * If true, the specified feature is enabled.
 *
   * @param {String} name The name of the feature.
   * @returns {Boolean}
   */
  featureEnabled: function(name) {
    return new Boolean();
  },
  
  /*
   * Uses the Photoshop open dialog to select files.
   * @returns {FileArray}
   */
  openDialog: function() {
    return new FileArray();
  },
  
  /*
   * Run a menu item with the given ID. Use this for Insert Menu Item.
   * @returns {int}
   */
  runMenuItem: function() {
    return new int();
  },
  
  /*
   * Plays an ActionManager event.
 *
   * @param {int} eventID The event to play.
   * @param {ActionDescriptor} [descriptor] The action descriptor to play.
   * @param {DialogModes} [displayDialogs] The display permissions for dialogs and alert messages.
   * @returns {ActionDescriptor}
   */
  executeAction: function(eventID, descriptor, displayDialogs) {
    return new ActionDescriptor();
  },
  
  /*
   * Obtains an action descriptor.
 *
   * @param {ActionReference} reference The reference specification of the property.
   * @returns {ActionDescriptor}
   */
  executeActionGet: function(reference) {
    return new ActionDescriptor();
  },
  
  /*
   * Converts from a string ID to a runtime ID.
 *
   * @param {String} stringID The ID to convert.
   * @returns {int}
   */
  stringIDToTypeID: function(stringID) {
    return new int();
  },
  
  /*
   * Converts from a runtime ID to a string ID.
 *
   * @param {int} typeID The ID to convert.
   * @returns {String}
   */
  typeIDToStringID: function(typeID) {
    return new String();
  },
  
  /*
   * Converts from a four character code to a runtime ID.
 *
   * @param {String} charID The ID to convert.
   * @returns {int}
   */
  charIDToTypeID: function(charID) {
    return new int();
  },
  
  /*
   * Converts from a runtime ID to a character ID.
 *
   * @param {int} typeID The ID to convert.
   * @returns {String}
   */
  typeIDToCharID: function(typeID) {
    return new String();
  },
  
  /*
   * Alerts the user.
   */
  beep: function() {
  },
  
};
