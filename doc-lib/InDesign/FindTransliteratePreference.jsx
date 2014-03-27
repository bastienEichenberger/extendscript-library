/*
 * Find transliterate preferences.
 */
var FindTransliteratePreference = {
  /*
   * Bullet character. Can return: Bullet or NothingEnum enumerator.
   * @type {Mixed}
   */
  bulletChar: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the FindTransliteratePreference (a Application).
   * @type {Application}
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
   * A collection of preferences objects.
   * @type {Preferences}
   */
  preferences: undefined,
  
  /*
   * The character type to find. Can return: FindChangeTransliterateCharacterTypes enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  findCharacterType: undefined,
  
  /*
   * The character style to search for or change to. Can return: String or NothingEnum enumerator. Can also accept: CharacterStyle.
   * @type {Mixed}
   */
  appliedCharacterStyle: undefined,
  
  /*
   * The paragraph style to search for or change to. Can return: String or NothingEnum enumerator. Can also accept: ParagraphStyle.
   * @type {Mixed}
   */
  appliedParagraphStyle: undefined,
  
  /*
   * The amount to indent the first line. Can return: Unit or NothingEnum enumerator.
   * @type {Mixed}
   */
  firstLineIndent: undefined,
  
  /*
   * The width of the left indent. Can return: Unit or NothingEnum enumerator.
   * @type {Mixed}
   */
  leftIndent: undefined,
  
  /*
   * The width of the right indent. Can return: Unit or NothingEnum enumerator.
   * @type {Mixed}
   */
  rightIndent: undefined,
  
  /*
   * The height of the paragraph space above. Can return: Unit or NothingEnum enumerator.
   * @type {Mixed}
   */
  spaceBefore: undefined,
  
  /*
   * The height of the paragraph space below. Can return: Unit or NothingEnum enumerator.
   * @type {Mixed}
   */
  spaceAfter: undefined,
  
  /*
   * If true or set to an enumeration value, balances ragged lines. Note: Not valid with a single-line text composer. Can return: Boolean, BalanceLinesStyle enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  balanceRaggedLines: undefined,
  
  /*
   * The paragraph alignment. Can return: Justification enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  justification: undefined,
  
  /*
   * The alignment to use for lines that contain a single word. Can return: SingleWordJustification enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  singleWordJustification: undefined,
  
  /*
   * The percent of the type size to use for auto leading. (Range: 0 to 500). Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  autoLeading: undefined,
  
  /*
   * The number of lines to drop cap. Can return: Short Integer (0 - 25) or NothingEnum enumerator.
   * @type {Mixed}
   */
  dropCapLines: undefined,
  
  /*
   * The number of characters to drop cap. Can return: Short Integer (0 - 150) or NothingEnum enumerator.
   * @type {Mixed}
   */
  dropCapCharacters: undefined,
  
  /*
   * If true, keeps a specified number of lines together when the paragraph breaks across columns or text frames. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  keepLinesTogether: undefined,
  
  /*
   * If true, keeps all lines of the paragraph together. If false, allows paragraphs to break across pages or columns. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  keepAllLinesTogether: undefined,
  
  /*
   * The minimum number of lines to keep with the next paragraph. Can return: Short Integer (0 - 5) or NothingEnum enumerator.
   * @type {Mixed}
   */
  keepWithNext: undefined,
  
  /*
   * The minimum number of lines to keep together in a paragraph before allowing a page break. Can return: Short Integer (1 - 50) or NothingEnum enumerator.
   * @type {Mixed}
   */
  keepFirstLines: undefined,
  
  /*
   * The minimum number of lines to keep together in a paragraph after a page break. Can return: Short Integer (1 - 50) or NothingEnum enumerator.
   * @type {Mixed}
   */
  keepLastLines: undefined,
  
  /*
   * The location at which to start the paragraph. Can return: StartParagraph enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  startParagraph: undefined,
  
  /*
   * The text composer to use to compose the text. Can return: String or NothingEnum enumerator.
   * @type {Mixed}
   */
  composer: undefined,
  
  /*
   * The amount to indent the last line in the paragraph. Can return: Unit or NothingEnum enumerator.
   * @type {Mixed}
   */
  lastLineIndent: undefined,
  
  /*
   * If true, allows hyphenation in the last word in a paragraph. Note: Valid only when hyphenation is true. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  hyphenateLastWord: undefined,
  
  /*
   * Details about the drop cap based on the glyph outlines. 1 = left side bearing. 2 = descenders. 0x100,0x200,0x400 are used for Japanese frame grid. Can return: Long Integer or NothingEnum enumerator.
   * @type {Mixed}
   */
  dropcapDetail: undefined,
  
  /*
   * If true, allows the last word in a text column to be hyphenated. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  hyphenateAcrossColumns: undefined,
  
  /*
   * If true, forces the rule above the paragraph to remain in the frame bounds. Note: Valid only when rule above is true. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  keepRuleAboveInFrame: undefined,
  
  /*
   * If true, ignores optical edge alignment for the paragraph. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  ignoreEdgeAlignment: undefined,
  
  /*
   * The font applied to the FindTransliteratePreference, specified as either a font object or the name of font family. Can return: Font, String or NothingEnum enumerator.
   * @type {Mixed}
   */
  appliedFont: undefined,
  
  /*
   * The name of the font style. Can return: String or NothingEnum enumerator.
   * @type {Mixed}
   */
  fontStyle: undefined,
  
  /*
   * The text size. Can return: Unit or NothingEnum enumerator.
   * @type {Mixed}
   */
  pointSize: undefined,
  
  /*
   * The leading applied to the text. Can return: Unit, Leading enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  leading: undefined,
  
  /*
   * The type of pair kerning. Can return: String or NothingEnum enumerator.
   * @type {Mixed}
   */
  kerningMethod: undefined,
  
  /*
   * The amount by which to loosen or tighten a block of text, specified in thousands of an em. Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  tracking: undefined,
  
  /*
   * The capitalization scheme. Can return: Capitalization enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  capitalization: undefined,
  
  /*
   * The text position relative to the baseline. Can return: Position enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  position: undefined,
  
  /*
   * If true, underlines the text. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  underline: undefined,
  
  /*
   * If true, draws a strikethrough line through the text. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  strikeThru: undefined,
  
  /*
   * If true, replaces specific character combinations (e.g., fl, fi) with ligature characters. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  ligatures: undefined,
  
  /*
   * If true, keeps the text on the same line. . Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  noBreak: undefined,
  
  /*
   * The horizontal scaling applied to the FindTransliteratePreference. Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  horizontalScale: undefined,
  
  /*
   * The vertical scaling applied to the FindTransliteratePreference. Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  verticalScale: undefined,
  
  /*
   * The baseline shift applied to the text. Can return: Unit or NothingEnum enumerator.
   * @type {Mixed}
   */
  baselineShift: undefined,
  
  /*
   * The skew angle of the FindTransliteratePreference. Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  skew: undefined,
  
  /*
   * The tint (as a percentage) of the fill color of the FindTransliteratePreference. (To specify a tint percentage, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.). Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  fillTint: undefined,
  
  /*
   * The tint (as a percentage) of the stroke color of the FindTransliteratePreference. (To specify a tint percentage, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.). Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  strokeTint: undefined,
  
  /*
   * The stroke weight applied to the characters of the text. Can return: Unit or NothingEnum enumerator.
   * @type {Mixed}
   */
  strokeWeight: undefined,
  
  /*
   * If true, the stroke of the characters will overprint. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  overprintStroke: undefined,
  
  /*
   * If true, the fill color of the characters will overprint. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  overprintFill: undefined,
  
  /*
   * The figure style in OpenType fonts. Can return: OTFFigureStyle enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  otfFigureStyle: undefined,
  
  /*
   * If true, uses ordinals in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  otfOrdinal: undefined,
  
  /*
   * If true, uses fractions in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  otfFraction: undefined,
  
  /*
   * If true, uses discretionary ligatures in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  otfDiscretionaryLigature: undefined,
  
  /*
   * If true, uses titling forms in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  otfTitling: undefined,
  
  /*
   * If true, uses contextual alternate forms in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  otfContextualAlternate: undefined,
  
  /*
   * If true, uses swash forms in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  otfSwash: undefined,
  
  /*
   * The swatch (color, gradient, tint, or mixed ink) applied to the underline stroke. . Can return: Swatch, String or NothingEnum enumerator.
   * @type {Mixed}
   */
  underlineColor: undefined,
  
  /*
   * The swatch (color, gradient, tint, or mixed ink) applied to the gap of the underline stroke. Note: Valid when underline type is not solid. Can return: Swatch, String or NothingEnum enumerator.
   * @type {Mixed}
   */
  underlineGapColor: undefined,
  
  /*
   * The underline stroke tint (as a percentage). (Range: 0 to 100). Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  underlineTint: undefined,
  
  /*
   * The tint (as a percentage) of the gap color of the underline stroke. (Range: 0 to 100) Note: Valid when underline type is not solid. Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  underlineGapTint: undefined,
  
  /*
   * If true, the underline stroke color will overprint. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  underlineOverprint: undefined,
  
  /*
   * If true, the gap color of the underline stroke will overprint. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  underlineGapOverprint: undefined,
  
  /*
   * The stroke type of the underline stroke. Can return: StrokeStyle, String or NothingEnum enumerator.
   * @type {Mixed}
   */
  underlineType: undefined,
  
  /*
   * The amount by which to offset the underline from the text baseline. Can return: Unit or NothingEnum enumerator.
   * @type {Mixed}
   */
  underlineOffset: undefined,
  
  /*
   * The stroke weight of the underline stroke. Can return: Unit or NothingEnum enumerator.
   * @type {Mixed}
   */
  underlineWeight: undefined,
  
  /*
   * The swatch (color, gradient, tint, or mixed ink) applied to the strikethrough stroke. Can return: Swatch, String or NothingEnum enumerator.
   * @type {Mixed}
   */
  strikeThroughColor: undefined,
  
  /*
   * The swatch (color, gradient, tint, or mixed ink) applied to the gap of the strikethrough stroke. Can return: Swatch, String or NothingEnum enumerator.
   * @type {Mixed}
   */
  strikeThroughGapColor: undefined,
  
  /*
   * The tint (as a percentage) of the strikethrough stroke. (Range: 0 to 100). Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  strikeThroughTint: undefined,
  
  /*
   * The tint (as a percentage) of the strikethrough stroke gap color. (Range: 0 to 100) Note: Valid when strike through type is not solid. Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  strikeThroughGapTint: undefined,
  
  /*
   * If true, the strikethrough stroke will overprint. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  strikeThroughOverprint: undefined,
  
  /*
   * If true, the gap color of the strikethrough stroke will overprint. Note: Valid when strike through type is not solid. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  strikeThroughGapOverprint: undefined,
  
  /*
   * The stroke type of the strikethrough stroke. Can return: StrokeStyle, String or NothingEnum enumerator.
   * @type {Mixed}
   */
  strikeThroughType: undefined,
  
  /*
   * The amount by which to offset the strikethrough stroke from the text baseline. Can return: Unit or NothingEnum enumerator.
   * @type {Mixed}
   */
  strikeThroughOffset: undefined,
  
  /*
   * The stroke weight of the strikethrough stroke. Can return: Unit or NothingEnum enumerator.
   * @type {Mixed}
   */
  strikeThroughWeight: undefined,
  
  /*
   * If true, use a slashed zeroes in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  otfSlashedZero: undefined,
  
  /*
   * If true, use historical forms in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  otfHistorical: undefined,
  
  /*
   * The stylistic sets to use in OpenType fonts. Can return: Long Integer or NothingEnum enumerator.
   * @type {Mixed}
   */
  otfStylisticSets: undefined,
  
  /*
   * The length (for a linear gradient) or radius (for a radial gradient) applied to the fill of the text. Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  gradientFillLength: undefined,
  
  /*
   * The angle of a linear gradient applied to the fill of the text. (Range: -180 to 180). Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  gradientFillAngle: undefined,
  
  /*
   * The length (for a linear gradient) or radius (for a radial gradient) applied to the stroke of the text. Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  gradientStrokeLength: undefined,
  
  /*
   * The angle of a linear gradient applied to the stroke of the text. (Range: -180 to 180). Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  gradientStrokeAngle: undefined,
  
  /*
   * The starting point (in page coordinates) of a gradient applied to the fill of the text, in the format [x, y]. Can return: Array of 2 Units or NothingEnum enumerator.
   * @type {Mixed}
   */
  gradientFillStart: undefined,
  
  /*
   * The starting point (in page coordinates) of a gradient applied to the stroke of the text, in the format [x, y]. Can return: Array of 2 Units or NothingEnum enumerator.
   * @type {Mixed}
   */
  gradientStrokeStart: undefined,
  
  /*
   * If true, uses mark positioning in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  otfMark: undefined,
  
  /*
   * If true, uses localized forms in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  otfLocale: undefined,
  
  /*
   * The OpenType positional form. Can return: PositionalForms enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  positionalForm: undefined,
  
  /*
   * The swatch (color, gradient, tint, or mixed ink), applied as a fill color, to search for or change to. Can return: String or NothingEnum enumerator. Can also accept: Swatch.
   * @type {Mixed}
   */
  fillColor: undefined,
  
  /*
   * The swatch (color, gradient, tint, or mixed ink), applied as a stroke color, to search for or change to. Can return: String or NothingEnum enumerator. Can also accept: Swatch.
   * @type {Mixed}
   */
  strokeColor: undefined,
  
  /*
   * The language to search for or change to. Can return: String or NothingEnum enumerator. Can also accept: Language or LanguageWithVendors.
   * @type {Mixed}
   */
  appliedLanguage: undefined,
  
  /*
   * The amount of space to add or remove between characters, specified in thousands of an em. . Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  kerningValue: undefined,
  
  /*
   * The alignment of small characters to the largest character in the line. Can return: CharacterAlignment enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  characterAlignment: undefined,
  
  /*
   * The amount of horizontal character compression. Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  tsume: undefined,
  
  /*
   * The amount of space before each character. Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  leadingAki: undefined,
  
  /*
   * The amount of space after each character. Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  trailingAki: undefined,
  
  /*
   * The rotation angle (in degrees) of individual characters. Note: The rotation is counterclockwise. Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  characterRotation: undefined,
  
  /*
   * The number of grid squares in which to arrange the text. . Can return: Short Integer or NothingEnum enumerator.
   * @type {Mixed}
   */
  jidori: undefined,
  
  /*
   * The amount (as a percentage) of shatai obliquing to apply. Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  shataiMagnification: undefined,
  
  /*
   * The shatai lens angle (in degrees). Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  shataiDegreeAngle: undefined,
  
  /*
   * If true, applies shatai rotation. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  shataiAdjustRotation: undefined,
  
  /*
   * If true, adjusts shatai tsume. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  shataiAdjustTsume: undefined,
  
  /*
   * If true, makes the character horizontal in vertical text. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  tatechuyoko: undefined,
  
  /*
   * The horizontal offset for horizontal characters in vertical text. Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  tatechuyokoXOffset: undefined,
  
  /*
   * The vertical offset for horizontal characters in vertical text. Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  tatechuyokoYOffset: undefined,
  
  /*
   * The swatch (color, gradient, tint, or mixed ink) applied to the fill of kenten characters. Can return: Swatch, String or NothingEnum enumerator.
   * @type {Mixed}
   */
  kentenFillColor: undefined,
  
  /*
   * The swatch (color, gradient, tint, or mixed ink) applied to the stroke of kenten characters. Can return: Swatch, String or NothingEnum enumerator.
   * @type {Mixed}
   */
  kentenStrokeColor: undefined,
  
  /*
   * The fill tint (as a percentage) of kenten characters. (Range: 0 to 100). Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  kentenTint: undefined,
  
  /*
   * The stroke tint (as a percentage) of kenten characters. (Range: 0 to 100). Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  kentenStrokeTint: undefined,
  
  /*
   * The stroke weight (in points) of kenten characters. Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  kentenWeight: undefined,
  
  /*
   * The method of overprinting the kenten fill. Can return: AdornmentOverprint enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  kentenOverprintFill: undefined,
  
  /*
   * The method of overprinting the kenten stroke. Can return: AdornmentOverprint enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  kentenOverprintStroke: undefined,
  
  /*
   * The style of kenten characters. Can return: KentenCharacter enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  kentenKind: undefined,
  
  /*
   * The distance between kenten characters and their parent characters. Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  kentenPlacement: undefined,
  
  /*
   * The alignment of kenten characters relative to the parent characters. . Can return: KentenAlignment enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  kentenAlignment: undefined,
  
  /*
   * The kenten position relative to the parent character. Can return: RubyKentenPosition enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  kentenPosition: undefined,
  
  /*
   * The font to use for kenten characters. Can return: Font, String or NothingEnum enumerator.
   * @type {Mixed}
   */
  kentenFont: undefined,
  
  /*
   * The font style of kenten characters. Can return: String or NothingEnum enumerator.
   * @type {Mixed}
   */
  kentenFontStyle: undefined,
  
  /*
   * The size (in points) of kenten characters. Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  kentenFontSize: undefined,
  
  /*
   * The horizontal size of kenten characters as a percent of the original size. Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  kentenXScale: undefined,
  
  /*
   * The vertical size of kenten charachers as a percent of the original size. . Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  kentenYScale: undefined,
  
  /*
   * The character used for kenten. Note: Valid only when kenten kind is custom. Can return: String or NothingEnum enumerator.
   * @type {Mixed}
   */
  kentenCustomCharacter: undefined,
  
  /*
   * The character set used for the custom kenten character. Note: Valid only when kenten kind is custom. . Can return: KentenCharacterSet enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  kentenCharacterSet: undefined,
  
  /*
   * The swatch (color, gradient, tint, or mixed ink) applied to the fill of ruby characters. Can return: Swatch, String or NothingEnum enumerator.
   * @type {Mixed}
   */
  rubyFill: undefined,
  
  /*
   * The swatch (color, gradient, tint, or mixed ink) applied to the stroke of ruby characters. Can return: Swatch, String or NothingEnum enumerator.
   * @type {Mixed}
   */
  rubyStroke: undefined,
  
  /*
   * The tint (as a percentage) of the ruby fill color. (Range: 0 to 100). Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  rubyTint: undefined,
  
  /*
   * The stroke weight (in points) of ruby characters. Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  rubyWeight: undefined,
  
  /*
   * The method of overprinting the ruby fill. Can return: AdornmentOverprint enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  rubyOverprintFill: undefined,
  
  /*
   * The method of overprinting the ruby stroke. Can return: AdornmentOverprint enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  rubyOverprintStroke: undefined,
  
  /*
   * The stroke tint (as a percentage) of ruby characters. Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  rubyStrokeTint: undefined,
  
  /*
   * The font applied to ruby characters. Can return: Font, String or NothingEnum enumerator.
   * @type {Mixed}
   */
  rubyFont: undefined,
  
  /*
   * The font style of ruby characters. Can return: String or NothingEnum enumerator.
   * @type {Mixed}
   */
  rubyFontStyle: undefined,
  
  /*
   * The size (in points) of ruby characters. Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  rubyFontSize: undefined,
  
  /*
   * If true, uses OpenType Pro fonts for ruby. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  rubyOpenTypePro: undefined,
  
  /*
   * The horizontal size of ruby characters, specified as a percent of the original size. Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  rubyXScale: undefined,
  
  /*
   * The vertical size of ruby characters, specified as a percent of the original size. Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  rubyYScale: undefined,
  
  /*
   * The ruby type. Can return: RubyTypes enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  rubyType: undefined,
  
  /*
   * The ruby alignment. Can return: RubyAlignments enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  rubyAlignment: undefined,
  
  /*
   * The position of ruby characters relative to the parent text. Can return: RubyKentenPosition enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  rubyPosition: undefined,
  
  /*
   * The amount of horizontal space between ruby and parent characters. Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  rubyXOffset: undefined,
  
  /*
   * The amount of vertical space between ruby and parent characters. Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  rubyYOffset: undefined,
  
  /*
   * The ruby spacing relative to the parent text. . Can return: RubyParentSpacing enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  rubyParentSpacing: undefined,
  
  /*
   * If true, auto aligns ruby. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  rubyAutoAlign: undefined,
  
  /*
   * If true, constrains ruby overhang to the specified amount. For information on specifying an amount, see ruby parent overhang amount. . Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  rubyOverhang: undefined,
  
  /*
   * If true, automatically scales ruby to the specified percent of parent text size. For information on specifying a percent, see ruby parent scaling percent. . Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  rubyAutoScaling: undefined,
  
  /*
   * The amount (as a percentage) to scale the parent text size to determine the ruby text size. Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  rubyParentScalingPercent: undefined,
  
  /*
   * The amount by which ruby characters can overhang the parent text. Can return: RubyOverhang enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  rubyParentOverhangAmount: undefined,
  
  /*
   * The number of digits included in auto tcy (tate-chuu-yoko) in ruby. Can return: Short Integer or NothingEnum enumerator.
   * @type {Mixed}
   */
  rubyAutoTcyDigits: undefined,
  
  /*
   * If true, includes Roman characters in auto tcy (tate-chuu-yoko) in ruby. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  rubyAutoTcyIncludeRoman: undefined,
  
  /*
   * If true, automatically scales glyphs in auto tcy (tate-chuu-yoko) in ruby to fit one em. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  rubyAutoTcyAutoScale: undefined,
  
  /*
   * If true, turns on warichu. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  warichu: undefined,
  
  /*
   * The amount (as a percentage) to scale parent text size to determine warichu size. Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  warichuSize: undefined,
  
  /*
   * The number of lines of warichu within a single normal line. Can return: Short Integer or NothingEnum enumerator.
   * @type {Mixed}
   */
  warichuLines: undefined,
  
  /*
   * The gap between lines of warichu characters. Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  warichuLineSpacing: undefined,
  
  /*
   * The warichu alignment. Can return: WarichuAlignment enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  warichuAlignment: undefined,
  
  /*
   * The minimum number of characters allowed after a line break. . Can return: Short Integer or NothingEnum enumerator.
   * @type {Mixed}
   */
  warichuCharsAfterBreak: undefined,
  
  /*
   * The minimum number of characters allowed before a line break. Can return: Short Integer or NothingEnum enumerator.
   * @type {Mixed}
   */
  warichuCharsBeforeBreak: undefined,
  
  /*
   * If true, kerns according to proportional CJK metrics in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  otfProportionalMetrics: undefined,
  
  /*
   * If true, switches hiragana fonts, which have different glyphs for horizontal and vertical. . Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  otfHVKana: undefined,
  
  /*
   * If true, applies italics to half-width alphanumerics. . Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  otfRomanItalics: undefined,
  
  /*
   * If true, the line changes size when characters are scaled. . Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  scaleAffectsLineHeight: undefined,
  
  /*
   * If true, uses grid tracking to track non-Roman characters in CJK grids. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  cjkGridTracking: undefined,
  
  /*
   * The glyph variant to substitute for standard glyphs. Can return: AlternateGlyphForms enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  glyphForm: undefined,
  
  /*
   * If true, the gyoudori mode applies to the entire paragraph. If false, the gyoudori mode applies to each line in the paragraph. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  paragraphGyoudori: undefined,
  
  /*
   * The alignment to the frame grid or baseline grid. Can return: GridAlignment enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  gridAlignment: undefined,
  
  /*
   * The manual gyoudori setting. Can return: Short Integer or NothingEnum enumerator.
   * @type {Mixed}
   */
  gridGyoudori: undefined,
  
  /*
   * The number of half-width characters at or below which the characters automatically run horizontally in vertical text. Can return: Short Integer or NothingEnum enumerator.
   * @type {Mixed}
   */
  autoTcy: undefined,
  
  /*
   * If true, auto tcy includes Roman characters. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  autoTcyIncludeRoman: undefined,
  
  /*
   * The kinsoku set that determines legitimate line breaks. Can return: KinsokuTable, KinsokuSet enumerator, String or NothingEnum enumerator.
   * @type {Mixed}
   */
  kinsokuSet: undefined,
  
  /*
   * The type of kinsoku processing for preventing kinsoku characters from beginning or ending a line. Note: Valid only when a kinsoku set is defined. Can return: KinsokuType enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  kinsokuType: undefined,
  
  /*
   * The type of hanging punctuation to allow. Note: Valid only when a kinsoku set is in effect. Can return: KinsokuHangTypes enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  kinsokuHangType: undefined,
  
  /*
   * If true, adds the double period (..), ellipse (...), and double hyphen (--) to the selected kinsoku set. Note: Valid only when a kinsoku set is in effect. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  bunriKinshi: undefined,
  
  /*
   * The mojikumi table. For information, see mojikumi table defaults. Can return: MojikumiTable, String, MojikumiTableDefaults enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  mojikumi: undefined,
  
  /*
   * If true, disallows line breaks in numbers. If false, lines can break between digits in multi-digit numbers. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  rensuuji: undefined,
  
  /*
   * If true, rotates Roman characters in vertical text. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  rotateSingleByteCharacters: undefined,
  
  /*
   * The point from which leading is measured from line to line. Can return: LeadingModel enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  leadingModel: undefined,
  
  /*
   * If true, ideographic spaces will not wrap to the next line like text characters. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  treatIdeographicSpaceAsSpace: undefined,
  
  /*
   * If true, words unassociated with a hyphenation dictionary can break to the next line on any character. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  allowArbitraryHyphenation: undefined,
  
  /*
   * The text after string expression for bullets. Can return: String or NothingEnum enumerator.
   * @type {Mixed}
   */
  bulletsTextAfter: undefined,
  
  /*
   * The character style to be used for the text after string. Can return: CharacterStyle, String or NothingEnum enumerator.
   * @type {Mixed}
   */
  bulletsCharacterStyle: undefined,
  
  /*
   * The alignment of the bullet character. Can return: ListAlignment enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  bulletsAlignment: undefined,
  
  /*
   * The list to be part of. Can return: NumberingList, String or NothingEnum enumerator.
   * @type {Mixed}
   */
  appliedNumberingList: undefined,
  
  /*
   * The level of the paragraph. Can return: Long Integer or NothingEnum enumerator.
   * @type {Mixed}
   */
  numberingLevel: undefined,
  
  /*
   * Numbering format options. Can return: NumberingStyle enumerator, String or NothingEnum enumerator.
   * @type {Mixed}
   */
  numberingFormat: undefined,
  
  /*
   * The number string expression for numbering. Can return: String or NothingEnum enumerator.
   * @type {Mixed}
   */
  numberingExpression: undefined,
  
  /*
   * The character style to be used for the number string. Can return: CharacterStyle, String or NothingEnum enumerator.
   * @type {Mixed}
   */
  numberingCharacterStyle: undefined,
  
  /*
   * Continue the numbering at this level. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  numberingContinue: undefined,
  
  /*
   * Determines starting number in a numbered list. Can return: Long Integer or NothingEnum enumerator.
   * @type {Mixed}
   */
  numberingStartAt: undefined,
  
  /*
   * If true, apply the numbering restart policy. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  numberingApplyRestartPolicy: undefined,
  
  /*
   * The alignment of the number. Can return: ListAlignment enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  numberingAlignment: undefined,
  
  /*
   * List type for bullets and numbering. Can return: ListType enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  bulletsAndNumberingListType: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the FindTransliteratePreference.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {FindTransliteratePreference}
   */
  getElements: function() {
    return new FindTransliteratePreference();
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
