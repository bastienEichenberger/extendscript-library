/*
 * Creates and returns a new Folder object referring to a given file-system location.
 * @constructor
   *
 * @param {String} [path] The absolute or relative path to the folder associated with this object, specified in URI format.
 */
function Folder(path) {
  /*
   * The name of the current file system.
   * @type {String}
   */
  this.fs = undefined;
  
  /*
   * A Folder object for the current folder.
   * @type {Folder}
   */
  this.current = undefined;
  
  /*
   * A Folder object for the folder containing the executable image of the running application.
   * @type {Folder}
   */
  this.startup = undefined;
  
  /*
   * In Mac OS, a Folder object for the folder containing the bundle of the running application.
   * @type {Folder}
   */
  this.appPackage = undefined;
  
  /*
   * A Folder object for the folder containing the operating system files.
   * @type {Folder}
   */
  this.system = undefined;
  
  /*
   * A Folder object for the folder containing deleted items. On Windows, the trash folder is a virtualfolder containing a database; therefore, the property value is null on Windows.
   * @type {Folder}
   */
  this.trash = undefined;
  
  /*
   * A Folder object for the default folder for temporary files.
   * @type {Folder}
   */
  this.temp = undefined;
  
  /*
   * A Folder object for the folder containing the user's application data.
   * @type {Folder}
   */
  this.userData = undefined;
  
  /*
   * The folder containing the application data for all users.
   * @type {Folder}
   */
  this.appData = undefined;
  
  /*
   * A Folder object for the folder containing common files for all programs installed by the user.
   * @type {Folder}
   */
  this.commonFiles = undefined;
  
  /*
   * A folder pointing to the user's My Documents folder.
   * @type {Folder}
   */
  this.myDocuments = undefined;
  
  /*
   * A Folder object for the folder that contains the user’s desktop.
   * @type {Folder}
   */
  this.desktop = undefined;
  
  /*
   * When true, the object refers to a file system alias or shortcut.
   * @type {Boolean}
   */
  this.alias = undefined;
  
  /*
   * The creation date of the referenced folder, or null if the object does not refer to a folder on disk.
   * @type {Date}
   */
  this.created = undefined;
  
  /*
   * A message describing the most recent file system error.
   * @type {String}
   */
  this.error = undefined;
  
  /*
   * When true, this object refers to a folder that currently exists in the file system.
   * @type {Boolean}
   */
  this.exists = undefined;
  
  /*
   * The platform-specific name of the referenced folder as a full path name.
   * @type {String}
   */
  this.fsName = undefined;
  
  /*
   * The full path name for the referenced folder in URI notation. .
   * @type {String}
   */
  this.fullName = undefined;
  
  /*
   * The full path name for the referenced folder in URI notation.
   * @type {String}
   */
  this.absoluteURI = undefined;
  
  /*
   * The path name for the referenced folder in URI notation, relative to the current folder.
   * @type {String}
   */
  this.relativeURI = undefined;
  
  /*
   * The date of the referenced folder's last modification, or null if the object does not refer to a folder on disk.
   * @type {Date}
   */
  this.modified = undefined;
  
  /*
   * The folder name portion of the absolute URI for the referenced file, without the path specification.
   * @type {String}
   */
  this.name = undefined;
  
  /*
   * The localized name portion of the absolute URI for the referenced folder, without the path specification.
   * @type {String}
   */
  this.displayName = undefined;
  
  /*
   * The path portion of the object absolute URI for the referenced file, without the folder name.
   * @type {String}
   */
  this.path = undefined;
  
  /*
   * TThe Folder object for the folder that contains this folder, or null if this object refers to the root folder of a volume.
   * @type {Folder}
   */
  this.parent = undefined;
  
  /*
   * Encodes a string as required by RFC 2396, and returns the encoded string.
   *
   * @param {String} name The string to encode.
   * @returns {String}
   */
  this.encode = function(name) {
    return new String();
  }
  
  /*
   * Decodes a UTF-8 encoded string as required by RFC 2396, and returns the decoded string.
   *
   * @param {String} uri The UTF-8 string to decode.
   * @returns {String}
   */
  this.decode = function(uri) {
    return new String();
  }
  
  /*
   * Reports whether a given encoding is available.
   *
   * @param {String} name The encoding name.
   * @returns {Boolean}
   */
  this.isEncodingAvailable = function(name) {
    return new Boolean();
  }
  
  /*
   * Opens the built-in platform-specific file-browsing dialog, and creates a new File or Folder object for the selected file or folder.
   *
   * @param {String} prompt The prompt text, if the dialog allows a prompt.
   * @returns {Folder}
   */
  this.selectDialog = function(prompt) {
    return new Folder();
  }
  
  /*
   * Attempts to resolve the file-system alias or shortcut that this object refers to.
   * @returns {Folder}
   */
  this.resolve = function() {
    return new Folder();
  }
  
  /*
   * Renames the associated folder.
   *
   * @param {String} newName The new folder name, with no path information.
   * @returns {Boolean}
   */
  this.rename = function(newName) {
    return new Boolean();
  }
  
  /*
   * Deletes the folder associated with this object from disk immediately, without moving it to the system trash.
   * @returns {Boolean}
   */
  this.remove = function() {
    return new Boolean();
  }
  
  /*
   * Changes the path specification of the referenced folder.
   *
   * @param {String} path A string containing the new path, absolute or relative to the current folder.
   * @returns {Boolean}
   */
  this.changePath = function(path) {
    return new Boolean();
  }
  
  /*
   * Retrieves and returns the path for this file, relative to the specified base path, in URI notation.
   *
   * @param {String} [basePath] A base path in URI notation.
   * @returns {String}
   */
  this.getRelativeURI = function(basePath) {
    return new String();
  }
  
  /*
   * Opens this folder in the platform-specific file browser (as if it had been double-clicked in the file browser).
   * @returns {Boolean}
   */
  this.execute = function() {
    return new Boolean();
  }
  
  /*
   * Converts this object to a string.
   * @returns {String}
   */
  this.toString = function() {
    return new String();
  }
  
  /*
   * Creates and returns a serialized string representation of this object.
   * @returns {String}
   */
  this.toSource = function() {
    return new String();
  }
  
  /*
   * Opens the built-in platform-specific file-browsing dialog, and creates a new File or Folder object for the selected file or folder.
   *
   * @param {String} prompt The prompt text, if the dialog allows a prompt.
   * @returns {Folder}
   */
  this.selectDlg = function(prompt) {
    return new Folder();
  }
  
  /*
   * Retrieves the contents of this folder, filtered by the supplied mask.
   *
   * @param {any} mask A search mask for file names, specified as a string or a function.
   * @returns {Array}
   */
  this.getFiles = function(mask) {
    return new Array();
  }
  
  /*
   * undefined
   * @returns {Boolean}
   */
  this.create = function() {
    return new Boolean();
  }
  
}
