/*
 * A paragraph style.
 */
var ParagraphStyle = {
  /*
   * If true, the style was imported from another document.
   * @type {Boolean}
   */
  imported: undefined,
  
  /*
   * Bullet character.
   * @type {Bullet}
   */
  bulletChar: undefined,
  
  /*
   * Numbering restart policies.
   * @type {NumberingRestartPolicy}
   */
  numberingRestartPolicies: undefined,
  
  /*
   * The unique ID of the ParagraphStyle.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the ParagraphStyle (a Document, Application or ParagraphStyleGroup).
   * @type {Mixed}
   */
  parent: undefined,
  
  /*
   * The index of the ParagraphStyle within its containing object.
   * @type {Number}
   */
  index: undefined,
  
  /*
   * A collection of nested line styles.
   * @type {NestedLineStyles}
   */
  nestedLineStyles: undefined,
  
  /*
   * A collection of nested GREP styles.
   * @type {NestedGrepStyles}
   */
  nestedGrepStyles: undefined,
  
  /*
   * A collection of nested styles.
   * @type {NestedStyles}
   */
  nestedStyles: undefined,
  
  /*
   * A collection of tab stops.
   * @type {TabStops}
   */
  tabStops: undefined,
  
  /*
   * A collection of style export tag maps.
   * @type {StyleExportTagMaps}
   */
  styleExportTagMaps: undefined,
  
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
   * A collection of preferences objects.
   * @type {Preferences}
   */
  preferences: undefined,
  
  /*
   * The name of the ParagraphStyle.
   * @type {String}
   */
  name: undefined,
  
  /*
   * The style that this style is based on. Can return: ParagraphStyle or String.
   * @type {Mixed}
   */
  basedOn: undefined,
  
  /*
   * The style to apply to new paragraphs that follow paragraphs tagged with this style.
   * @type {ParagraphStyle}
   */
  nextStyle: undefined,
  
  /*
   * The font applied to the ParagraphStyle, specified as either a font object or the name of font family. Can return: Font or String.
   * @type {Mixed}
   */
  appliedFont: undefined,
  
  /*
   * The name of the font style.
   * @type {String}
   */
  fontStyle: undefined,
  
  /*
   * The text size.
   * @type {Mixed}
   */
  pointSize: undefined,
  
  /*
   * The leading applied to the text. Can return: Unit or Leading enumerator.
   * @type {Mixed}
   */
  leading: undefined,
  
  /*
   * The type of pair kerning.
   * @type {String}
   */
  kerningMethod: undefined,
  
  /*
   * The amount by which to loosen or tighten a block of text, specified in thousands of an em.
   * @type {Number}
   */
  tracking: undefined,
  
  /*
   * The capitalization scheme.
   * @type {Capitalization}
   */
  capitalization: undefined,
  
  /*
   * The text position relative to the baseline.
   * @type {Position}
   */
  position: undefined,
  
  /*
   * If true, underlines the text.
   * @type {Boolean}
   */
  underline: undefined,
  
  /*
   * If true, draws a strikethrough line through the text.
   * @type {Boolean}
   */
  strikeThru: undefined,
  
  /*
   * If true, replaces specific character combinations (e.g., fl, fi) with ligature characters.
   * @type {Boolean}
   */
  ligatures: undefined,
  
  /*
   * If true, keeps the text on the same line.
   * @type {Boolean}
   */
  noBreak: undefined,
  
  /*
   * The horizontal scaling applied to the ParagraphStyle.
   * @type {Number}
   */
  horizontalScale: undefined,
  
  /*
   * The vertical scaling applied to the ParagraphStyle.
   * @type {Number}
   */
  verticalScale: undefined,
  
  /*
   * The baseline shift applied to the text.
   * @type {Mixed}
   */
  baselineShift: undefined,
  
  /*
   * The skew angle of the ParagraphStyle.
   * @type {Number}
   */
  skew: undefined,
  
  /*
   * The tint (as a percentage) of the fill color of the ParagraphStyle. (To specify a tint percentage, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.)
   * @type {Number}
   */
  fillTint: undefined,
  
  /*
   * The tint (as a percentage) of the stroke color of the ParagraphStyle. (To specify a tint percentage, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.)
   * @type {Number}
   */
  strokeTint: undefined,
  
  /*
   * The stroke weight applied to the characters of the text.
   * @type {Mixed}
   */
  strokeWeight: undefined,
  
  /*
   * If true, the stroke of the characters will overprint.
   * @type {Boolean}
   */
  overprintStroke: undefined,
  
  /*
   * If true, the fill color of the characters will overprint.
   * @type {Boolean}
   */
  overprintFill: undefined,
  
  /*
   * The figure style in OpenType fonts.
   * @type {OTFFigureStyle}
   */
  otfFigureStyle: undefined,
  
  /*
   * If true, uses ordinals in OpenType fonts.
   * @type {Boolean}
   */
  otfOrdinal: undefined,
  
  /*
   * If true, uses fractions in OpenType fonts.
   * @type {Boolean}
   */
  otfFraction: undefined,
  
  /*
   * If true, uses discretionary ligatures in OpenType fonts.
   * @type {Boolean}
   */
  otfDiscretionaryLigature: undefined,
  
  /*
   * If true, uses titling forms in OpenType fonts.
   * @type {Boolean}
   */
  otfTitling: undefined,
  
  /*
   * If true, uses contextual alternate forms in OpenType fonts.
   * @type {Boolean}
   */
  otfContextualAlternate: undefined,
  
  /*
   * If true, uses swash forms in OpenType fonts.
   * @type {Boolean}
   */
  otfSwash: undefined,
  
  /*
   * The swatch (color, gradient, tint, or mixed ink) applied to the underline stroke. . Can return: Swatch or String.
   * @type {Mixed}
   */
  underlineColor: undefined,
  
  /*
   * The swatch (color, gradient, tint, or mixed ink) applied to the gap of the underline stroke. Note: Valid when underline type is not solid. Can return: Swatch or String.
   * @type {Mixed}
   */
  underlineGapColor: undefined,
  
  /*
   * The underline stroke tint (as a percentage). (Range: 0 to 100)
   * @type {Number}
   */
  underlineTint: undefined,
  
  /*
   * The tint (as a percentage) of the gap color of the underline stroke. (Range: 0 to 100) Note: Valid when underline type is not solid.
   * @type {Number}
   */
  underlineGapTint: undefined,
  
  /*
   * If true, the underline stroke color will overprint.
   * @type {Boolean}
   */
  underlineOverprint: undefined,
  
  /*
   * If true, the gap color of the underline stroke will overprint.
   * @type {Boolean}
   */
  underlineGapOverprint: undefined,
  
  /*
   * The stroke type of the underline stroke. Can return: StrokeStyle or String.
   * @type {Mixed}
   */
  underlineType: undefined,
  
  /*
   * The amount by which to offset the underline from the text baseline.
   * @type {Mixed}
   */
  underlineOffset: undefined,
  
  /*
   * The stroke weight of the underline stroke.
   * @type {Mixed}
   */
  underlineWeight: undefined,
  
  /*
   * The swatch (color, gradient, tint, or mixed ink) applied to the strikethrough stroke. Can return: Swatch or String.
   * @type {Mixed}
   */
  strikeThroughColor: undefined,
  
  /*
   * The swatch (color, gradient, tint, or mixed ink) applied to the gap of the strikethrough stroke. Can return: Swatch or String.
   * @type {Mixed}
   */
  strikeThroughGapColor: undefined,
  
  /*
   * The tint (as a percentage) of the strikethrough stroke. (Range: 0 to 100)
   * @type {Number}
   */
  strikeThroughTint: undefined,
  
  /*
   * The tint (as a percentage) of the strikethrough stroke gap color. (Range: 0 to 100) Note: Valid when strike through type is not solid.
   * @type {Number}
   */
  strikeThroughGapTint: undefined,
  
  /*
   * If true, the strikethrough stroke will overprint.
   * @type {Boolean}
   */
  strikeThroughOverprint: undefined,
  
  /*
   * If true, the gap color of the strikethrough stroke will overprint. Note: Valid when strike through type is not solid.
   * @type {Boolean}
   */
  strikeThroughGapOverprint: undefined,
  
  /*
   * The stroke type of the strikethrough stroke. Can return: StrokeStyle or String.
   * @type {Mixed}
   */
  strikeThroughType: undefined,
  
  /*
   * The amount by which to offset the strikethrough stroke from the text baseline.
   * @type {Mixed}
   */
  strikeThroughOffset: undefined,
  
  /*
   * The stroke weight of the strikethrough stroke.
   * @type {Mixed}
   */
  strikeThroughWeight: undefined,
  
  /*
   * The swatch (color, gradient, tint, or mixed ink) applied to the fill of the ParagraphStyle. . Can also accept: String.
   * @type {Swatch}
   */
  fillColor: undefined,
  
  /*
   * The swatch (color, gradient, tint, or mixed ink) applied to the stroke of the ParagraphStyle. Can also accept: String.
   * @type {Swatch}
   */
  strokeColor: undefined,
  
  /*
   * The language of the text. Can return: LanguageWithVendors or Language. Can also accept: String.
   * @type {Mixed}
   */
  appliedLanguage: undefined,
  
  /*
   * Paragraph kashida width. 0 is none, 1 is short, 2 is medium, 3 is long
   * @type {Number}
   */
  paragraphKashidaWidth: undefined,
  
  /*
   * If true, aligns the baseline of the text to the baseline grid.
   * @type {Boolean}
   */
  alignToBaseline: undefined,
  
  /*
   * The amount to indent the first line.
   * @type {Mixed}
   */
  firstLineIndent: undefined,
  
  /*
   * The width of the left indent.
   * @type {Mixed}
   */
  leftIndent: undefined,
  
  /*
   * The width of the right indent.
   * @type {Mixed}
   */
  rightIndent: undefined,
  
  /*
   * The height of the paragraph space above.
   * @type {Mixed}
   */
  spaceBefore: undefined,
  
  /*
   * The height of the paragraph space below.
   * @type {Mixed}
   */
  spaceAfter: undefined,
  
  /*
   * If true or set to an enumeration value, balances ragged lines. Note: Not valid with a single-line text composer. Can return: Boolean or BalanceLinesStyle enumerator.
   * @type {Mixed}
   */
  balanceRaggedLines: undefined,
  
  /*
   * The paragraph alignment.
   * @type {Justification}
   */
  justification: undefined,
  
  /*
   * The alignment to use for lines that contain a single word.
   * @type {SingleWordJustification}
   */
  singleWordJustification: undefined,
  
  /*
   * The percent of the type size to use for auto leading. (Range: 0 to 500).
   * @type {Number}
   */
  autoLeading: undefined,
  
  /*
   * The number of lines to drop cap.
   * @type {Number}
   */
  dropCapLines: undefined,
  
  /*
   * The number of characters to drop cap.
   * @type {Number}
   */
  dropCapCharacters: undefined,
  
  /*
   * If true, keeps a specified number of lines together when the paragraph breaks across columns or text frames.
   * @type {Boolean}
   */
  keepLinesTogether: undefined,
  
  /*
   * If true, keeps all lines of the paragraph together. If false, allows paragraphs to break across pages or columns.
   * @type {Boolean}
   */
  keepAllLinesTogether: undefined,
  
  /*
   * The minimum number of lines to keep with the next paragraph.
   * @type {Number}
   */
  keepWithNext: undefined,
  
  /*
   * The minimum number of lines to keep together in a paragraph before allowing a page break.
   * @type {Number}
   */
  keepFirstLines: undefined,
  
  /*
   * The minimum number of lines to keep together in a paragraph after a page break.
   * @type {Number}
   */
  keepLastLines: undefined,
  
  /*
   * The location at which to start the paragraph.
   * @type {StartParagraph}
   */
  startParagraph: undefined,
  
  /*
   * The text composer to use to compose the text.
   * @type {String}
   */
  composer: undefined,
  
  /*
   * The minimum word spacing, specified as a percentage of the font word space value. Note: Valid only when text is justified. (Range: 0 to 1000)
   * @type {Number}
   */
  minimumWordSpacing: undefined,
  
  /*
   * The maximum word spacing, specified as a percentage of the font word space value. Note: Valid only when text is justified. (Range: 0 to 1000)
   * @type {Number}
   */
  maximumWordSpacing: undefined,
  
  /*
   * The desired word spacing, specified as a percentage of the font word space value. (Range: 0 to 1000)
   * @type {Number}
   */
  desiredWordSpacing: undefined,
  
  /*
   * The minimum letter spacing, specified as a percentge of the built-in space between letters in the font. (Range: -100 to 500) Note: Valid only when text is justified.
   * @type {Number}
   */
  minimumLetterSpacing: undefined,
  
  /*
   * The maximum letter spacing, specified as a percentge of the built-in space between letters in the font. (Range: -100 to 500) Note: Valid only when text is justified.
   * @type {Number}
   */
  maximumLetterSpacing: undefined,
  
  /*
   * The desired letter spacing, specified as a percentge of the built-in space between letters in the font. (Range: -100 to 500)
   * @type {Number}
   */
  desiredLetterSpacing: undefined,
  
  /*
   * The minimum width (as a percentage) of individual characters. (Range: 50 to 200)
   * @type {Number}
   */
  minimumGlyphScaling: undefined,
  
  /*
   * The maximum width (as a percentage) of individual characters. (Range: 50 to 200)
   * @type {Number}
   */
  maximumGlyphScaling: undefined,
  
  /*
   * The desired width (as a percentage) of individual characters. (Range: 50 to 200)
   * @type {Number}
   */
  desiredGlyphScaling: undefined,
  
  /*
   * If true, places a rule above the paragraph.
   * @type {Boolean}
   */
  ruleAbove: undefined,
  
  /*
   * If true, the paragraph rule above will overprint.
   * @type {Boolean}
   */
  ruleAboveOverprint: undefined,
  
  /*
   * The line weight of the rule above.
   * @type {Mixed}
   */
  ruleAboveLineWeight: undefined,
  
  /*
   * The tint (as a percentage) of the paragraph rule above. (Range: 0 to 100)
   * @type {Number}
   */
  ruleAboveTint: undefined,
  
  /*
   * The amount to offset the paragraph rule above from the baseline of the first line the paragraph.
   * @type {Mixed}
   */
  ruleAboveOffset: undefined,
  
  /*
   * The distance to indent the left edge of the paragraph rule above (based on either the text width or the column width of the first line in the paragraph.
   * @type {Mixed}
   */
  ruleAboveLeftIndent: undefined,
  
  /*
   * The distance to indent the right edge of the paragraph rule above (based on either the text width or the column width of the first line in the paragraph.
   * @type {Mixed}
   */
  ruleAboveRightIndent: undefined,
  
  /*
   * The basis (text width or column width) used to calculate the width of the paragraph rule above.
   * @type {RuleWidth}
   */
  ruleAboveWidth: undefined,
  
  /*
   * The swatch (color, gradient, tint, or mixed ink) applied to the paragraph rule above. Can return: Swatch or String.
   * @type {Mixed}
   */
  ruleAboveColor: undefined,
  
  /*
   * The swatch (color, gradient, tint, or mixed ink) applied to the stroke gap of the paragraph rule above. Note: Valid only when the paragraph rule above type is not solid. Can return: Swatch or String.
   * @type {Mixed}
   */
  ruleAboveGapColor: undefined,
  
  /*
   * The tint (as a percentage) of the stroke gap color of the paragraph rule. (Range: 0 to 100) Note: Valid only when the rule above type is not solid.
   * @type {Number}
   */
  ruleAboveGapTint: undefined,
  
  /*
   * If true, the stroke gap of the paragraph rule above will overprint. Note: Valid only the rule above type is not solid.
   * @type {Boolean}
   */
  ruleAboveGapOverprint: undefined,
  
  /*
   * The stroke type of the rule above the paragraph. Can return: StrokeStyle or String.
   * @type {Mixed}
   */
  ruleAboveType: undefined,
  
  /*
   * If true, applies a paragraph rule below.
   * @type {Boolean}
   */
  ruleBelow: undefined,
  
  /*
   * The line weight of the rule below.
   * @type {Mixed}
   */
  ruleBelowLineWeight: undefined,
  
  /*
   * The tint (as a percentage) of the paragraph rule below. (Range: 0 to 100)
   * @type {Number}
   */
  ruleBelowTint: undefined,
  
  /*
   * The amount to offset the the paragraph rule below from the baseline of the last line of the paragraph.
   * @type {Mixed}
   */
  ruleBelowOffset: undefined,
  
  /*
   * The distance to indent the left edge of the paragraph rule below (based on either the text width or the column width of the last line in the paragraph.
   * @type {Mixed}
   */
  ruleBelowLeftIndent: undefined,
  
  /*
   * The distance to indent the right edge of the paragraph rule below (based on either the text width or the column width of the last line in the paragraph.
   * @type {Mixed}
   */
  ruleBelowRightIndent: undefined,
  
  /*
   * The basis (text width or column width) used to calculate the width of the paragraph rule below.
   * @type {RuleWidth}
   */
  ruleBelowWidth: undefined,
  
  /*
   * The swatch (color, gradient, tint, or mixed ink) applied to the paragraph rule below. Can return: Swatch or String.
   * @type {Mixed}
   */
  ruleBelowColor: undefined,
  
  /*
   * The swatch (color, gradient, tint, or mixed ink) applied to the stroke gap of the paragraph rule below. Note: Valid only when the paragraph rule below type is not solid. Can return: Swatch or String.
   * @type {Mixed}
   */
  ruleBelowGapColor: undefined,
  
  /*
   * The tint (as a percentage) of the stroke gap color of the paragraph rule below. (Range: 0 to 100) Note: Valid only when the paragraph rule below type is not solid.
   * @type {Number}
   */
  ruleBelowGapTint: undefined,
  
  /*
   * The stroke type of the rule below the paragraph. Can return: StrokeStyle or String.
   * @type {Mixed}
   */
  ruleBelowType: undefined,
  
  /*
   * If true, allows hyphenation of capitalized words.
   * @type {Boolean}
   */
  hyphenateCapitalizedWords: undefined,
  
  /*
   * If true, allows hyphenation.
   * @type {Boolean}
   */
  hyphenation: undefined,
  
  /*
   * The minimum number of letters at the end of a word that can be broken by a hyphen.
   * @type {Number}
   */
  hyphenateBeforeLast: undefined,
  
  /*
   * The mininum number of letters at the beginning of a word that can be broken by a hyphen.
   * @type {Number}
   */
  hyphenateAfterFirst: undefined,
  
  /*
   * The minimum number of letters a word must have in order to qualify for hyphenation.
   * @type {Number}
   */
  hyphenateWordsLongerThan: undefined,
  
  /*
   * The maximum number of hyphens that can appear on consecutive lines. To specify unlimited consecutive lines, use zero.
   * @type {Number}
   */
  hyphenateLadderLimit: undefined,
  
  /*
   * The amount of white space allowed at the end of a line of non-justified text before hypenation begins. Note: Valid when composer is single-line composer.
   * @type {Mixed}
   */
  hyphenationZone: undefined,
  
  /*
   * The relative desirability of better spacing vs. fewer hyphens. A lower value results in greater use of hyphens. (Range: 0 to 100)
   * @type {Number}
   */
  hyphenWeight: undefined,
  
  /*
   * The character style to apply to the drop cap. Can also accept: String.
   * @type {CharacterStyle}
   */
  dropCapStyle: undefined,
  
  /*
   * The amount to indent the last line in the paragraph.
   * @type {Mixed}
   */
  lastLineIndent: undefined,
  
  /*
   * If true, allows hyphenation in the last word in a paragraph. Note: Valid only when hyphenation is true.
   * @type {Boolean}
   */
  hyphenateLastWord: undefined,
  
  /*
   * If true, use a slashed zeroes in OpenType fonts.
   * @type {Boolean}
   */
  otfSlashedZero: undefined,
  
  /*
   * If true, use historical forms in OpenType fonts.
   * @type {Boolean}
   */
  otfHistorical: undefined,
  
  /*
   * The stylistic sets to use in OpenType fonts.
   * @type {Number}
   */
  otfStylisticSets: undefined,
  
  /*
   * The length (for a linear gradient) or radius (for a radial gradient) applied to the fill of the text.
   * @type {Number}
   */
  gradientFillLength: undefined,
  
  /*
   * The angle of a linear gradient applied to the fill of the text. (Range: -180 to 180)
   * @type {Number}
   */
  gradientFillAngle: undefined,
  
  /*
   * The length (for a linear gradient) or radius (for a radial gradient) applied to the stroke of the text.
   * @type {Number}
   */
  gradientStrokeLength: undefined,
  
  /*
   * The angle of a linear gradient applied to the stroke of the text. (Range: -180 to 180)
   * @type {Number}
   */
  gradientStrokeAngle: undefined,
  
  /*
   * The starting point (in page coordinates) of a gradient applied to the fill of the text, in the format [x, y].
   * @type {Mixed}
   */
  gradientFillStart: undefined,
  
  /*
   * The starting point (in page coordinates) of a gradient applied to the stroke of the text, in the format [x, y].
   * @type {Mixed}
   */
  gradientStrokeStart: undefined,
  
  /*
   * If the first line in the paragraph should be kept with the last line of previous paragraph.
   * @type {Boolean}
   */
  keepWithPrevious: undefined,
  
  /*
   * The number of columns a paragraph spans or the number of split columns. Can return: Short Integer (1 - 40) or SpanColumnCountOptions enumerator.
   * @type {Mixed}
   */
  spanSplitColumnCount: undefined,
  
  /*
   * Whether a paragraph should be a single column, span columns or split columns
   * @type {SpanColumnTypeOptions}
   */
  spanColumnType: undefined,
  
  /*
   * The inside gutter if the paragraph splits columns
   * @type {Mixed}
   */
  splitColumnInsideGutter: undefined,
  
  /*
   * The outside gutter if the paragraph splits columns
   * @type {Mixed}
   */
  splitColumnOutsideGutter: undefined,
  
  /*
   * The minimum space before a span or a split column
   * @type {Mixed}
   */
  spanColumnMinSpaceBefore: undefined,
  
  /*
   * The minimum space after a span or a split column
   * @type {Mixed}
   */
  spanColumnMinSpaceAfter: undefined,
  
  /*
   * If true, the rule below will overprint.
   * @type {Boolean}
   */
  ruleBelowOverprint: undefined,
  
  /*
   * If true, the gap color of the rule below will overprint.
   * @type {Boolean}
   */
  ruleBelowGapOverprint: undefined,
  
  /*
   * Details about the drop cap based on the glyph outlines. 1 = left side bearing. 2 = descenders. 0x100,0x200,0x400 are used for Japanese frame grid.
   * @type {Number}
   */
  dropcapDetail: undefined,
  
  /*
   * If true, allows the last word in a text column to be hyphenated.
   * @type {Boolean}
   */
  hyphenateAcrossColumns: undefined,
  
  /*
   * If true, forces the rule above the paragraph to remain in the frame bounds. Note: Valid only when rule above is true.
   * @type {Boolean}
   */
  keepRuleAboveInFrame: undefined,
  
  /*
   * If true, ignores optical edge alignment for the paragraph.
   * @type {Boolean}
   */
  ignoreEdgeAlignment: undefined,
  
  /*
   * If true, uses mark positioning in OpenType fonts.
   * @type {Boolean}
   */
  otfMark: undefined,
  
  /*
   * If true, uses localized forms in OpenType fonts.
   * @type {Boolean}
   */
  otfLocale: undefined,
  
  /*
   * The OpenType positional form.
   * @type {PositionalForms}
   */
  positionalForm: undefined,
  
  /*
   * The color to use for preview, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  previewColor: undefined,
  
  /*
   * Paragraph direction.
   * @type {ParagraphDirectionOptions}
   */
  paragraphDirection: undefined,
  
  /*
   * Paragraph justification.
   * @type {ParagraphJustificationOptions}
   */
  paragraphJustification: undefined,
  
  /*
   * The limit of the ratio of stroke width to miter length before a miter (pointed) join becomes a bevel (squared-off) join.
   * @type {Number}
   */
  miterLimit: undefined,
  
  /*
   * The stroke alignment applied to the text.
   * @type {TextStrokeAlign}
   */
  strokeAlignment: undefined,
  
  /*
   * The stroke join type applied to the characters of the text.
   * @type {OutlineJoin}
   */
  endJoin: undefined,
  
  /*
   * If true, use overlapping swash forms in OpenType fonts
   * @type {Boolean}
   */
  otfOverlapSwash: undefined,
  
  /*
   * If true, use stylistic alternate forms in OpenType fonts
   * @type {Boolean}
   */
  otfStylisticAlternate: undefined,
  
  /*
   * If true, use alternate justification forms in OpenType fonts
   * @type {Boolean}
   */
  otfJustificationAlternate: undefined,
  
  /*
   * If true, use stretched alternate forms in OpenType fonts
   * @type {Boolean}
   */
  otfStretchedAlternate: undefined,
  
  /*
   * The direction of the character.
   * @type {CharacterDirectionOptions}
   */
  characterDirection: undefined,
  
  /*
   * The keyboard direction of the character.
   * @type {CharacterDirectionOptions}
   */
  keyboardDirection: undefined,
  
  /*
   * The digits type.
   * @type {DigitsTypeOptions}
   */
  digitsType: undefined,
  
  /*
   * Use of Kashidas for justification
   * @type {KashidasOptions}
   */
  kashidas: undefined,
  
  /*
   * Position of diacriticical characters.
   * @type {DiacriticPositionOptions}
   */
  diacriticPosition: undefined,
  
  /*
   * The x (horizontal) offset for diacritic adjustment.
   * @type {Number}
   */
  xOffsetDiacritic: undefined,
  
  /*
   * The y (vertical) offset for diacritic adjustment.
   * @type {Number}
   */
  yOffsetDiacritic: undefined,
  
  /*
   * A list of the tab stops in the paragraph. Can return: Array of Arrays of Property Name/Value Pairs.
   * @type {Mixed}
   */
  tabList: undefined,
  
  /*
   * If true, aligns only the first line to the frame grid or baseline grid. If false, aligns all lines to the grid.
   * @type {Boolean}
   */
  gridAlignFirstLineOnly: undefined,
  
  /*
   * The alignment to the frame grid or baseline grid.
   * @type {GridAlignment}
   */
  gridAlignment: undefined,
  
  /*
   * The manual gyoudori setting.
   * @type {Number}
   */
  gridGyoudori: undefined,
  
  /*
   * The number of half-width characters at or below which the characters automatically run horizontally in vertical text.
   * @type {Number}
   */
  autoTcy: undefined,
  
  /*
   * If true, auto tcy includes Roman characters.
   * @type {Boolean}
   */
  autoTcyIncludeRoman: undefined,
  
  /*
   * The kinsoku set that determines legitimate line breaks. Can return: KinsokuTable, KinsokuSet enumerator or String.
   * @type {Mixed}
   */
  kinsokuSet: undefined,
  
  /*
   * The type of kinsoku processing for preventing kinsoku characters from beginning or ending a line. Note: Valid only when a kinsoku set is defined.
   * @type {KinsokuType}
   */
  kinsokuType: undefined,
  
  /*
   * The type of hanging punctuation to allow. Note: Valid only when a kinsoku set is in effect.
   * @type {KinsokuHangTypes}
   */
  kinsokuHangType: undefined,
  
  /*
   * If true, adds the double period (..), ellipse (...), and double hyphen (--) to the selected kinsoku set. Note: Valid only when a kinsoku set is in effect.
   * @type {Boolean}
   */
  bunriKinshi: undefined,
  
  /*
   * The mojikumi table. For information, see mojikumi table defaults. Can return: MojikumiTable, String or MojikumiTableDefaults enumerator.
   * @type {Mixed}
   */
  mojikumi: undefined,
  
  /*
   * If true, disallows line breaks in numbers. If false, lines can break between digits in multi-digit numbers.
   * @type {Boolean}
   */
  rensuuji: undefined,
  
  /*
   * If true, rotates Roman characters in vertical text.
   * @type {Boolean}
   */
  rotateSingleByteCharacters: undefined,
  
  /*
   * The point from which leading is measured from line to line.
   * @type {LeadingModel}
   */
  leadingModel: undefined,
  
  /*
   * The alignment of small characters to the largest character in the line.
   * @type {CharacterAlignment}
   */
  characterAlignment: undefined,
  
  /*
   * The amount of horizontal character compression.
   * @type {Number}
   */
  tsume: undefined,
  
  /*
   * The amount of space before each character.
   * @type {Number}
   */
  leadingAki: undefined,
  
  /*
   * The amount of space after each character.
   * @type {Number}
   */
  trailingAki: undefined,
  
  /*
   * The rotation angle (in degrees) of individual characters. Note: The rotation is counterclockwise.
   * @type {Number}
   */
  characterRotation: undefined,
  
  /*
   * The number of grid squares in which to arrange the text.
   * @type {Number}
   */
  jidori: undefined,
  
  /*
   * The amount (as a percentage) of shatai obliquing to apply.
   * @type {Number}
   */
  shataiMagnification: undefined,
  
  /*
   * The shatai lens angle (in degrees).
   * @type {Number}
   */
  shataiDegreeAngle: undefined,
  
  /*
   * If true, applies shatai rotation.
   * @type {Boolean}
   */
  shataiAdjustRotation: undefined,
  
  /*
   * If true, adjusts shatai tsume.
   * @type {Boolean}
   */
  shataiAdjustTsume: undefined,
  
  /*
   * If true, makes the character horizontal in vertical text.
   * @type {Boolean}
   */
  tatechuyoko: undefined,
  
  /*
   * The horizontal offset for horizontal characters in vertical text.
   * @type {Number}
   */
  tatechuyokoXOffset: undefined,
  
  /*
   * The vertical offset for horizontal characters in vertical text.
   * @type {Number}
   */
  tatechuyokoYOffset: undefined,
  
  /*
   * The swatch (color, gradient, tint, or mixed ink) applied to the fill of kenten characters. Can return: Swatch or String.
   * @type {Mixed}
   */
  kentenFillColor: undefined,
  
  /*
   * The swatch (color, gradient, tint, or mixed ink) applied to the stroke of kenten characters. Can return: Swatch or String.
   * @type {Mixed}
   */
  kentenStrokeColor: undefined,
  
  /*
   * The fill tint (as a percentage) of kenten characters. (Range: 0 to 100)
   * @type {Number}
   */
  kentenTint: undefined,
  
  /*
   * The stroke tint (as a percentage) of kenten characters. (Range: 0 to 100)
   * @type {Number}
   */
  kentenStrokeTint: undefined,
  
  /*
   * The stroke weight (in points) of kenten characters.
   * @type {Number}
   */
  kentenWeight: undefined,
  
  /*
   * The method of overprinting the kenten fill.
   * @type {AdornmentOverprint}
   */
  kentenOverprintFill: undefined,
  
  /*
   * The method of overprinting the kenten stroke.
   * @type {AdornmentOverprint}
   */
  kentenOverprintStroke: undefined,
  
  /*
   * The style of kenten characters.
   * @type {KentenCharacter}
   */
  kentenKind: undefined,
  
  /*
   * The distance between kenten characters and their parent characters.
   * @type {Number}
   */
  kentenPlacement: undefined,
  
  /*
   * The alignment of kenten characters relative to the parent characters.
   * @type {KentenAlignment}
   */
  kentenAlignment: undefined,
  
  /*
   * The kenten position relative to the parent character.
   * @type {RubyKentenPosition}
   */
  kentenPosition: undefined,
  
  /*
   * The font to use for kenten characters. Can return: Font or String.
   * @type {Mixed}
   */
  kentenFont: undefined,
  
  /*
   * The font style of kenten characters. Can return: String or NothingEnum enumerator.
   * @type {Mixed}
   */
  kentenFontStyle: undefined,
  
  /*
   * The size (in points) of kenten characters.
   * @type {Number}
   */
  kentenFontSize: undefined,
  
  /*
   * The horizontal size of kenten characters as a percent of the original size.
   * @type {Number}
   */
  kentenXScale: undefined,
  
  /*
   * The vertical size of kenten charachers as a percent of the original size.
   * @type {Number}
   */
  kentenYScale: undefined,
  
  /*
   * The character used for kenten. Note: Valid only when kenten kind is custom.
   * @type {String}
   */
  kentenCustomCharacter: undefined,
  
  /*
   * The character set used for the custom kenten character. Note: Valid only when kenten kind is custom.
   * @type {KentenCharacterSet}
   */
  kentenCharacterSet: undefined,
  
  /*
   * The swatch (color, gradient, tint, or mixed ink) applied to the fill of ruby characters. Can return: Swatch or String.
   * @type {Mixed}
   */
  rubyFill: undefined,
  
  /*
   * The swatch (color, gradient, tint, or mixed ink) applied to the stroke of ruby characters. Can return: Swatch or String.
   * @type {Mixed}
   */
  rubyStroke: undefined,
  
  /*
   * The tint (as a percentage) of the ruby fill color. (Range: 0 to 100)
   * @type {Number}
   */
  rubyTint: undefined,
  
  /*
   * The stroke weight (in points) of ruby characters.
   * @type {Number}
   */
  rubyWeight: undefined,
  
  /*
   * The method of overprinting the ruby fill.
   * @type {AdornmentOverprint}
   */
  rubyOverprintFill: undefined,
  
  /*
   * The method of overprinting the ruby stroke.
   * @type {AdornmentOverprint}
   */
  rubyOverprintStroke: undefined,
  
  /*
   * The stroke tint (as a percentage) of ruby characters.
   * @type {Number}
   */
  rubyStrokeTint: undefined,
  
  /*
   * The font applied to ruby characters. Can return: Font or String.
   * @type {Mixed}
   */
  rubyFont: undefined,
  
  /*
   * The font style of ruby characters. Can return: String or NothingEnum enumerator.
   * @type {Mixed}
   */
  rubyFontStyle: undefined,
  
  /*
   * The size (in points) of ruby characters.
   * @type {Number}
   */
  rubyFontSize: undefined,
  
  /*
   * If true, uses OpenType Pro fonts for ruby.
   * @type {Boolean}
   */
  rubyOpenTypePro: undefined,
  
  /*
   * The horizontal size of ruby characters, specified as a percent of the original size.
   * @type {Number}
   */
  rubyXScale: undefined,
  
  /*
   * The vertical size of ruby characters, specified as a percent of the original size.
   * @type {Number}
   */
  rubyYScale: undefined,
  
  /*
   * The ruby type.
   * @type {RubyTypes}
   */
  rubyType: undefined,
  
  /*
   * The ruby alignment.
   * @type {RubyAlignments}
   */
  rubyAlignment: undefined,
  
  /*
   * The position of ruby characters relative to the parent text.
   * @type {RubyKentenPosition}
   */
  rubyPosition: undefined,
  
  /*
   * The amount of horizontal space between ruby and parent characters.
   * @type {Number}
   */
  rubyXOffset: undefined,
  
  /*
   * The amount of vertical space between ruby and parent characters.
   * @type {Number}
   */
  rubyYOffset: undefined,
  
  /*
   * The ruby spacing relative to the parent text.
   * @type {RubyParentSpacing}
   */
  rubyParentSpacing: undefined,
  
  /*
   * If true, auto aligns ruby.
   * @type {Boolean}
   */
  rubyAutoAlign: undefined,
  
  /*
   * If true, constrains ruby overhang to the specified amount. For information on specifying an amount, see ruby parent overhang amount.
   * @type {Boolean}
   */
  rubyOverhang: undefined,
  
  /*
   * If true, automatically scales ruby to the specified percent of parent text size. For information on specifying a percent, see ruby parent scaling percent.
   * @type {Boolean}
   */
  rubyAutoScaling: undefined,
  
  /*
   * The amount (as a percentage) to scale the parent text size to determine the ruby text size.
   * @type {Number}
   */
  rubyParentScalingPercent: undefined,
  
  /*
   * The amount by which ruby characters can overhang the parent text.
   * @type {RubyOverhang}
   */
  rubyParentOverhangAmount: undefined,
  
  /*
   * If true, turns on warichu.
   * @type {Boolean}
   */
  warichu: undefined,
  
  /*
   * The amount (as a percentage) to scale parent text size to determine warichu size.
   * @type {Number}
   */
  warichuSize: undefined,
  
  /*
   * The number of lines of warichu within a single normal line.
   * @type {Number}
   */
  warichuLines: undefined,
  
  /*
   * The gap between lines of warichu characters.
   * @type {Number}
   */
  warichuLineSpacing: undefined,
  
  /*
   * The warichu alignment.
   * @type {WarichuAlignment}
   */
  warichuAlignment: undefined,
  
  /*
   * The minimum number of characters allowed after a line break.
   * @type {Number}
   */
  warichuCharsAfterBreak: undefined,
  
  /*
   * The minimum number of characters allowed before a line break.
   * @type {Number}
   */
  warichuCharsBeforeBreak: undefined,
  
  /*
   * If true, kerns according to proportional CJK metrics in OpenType fonts.
   * @type {Boolean}
   */
  otfProportionalMetrics: undefined,
  
  /*
   * If true, switches hiragana fonts, which have different glyphs for horizontal and vertical.
   * @type {Boolean}
   */
  otfHVKana: undefined,
  
  /*
   * If true, applies italics to half-width alphanumerics.
   * @type {Boolean}
   */
  otfRomanItalics: undefined,
  
  /*
   * If true, the line changes size when characters are scaled.
   * @type {Boolean}
   */
  scaleAffectsLineHeight: undefined,
  
  /*
   * If true, uses grid tracking to track non-Roman characters in CJK grids.
   * @type {Boolean}
   */
  cjkGridTracking: undefined,
  
  /*
   * The glyph variant to substitute for standard glyphs.
   * @type {AlternateGlyphForms}
   */
  glyphForm: undefined,
  
  /*
   * If true, the gyoudori mode applies to the entire paragraph. If false, the gyoudori mode applies to each line in the paragraph.
   * @type {Boolean}
   */
  paragraphGyoudori: undefined,
  
  /*
   * The number of digits included in auto tcy (tate-chuu-yoko) in ruby.
   * @type {Number}
   */
  rubyAutoTcyDigits: undefined,
  
  /*
   * If true, includes Roman characters in auto tcy (tate-chuu-yoko) in ruby.
   * @type {Boolean}
   */
  rubyAutoTcyIncludeRoman: undefined,
  
  /*
   * If true, automatically scales glyphs in auto tcy (tate-chuu-yoko) in ruby to fit one em.
   * @type {Boolean}
   */
  rubyAutoTcyAutoScale: undefined,
  
  /*
   * If true, ideographic spaces will not wrap to the next line like text characters.
   * @type {Boolean}
   */
  treatIdeographicSpaceAsSpace: undefined,
  
  /*
   * If true, words unassociated with a hyphenation dictionary can break to the next line on any character.
   * @type {Boolean}
   */
  allowArbitraryHyphenation: undefined,
  
  /*
   * List type for bullets and numbering.
   * @type {ListType}
   */
  bulletsAndNumberingListType: undefined,
  
  /*
   * The character style to be used for the text after string. Can return: CharacterStyle or String.
   * @type {Mixed}
   */
  bulletsCharacterStyle: undefined,
  
  /*
   * The character style to be used for the number string. Can return: CharacterStyle or String.
   * @type {Mixed}
   */
  numberingCharacterStyle: undefined,
  
  /*
   * The number string expression for numbering.
   * @type {String}
   */
  numberingExpression: undefined,
  
  /*
   * The text after string expression for bullets.
   * @type {String}
   */
  bulletsTextAfter: undefined,
  
  /*
   * The list to be part of. Can return: NumberingList or String.
   * @type {Mixed}
   */
  appliedNumberingList: undefined,
  
  /*
   * The level of the paragraph.
   * @type {Number}
   */
  numberingLevel: undefined,
  
  /*
   * Numbering format options. Can return: NumberingStyle enumerator or String.
   * @type {Mixed}
   */
  numberingFormat: undefined,
  
  /*
   * Continue the numbering at this level.
   * @type {Boolean}
   */
  numberingContinue: undefined,
  
  /*
   * Determines starting number in a numbered list.
   * @type {Number}
   */
  numberingStartAt: undefined,
  
  /*
   * If true, apply the numbering restart policy.
   * @type {Boolean}
   */
  numberingApplyRestartPolicy: undefined,
  
  /*
   * The alignment of the bullet character.
   * @type {ListAlignment}
   */
  bulletsAlignment: undefined,
  
  /*
   * The alignment of the number.
   * @type {ListAlignment}
   */
  numberingAlignment: undefined,
  
  /*
   * A property that can be set to any string.
   * @type {String}
   */
  label: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Deletes the style.
 *
   * @param {ParagraphStyle} [replacingWith] The style to apply in place of the deleted style. 
   */
  remove: function(replacingWith) {
  },
  
  /*
   * Duplicates the ParagraphStyle.
   * @returns {ParagraphStyle}
   */
  duplicate: function() {
    return new ParagraphStyle();
  },
  
  /*
   * Moves the style to the specified location.
 *
   * @param {LocationOptions} to The location relative to the reference object or within the containing object.
   * @param {Mixed} [reference] The reference object. Note: Required when the to parameter specifies before or after. Can accept: ParagraphStyle, ParagraphStyleGroup, CharacterStyle, CharacterStyleGroup, CellStyle, CellStyleGroup, TableStyle, TableStyleGroup, Document or Application. 
   * @returns {ParagraphStyle}
   */
  move: function(to, reference) {
    return new ParagraphStyle();
  },
  
  /*
   * Convert bullets and numbering to text.
   */
  convertBulletsAndNumberingToText: function() {
  },
  
  /*
   * Sets the label to the value associated with the specified key.
 *
   * @param {String} key The key.
   * @param {String} value The value.
   */
  insertLabel: function(key, value) {
  },
  
  /*
   * Gets the label value associated with the specified key.
 *
   * @param {String} key The key.
   * @returns {String}
   */
  extractLabel: function(key) {
    return new String();
  },
  
  /*
   * Generates a string which, if executed, will return the ParagraphStyle.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {ParagraphStyle}
   */
  getElements: function() {
    return new ParagraphStyle();
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
