/*
 * Creates and returns a new File object referring to a given file system location.
 * @constructor
   *
 * @param {String} [path] The full or partial path name of the file,  in platform-specific or URI format.
 */
function File(path) {
  /*
   * The name of the file system.
   * @type {String}
   */
  this.fs = undefined;
  
  /*
   * If true, the object refers to a file system alias or shortcut.
   * @type {Boolean}
   */
  this.alias = undefined;
  
  /*
   * The creation date of the referenced file, or null if the object does not refer to a file on disk.
   * @type {Date}
   */
  this.created = undefined;
  
  /*
   * A string containing a message describing the most recent file system error.
   * @type {String}
   */
  this.error = undefined;
  
  /*
   * If true, this object refers to a file or file-system alias that actually exists in the file system.
   * @type {Boolean}
   */
  this.exists = undefined;
  
  /*
   * The platform-specific full path name for the referenced file.
   * @type {String}
   */
  this.fsName = undefined;
  
  /*
   * The full path name for the referenced file in URI notation.
   * @type {String}
   */
  this.fullName = undefined;
  
  /*
   * The full path name for the referenced file in URI notation.
   * @type {String}
   */
  this.absoluteURI = undefined;
  
  /*
   * The path name for the object in URI notation, relative to the current folder.
   * @type {String}
   */
  this.relativeURI = undefined;
  
  /*
   * The date of the referenced file's last modification, or null if the object does not refer to a file on the disk.
   * @type {Date}
   */
  this.modified = undefined;
  
  /*
   * The file name portion of the absolute URI for the referenced file, without the path specification.
   * @type {String}
   */
  this.name = undefined;
  
  /*
   * The localized name of the referenced file, without the path specification.
   * @type {String}
   */
  this.displayName = undefined;
  
  /*
   * The path portion of the absolute URI for the referenced file, without the file name.
   * @type {String}
   */
  this.path = undefined;
  
  /*
   * The Folder object for the folder that contains this file.
   * @type {Folder}
   */
  this.parent = undefined;
  
  /*
   * The file type as a four-character string.
   * @type {String}
   */
  this.type = undefined;
  
  /*
   * In Mac OS, the file creator as a four-character string. In Windows or UNIX, value is "????".
   * @type {String}
   */
  this.creator = undefined;
  
  /*
   * When true, the file is not shown in the platform-specific file browser.
   * @type {Boolean}
   */
  this.hidden = undefined;
  
  /*
   * When true, prevents the file from being altered or deleted.
   * @type {Boolean}
   */
  this.readonly = undefined;
  
  /*
   * How line feed characters are written in the file system.
   * @type {String}
   */
  this.lineFeed = undefined;
  
  /*
   * The size of the file in bytes.
   * @type {Number}
   */
  this.length = undefined;
  
  /*
   * Gets or sets the encoding for subsequent read/write operations.
   * @type {String}
   */
  this.encoding = undefined;
  
  /*
   * When true, a read attempt caused the current position to be at the end of the file, or the file is not open.
   * @type {Boolean}
   */
  this.eof = undefined;
  
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
   * @param {String} uri The UTF-8 encoded string to decode.
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
   * Opens a dialog so the user can select one or more files to open.
   *
   * @param {String} prompt The prompt text, displayed if the dialog allows a prompt.
   * @param {any} [filter] A filter that limits the types of files displayed in the dialog.
   * @param {Boolean} [multiSelect] When true, the user can select multiple files and the return value is an array.
   * @returns {File}
   */
  this.openDialog = function(prompt, filter, multiSelect) {
    return new File();
  }
  
  /*
   * Opens a dialog so the user can select a file name to save to.
   *
   * @param {String} prompt The prompt text, displayed if the dialog allows a prompt.
   * @param {any} [filter] In Windows only, a filter that limits the types of files displayed in the dialog.
   * @returns {File}
   */
  this.saveDialog = function(prompt, filter) {
    return new File();
  }
  
  /*
   * Attempts to resolve the file-system alias or shortcut that this object refers to.
   * @returns {File}
   */
  this.resolve = function() {
    return new File();
  }
  
  /*
   * Renames the associated file.
   *
   * @param {String} newName The new file name, with no path information.
   * @returns {Boolean}
   */
  this.rename = function(newName) {
    return new Boolean();
  }
  
  /*
   * Deletes the file associated with this object from disk immediately, without moving it to the system trash.
   * @returns {Boolean}
   */
  this.remove = function() {
    return new Boolean();
  }
  
  /*
   * Changes the path specification of the referenced file.
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
   * @param {String} basePath A base path in URI notation.
   * @returns {String}
   */
  this.getRelativeURI = function(basePath) {
    return new String();
  }
  
  /*
   * Executes or opens this file using the appropriate application, as if it had been double-clicked in a file browser.
   * @returns {Boolean}
   */
  this.execute = function() {
    return new Boolean();
  }
  
  /*
   * Opens the built-in platform-specific file-browsing dialog, in which the user can select an existing file or files, and creates new File objects to represent the selected files.
   *
   * @param {String} prompt A string containing the prompt text, if the dialog allows a prompt.
   * @param {any} [filter] A filter that limits the types of files displayed in the dialog.
   * @param {Boolean} [multiSelect] When true, the user can select multiple files and the return value is an array.
   * @returns {File}
   */
  this.openDlg = function(prompt, filter, multiSelect) {
    return new File();
  }
  
  /*
   * Opens the built-in platform-specific file-browsing dialog, in which the user can select an existing file location to which to save information, and creates a new File object to represent the selected file.
   *
   * @param {String} prompt A string containing the prompt text, if the dialog allows a prompt.
   * @param {any} [filter] In Windows only, a filter that limits the types of files displayed in the dialog.
   * @returns {File}
   */
  this.saveDlg = function(prompt, filter) {
    return new File();
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
   * Makes this file a file-system alias or shortcut to the specified file.
   *
   * @param {String} path A string containing the path of the target file.
   */
  this.createAlias = function(path) {
  }
  
  /*
   * Opens the referenced file for subsequent read/write operations. The method resolves any aliases to find the file.
   *
   * @param {String} mode The read-write mode, a single-character string.
   * @param {String} [type] In Mac OS, the type of a newly created file, a 4-character string. Ignored in Windows and UNIX.
   * @param {String} [creator] In Mac OS, the creator of a newly created file, a 4-character string. Ignored in Windows and UNIX.
   * @returns {Boolean}
   */
  this.open = function(mode, type, creator) {
    return new Boolean();
  }
  
  /*
   * Closes this open file.
   * @returns {Boolean}
   */
  this.close = function() {
    return new Boolean();
  }
  
  /*
   * Reads the contents of the file, starting at the current position.
   *
   * @param {Number} [chars] An integer specifying the number of characters to read.
   * @returns {String}
   */
  this.read = function(chars) {
    return new String();
  }
  
  /*
   * Reads a single text character from the file at the current position.
   * @returns {String}
   */
  this.readch = function() {
    return new String();
  }
  
  /*
   * Reads a single line of text from the file at the current position.
   * @returns {String}
   */
  this.readln = function() {
    return new String();
  }
  
  /*
   * Writes the specified text to the file at the current position.
   *
   * @param {String} text A text string to be written.
   * @returns {Boolean}
   */
  this.write = function(text) {
    return new Boolean();
  }
  
  /*
   * Writes a string to the file at the current position and appends a line-feed sequence.
   *
   * @param {String} text A text string to be written.
   * @returns {Boolean}
   */
  this.writeln = function(text) {
    return new Boolean();
  }
  
  /*
   * Seeks to a given position in the file.
   *
   * @param {Number} pos undefined
   * @param {Number} [mode] The seek mode.
   * @returns {Boolean}
   */
  this.seek = function(pos, mode) {
    return new Boolean();
  }
  
  /*
   * Retrieves the current position as a byte offset from the start of the file.
   * @returns {Number}
   */
  this.tell = function() {
    return new Number();
  }
  
  /*
   * Copies this object’s referenced file to the specified target location.
   *
   * @param {undefined} target A string with the URI path to the target location, or a File object that references the target location.
   * @returns {Boolean}
   */
  this.copy = function(target) {
    return new Boolean();
  }
  
}
