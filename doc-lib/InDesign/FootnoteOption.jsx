/*
 * Options for specifying default footnote formatting.
 */
var FootnoteOption = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the FootnoteOption (a Application or Document).
   * @type {Mixed}
   */
  parent: undefined,
  
  /*
   * A collection of events.
   * @type {Events}
   */
  events: undefined,
  
  /*
   * A collection of event listeners.
   * @type {EventListeners}
   */
  eventListeners: undefined,
  
  /*
   * The footnote numbering style. Can return: FootnoteNumberingStyle enumerator or String.
   * @type {Mixed}
   */
  footnoteNumberingStyle: undefined,
  
  /*
   * The number at which to start footnote numbering.
   * @type {Number}
   */
  startAt: undefined,
  
  /*
   * The point at which to restart footnote numbering. Can return: FootnoteRestarting enumerator or String.
   * @type {Mixed}
   */
  restartNumbering: undefined,
  
  /*
   * The position of the footnote prefix and/or suffix. Can return: FootnotePrefixSuffix enumerator or String.
   * @type {Mixed}
   */
  showPrefixSuffix: undefined,
  
  /*
   * The prefix text of the footnote. (Limit: 0 to 100 characters)
   * @type {String}
   */
  prefix: undefined,
  
  /*
   * The suffix text of the footnote. (Limit: 0 to 100 characters)
   * @type {String}
   */
  suffix: undefined,
  
  /*
   * The paragraph style to apply to footnotes. Note: The space before and after the paragraph defined in the paragraph style is ignored for footnotes. To define space above and between footnotes, see spacer and space between.
   * @type {ParagraphStyle}
   */
  footnoteTextStyle: undefined,
  
  /*
   * The character style to apply to footnote reference numbers in the main text.
   * @type {CharacterStyle}
   */
  footnoteMarkerStyle: undefined,
  
  /*
   * The position of footnote reference numbers in the main text. Can return: FootnoteMarkerPositioning enumerator or String.
   * @type {Mixed}
   */
  markerPositioning: undefined,
  
  /*
   * The text to insert between the footnote marker number and the footnote text. (Range: 0 to 100 characters)
   * @type {String}
   */
  separatorText: undefined,
  
  /*
   * The amount of vertical space between footnotes. Note: The space before and space after defined for the paragraph style applied to the footnote is ignored.
   * @type {Mixed}
   */
  spaceBetween: undefined,
  
  /*
   * The minimum amount of vertical space between the bottom of the text column and the first footnote. Note: The space before amount defined in the paragraph style applied to the footnote is ignored for the first footnote.
   * @type {Mixed}
   */
  spacer: undefined,
  
  /*
   * The distance between the top of the footnote container and the footnote text.
   * @type {FootnoteFirstBaseline}
   */
  footnoteFirstBaselineOffset: undefined,
  
  /*
   * The minimum distance between the baseline of the text and the top of the footnote container.
   * @type {Mixed}
   */
  footnoteMinimumFirstBaselineOffset: undefined,
  
  /*
   * If true, footnotes at the end of the story are placed just below the text. If false, footnotes at the end of the story are placed at the bottom of the column.
   * @type {Boolean}
   */
  eosPlacement: undefined,
  
  /*
   * If true, footnotes cannot split across columns. If false, footnotes flow into succeeding columns when the footnote text causes the footnote area to expand upward to reach the footnote reference number in the main text.
   * @type {Boolean}
   */
  noSplitting: undefined,
  
  /*
   * If true, draws a rule between the text and the first footnote in the column.
   * @type {Boolean}
   */
  ruleOn: undefined,
  
  /*
   * The stroke type of the rule above the first footnote in a column. Note: Valid when rule on is true. Can return: StrokeStyle or String.
   * @type {Mixed}
   */
  ruleType: undefined,
  
  /*
   * The stroke weight of the rule above the first footnote in the column. (Range: 0 to 1000) Note: Valid when rule on is true.
   * @type {Mixed}
   */
  ruleLineWeight: undefined,
  
  /*
   * The swatch (color, gradient, tint, or mixed ink) applied to the stroke of the rule above the first footnote in the column. Note: Valid when rule on is true. Can return: Swatch or String.
   * @type {Mixed}
   */
  ruleColor: undefined,
  
  /*
   * The swatch (color, gradient, tint, or mixed ink) applied to the stroke gap of the rule above the first footnote in the column. Note: Valid when rule type is not solid. Can return: Swatch or String.
   * @type {Mixed}
   */
  ruleGapColor: undefined,
  
  /*
   * The tint (as a percentage) of the rule above the first footnote in the column. (Range: 0 to 100) Note: Valid when rule on is true.
   * @type {Number}
   */
  ruleTint: undefined,
  
  /*
   * The tint (as a percentage) of the gap color of the rule above the first footnote in the column. (Range: 0 to 100) Note: Valid when rule type is not solid.
   * @type {Number}
   */
  ruleGapTint: undefined,
  
  /*
   * If true, overprints the gap color of the rule above the first footnote in the column. Note: Valid when rule type is not solid.
   * @type {Boolean}
   */
  ruleGapOverprint: undefined,
  
  /*
   * If true, overprints the rule above the first footnote in the column. Note: Valid when rule on is true.
   * @type {Boolean}
   */
  ruleOverprint: undefined,
  
  /*
   * The amount to left indent the rule above the first footnote in the column. Note: Valid when rule on is true.
   * @type {Mixed}
   */
  ruleLeftIndent: undefined,
  
  /*
   * The length of the rule above the first footnote in the column. Note: Valid when rule on is true.
   * @type {Mixed}
   */
  ruleWidth: undefined,
  
  /*
   * The vertical offset of the rule above the first footnote in the column. Note: Valid when rule on is true.
   * @type {Mixed}
   */
  ruleOffset: undefined,
  
  /*
   * If true, draws a rule above footnote text that continues from a previous column. Note: Valid when no splitting is false or undefined.
   * @type {Boolean}
   */
  continuingRuleOn: undefined,
  
  /*
   * The stroke type of the rule above continued footnote text. Note: Valid when continuing rule on is true. Can return: StrokeStyle or String.
   * @type {Mixed}
   */
  continuingRuleType: undefined,
  
  /*
   * The stroke weight of the rule above continued footnote text. (Range: 0 to 1000) Note: Valid when continuing rule on is true.
   * @type {Mixed}
   */
  continuingRuleLineWeight: undefined,
  
  /*
   * The swatch (color, gradient, tint, or mixed ink) applied to the rule above continued footnote text. Note: Valid when continuing rule on is true. Can return: Swatch or String.
   * @type {Mixed}
   */
  continuingRuleColor: undefined,
  
  /*
   * The swatch (color, gradient, tint, or mixed ink) applied to the stroke gap of the rule above continued footnote text. Note: Valid when continuing rule type is not solid. Can return: Swatch or String.
   * @type {Mixed}
   */
  continuingRuleGapColor: undefined,
  
  /*
   * The tint (as a percentage) of the rule above continued footnote text. (Range: 0 to 100) Note: Valid when continuing rule type is not solid.
   * @type {Number}
   */
  continuingRuleTint: undefined,
  
  /*
   * The tint (as a percentage) of the gap color of the rule above continued footnote text. (Range: 0 to 100) Note: Valid when continuing rule type is not solid.
   * @type {Number}
   */
  continuingRuleGapTint: undefined,
  
  /*
   * If true, overprints the rule above continued footnote text. Note: Valid when continuing rule on is true.
   * @type {Boolean}
   */
  continuingRuleOverprint: undefined,
  
  /*
   * If true, overprints the gap color of the rule above continued footnote text. Note: Valid when continuing rule type is not solid.
   * @type {Boolean}
   */
  continuingRuleGapOverprint: undefined,
  
  /*
   * The amount to left indent the rule above continued footnote text. Note: Valid when continuing rule on is true.
   * @type {Mixed}
   */
  continuingRuleLeftIndent: undefined,
  
  /*
   * The length of the rule above continued footnote text. Note: Valid when continuing rule on is true.
   * @type {Mixed}
   */
  continuingRuleWidth: undefined,
  
  /*
   * The vertical offset of the rule above continued footnote text. Note: Valid when continuing rule on is true.
   * @type {Mixed}
   */
  continuingRuleOffset: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the FootnoteOption.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {FootnoteOption}
   */
  getElements: function() {
    return new FootnoteOption();
  },
  
  /*
   * Retrieves the object specifier.
   * @returns {String}
   */
  toSpecifier: function() {
    return new String();
  },
  
  /*
   * Adds an event listener.
 *
   * @param {String} eventType The event type.
   * @param {Mixed} handler The event handler. Can accept: File or JavaScript Function.
   * @param {Boolean} [captures] This parameter is obsolete. 
   * @returns {EventListener}
   */
  addEventListener: function(eventType, handler, captures) {
    return new EventListener();
  },
  
  /*
   * Removes the event listener.
 *
   * @param {String} eventType The registered event type.
   * @param {Mixed} handler The registered event handler. Can accept: File or JavaScript Function.
   * @param {Boolean} [captures] This parameter is obsolete. 
   * @returns {Boolean}
   */
  removeEventListener: function(eventType, handler, captures) {
    return new Boolean();
  },
  
};
