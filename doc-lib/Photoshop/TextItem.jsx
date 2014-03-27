/*
 * The text object contained in an art layer.
 */
var TextItem = {
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
   * The method of anti-aliasing to use.
   * @type {AntiAlias}
   */
  antiAliasMethod: undefined,
  
  /*
   * Options for auto kerning.
   * @type {AutoKernType}
   */
  autoKerning: undefined,
  
  /*
   * The text color.
   * @type {SolidColor}
   */
  color: undefined,
  
  /*
   * If true, uses the font's built-in leading information.
   * @type {Boolean}
   */
  useAutoLeading: undefined,
  
  /*
   * The amount of uniform spacing between multiple characters. Range: -1000 to 10000.
   * @type {Number}
   */
  tracking: undefined,
  
  /*
   * Character scaling (vertical) in proportion to horizontal scale. Range: 0 - 1000 as a percentage.
   * @type {int}
   */
  verticalScale: undefined,
  
  /*
   * Character scaling (horizontal) in proportion to horizontal scale. Range: 0 - 1000 as a percentage.
   * @type {int}
   */
  horizontalScale: undefined,
  
  /*
   * The amount of baseline offset of text.
   * @type {UnitValue}
   */
  baselineShift: undefined,
  
  /*
   * The actual text in the layer.
   * @type {String}
   */
  contents: undefined,
  
  /*
   * The text face of the character.
   * @type {String}
   */
  font: undefined,
  
  /*
   * The leading amount.
   * @type {UnitValue}
   */
  leading: undefined,
  
  /*
   * If true, ligatures are used.
   * @type {Boolean}
   */
  ligatures: undefined,
  
  /*
   * If true, alternate ligatures are used.
   * @type {Boolean}
   */
  alternateLigatures: undefined,
  
  /*
   * If true, old style is used.
   * @type {Boolean}
   */
  oldStyle: undefined,
  
  /*
   * The position of the origin for the text. The array must contain two values. Setting this property is basically equivalent to clicking the text tool at a point in the document to create the point of origin for text.
   * @type {UnitPoint}
   */
  position: undefined,
  
  /*
   * The text orientation.
   * @type {Direction}
   */
  direction: undefined,
  
  /*
   * The font size.
   * @type {UnitValue}
   */
  size: undefined,
  
  /*
   * If true, faux bold is used.
   * @type {Boolean}
   */
  fauxBold: undefined,
  
  /*
   * If true, faux italic is used.
   * @type {Boolean}
   */
  fauxItalic: undefined,
  
  /*
   * The case of the text.
   * @type {Case}
   */
  capitalization: undefined,
  
  /*
   * The strike through option to use.
   * @type {StrikeThruType}
   */
  strikeThru: undefined,
  
  /*
   * Options for underlining the text.
   * @type {UnderlineType}
   */
  underline: undefined,
  
  /*
   * The language.
   * @type {Language}
   */
  language: undefined,
  
  /*
   * If true, words are not allowed to break at the end of a line. When enacted on large amounts of consecutive characters, can prevent word wrap and thus may prevent some text from appearing on the screen.
   * @type {Boolean}
   */
  noBreak: undefined,
  
  /*
   * The type of text.
   * @type {TextType}
   */
  kind: undefined,
  
  /*
   * The paragraph justification.
   * @type {Justification}
   */
  justification: undefined,
  
  /*
   * The amount to indent text from the left. Range: -1296 to 1296.
   * @type {UnitValue}
   */
  leftIndent: undefined,
  
  /*
   * The amount to indent the first line of paragraphs. Range: -1296 to 1296.
   * @type {UnitValue}
   */
  firstLineIndent: undefined,
  
  /*
   * The amount to indent text from the right. Range: -1296 to 1296.
   * @type {UnitValue}
   */
  rightIndent: undefined,
  
  /*
   * The amount of space before each paragraph. Range: -1296 to 1296.
   * @type {UnitValue}
   */
  spaceBefore: undefined,
  
  /*
   * The amount of space after each paragraph. Range: -1296 to 1296.
   * @type {UnitValue}
   */
  spaceAfter: undefined,
  
  /*
   * If true, uses Roman hanging punctuation.
   * @type {Boolean}
   */
  hangingPuntuation: undefined,
  
  /*
   * The text composing engine to use.
   * @type {TextComposer}
   */
  textComposer: undefined,
  
  /*
   * If true, hyphenation is used.
   * @type {Boolean}
   */
  hyphenation: undefined,
  
  /*
   * The minimum amount (as a percentage) to scale the horizontal size of the text letters. Range: 50 - 200; at 100, the width of characters is not scaled. Valid only for justified text.
   * @type {Number}
   */
  minimumGlyphScaling: undefined,
  
  /*
   * The desired amount (as a percentage) to scale the horizontal size of the text letters. Range: 50 - 200; at 100, the width of characters is not scaled. Valid only for justified text.
   * @type {Number}
   */
  desiredGlyphScaling: undefined,
  
  /*
   * The maximum amount (as a percentage) to scale the horizontal size of the text letters. Range: 50 - 200; at 100, the width of characters is not scaled. Valid only for justified text.
   * @type {Number}
   */
  maximumGlyphScaling: undefined,
  
  /*
   * The minimum amount of space (as a percentage) between letters. Range: 100 to 500; at 0, no space is added between letters. Valid only for justified text.
   * @type {Number}
   */
  minimumLetterScaling: undefined,
  
  /*
   * The amount of space (as a percentage) between letters. Range: 100 - 500; at 0, no space is added between letters. Valid only for justified text.
   * @type {Number}
   */
  desiredLetterScaling: undefined,
  
  /*
   * The maximum amount (as a percentage) of space between letters. Range: 100 - 500; at 0, no space is added between letters. Valid only for justified text.
   * @type {Number}
   */
  maximumLetterScaling: undefined,
  
  /*
   * The minimum amount (as a percentage) of space between words. Range: 0 -1000; at 100, no additional space is added between words. Valid only for justified text.
   * @type {Number}
   */
  minimumWordScaling: undefined,
  
  /*
   * The amount (as a percentage) of space between words. Range: 0 -1000; at 100, no additional space is added between words. Valid only for justified text.
   * @type {Number}
   */
  desiredWordScaling: undefined,
  
  /*
   * The maximum amount (as a percentage) of space between words (0 -1000; at 100, no additional space is added between words). Valid only for justified text.
   * @type {Number}
   */
  maximumWordScaling: undefined,
  
  /*
   * The percentage to use for auto leading. Range: 0.01 to 5000.00.
   * @type {Number}
   */
  autoLeadingAmount: undefined,
  
  /*
   * The minimum number of letters a word must have in order for hyphenation in word wrap to be allowed. Range: 2 to 25.
   * @type {int}
   */
  hyphenateWordsLongerThan: undefined,
  
  /*
   * The number of letters after which hyphenation in word wrap is allowed. Range: 1 to 15.
   * @type {int}
   */
  hyphenateAfterFirst: undefined,
  
  /*
   * The number of letters before which hyphenation in word wrap is allowed. Range: 1 to 15.
   * @type {int}
   */
  hyphenateBeforeLast: undefined,
  
  /*
   * The maximum number of consecutive lines that can end with a hyphenated word.
   * @type {int}
   */
  hyphenLimit: undefined,
  
  /*
   * The distance at the end of a line that will cause a word to break in unjustified type. Range: 0 - 720 picas.
   * @type {UnitValue}
   */
  hyphenationZone: undefined,
  
  /*
   * If true, capitalized words can be hyphenated.
   * @type {Boolean}
   */
  hyphenateCapitalWords: undefined,
  
  /*
   * The width of the bounding box for paragraph text.
   * @type {UnitValue}
   */
  width: undefined,
  
  /*
   * The height of the bounding box for paragraph text.
   * @type {UnitValue}
   */
  height: undefined,
  
  /*
   * The style of warp.
   * @type {WarpStyle}
   */
  warpStyle: undefined,
  
  /*
   * The warp direction.
   * @type {Direction}
   */
  warpDirection: undefined,
  
  /*
   * The warp bend percentage. Range: -100 to 100.
   * @type {Number}
   */
  warpBend: undefined,
  
  /*
   * The warp horizontal distortion percentage. Range: -100 to 100.
   * @type {Number}
   */
  warpHorizontalDistortion: undefined,
  
  /*
   * The warp vertical distortion percentage. Range: -100 to 100.
   * @type {Number}
   */
  warpVerticalDistortion: undefined,
  
  /*
   * Creates a clipping path from the outlines of the actual text items (such as letters or words).
   */
  createPath: function() {
  },
  
  /*
   * Converts the text object and its containing layer to a fill layer with the text changed to a clipping path.
   */
  convertToShape: function() {
  },
  
};
