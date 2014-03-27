/*
 * Supported OpenType feature options.
 */
var OpenTypeFeature = {
  /*
   * Low.
   * @type {Number}
   */
  LOW: undefined,
  
  /*
   * Allows the use of optional discretionary ligatures.
   * @type {Number}
   */
  DISCRETIONARY_LIGATURES_FEATURE: undefined,
  
  /*
   * Reformats numbers separated by a slash, such as 1/2, as fractions. Note: In some fonts, the fractions feature reformats only standard fractions. For information on reformatting non-standard fractions such as 4/13, see denominator feature and numerator feature.
   * @type {Number}
   */
  FRACTIONS_FEATURE: undefined,
  
  /*
   * Superscripts the alpha characters in ordinal numbers.
   * @type {Number}
   */
  ORDINAL_FEATURE: undefined,
  
  /*
   * Provides regular and contextual swashes, which may include alternate caps and end-of-word alternatives.
   * @type {Number}
   */
  SWASH_FEATURE: undefined,
  
  /*
   * Activates alternative characters used for uppercase titles.
   * @type {Number}
   */
  TITLING_FEATURE: undefined,
  
  /*
   * Activates contextual ligatures and connecting alternates.
   * @type {Number}
   */
  CONTEXTUAL_ALTERNATES_FEATURE: undefined,
  
  /*
   * Provides authentic small caps rather than scaled-down versions of the font's regular caps.
   * @type {Number}
   */
  ALL_SMALL_CAPS_FEATURE: undefined,
  
  /*
   * Sizes raised glyphs correctly relative to the surrounding characters.
   * @type {Number}
   */
  SUPERSCRIPT_FEATURE: undefined,
  
  /*
   * Sizes lowered glyphs correctly relative to the surrounding characters.
   * @type {Number}
   */
  SUBSCRIPT_FEATURE: undefined,
  
  /*
   * In a series of two numbers separated by a slash that form a non-standard fraction, such as 4/13, reformats the first number as a numerator.
   * @type {Number}
   */
  NUMERATOR_FEATURE: undefined,
  
  /*
   * In a series of two numbers separated by a slash that form a non-standard fraction, such as 4/13, reformats the second number as a denominator.
   * @type {Number}
   */
  DENOMINATOR_FEATURE: undefined,
  
  /*
   * Gives full-height figures fixed, equal width.
   * @type {Number}
   */
  TABULAR_LINING_FEATURE: undefined,
  
  /*
   * Gives varying-height figures varying widths.
   * @type {Number}
   */
  PROPORTIONAL_OLDSTYLE_FEATURE: undefined,
  
  /*
   * Gives full-height figures varying widths.
   * @type {Number}
   */
  PROPORTIONAL_LINING_FEATURE: undefined,
  
  /*
   * Gives varying-height figures fixed, equal widths.
   * @type {Number}
   */
  TABULAR_OLDSTYLE_FEATURE: undefined,
  
  /*
   * Applies the default figure style of the current font to figure glyphs.
   * @type {Number}
   */
  DEFAULT_FIGURE_STYLE_FEATURE: undefined,
  
  /*
   * Overlap swash
   * @type {Number}
   */
  OVERLAP_SWASH: undefined,
  
  /*
   * Stylistic alternate
   * @type {Number}
   */
  STYLISTIC_ALTERNATE: undefined,
  
  /*
   * Justification alternate
   * @type {Number}
   */
  JUSTIFICATION_ALTERNATE: undefined,
  
  /*
   * Stretched alternate
   * @type {Number}
   */
  STRETCHED_ALTERNATE: undefined,
  
};
