/*
 * Text position options.
 */
var Position = {
  /*
   * Normal position
   * @type {Number}
   */
  NORMAL: undefined,
  
  /*
   * Superscripts the text.
   * @type {Number}
   */
  SUPERSCRIPT: undefined,
  
  /*
   * Subscripts the text.
   * @type {Number}
   */
  SUBSCRIPT: undefined,
  
  /*
   * For OpenType fonts, uses--if available--raised glyphs that are sized correctly relative to the surrounding characters.
   * @type {Number}
   */
  OT_SUPERSCRIPT: undefined,
  
  /*
   * For OpenType fonts, uses--if available--lowered glyphs that are sized correctly relative to the surrounding characters.
   * @type {Number}
   */
  OT_SUBSCRIPT: undefined,
  
  /*
   * For OpenType fonts, shrinks the text but keeps the top of the characters aligned with the top of the main text. Note: Valid only for numeric characters.
   * @type {Number}
   */
  OT_NUMERATOR: undefined,
  
  /*
   * For OpenType fonts, shrinks the text but keeps text on the main text baseline. Note: Valid only for numeric characters.
   * @type {Number}
   */
  OT_DENOMINATOR: undefined,
  
};
