/*
 * Encapsulates the qualities of a font used to draw text into a control.
 */
var ScriptUIFont = {
  /*
   * The font family name.
   * @type {String}
   */
  family: undefined,
  
  /*
   * The complete font name, consisting of the family and style, if specified.
   * @type {String}
   */
  name: undefined,
  
  /*
   * The font point size.
   * @type {Number}
   */
  size: undefined,
  
  /*
   * undefined
   * @type {Object}
   */
  style: undefined,
  
  /*
   * The name of a substitution font, a fallback font to substitute for this font if the requested font family or style is not available.
   * @type {String}
   */
  substitute: undefined,
  
};
