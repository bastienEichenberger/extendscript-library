/*
 * Creates a QName object.
 * @constructor
   *
 * @param {any} uri undefined
 * @param {String} [name] The local name. Used only if URI is given as a string.
 */
function QName(uri, name) {
  /*
   * The URI part of the qualified name.
   * @type {String}
   */
  this.uri = undefined;
  
  /*
   * The local name part of the qualified name.
   * @type {String}
   */
  this.localName = undefined;
  
}
