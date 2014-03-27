/*
 * The Adobe Illustrator application.
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
   * The application's name.
   * @type {String}
   */
  name: undefined,
  
  /*
   * Path specification for the application.
   * @type {File}
   */
  path: undefined,
  
  /*
   * The active document.
   * @type {Document}
   */
  activeDocument: undefined,
  
  /*
   * The version of the Adobe Illustrator application.
   * @type {String}
   */
  version: undefined,
  
  /*
   * The build number of the Adobe Illustrator application.
   * @type {String}
   */
  buildNumber: undefined,
  
  /*
   * The Locale of the Adobe Illustrator application.
   * @type {String}
   */
  locale: undefined,
  
  /*
   * The version of the Scripting plugin.
   * @type {String}
   */
  scriptingVersion: undefined,
  
  /*
   * The amount of unused memory within the Adobe Illustrator partition.
   * @type {Int32}
   */
  freeMemory: undefined,
  
  /*
   * Is a web browser available?
   * @type {Boolean}
   */
  browserAvailable: undefined,
  
  /*
   * The selection visible to the user.
   * @type {any}
   */
  selection: undefined,
  
  /*
   * Is the application visible.
   * @type {Boolean}
   */
  visible: undefined,
  
  /*
   * What level of interaction with the user should be allowed when handling script commands.
   * @type {UserInteractionLevel}
   */
  userInteractionLevel: undefined,
  
  /*
   * Coordinate System used by script.
   * @type {CoordinateSystem}
   */
  coordinateSystem: undefined,
  
  /*
   * Preferences for Illustrator.
   * @type {Preferences}
   */
  preferences: undefined,
  
  /*
   * The list of installed printers.
   * @type {Printer}
   */
  printerList: undefined,
  
  /*
   * The list of PPD files currently available for use. For performance reasons, the PPDFile entry only contains the model name and file spec of each PPD file.
   * @type {PPDFile}
   */
  PPDFileList: undefined,
  
  /*
   * The list of print preset names currently available for use.
   * @type {String}
   */
  printPresetsList: undefined,
  
  /*
   * The list of presets available for creating a new document.
   * @type {String}
   */
  startupPresetsList: undefined,
  
  /*
   * The list of PDF preset names currently available for use.
   * @type {String}
   */
  PDFPresetsList: undefined,
  
  /*
   * The list of flattener style names currently available for use.
   * @type {String}
   */
  flattenerPresetsList: undefined,
  
  /*
   * The list of tracing preset names currently available for use.
   * @type {String}
   */
  tracingPresetsList: undefined,
  
  /*
   * The list of color settings files currently available for use.
   * @type {File}
   */
  colorSettingsList: undefined,
  
  /*
   * The default color settings file for the current application locale.
   * @type {File}
   */
  defaultColorSettings: undefined,
  
  /*
   * Does paste operation remember layers structure?
   * @type {Boolean}
   */
  pasteRemembersLayers: undefined,
  
  /*
   * The open documents.
   * @type {Documents}
   */
  documents: undefined,
  
  /*
   * Installed fonts.
   * @type {TextFonts}
   */
  textFonts: undefined,
  
  /*
   * Runs API Tests from the TestAPI Plug-in.
 *
   * @param {String} testName Arguments for Running Tests - eg. Name of Test/Suite.
   */
  runAPITest: function(testName) {
  },
  
  /*
   * Loads the aat model to the editor.
   * @returns {String}
   */
  aATLoadModel: function() {
    return new String();
  },
  
  /*
   * Loads a UI description as an extension to the editor.
   * @returns {String}
   */
  aATLoadUIExtension: function() {
    return new String();
  },
  
  /*
   * Loads a session file as an extension to the editor.
   * @returns {String}
   */
  aATLoadLibExtension: function() {
    return new String();
  },
  
  /*
   * Executes the active session in the sequencer.
   */
  aATExecuteSession: function() {
  },
  
  /*
   * Executes the active session in the sequencer.
 *
   * @param {File} file Execute a session file.
   */
  aATExecuteSessionFromFile: function(file) {
  },
  
  /*
   * Retrieves a file path to the AAT editor swf.
   * @returns {File}
   */
  aATGetEditorDialogFile: function() {
    return new File();
  },
  
  /*
   * Retrieves a string representing the AAT version.
   * @returns {String}
   */
  getVersionString: function() {
    return new String();
  },
  
  /*
   * Retrieves a file path to the AAT error dialog swf.
   * @returns {File}
   */
  aATGetErrorDialogFile: function() {
    return new File();
  },
  
  /*
   * Retrieves a boolean indicating the presence of errors in the last script to execute.
   * @returns {Boolean}
   */
  aATErrorsExist: function() {
    return new Boolean();
  },
  
  /*
   * Retrieves a string containing the results of the last script to execute.
   * @returns {String}
   */
  getExecutionOutput: function() {
    return new String();
  },
  
  /*
   * Clear the sequencer.
   * @returns {String}
   */
  aATClear: function() {
    return new String();
  },
  
  /*
   * Get the active session for the sequncer.
   * @returns {String}
   */
  aATGetSession: function() {
    return new String();
  },
  
  /*
   * Saves the active session in the sequencer to a file.
   * @returns {String}
   */
  aATSaveSession: function() {
    return new String();
  },
  
  /*
   * Saves the active session in the sequencer to a new file.
   * @returns {String}
   */
  aATSaveAsSession: function() {
    return new String();
  },
  
  /*
   * Loads a session into the sequencer.
   * @returns {String}
   */
  aATLoadSessionFile: function() {
    return new String();
  },
  
  /*
   * Add the specified to the sequencer.
 *
   * @param {Int32} sessionIndex The index in the session of the top-most sequence for the item to add.
   * @param {Int32} destinationSequenceID The UID for the owning sequence.
   * @param {Int32} destinationIndex The item UID where to insert.
   * @param {String} srcItemIDData The item ID of the item to construct.
   * @param {String} type The source of the item to construct.
   * @returns {String}
   */
  aATAddItem: function(sessionIndex, destinationSequenceID, destinationIndex, srcItemIDData, type) {
    return new String();
  },
  
  /*
   * Moves the specified in the sequencer.
 *
   * @param {Int32} sessionIndex The index in the session of the top-most sequence for the item to move.
   * @param {String} moveThisID The UID of the item to replace.
   * @param {Int32} newSessionIndex The index in the session of the destination top-most sequence.
   * @param {String} destinationSequenceID The UID for the owning sequence.
   * @param {Int32} destinationIndex The index where to insert.
   * @returns {String}
   */
  aATMoveItem: function(sessionIndex, moveThisID, newSessionIndex, destinationSequenceID, destinationIndex) {
    return new String();
  },
  
  /*
   * Replaces the specified to the sequencer.
 *
   * @param {Int32} sessionIndex The index in the session of the top-most sequence for the item to add.
   * @param {Int32} replaceThisID The UID of the item to replace.
   * @param {String} srcItemIDData The item ID of the item to construct.
   * @param {String} type The source of the item to construct.
   * @returns {String}
   */
  aATReplaceItem: function(sessionIndex, replaceThisID, srcItemIDData, type) {
    return new String();
  },
  
  /*
   * Removes the specified item from the sequencer.
 *
   * @param {Int32} sessionIndex The index in the session of the top-most sequence for the item to add.
   * @param {String} item The item UID.
   * @returns {String}
   */
  aATRemoveItem: function(sessionIndex, item) {
    return new String();
  },
  
  /*
   * Duplicates the specified item(s) from the sequencer.
 *
   * @param {Int32} sessionIndex The index in the session of the top-most sequence for the item to add.
   * @param {String} item The item UID(s)
   * @returns {String}
   */
  aATDuplicateItem: function(sessionIndex, item) {
    return new String();
  },
  
  /*
   * Opens the specified item from the sequencer in the item editor.
 *
   * @param {Int32} sessionIndex The index in the session of the top-most sequence for the item to add.
   * @param {String} item The item UID.
   * @returns {String}
   */
  aATEditItem: function(sessionIndex, item) {
    return new String();
  },
  
  /*
   * Applies the data used in the item editor to the item.
 *
   * @param {Int32} sessionIndex The index in the session of the top-most sequence for the item to edit.
   * @param {String} item The item UID.
   * @param {String} data The data to apply in XML format.
   * @returns {String}
   */
  applyDataToItem: function(sessionIndex, item, data) {
    return new String();
  },
  
  /*
   * Applies data to the specified item from the sequencer in the item editor.
 *
   * @param {Int32} sessionIndex The index in the session of the top-most sequence for the item to add.
   * @param {String} item The item UID.
   * @param {String} dataID The data to apply in XML format.
   * @param {String} data The data to apply in XML format.
   * @returns {Boolean}
   */
  applySingleDataPointToItem: function(sessionIndex, item, dataID, data) {
    return new Boolean();
  },
  
  /*
   * Returns a string translated from the key and source data passed in.
 *
   * @param {String} key The string to translate.
   * @param {String} source The plugin name from the source of the key.
   * @returns {String}
   */
  translateString: function(key, source) {
    return new String();
  },
  
  /*
   * Prompts the user to save a file or choose a file or directory and returns a relative path string to the file.
 *
   * @param {String} path The path relative to the folder specified by Relative.
   * @param {String} relative The current relative path token.
   * @param {String} type The type of dialog to show in string format.
   * @returns {String}
   */
  aATFileSaveDialog: function(path, relative, type) {
    return new String();
  },
  
  /*
   * Switches a files relative token and path.
 *
   * @param {String} path The path relative to the folder specified by Relative.
   * @param {String} relative The current relative path token.
   * @param {String} newRelative The new relative path token.
   * @returns {String}
   */
  aATFileRelativeChanged: function(path, relative, newRelative) {
    return new String();
  },
  
  /*
   * Gets an XML string listing the relative paths and the UI strings to display them.
   * @returns {String}
   */
  aATGetListOfRelativePaths: function() {
    return new String();
  },
  
  /*
   * Cut current selection to the clipboard.
   */
  cut: function() {
  },
  
  /*
   * Copy current selection to the clipboard.
   */
  copy: function() {
  },
  
  /*
   * Paste clipboard into the current document.
   */
  paste: function() {
  },
  
  /*
   * Undo the last transaction.
   */
  undo: function() {
  },
  
  /*
   * Redo the last transaction.
   */
  redo: function() {
  },
  
  /*
   * Play an action from the Actions Palette.
 *
   * @param {String} action The name of the action to play (note that the case of letters in the Action name is important and must match the case of the name in the Actions palette)
   * @param {String} from The name of the action set containing the action being played (note that the case of letters in the Action Set name is important and must match the case of the name in the Actions palette)
   * @param {Boolean} [dialogs] Are dialog boxes associated with the action to be presented?
   */
  doScript: function(action, from, dialogs) {
  },
  
  /*
   * Executes a menu command using the menu shortcut string.
 *
   * @param {String} menuCommandString Menu command shortcut.
   */
  executeMenuCommand: function(menuCommandString) {
  },
  
  /*
   * Given a preset type, returns the full path to the application's default document profile for the type.
 *
   * @param {DocumentPresetType} presetType The preset type.
   * @returns {File}
   */
  getPresetFileOfType: function(presetType) {
    return new File();
  },
  
  /*
   * Load an action into action palette.
 *
   * @param {File} actionFilePath The path on the system of the action file to be loaded.
   */
  loadAction: function(actionFilePath) {
  },
  
  /*
   * Unloads an action into action palette.
 *
   * @param {String} setName Name of the set to be unloaded.
   * @param {String} actionName Name of the action to be unloaded.
   */
  unloadAction: function(setName, actionName) {
  },
  
  /*
   * Sends the script message to the required plugin.
 *
   * @param {String} pluginName Plugin to which message needs to be sent.
   * @param {String} messageSelector Functionality that is to be executed.
   * @param {String} inputString Pass any data encoded in a string.
   * @returns {String}
   */
  sendScriptMessage: function(pluginName, messageSelector, inputString) {
    return new String();
  },
  
  /*
   * Given a preset name, tries and retrieves the settings from the preset template.
 *
   * @param {String} preset The name of the preset.
   * @returns {DocumentPreset}
   */
  getPresetSettings: function(preset) {
    return new DocumentPreset();
  },
  
  /*
   * Force Illustrator to redraw its window(s)
   */
  redraw: function() {
  },
  
  /*
   * Invert a matrix.
 *
   * @param {Matrix} matrix The matrix to invert.
   * @returns {Matrix}
   */
  invertMatrix: function(matrix) {
    return new Matrix();
  },
  
  /*
   * Tests if a matrix is singular (cannot be inverted)
 *
   * @param {Matrix} matrix The matrix to check.
   * @returns {Boolean}
   */
  isSingularMatrix: function(matrix) {
    return new Boolean();
  },
  
  /*
   * Concatenate a translation to a transformation matrix.
 *
   * @param {Matrix} matrix The matrix that is to be added to.
   * @param {Number} [deltaX] Horizontal transformation.
   * @param {Number} [deltaY] Vertical transformation.
   * @returns {Matrix}
   */
  concatenateTranslationMatrix: function(matrix, deltaX, deltaY) {
    return new Matrix();
  },
  
  /*
   * Concatenate a scale matrix to a transformation matrix.
 *
   * @param {Matrix} matrix The matrix that is to be added to.
   * @param {Number} [scaleX] Horizontal scaling factor expressed as a percentage (100 = 100%)
   * @param {Number} [scaleY] Vertical scaling factor expressed as a percentage (100 = 100%)
   * @returns {Matrix}
   */
  concatenateScaleMatrix: function(matrix, scaleX, scaleY) {
    return new Matrix();
  },
  
  /*
   * Concatenate a rotation matrix to a transformation matrix.
 *
   * @param {Matrix} matrix The matrix that is to be added to.
   * @param {Number} angle Angle of rotation (in degrees)
   * @returns {Matrix}
   */
  concatenateRotationMatrix: function(matrix, angle) {
    return new Matrix();
  },
  
  /*
   * Concatenate two transformation matrices.
 *
   * @param {Matrix} matrix The matrix that is to be added to.
   * @param {Matrix} secondMatrix Second transformation matrix.
   * @returns {Matrix}
   */
  concatenateMatrix: function(matrix, secondMatrix) {
    return new Matrix();
  },
  
  /*
   * Compares two matrices for equality.
 *
   * @param {Matrix} matrix First transformation matrix to compare.
   * @param {Matrix} secondMatrix Second transformation matrix.
   * @returns {Boolean}
   */
  isEqualMatrix: function(matrix, secondMatrix) {
    return new Boolean();
  },
  
  /*
   * Returns an identity matrix.
   * @returns {Matrix}
   */
  getIdentityMatrix: function() {
    return new Matrix();
  },
  
  /*
   * Returns a rotation transformation matrix.
 *
   * @param {Number} [angle] Angle of rotation (in degrees)
   * @returns {Matrix}
   */
  getRotationMatrix: function(angle) {
    return new Matrix();
  },
  
  /*
   * Returns a scale transformation matrix.
 *
   * @param {Number} [scaleX] Horizontal scaling factor expressed as a percentage (100 = 100%)
   * @param {Number} [scaleY] Vertical scaling factor expressed as a percentage (100 = 100%)
   * @returns {Matrix}
   */
  getScaleMatrix: function(scaleX, scaleY) {
    return new Matrix();
  },
  
  /*
   * Returns a translation matrix.
 *
   * @param {Number} [deltaX] Horizontal transformation.
   * @param {Number} [deltaY] Vertical transformation.
   * @returns {Matrix}
   */
  getTranslationMatrix: function(deltaX, deltaY) {
    return new Matrix();
  },
  
  /*
   * Open the specified document file.
 *
   * @param {File} file The file to be opened.
   * @param {DocumentColorSpace} [documentColorSpace] Choose color space only for documents saved with multiple color models (pre-Illustrator 9)
   * @param {any} [options] Options for opening a particular type of file.
   * @returns {Document}
   */
  open: function(file, documentColorSpace, options) {
    return new Document();
  },
  
  /*
   * Dump the PGF portion of ai file to txt file.
 *
   * @param {File} file The AI file to be opened.
   * @param {DocumentColorSpace} [documentColorSpace] Choose color space only for documents saved with multiple color models (pre-Illustrator 9)
   * @param {File} pGFFile Folder to save the output PGF file.
   * @returns {Boolean}
   */
  dumpPGFFile: function(file, documentColorSpace, pGFFile) {
    return new Boolean();
  },
  
  /*
   * Quit the application.
   */
  quit: function() {
  },
  
  /*
   * undefined
   */
  beep: function() {
  },
  
  /*
   * Translate the placeholder text to regular text. A method to enter unicode points in hex values.
 *
   * @param {String} text The placeholder text to be translated.
   * @returns {String}
   */
  translatePlaceholderText: function(text) {
    return new String();
  },
  
  /*
   * Get presets from the file.
 *
   * @param {File} fileSpec File spec to import from.
   * @returns {String}
   */
  showPresets: function(fileSpec) {
    return new String();
  },
  
  /*
   * Load the color settings from the file. If the file is an empty file spec, the color management will be turned off.
 *
   * @param {File} fileSpec File spec for the color settings.
   */
  loadColorSettings: function(fileSpec) {
  },
  
  /*
   * Get detailed info from the specified PPD file.
 *
   * @param {String} name The model name of the PPD file.
   * @returns {PPDFileInfo}
   */
  getPPDFileInfo: function(name) {
    return new PPDFileInfo();
  },
  
  /*
   * Get the scriptable help group object that represents the search widget in the app bar.
   * @returns {any}
   */
  getScriptableHelpGroup: function() {
    return new any();
  },
  
  /*
   * Converts a sample-component color from one color space to another.
 *
   * @param {ImageColorSpace} sourceColorSpace The source color space.
   * @param {Number} sourceColor The color to convert, an array of color components. First location of the array should contain alpha if source-has-alpha is true.
   * @param {ImageColorSpace} destColorSpace The destination color space.
   * @param {ColorConvertPurpose} colorConvertPurpose The parameter which passes the purpose of conversion.
   * @param {Boolean} [sourceHasAlpha] True if alpha channel is present in source color.
   * @param {Boolean} [destHasAlpha] True if alpha channel is present in destination color.
   * @returns {Number}
   */
  convertSampleColor: function(sourceColorSpace, sourceColor, destColorSpace, colorConvertPurpose, sourceHasAlpha, destHasAlpha) {
    return new Number();
  },
  
  /*
   * Generate Creative Suite ActionScript Wrappers in specified directory.
 *
   * @param {File} outputFolder Location for the output files.
   */
  reflectCSAW: function(outputFolder) {
  },
  
  /*
   * Switches between workspaces.
 *
   * @param {String} workspaceName Workspace Name.
   * @returns {Boolean}
   */
  switchWorkspace: function(workspaceName) {
    return new Boolean();
  },
  
  /*
   * Deletes an existing workspace.
 *
   * @param {String} workspaceName Workspace Name.
   * @returns {Boolean}
   */
  deleteWorkspace: function(workspaceName) {
    return new Boolean();
  },
  
  /*
   * Saves a new workspace.
 *
   * @param {String} workspaceName Workspace Name.
   * @returns {Boolean}
   */
  saveWorkspace: function(workspaceName) {
    return new Boolean();
  },
  
  /*
   * Resets the current workspace.
   * @returns {Boolean}
   */
  resetWorkspace: function() {
    return new Boolean();
  },
  
};
