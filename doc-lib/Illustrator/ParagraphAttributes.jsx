/*
 * Properties of a paragraph.
 */
var ParagraphAttributes = {
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
   * Paragraph justification.
   * @type {Justification}
   */
  justification: undefined,
  
  /*
   * First line left indent expressed in points.
   * @type {Number}
   */
  firstLineIndent: undefined,
  
  /*
   * Left indent of margin expressed in points.
   * @type {Number}
   */
  leftIndent: undefined,
  
  /*
   * Right indent of margin expressed in points.
   * @type {Number}
   */
  rightIndent: undefined,
  
  /*
   * Spacing before paragraph in points.
   * @type {Number}
   */
  spaceBefore: undefined,
  
  /*
   * Spacing after paragraph in points.
   * @type {Number}
   */
  spaceAfter: undefined,
  
  /*
   * Is hyphenation enabled for the paragraph?
   * @type {Boolean}
   */
  hyphenation: undefined,
  
  /*
   * Minimum hyphenated word size.
   * @type {Int32}
   */
  minimumHyphenatedWordSize: undefined,
  
  /*
   * Minimum number of characters before a hyphen.
   * @type {Int32}
   */
  minimumBeforeHyphen: undefined,
  
  /*
   * Minimum number of characters after a hyphen.
   * @type {Int32}
   */
  minimumAfterHyphen: undefined,
  
  /*
   * Maximum number of consecutive hypenated lines.
   * @type {Int32}
   */
  maximumConsecutiveHyphens: undefined,
  
  /*
   * Size of the hyphenation zone.
   * @type {Number}
   */
  hyphenationZone: undefined,
  
  /*
   * Is hyphenation enabled for the capitalized words?
   * @type {Boolean}
   */
  hyphenateCapitalizedWords: undefined,
  
  /*
   * Hyphenation preference scale for better spacing (0) or fewer hyphens (1)
   * @type {Number}
   */
  hyphenationPreference: undefined,
  
  /*
   * Desired word spacing expressed as a percentage.
   * @type {Number}
   */
  desiredWordSpacing: undefined,
  
  /*
   * Maximum word spacing expressed as a percentage.
   * @type {Number}
   */
  maximumWordSpacing: undefined,
  
  /*
   * Minimum word spacing expressed as a percentage.
   * @type {Number}
   */
  minimumWordSpacing: undefined,
  
  /*
   * Desired letter spacing expressed as a percentage.
   * @type {Number}
   */
  desiredLetterSpacing: undefined,
  
  /*
   * Maximum letter spacing expressed as a percentage.
   * @type {Number}
   */
  maximumLetterSpacing: undefined,
  
  /*
   * Minimum letter spacing expressed as a percentage.
   * @type {Number}
   */
  minimumLetterSpacing: undefined,
  
  /*
   * Desired glyph scaling expressed as a percentage.
   * @type {Number}
   */
  desiredGlyphScaling: undefined,
  
  /*
   * Maximum glyph scaling expressed as a percentage.
   * @type {Number}
   */
  maximumGlyphScaling: undefined,
  
  /*
   * Minimum glyph scaling expressed as a percentage.
   * @type {Number}
   */
  minimumGlyphScaling: undefined,
  
  /*
   * Single word justification.
   * @type {Justification}
   */
  singleWordJustification: undefined,
  
  /*
   * Auto leading amount (in percentage)
   * @type {Number}
   */
  autoLeadingAmount: undefined,
  
  /*
   * Auto leading type.
   * @type {AutoLeadingType}
   */
  leadingType: undefined,
  
  /*
   * Tab stop settings.
   * @type {TabStopInfo}
   */
  tabStops: undefined,
  
  /*
   * Is Roman hanging punctuation enabled?
   * @type {Boolean}
   */
  romanHanging: undefined,
  
  /*
   * Is BunriKinshi enabled?
   * @type {Boolean}
   */
  bunriKinshi: undefined,
  
  /*
   * The Burasagari type.
   * @type {BurasagariTypeEnum}
   */
  burasagariType: undefined,
  
  /*
   * The preferred Kinsoku order.
   * @type {KinsokuOrderEnum}
   */
  kinsokuOrder: undefined,
  
  /*
   * Is KurikaeshiMojiShori enabled?
   * @type {Boolean}
   */
  kurikaeshiMojiShori: undefined,
  
  /*
   * The Kinsoku Shori name.
   * @type {String}
   */
  kinsoku: undefined,
  
  /*
   * The Mojikumi name.
   * @type {String}
   */
  mojikumi: undefined,
  
  /*
   * Whether to enable every line composer (as opposed to single line composer)?
   * @type {Boolean}
   */
  everyLineComposer: undefined,
  
};
