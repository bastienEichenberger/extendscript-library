/*
 * Properties of a character.
 */
var CharacterAttributes = {
  /*
   * The object's container.
   * @type {Object}
   */
  parent: undefined,
  
  /*
   * The class name of the object.
   * @type {String}
   */
  typename: undefined,
  
  /*
   * The text font.
   * @type {TextFont}
   */
  textFont: undefined,
  
  /*
   * Font size in points.
   * @type {Number}
   */
  size: undefined,
  
  /*
   * Character horizontal scaling factor expressed as a percentage (100 = 100%)
   * @type {Number}
   */
  horizontalScale: undefined,
  
  /*
   * Character vertical scaling factor expressed as a percentage (100 = 100%)
   * @type {Number}
   */
  verticalScale: undefined,
  
  /*
   * Whether to use automatic leading.
   * @type {Boolean}
   */
  autoLeading: undefined,
  
  /*
   * The amount of space between two lines of text (in points)
   * @type {Number}
   */
  leading: undefined,
  
  /*
   * The tracking or range kerning amount in thousands of an em.
   * @type {Int32}
   */
  tracking: undefined,
  
  /*
   * The amount of shift (in points) of the text baseline.
   * @type {Number}
   */
  baselineShift: undefined,
  
  /*
   * The character rotation angle (in degrees)
   * @type {Number}
   */
  rotation: undefined,
  
  /*
   * The automatic kerning method to use.
   * @type {AutoKernType}
   */
  kerningMethod: undefined,
  
  /*
   * The case of text.
   * @type {FontCapsOption}
   */
  capitalization: undefined,
  
  /*
   * The baseline position of text.
   * @type {FontBaselineOption}
   */
  baselinePosition: undefined,
  
  /*
   * The OpenType baseline position.
   * @type {FontOpenTypePositionOption}
   */
  openTypePosition: undefined,
  
  /*
   * Whether the ligature should be used.
   * @type {Boolean}
   */
  ligature: undefined,
  
  /*
   * Whether the discretionary ligature should be used.
   * @type {Boolean}
   */
  discretionaryLigature: undefined,
  
  /*
   * Whether the contextual ligature should be used.
   * @type {Boolean}
   */
  contextualLigature: undefined,
  
  /*
   * Whether the OpenType fractions should be used.
   * @type {Boolean}
   */
  fractions: undefined,
  
  /*
   * Whether the OpenType ordinals should be used.
   * @type {Boolean}
   */
  ordinals: undefined,
  
  /*
   * Whether the OpenType swash should be used.
   * @type {Boolean}
   */
  swash: undefined,
  
  /*
   * Whether the OpenType titling alternates should be used.
   * @type {Boolean}
   */
  titling: undefined,
  
  /*
   * Whether the OpenType connection forms should be used.
   * @type {Boolean}
   */
  connectionForms: undefined,
  
  /*
   * Whether the OpenType stylistic alternates should be used.
   * @type {Boolean}
   */
  stylisticAlternates: undefined,
  
  /*
   * Whether the OpenType ornaments should be used.
   * @type {Boolean}
   */
  ornaments: undefined,
  
  /*
   * Which figure style to use in OpenType font.
   * @type {FigureStyleType}
   */
  figureStyle: undefined,
  
  /*
   * Does the Japanese OpenType support proportional font?
   * @type {Boolean}
   */
  proportionalMetrics: undefined,
  
  /*
   * Does the Japanese OpenType support italics?
   * @type {Boolean}
   */
  italics: undefined,
  
  /*
   * The Japanese text baseline direction.
   * @type {BaselineDirectionType}
   */
  baselineDirection: undefined,
  
  /*
   * The language of text.
   * @type {LanguageType}
   */
  language: undefined,
  
  /*
   * The alternate glyphs form.
   * @type {AlternateGlyphsForm}
   */
  alternateGlyphs: undefined,
  
  /*
   * The percentage of space reduction around a Japanese character (100 = 100%)
   * @type {Number}
   */
  Tsume: undefined,
  
  /*
   * The character alignment type.
   * @type {StyleRunAlignmentType}
   */
  alignment: undefined,
  
  /*
   * Whether WariChu is enabled.
   * @type {Boolean}
   */
  wariChuEnabled: undefined,
  
  /*
   * The number of Wari-Chu (multiple text lines fit into a space meant for one) lines.
   * @type {Int32}
   */
  wariChuLines: undefined,
  
  /*
   * The Wari-Chu line gap.
   * @type {Int32}
   */
  wariChuLineGap: undefined,
  
  /*
   * The Wari-Chu scale.
   * @type {Number}
   */
  wariChuScale: undefined,
  
  /*
   * undefined
   * @type {Int32}
   */
  wariChuCharactersBeforeBreak: undefined,
  
  /*
   * undefined
   * @type {Int32}
   */
  wariChuCharactersAfterBreak: undefined,
  
  /*
   * undefined
   * @type {WariChuJustificationType}
   */
  wariChuJustification: undefined,
  
  /*
   * The Tate-Chu-Yoko vertical adjustment in points.
   * @type {Int32}
   */
  tateChuYokoVertical: undefined,
  
  /*
   * The Tate-Chu-Yoko horizontal adjustment in points.
   * @type {Int32}
   */
  tateChuYokoHorizontal: undefined,
  
  /*
   * The em amount of left aki.
   * @type {Number}
   */
  akiLeft: undefined,
  
  /*
   * The em amount of right aki amount.
   * @type {Number}
   */
  akiRight: undefined,
  
  /*
   * Whether line breaks are allowed.
   * @type {Boolean}
   */
  noBreak: undefined,
  
  /*
   * The color of the text fill.
   * @type {Color}
   */
  fillColor: undefined,
  
  /*
   * The color of the text stroke.
   * @type {Color}
   */
  strokeColor: undefined,
  
  /*
   * Whether to overprint the stroke of the text.
   * @type {Boolean}
   */
  overprintStroke: undefined,
  
  /*
   * Whether to overprint the fill of the text.
   * @type {Boolean}
   */
  overprintFill: undefined,
  
  /*
   * Line width of stroke.
   * @type {Number}
   */
  strokeWeight: undefined,
  
  /*
   * Whether to underline the text.
   * @type {Boolean}
   */
  underline: undefined,
  
  /*
   * Whether to draw a strike through line over the text.
   * @type {Boolean}
   */
  strikeThrough: undefined,
  
};
