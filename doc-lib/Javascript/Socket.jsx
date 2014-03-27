/*
 * Creates a new Socket object.
 * @constructor
 */
function Socket() {
  /*
   * The name of the remote computer when a connection is established.
   * @type {String}
   */
  this.host = undefined;
  
  /*
   * Sets or retrieves the name of the encoding used to transmit data.
   * @type {String}
   */
  this.encoding = undefined;
  
  /*
   * A message describing the most recent error. Setting this value clears any error message.
   * @type {String}
   */
  this.error = undefined;
  
  /*
   * When true, the receive buffer is empty.
   * @type {Boolean}
   */
  this.eof = undefined;
  
  /*
   * When true, the connection is active.
   * @type {Boolean}
   */
  this.connected = undefined;
  
  /*
   * The timeout in seconds to be applied to read or write operations.
   * @type {Number}
   */
  this.timeout = undefined;
  
  /*
   * Opens the connection for subsequent read/write operations.
   *
   * @param {String} host The server to connect to.
   * @param {String} [encoding] The encoding to be used for the connection
   * @returns {Boolean}
   */
  this.open = function(host, encoding) {
    return new Boolean();
  }
  
  /*
   * Instructs the object to start listening for an incoming connection.
   *
   * @param {Number} port The TCP/IP port number to listen on.
   * @param {String} [encoding] The encoding to be used for the connection
   * @returns {Boolean}
   */
  this.listen = function(port, encoding) {
    return new Boolean();
  }
  
  /*
   * Terminates the open connection.
   * @returns {Boolean}
   */
  this.close = function() {
    return new Boolean();
  }
  
  /*
   * Reads up to the specified number of characters from the connection. CR characters are ignored unless the encoding is set to "BINARY".
   *
   * @param {Number} [count] The number of characters to read.
   * @returns {String}
   */
  this.read = function(count) {
    return new String();
  }
  
  /*
   * Reads one line of text up to the next line feed.
   * @returns {String}
   */
  this.readln = function() {
    return new String();
  }
  
  /*
   * Concatenates all arguments into a single string and writes that string to the connection.
   *
   * @param {String} text Any number of string values. All arguments are concatenated to form the string to be written. CRLF sequences are converted to LFs unless the encoding is set to "BINARY".
   * @returns {Boolean}
   */
  this.write = function(text) {
    return new Boolean();
  }
  
  /*
   * Concatenates all arguments into a single string, appends a LF character, and writes that string to the connection.
   *
   * @param {String} text Any number of string values. All arguments are concatenated to form the string to be written. CRLF sequences are converted to LFs unless the encoding is set to "BINARY".
   * @returns {Boolean}
   */
  this.writeln = function(text) {
    return new Boolean();
  }
  
  /*
   * Checks a listening object for a new incoming connection.
   * @returns {Socket}
   */
  this.poll = function() {
    return new Socket();
  }
  
}
