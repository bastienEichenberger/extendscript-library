/*
 * Special character options.
 */
var SpecialCharacters = {
  /*
   * Inserts an automatic page number.
   * @type {Number}
   */
  AUTO_PAGE_NUMBER: undefined,
  
  /*
   * Inserts the next page number.
   * @type {Number}
   */
  NEXT_PAGE_NUMBER: undefined,
  
  /*
   * Inserts the previous page number.
   * @type {Number}
   */
  PREVIOUS_PAGE_NUMBER: undefined,
  
  /*
   * Inserts a section marker.
   * @type {Number}
   */
  SECTION_MARKER: undefined,
  
  /*
   * Inserts a bullet character.
   * @type {Number}
   */
  BULLET_CHARACTER: undefined,
  
  /*
   * Inserts a copyright symbol.
   * @type {Number}
   */
  COPYRIGHT_SYMBOL: undefined,
  
  /*
   * Inserts a degree symbol.
   * @type {Number}
   */
  DEGREE_SYMBOL: undefined,
  
  /*
   * Inserts an ellipsis character.
   * @type {Number}
   */
  ELLIPSIS_CHARACTER: undefined,
  
  /*
   * Inserts a forced line break.
   * @type {Number}
   */
  FORCED_LINE_BREAK: undefined,
  
  /*
   * Inserts a paragraph symbol.
   * @type {Number}
   */
  PARAGRAPH_SYMBOL: undefined,
  
  /*
   * Inserts a registered trademark.
   * @type {Number}
   */
  REGISTERED_TRADEMARK: undefined,
  
  /*
   * Inserts a section symbol.
   * @type {Number}
   */
  SECTION_SYMBOL: undefined,
  
  /*
   * Inserts a trademark symbol.
   * @type {Number}
   */
  TRADEMARK_SYMBOL: undefined,
  
  /*
   * Inserts a right indent tab.
   * @type {Number}
   */
  RIGHT_INDENT_TAB: undefined,
  
  /*
   * Inserts an indent to here character.
   * @type {Number}
   */
  INDENT_HERE_TAB: undefined,
  
  /*
   * Inserts an em dash.
   * @type {Number}
   */
  EM_DASH: undefined,
  
  /*
   * Inserts an en dash.
   * @type {Number}
   */
  EN_DASH: undefined,
  
  /*
   * Inserts a discretionary hyphen.
   * @type {Number}
   */
  DISCRETIONARY_HYPHEN: undefined,
  
  /*
   * Inserts a nonbreaking hyphen.
   * @type {Number}
   */
  NONBREAKING_HYPHEN: undefined,
  
  /*
   * Inserts an end nested style here character.
   * @type {Number}
   */
  END_NESTED_STYLE: undefined,
  
  /*
   * Inserts a double left quote.
   * @type {Number}
   */
  DOUBLE_LEFT_QUOTE: undefined,
  
  /*
   * Inserts a double right quote.
   * @type {Number}
   */
  DOUBLE_RIGHT_QUOTE: undefined,
  
  /*
   * Inserts a single left quote.
   * @type {Number}
   */
  SINGLE_LEFT_QUOTE: undefined,
  
  /*
   * Inserts a single right quote.
   * @type {Number}
   */
  SINGLE_RIGHT_QUOTE: undefined,
  
  /*
   * Inserts an em space.
   * @type {Number}
   */
  EM_SPACE: undefined,
  
  /*
   * Inserts an en space.
   * @type {Number}
   */
  EN_SPACE: undefined,
  
  /*
   * Inserts a flush space.
   * @type {Number}
   */
  FLUSH_SPACE: undefined,
  
  /*
   * Inserts a hair space.
   * @type {Number}
   */
  HAIR_SPACE: undefined,
  
  /*
   * Inserts a nonbreaking space.
   * @type {Number}
   */
  NONBREAKING_SPACE: undefined,
  
  /*
   * Inserts a thin space.
   * @type {Number}
   */
  THIN_SPACE: undefined,
  
  /*
   * Inserts a figure space.
   * @type {Number}
   */
  FIGURE_SPACE: undefined,
  
  /*
   * Inserts a punctuation space.
   * @type {Number}
   */
  PUNCTUATION_SPACE: undefined,
  
  /*
   * Inserts a column break.
   * @type {Number}
   */
  COLUMN_BREAK: undefined,
  
  /*
   * Inserts a frame break.
   * @type {Number}
   */
  FRAME_BREAK: undefined,
  
  /*
   * Inserts a page break.
   * @type {Number}
   */
  PAGE_BREAK: undefined,
  
  /*
   * Inserts a break to the next odd page.
   * @type {Number}
   */
  ODD_PAGE_BREAK: undefined,
  
  /*
   * Inserts a break to the next even page.
   * @type {Number}
   */
  EVEN_PAGE_BREAK: undefined,
  
  /*
   * Inserts a footnote symbol.
   * @type {Number}
   */
  FOOTNOTE_SYMBOL: undefined,
  
  /*
   * Inserts a left to right embedding mark.
   * @type {Number}
   */
  LEFT_TO_RIGHT_EMBEDDING: undefined,
  
  /*
   * Inserts a right to left embedding mark.
   * @type {Number}
   */
  RIGHT_TO_LEFT_EMBEDDING: undefined,
  
  /*
   * Inserts a pop directional formatting mark.
   * @type {Number}
   */
  POP_DIRECTIONAL_FORMATTING: undefined,
  
  /*
   * Inserts a left to right override mark.
   * @type {Number}
   */
  LEFT_TO_RIGHT_OVERRIDE: undefined,
  
  /*
   * Inserts a right to left override mark.
   * @type {Number}
   */
  RIGHT_TO_LEFT_OVERRIDE: undefined,
  
  /*
   * Inserts a dotted circle.
   * @type {Number}
   */
  DOTTED_CIRCLE: undefined,
  
  /*
   * Inserts a zero width joiner.
   * @type {Number}
   */
  ZERO_WIDTH_JOINER: undefined,
  
  /*
   * Inserts the specified text variable.
   * @type {Number}
   */
  TEXT_VARIABLE: undefined,
  
  /*
   * Inserts a single straight quote.
   * @type {Number}
   */
  SINGLE_STRAIGHT_QUOTE: undefined,
  
  /*
   * Inserts a double straight quote.
   * @type {Number}
   */
  DOUBLE_STRAIGHT_QUOTE: undefined,
  
  /*
   * Inserts a discretionary line break.
   * @type {Number}
   */
  DISCRETIONARY_LINE_BREAK: undefined,
  
  /*
   * Inserts a zero-width non-joiner.
   * @type {Number}
   */
  ZERO_WIDTH_NONJOINER: undefined,
  
  /*
   * Inserts a third-width space.
   * @type {Number}
   */
  THIRD_SPACE: undefined,
  
  /*
   * Inserts a quarter-width space.
   * @type {Number}
   */
  QUARTER_SPACE: undefined,
  
  /*
   * Inserts a sixth-width space.
   * @type {Number}
   */
  SIXTH_SPACE: undefined,
  
  /*
   * Inserts a fixed-width nonbreaking space.
   * @type {Number}
   */
  FIXED_WIDTH_NONBREAKING_SPACE: undefined,
  
  /*
   * Inserts a hebrew maqaf.
   * @type {Number}
   */
  HEBREW_MAQAF: undefined,
  
  /*
   * Inserts a hebrew geresh.
   * @type {Number}
   */
  HEBREW_GERESH: undefined,
  
  /*
   * Inserts a hebrew gershayim.
   * @type {Number}
   */
  HEBREW_GERSHAYIM: undefined,
  
  /*
   * Inserts an arabic kashida.
   * @type {Number}
   */
  ARABIC_KASHIDA: undefined,
  
  /*
   * Inserts an arabic comma.
   * @type {Number}
   */
  ARABIC_COMMA: undefined,
  
  /*
   * Inserts an arabic semicolon.
   * @type {Number}
   */
  ARABIC_SEMICOLON: undefined,
  
  /*
   * Inserts an arabic question mark.
   * @type {Number}
   */
  ARABIC_QUESTION_MARK: undefined,
  
  /*
   * Inserts a left to right mark.
   * @type {Number}
   */
  LEFT_TO_RIGHT_MARK: undefined,
  
  /*
   * Inserts a right to left mark.
   * @type {Number}
   */
  RIGHT_TO_LEFT_MARK: undefined,
  
  /*
   * Inserts a hebrew sof pasuk.
   * @type {Number}
   */
  HEBREW_SOF_PASUK: undefined,
  
};
