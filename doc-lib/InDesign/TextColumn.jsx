/*
 * A text column.
 */
var TextColumn = {
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
   * The XML elements associated with the TextColumn.
   * @type {XMLItem}
   */
  associatedXMLElements: undefined,
  
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * The index of the text in the collection or parent object.
   * @type {Number}
   */
  index: undefined,
  
  /*
   * The story that contains the text.
   * @type {Story}
   */
  parentStory: undefined,
  
  /*
   * An array of the text frames that contain the text. Can return: Array of TextFrames or TextPaths.
   * @type {Mixed}
   */
  parentTextFrames: undefined,
  
  /*
   * The maximum ascent of any character in the text.
   * @type {Mixed}
   */
  ascent: undefined,
  
  /*
   * The maximum descent of any character in the text.
   * @type {Mixed}
   */
  descent: undefined,
  
  /*
   * The vertical offset of the text.
   * @type {Mixed}
   */
  baseline: undefined,
  
  /*
   * The horizontal offset of the text.
   * @type {Mixed}
   */
  horizontalOffset: undefined,
  
  /*
   * If true, the applied style has been overridden with additional attributes.
   * @type {Boolean}
   */
  styleOverridden: undefined,
  
  /*
   * Vertical offset of the end of the text.
   * @type {Mixed}
   */
  endBaseline: undefined,
  
  /*
   * Horizontal offset of the end of the text.
   * @type {Mixed}
   */
  endHorizontalOffset: undefined,
  
  /*
   * The applied character styles dictated by nested styles.
   * @type {CharacterStyle}
   */
  appliedNestedStyles: undefined,
  
  /*
   * Lists all page items contained by the TextColumn.
   * @type {PageItem}
   */
  allPageItems: undefined,
  
  /*
   * Lists all graphics contained by the TextColumn.
   * @type {Graphic}
   */
  allGraphics: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the TextColumn (a XmlStory, TextPath, TextFrame, Text, InsertionPoint, TextStyleRange, Paragraph, TextColumn, Line, Word, Character, Story, Cell, XMLElement, Footnote, Note, Change or HiddenText).
   * @type {Mixed}
   */
  parent: undefined,
  
  /*
   * A collection of text objects.
   * @type {Texts}
   */
  texts: undefined,
  
  /*
   * A collection of characters.
   * @type {Characters}
   */
  characters: undefined,
  
  /*
   * A collection of words.
   * @type {Words}
   */
  words: undefined,
  
  /*
   * A collection of lines.
   * @type {Lines}
   */
  lines: undefined,
  
  /*
   * A collection of text columns.
   * @type {TextColumns}
   */
  textColumns: undefined,
  
  /*
   * A collection of paragraphs.
   * @type {Paragraphs}
   */
  paragraphs: undefined,
  
  /*
   * A collection of insertion points.
   * @type {InsertionPoints}
   */
  insertionPoints: undefined,
  
  /*
   * A collection of text style ranges.
   * @type {TextStyleRanges}
   */
  textStyleRanges: undefined,
  
  /*
   * A collection of footnotes.
   * @type {Footnotes}
   */
  footnotes: undefined,
  
  /*
   * A collection of text variable instances.
   * @type {TextVariableInstances}
   */
  textVariableInstances: undefined,
  
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
   * A collection of tables.
   * @type {Tables}
   */
  tables: undefined,
  
  /*
   * A collection of ellipses.
   * @type {Ovals}
   */
  ovals: undefined,
  
  /*
   * The spline items collection.
   * @type {SplineItems}
   */
  splineItems: undefined,
  
  /*
   * The page items collection, which can be used to process all page items in a container (such as a document, page, or group), regardless of type.
   * @type {PageItems}
   */
  pageItems: undefined,
  
  /*
   * A collection of rectangles.
   * @type {Rectangles}
   */
  rectangles: undefined,
  
  /*
   * A collection of graphic lines.
   * @type {GraphicLines}
   */
  graphicLines: undefined,
  
  /*
   * A collection of text frames.
   * @type {TextFrames}
   */
  textFrames: undefined,
  
  /*
   * A collection of polygons.
   * @type {Polygons}
   */
  polygons: undefined,
  
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
   * A collection of notes.
   * @type {Notes}
   */
  notes: undefined,
  
  /*
   * A collection of groups.
   * @type {Groups}
   */
  groups: undefined,
  
  /*
   * EPSTexts
   * @type {EPSTexts}
   */
  epstexts: undefined,
  
  /*
   * A collection of form fields.
   * @type {FormFields}
   */
  formFields: undefined,
  
  /*
   * A collection of buttons.
   * @type {Buttons}
   */
  buttons: undefined,
  
  /*
   * A collection of multi-state objects.
   * @type {MultiStateObjects}
   */
  multiStateObjects: undefined,
  
  /*
   * A collection of checkboxes.
   * @type {CheckBoxes}
   */
  checkBoxes: undefined,
  
  /*
   * A collection of comboboxes.
   * @type {ComboBoxes}
   */
  comboBoxes: undefined,
  
  /*
   * A collection of listboxes.
   * @type {ListBoxes}
   */
  listBoxes: undefined,
  
  /*
   * A collection of radio buttons.
   * @type {RadioButtons}
   */
  radioButtons: undefined,
  
  /*
   * A collection of text boxes.
   * @type {TextBoxes}
   */
  textBoxes: undefined,
  
  /*
   * A collection of signature fields.
   * @type {SignatureFields}
   */
  signatureFields: undefined,
  
  /*
   * A collection of hidden text objects.
   * @type {HiddenTexts}
   */
  hiddenTexts: undefined,
  
  /*
   * A collection of preferences objects.
   * @type {Preferences}
   */
  preferences: undefined,
  
  /*
   * A list of the tab stops in the paragraph. Can return: Array of Arrays of Property Name/Value Pairs.
   * @type {Mixed}
   */
  tabList: undefined,
  
  /*
   * The amount of space to add or remove between characters, specified in thousands of an em.
   * @type {Number}
   */
  kerningValue: undefined,
  
  /*
   * The font applied to the TextColumn, specified as either a font object or the name of font family. Can return: Font or String.
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
   * The horizontal scaling applied to the TextColumn.
   * @type {Number}
   */
  horizontalScale: undefined,
  
  /*
   * The vertical scaling applied to the TextColumn.
   * @type {Number}
   */
  verticalScale: undefined,
  
  /*
   * The baseline shift applied to the text.
   * @type {Mixed}
   */
  baselineShift: undefined,
  
  /*
   * The skew angle of the TextColumn.
   * @type {Number}
   */
  skew: undefined,
  
  /*
   * The tint (as a percentage) of the fill color of the TextColumn. (To specify a tint percentage, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.)
   * @type {Number}
   */
  fillTint: undefined,
  
  /*
   * The tint (as a percentage) of the stroke color of the TextColumn. (To specify a tint percentage, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.)
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
   * The swatch (color, gradient, tint, or mixed ink) applied to the fill of the TextColumn. . Can also accept: String.
   * @type {Swatch}
   */
  fillColor: undefined,
  
  /*
   * The swatch (color, gradient, tint, or mixed ink) applied to the stroke of the TextColumn. Can also accept: String.
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
   * The contents of the text. Can return: String or SpecialCharacters enumerator.
   * @type {Mixed}
   */
  contents: undefined,
  
  /*
   * The paragraph style applied to the text. Can also accept: String.
   * @type {ParagraphStyle}
   */
  appliedParagraphStyle: undefined,
  
  /*
   * The character style applied to the text. Can also accept: String.
   * @type {CharacterStyle}
   */
  appliedCharacterStyle: undefined,
  
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
   * The applied conditions.
   * @type {Condition}
   */
  appliedConditions: undefined,
  
  /*
   * OpenType features. Can return: Array of Array of 2 Strings or Long Integers.
   * @type {Mixed}
   */
  opentypeFeatures: undefined,
  
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
   * If true, ruby is on.
   * @type {Boolean}
   */
  rubyFlag: undefined,
  
  /*
   * The ruby string contents.
   * @type {String}
   */
  rubyString: undefined,
  
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
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Tag the object or the parent story using default tags defined in XML preference.
   */
  autoTag: function() {
  },
  
  /*
   * Associates the page item with the specified XML element while preserving existing content.
 *
   * @param {XMLElement} using The XML element.
   */
  markup: function(using) {
  },
  
  /*
   * Deletes the TextColumn.
   */
  remove: function() {
  },
  
  /*
   * Converts the text to a table.
 *
   * @param {String} [columnSeparator] The character that starts a new column in the new table. 
   * @param {String} [rowSeparator] The character starts a new row in the new table. 
   * @param {Number} [numberOfColumns] The number of columns in the table. Note: Valid only when the column and row separator characters are the same. 
   * @returns {Table}
   */
  convertToTable: function(columnSeparator, rowSeparator, numberOfColumns) {
    return new Table();
  },
  
  /*
   * Sets the case of the text.
 *
   * @param {ChangecaseMode} using The text case option.
   */
  changecase: function(using) {
  },
  
  /*
   * Clears the specified types of override.
 *
   * @param {OverrideType} [overridesToClear] The types of override to clear. 
   */
  clearOverrides: function(overridesToClear) {
  },
  
  /*
   * Recomposes the text in the TextColumn.
   */
  recompose: function() {
  },
  
  /*
   * Jump to the text range.
   */
  showText: function() {
  },
  
  /*
   * Apply a paragraph style.
 *
   * @param {ParagraphStyle} using The paragraph style to apply.
   * @param {Boolean} [clearingOverrides] If true, clear any text attributes before applying the style. 
   */
  applyParagraphStyle: function(using, clearingOverrides) {
  },
  
  /*
   * Apply a character style.
 *
   * @param {CharacterStyle} using The character style to apply.
   */
  applyCharacterStyle: function(using) {
  },
  
  /*
   * Duplicates the text in the specified location.
 *
   * @param {LocationOptions} to The location relative to the reference object or within the containing object.
   * @param {Mixed} [reference] The reference object. Note: Required when the to parameter specifies before or after. Can accept: Text, Story, Cell, Row, Column, Table or PageItem. 
   * @returns {Text}
   */
  duplicate: function(to, reference) {
    return new Text();
  },
  
  /*
   * Moves the text to the specified location.
 *
   * @param {LocationOptions} to The location relative to the reference object or within the containing object.
   * @param {Mixed} [reference] The reference object. Note: Required when the to parameter specifies before or after. Can accept: Text, Story, Cell, Row, Column, Table or PageItem. 
   * @returns {Text}
   */
  move: function(to, reference) {
    return new Text();
  },
  
  /*
   * Finds text that matches the find what value.
 *
   * @param {Boolean} [reverseOrder] If true, returns the results in reverse order. 
   * @returns {Text}
   */
  findText: function(reverseOrder) {
    return new Text();
  },
  
  /*
   * Finds text that matches the find what value and replaces the text with the change to value.
 *
   * @param {Boolean} [reverseOrder] If true, returns the results in reverse order. 
   * @returns {Text}
   */
  changeText: function(reverseOrder) {
    return new Text();
  },
  
  /*
   * Finds text that matches the find what value.
 *
   * @param {Boolean} [reverseOrder] If true, returns the results in reverse order. 
   * @returns {Text}
   */
  findGrep: function(reverseOrder) {
    return new Text();
  },
  
  /*
   * Finds text that matches the find what value and replaces the text with the change to value.
 *
   * @param {Boolean} [reverseOrder] If true, returns the results in reverse order. 
   * @returns {Text}
   */
  changeGrep: function(reverseOrder) {
    return new Text();
  },
  
  /*
   * Finds glyphs that match the find what value.
 *
   * @param {Boolean} [reverseOrder] If true, returns the results in reverse order. 
   * @returns {Text}
   */
  findGlyph: function(reverseOrder) {
    return new Text();
  },
  
  /*
   * Finds glyphs that match the find what value and replaces the glyphs with the change to value.
 *
   * @param {Boolean} [reverseOrder] If true, returns the results in reverse order. 
   * @returns {Text}
   */
  changeGlyph: function(reverseOrder) {
    return new Text();
  },
  
  /*
   * Finds text that matches the find character type value.
 *
   * @param {Boolean} [reverseOrder] If true, returns the results in reverse order. 
   * @returns {Text}
   */
  findTransliterate: function(reverseOrder) {
    return new Text();
  },
  
  /*
   * Finds text that matches the find character type value and replaces the text with the change character type value.
 *
   * @param {Boolean} [reverseOrder] If true, returns the results in reverse order. 
   * @returns {Text}
   */
  changeTransliterate: function(reverseOrder) {
    return new Text();
  },
  
  /*
   * Places the file.
 *
   * @param {File} fileName The file to place
   * @param {Boolean} [showingOptions] Whether to display the import options dialog 
   * @param {Object} [withProperties] Initial values for properties of the placed object(s) 
   * @returns {Mixed}
   */
  place: function(fileName, showingOptions, withProperties) {
    return new Mixed();
  },
  
  /*
   * Converts the text to a note.
   * @returns {Note}
   */
  convertToNote: function() {
    return new Note();
  },
  
  /*
   * Finds hyperlink sources that intersecting with specified text range.
 *
   * @param {RangeSortOrder} [sortOrder] The sort order of found ranges. 
   * @returns {HyperlinkTextSource}
   */
  findHyperlinks: function(sortOrder) {
    return new HyperlinkTextSource();
  },
  
  /*
   * Create Plain Text QR Code on the page item
 *
   * @param {String} [plainText] QR code Plain Text  
   * @param {Mixed} [qrCodeSwatch] Swatch to be applied on generated QR Code Graphic . Can accept: Swatch or String. 
   * @param {String} [withProperties] Initial values for properties of the new TextColumn. Above parameters can also be passed as properties 
   */
  createPlainTextQRCode: function(plainText, qrCodeSwatch, withProperties) {
  },
  
  /*
   * Create Hyperlink QR Code on the page item or document
 *
   * @param {String} [urlLink] QR code Hyperlink URL  
   * @param {Mixed} [qrCodeSwatch] Swatch to be applied on generated QR Code Graphic . Can accept: Swatch or String. 
   * @param {String} [withProperties] Initial values for properties of the new TextColumn. Above parameters can also be passed as properties 
   */
  createHyperlinkQRCode: function(urlLink, qrCodeSwatch, withProperties) {
  },
  
  /*
   * Create Text Msg QR Code on the page item or document
 *
   * @param {String} [cellNumber] QR code Text Phone Number 
   * @param {String} [textMessage] QR code Text Message 
   * @param {Mixed} [qrCodeSwatch] Swatch to be applied on generated QR Code Graphic . Can accept: Swatch or String. 
   * @param {String} [withProperties] Initial values for properties of the new TextColumn. Above parameters can also be passed as properties 
   */
  createTextMsgQRCode: function(cellNumber, textMessage, qrCodeSwatch, withProperties) {
  },
  
  /*
   * Create Email QR Code on the page item or document
 *
   * @param {String} [emailAddress] QR code Email Address 
   * @param {String} [subject] QR code Email Subject 
   * @param {String} [body] QR code Email Body Message 
   * @param {Mixed} [qrCodeSwatch] Swatch to be applied on generated QR Code Graphic . Can accept: Swatch or String. 
   * @param {String} [withProperties] Initial values for properties of the new TextColumn. Above parameters can also be passed as properties 
   */
  createEmailQRCode: function(emailAddress, subject, body, qrCodeSwatch, withProperties) {
  },
  
  /*
   * Create Business Card QR Code on the page item or load on document's placegun
 *
   * @param {String} [firstName] QR code Business Card First Name 
   * @param {String} [lastName] QR code Business Card Last Name 
   * @param {String} [jobTitle] QR code Business Card Title 
   * @param {String} [cellPhone] QR code Business Card Cell Phone Number 
   * @param {String} [phone] QR code Business Card Phone Number 
   * @param {String} [email] QR code Business Card Email Address 
   * @param {String} [organisation] QR code Business Card Organisation 
   * @param {String} [streetAddress] QR code Business Card Street Address 
   * @param {String} [city] QR code Business Card City 
   * @param {String} [country] QR code Business Card Country 
   * @param {String} [postalCode] QR code Business Card Postal Code 
   * @param {String} [website] QR code Business Card URL 
   * @param {Mixed} [qrCodeSwatch] Swatch to be applied on generated QR Code Graphic . Can accept: Swatch or String. 
   * @param {String} [withProperties] Initial values for properties of the new TextColumn. Above parameters can also be passed as properties 
   */
  createVCardQRCode: function(firstName, lastName, jobTitle, cellPhone, phone, email, organisation, streetAddress, city, country, postalCode, website, qrCodeSwatch, withProperties) {
  },
  
  /*
   * Exports the object(s) to a file.
 *
   * @param {Mixed} format The export format, specified as an enumeration value or as an extension that appears in the Save as type or Format menu in the Export dialog. Can accept: ExportFormat enumerator or String.
   * @param {File} to The path to the export file.
   * @param {Boolean} [showingOptions] If true, displays the export options dialog. 
   * @param {PDFExportPreset} [using] The export style. 
   * @param {String} [versionComments] The comment for this version. 
   * @param {Boolean} [forceSave] If true, forcibly saves a version. 
   */
  exportFile: function(format, to, showingOptions, using, versionComments, forceSave) {
  },
  
  /*
   * asynchronously exports the object(s) to a file.
 *
   * @param {Mixed} format The export format, specified as an enumeration value or as an extension that appears in the Save as type or Format menu in the Export dialog. Can accept: ExportFormat enumerator or String.
   * @param {File} to The path to the export file.
   * @param {Boolean} [showingOptions] If true, displays the export options dialog. 
   * @param {PDFExportPreset} [using] The export style. 
   * @param {String} [versionComments] The comment for this version. 
   * @param {Boolean} [forceSave] If true, forcibly saves a version. 
   * @returns {BackgroundTask}
   */
  asynchronousExportFile: function(format, to, showingOptions, using, versionComments, forceSave) {
    return new BackgroundTask();
  },
  
  /*
   * Apply one or more conditions.
 *
   * @param {Condition} using The condition(s) to apply
   * @param {Boolean} [removeExisting] If true, remove existing conditions. 
   */
  applyConditions: function(using, removeExisting) {
  },
  
  /*
   * Convert bullets and numbering to text.
   */
  convertBulletsAndNumberingToText: function() {
  },
  
  /*
   * Selects the object.
 *
   * @param {SelectionOptions} [existingSelection] The selection status of the TextColumn in relation to previously selected objects. 
   */
  select: function(existingSelection) {
  },
  
  /*
   * Converts text to outlines. Each line of text becomes a polygon object. When the converted text is a single letter that has no internal spaces or detached parts, the polygon contains only a single path. Note: To determine whether a font allows the creation of outlines, see allow outlines.
 *
   * @param {Boolean} [deleteOriginal] If true, deletes the original text. If false, creates the outlines as separate object(s) on top of the text.  
   * @returns {PageItem}
   */
  createOutlines: function(deleteOriginal) {
    return new PageItem();
  },
  
  /*
   * Generates a string which, if executed, will return the TextColumn.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {TextColumn}
   */
  getElements: function() {
    return new TextColumn();
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
