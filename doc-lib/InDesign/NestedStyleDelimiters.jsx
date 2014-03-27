/*
 * Delimiter options for marking the end of the application of the nested style.
 */
var NestedStyleDelimiters = {
  /*
   * Uses the first sentence or sentences in the paragraph as the nested style delimiter. The first sentence is considered all text preceding the first period, question mark, or exclamation mark in the paragraph.
   * @type {Number}
   */
  SENTENCE: undefined,
  
  /*
   * Uses the first word or words in the paragraph as the nested style delimiter. The first word is considered all characters preceding the first space or white space character in the paragraph.
   * @type {Number}
   */
  ANY_WORD: undefined,
  
  /*
   * Uses the first character or characters other than zero-width markers as the nested style delimiter. Zero-width markers include anchors, index markers, XML tags, and so on.
   * @type {Number}
   */
  ANY_CHARACTER: undefined,
  
  /*
   * Uses the first alpha character or characters as the nested style delimiter. Note: To specify the number of letters, see repetition.
   * @type {Number}
   */
  LETTERS: undefined,
  
  /*
   * Uses the first numeric character or characters as the nested style delimiter. Note: To specify the number of digits, see repetition.
   * @type {Number}
   */
  DIGITS: undefined,
  
  /*
   * Uses the first tab character as the nested style delimiter. Note: Does not use the first tab stop. If no actual tab character has been inserted in the paragraph, the nested style is applied through the end of the paragraph.
   * @type {Number}
   */
  TABS: undefined,
  
  /*
   * Uses the first inline graphic as the nested style delimiter.
   * @type {Number}
   */
  INLINE_GRAPHIC: undefined,
  
  /*
   * Uses the dropcap as the nested style delimiter.
   * @type {Number}
   */
  DROPCAP: undefined,
  
  /*
   * Uses the first forced line break as the nested style delimiter.
   * @type {Number}
   */
  FORCED_LINE_BREAK: undefined,
  
  /*
   * Uses the inserted end nested style here character as the nested style delimiter.
   * @type {Number}
   */
  END_NESTED_STYLE: undefined,
  
  /*
   * Uses the first indent-to-here tab character as the nested style delimiter. Note: Does not use the first indent-to-here tab stop. If no actual indent-to-here tab character has been inserted in the paragraph, the nested style is applied through the end of the paragraph.
   * @type {Number}
   */
  INDENT_HERE_TAB: undefined,
  
  /*
   * Uses the first em space as the nested style delimiter.
   * @type {Number}
   */
  EM_SPACE: undefined,
  
  /*
   * Uses the first en space as the nested style delimiter.
   * @type {Number}
   */
  EN_SPACE: undefined,
  
  /*
   * Uses the first nonbreaking space as the nested style delimiter.
   * @type {Number}
   */
  NONBREAKING_SPACE: undefined,
  
  /*
   * Uses the first automatic page number as the nested style delimiter.
   * @type {Number}
   */
  AUTO_PAGE_NUMBER: undefined,
  
  /*
   * Uses the first section name marker as the nested style delimiter.
   * @type {Number}
   */
  SECTION_MARKER: undefined,
  
  /*
   * Repeat
   * @type {Number}
   */
  REPEAT: undefined,
  
};
