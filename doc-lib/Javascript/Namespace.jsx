/*
 * Creates a Namespace object.
 * @constructor
   *
 * @param {any} prefix undefined
 * @param {String} [uri] The URI if the prefix is specified as a string.
 */
function Namespace(prefix, uri) {
  /*
   * The named prefix.
   * @type {String}
   */
  this.prefix = undefined;
  
  /*
   * The URI.
   * @type {String}
   */
  this.uri = undefined;
  
}
