/*
 * The $ object provides a number of debugging facilities and informational methods.
 */
var $ = {
  /*
   * The most recent run-time error information.
   * @type {Error}
   */
  error: undefined,
  
  /*
   * The version number of the ExtendScript engine.
   * @type {String}
   */
  version: undefined,
  
  /*
   * The ExtendScript build information.
   * @type {String}
   */
  build: undefined,
  
  /*
   * The ExtendScript build date.
   * @type {Date}
   */
  buildDate: undefined,
  
  /*
   * A reference to the global object, which contains the JavaScript global namespace.
   * @type {Object}
   */
  global: undefined,
  
  /*
   * The current stack trace.
   * @type {String}
   */
  stack: undefined,
  
  /*
   * The current debugging level, which enables or disables the JavaScript debugger.
   * @type {Number}
   */
  level: undefined,
  
  /*
   * Gets or sets low-level debug output flags.
   * @type {Number}
   */
  flags: undefined,
  
  /*
   * Sets or clears strict mode for object modification.
   * @type {any}
   */
  strict: undefined,
  
  /*
   * Gets or sets the current locale.
   * @type {String}
   */
  locale: undefined,
  
  /*
   * Set to true to enable the extended localization features of the built-in toString() method.
   * @type {Boolean}
   */
  localize: undefined,
  
  /*
   * The character used as the decimal point character in formatted numeric output.
   * @type {String}
   */
  decimalPoint: undefined,
  
  /*
   * The ExtendScript memory cache size, in bytes.
   * @type {Number}
   */
  memCache: undefined,
  
  /*
   * An array of objects containing information about the display screens attached to your computer.
   * @type {Object}
   */
  screens: undefined,
  
  /*
   * The current operating system version information.
   * @type {String}
   */
  os: undefined,
  
  /*
   * The file name of the current script.
   * @type {String}
   */
  fileName: undefined,
  
  /*
   * The current line number of the currently executing script.
   * @type {Number}
   */
  line: undefined,
  
  /*
   * A high-resolution timer, measuring the time in microseconds. The timer starts when ExtendScript isinitialized during the application startup sequence. Every read access resets the timer to Zero.
   * @type {Number}
   */
  hiresTimer: undefined,
  
  /*
   * The name of the current ExtendScript engine, if set.
   * @type {String}
   */
  engineName: undefined,
  
  /*
   * The path for include files for the current script.
   * @type {String}
   */
  includePath: undefined,
  
  /*
   * Shows an About box for the ExtendScript component, and returns the text for the box.
   * @returns {String}
   */
  about: function() {
    return new String();
  },
  
  /*
   * Converts this object to a string.
   * @returns {String}
   */
  toString: function() {
    return new String();
  },
  
  /*
   * Prints text to the Console.
 *
   * @param {any} text The text to print. All arguments are concatenated.
   */
  write: function(text) {
  },
  
  /*
   * Prints text to the Console, and adds a newline character.
 *
   * @param {any} text The text to print. All arguments are concatenated.
   */
  writeln: function(text) {
  },
  
  /*
   * Breaks execution at the current position.
 *
   * @param {any} [condition] A string containing a JavaScript statement to be used as a condition. If the statement evaluates to true or nonzero when this point is reached, execution stops.
   */
  bp: function(condition) {
  },
  
  /*
   * Retrieves the value of an environment variable.
 *
   * @param {String} name The name of the variable.
   * @returns {String}
   */
  getenv: function(name) {
    return new String();
  },
  
  /*
   * Sets the value of an environment variable.
 *
   * @param {String} name The name of the variable.
   * @param {String} value The value of the variable.
   */
  setenv: function(name, value) {
  },
  
  /*
   * Suspends the calling thread for a number of milliseconds.
 *
   * @param {Number} msecs Number of milliseconds to sleep.
   */
  sleep: function(msecs) {
  },
  
  /*
   * Invokes the platform-specific color selection dialog, and returns the selected color.
 *
   * @param {Number} color The color to be preselected in the dialog, as 0xRRGGBB, or -1 for the platform default.
   * @returns {Number}
   */
  colorPicker: function(color) {
    return new Number();
  },
  
  /*
   * Loads and evaluates a file.
 *
   * @param {File} file The file to load.
   * @param {Number} [timeout] An optional timeout in milliseconds.
   * @returns {any}
   */
  evalFile: function(file, timeout) {
    return new any();
  },
  
  /*
   * Initiates garbage collection in the ExtendScript engine.
   */
  gc: function() {
  },
  
};
