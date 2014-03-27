/*
 * A character style.
 */
var CharacterStyle = {
  /*
   * If true, the style was imported from another document. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  imported: undefined,
  
  /*
   * The unique ID of the CharacterStyle.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the CharacterStyle (a Document, Application or CharacterStyleGroup).
   * @type {Mixed}
   */
  parent: undefined,
  
  /*
   * The index of the CharacterStyle within its containing object.
   * @type {Number}
   */
  index: undefined,
  
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
   * The style that this style is based on. Can return: CharacterStyle or String.
   * @type {Mixed}
   */
  basedOn: undefined,
  
  /*
   * The font applied to the CharacterStyle, specified as either a font object or the name of font family. Can return: Font, String or NothingEnum enumerator.
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
   * The horizontal scaling applied to the CharacterStyle. Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  horizontalScale: undefined,
  
  /*
   * The vertical scaling applied to the CharacterStyle. Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  verticalScale: undefined,
  
  /*
   * The baseline shift applied to the text. Can return: Unit or NothingEnum enumerator.
   * @type {Mixed}
   */
  baselineShift: undefined,
  
  /*
   * The skew angle of the CharacterStyle. Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  skew: undefined,
  
  /*
   * The tint (as a percentage) of the fill color of the CharacterStyle. (To specify a tint percentage, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.). Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  fillTint: undefined,
  
  /*
   * The tint (as a percentage) of the stroke color of the CharacterStyle. (To specify a tint percentage, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.). Can return: Real or NothingEnum enumerator.
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
   * The swatch (color, gradient, tint, or mixed ink) applied to the fill of the CharacterStyle. . Can return: Swatch or NothingEnum enumerator. Can also accept: String.
   * @type {Mixed}
   */
  fillColor: undefined,
  
  /*
   * The swatch (color, gradient, tint, or mixed ink) applied to the stroke of the CharacterStyle. Can return: Swatch or NothingEnum enumerator. Can also accept: String.
   * @type {Mixed}
   */
  strokeColor: undefined,
  
  /*
   * The language of the text. Can return: LanguageWithVendors, Language or NothingEnum enumerator. Can also accept: String.
   * @type {Mixed}
   */
  appliedLanguage: undefined,
  
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
   * The name of the style.
   * @type {String}
   */
  name: undefined,
  
  /*
   * The color to use for preview, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  previewColor: undefined,
  
  /*
   * The limit of the ratio of stroke width to miter length before a miter (pointed) join becomes a bevel (squared-off) join. Can return: Real (0 - 1000) or NothingEnum enumerator.
   * @type {Mixed}
   */
  miterLimit: undefined,
  
  /*
   * The stroke alignment applied to the text. Can return: TextStrokeAlign enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  strokeAlignment: undefined,
  
  /*
   * The stroke join type applied to the characters of the text. Can return: OutlineJoin enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  endJoin: undefined,
  
  /*
   * If true, use overlapping swash forms in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  otfOverlapSwash: undefined,
  
  /*
   * If true, use stylistic alternate forms in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  otfStylisticAlternate: undefined,
  
  /*
   * If true, use alternate justification forms in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  otfJustificationAlternate: undefined,
  
  /*
   * If true, use stretched alternate forms in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  otfStretchedAlternate: undefined,
  
  /*
   * The direction of the character. Can return: CharacterDirectionOptions enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  characterDirection: undefined,
  
  /*
   * The keyboard direction of the character. Can return: CharacterDirectionOptions enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  keyboardDirection: undefined,
  
  /*
   * The digits type. Can return: DigitsTypeOptions enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  digitsType: undefined,
  
  /*
   * Use of Kashidas for justification. Can return: KashidasOptions enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  kashidas: undefined,
  
  /*
   * Position of diacriticical characters. Can return: DiacriticPositionOptions enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  diacriticPosition: undefined,
  
  /*
   * The x (horizontal) offset for diacritic adjustment. Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  xOffsetDiacritic: undefined,
  
  /*
   * The y (vertical) offset for diacritic adjustment. Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  yOffsetDiacritic: undefined,
  
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
   * @param {CharacterStyle} [replacingWith] The style to apply in place of the deleted style. 
   */
  remove: function(replacingWith) {
  },
  
  /*
   * Duplicates the CharacterStyle.
   * @returns {CharacterStyle}
   */
  duplicate: function() {
    return new CharacterStyle();
  },
  
  /*
   * Moves the style to the specified location.
 *
   * @param {LocationOptions} to The location relative to the reference object or within the containing object.
   * @param {Mixed} [reference] The reference object. Note: Required when the to parameter specifies before or after. Can accept: ParagraphStyle, ParagraphStyleGroup, CharacterStyle, CharacterStyleGroup, CellStyle, CellStyleGroup, TableStyle, TableStyleGroup, Document or Application. 
   * @returns {CharacterStyle}
   */
  move: function(to, reference) {
    return new CharacterStyle();
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
   * Generates a string which, if executed, will return the CharacterStyle.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {CharacterStyle}
   */
  getElements: function() {
    return new CharacterStyle();
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
