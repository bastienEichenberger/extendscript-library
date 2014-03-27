/*
 * Preferences for Illustrator.
 */
var Preferences = {
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
   * Options to use when opening or placing a Photoshop file.
   * @type {OpenOptionsPhotoshop}
   */
  photoshopFileOptions: undefined,
  
  /*
   * Options to use when opening or placing a PDF file.
   * @type {OpenOptionsPDF}
   */
  PDFFileOptions: undefined,
  
  /*
   * Options to use when opening or placing a AutoCAD file.
   * @type {OpenOptionsAutoCAD}
   */
  AutoCADFileOptions: undefined,
  
  /*
   * Retrieve the value of the application preference key as boolean.
 *
   * @param {String} key The preference key.
   * @returns {Boolean}
   */
  getBooleanPreference: function(key) {
    return new Boolean();
  },
  
  /*
   * Set the value of the application preference key as boolean.
 *
   * @param {String} key The preference key.
   * @param {Boolean} value The boolean value of the preference key.
   */
  setBooleanPreference: function(key, value) {
  },
  
  /*
   * Retrieve the value of the application preference key as integer.
 *
   * @param {String} key The preference key.
   * @returns {Int32}
   */
  getIntegerPreference: function(key) {
    return new Int32();
  },
  
  /*
   * Set the value of the application preference key as integer.
 *
   * @param {String} key The preference key.
   * @param {Int32} value The boolean value of the preference key.
   */
  setIntegerPreference: function(key, value) {
  },
  
  /*
   * Retrieve the value of the application preference key as real number.
 *
   * @param {String} key The preference key.
   * @returns {Number}
   */
  getRealPreference: function(key) {
    return new Number();
  },
  
  /*
   * Set the value of the application preference key as real number.
 *
   * @param {String} key The preference key.
   * @param {Number} value The real value of the preference key.
   */
  setRealPreference: function(key, value) {
  },
  
  /*
   * Retrieve the value of the application preference key as string type.
 *
   * @param {String} key The preference key.
   * @returns {String}
   */
  getStringPreference: function(key) {
    return new String();
  },
  
  /*
   * Set the value of the application preference key as string type.
 *
   * @param {String} key The preference key.
   * @param {String} value The string value of the preference key.
   */
  setStringPreference: function(key, value) {
  },
  
  /*
   * Delete the application preference key.
 *
   * @param {String} key The preference key.
   */
  removePreference: function(key) {
  },
  
};
