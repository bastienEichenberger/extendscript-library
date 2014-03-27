/*
 * Text frame item.
 */
var TextFrameItem = {
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
   * The story of the text frame.
   * @type {Story}
   */
  story: undefined,
  
  /*
   * The text contents of this text frame.
   * @type {String}
   */
  contents: undefined,
  
  /*
   * The text range of the text frame.
   * @type {TextRange}
   */
  textRange: undefined,
  
  /*
   * The selected text (ranges) in the story.
   * @type {TextRange}
   */
  textSelection: undefined,
  
  /*
   * The row count in the text frame (area text only)
   * @type {Int32}
   */
  rowCount: undefined,
  
  /*
   * The column count in the text frame (area text only)
   * @type {Int32}
   */
  columnCount: undefined,
  
  /*
   * The row gutter in the text frame (area text only)
   * @type {Number}
   */
  rowGutter: undefined,
  
  /*
   * The column gutter in the text frame (area text only)
   * @type {Number}
   */
  columnGutter: undefined,
  
  /*
   * Flow text between linked frame horizontally first. (area text only)
   * @type {Boolean}
   */
  flowLinksHorizontally: undefined,
  
  /*
   * The amount of spacing (path text only)
   * @type {Number}
   */
  spacing: undefined,
  
  /*
   * Is the optical alignment active?
   * @type {Boolean}
   */
  opticalAlignment: undefined,
  
  /*
   * The type of a text frame item.
   * @type {TextType}
   */
  kind: undefined,
  
  /*
   * The content variable bound to this text art item.
   * @type {any}
   */
  contentVariable: undefined,
  
  /*
   * The orientation of the text in the frame.
   * @type {TextOrientation}
   */
  orientation: undefined,
  
  /*
   * The path for the text frame (area and path text)
   * @type {TextPath}
   */
  textPath: undefined,
  
  /*
   * The position of the anchor point (start of base line for point text)
   * @type {Point}
   */
  anchor: undefined,
  
  /*
   * The start position of text along a path, as a value relative to the path's segments (path text only)
   * @type {Number}
   */
  startTValue: undefined,
  
  /*
   * The end position of text along a path, as a value relative to the path's segments (path text only)
   * @type {Number}
   */
  endTValue: undefined,
  
  /*
   * The linked text frame preceding this one.
   * @type {TextFrameItem}
   */
  previousFrame: undefined,
  
  /*
   * The linked text frame following this one.
   * @type {TextFrameItem}
   */
  nextFrame: undefined,
  
  /*
   * The transformation matrix of the text frame object.
   * @type {Matrix}
   */
  matrix: undefined,
  
  /*
   * The type of a text anti-aliasing on text frame item.
   * @type {TextAntialias}
   */
  antialias: undefined,
  
  /*
   * The first baseline offset type for text frame item (for Area Text only)
   * @type {FirstBaselineType}
   */
  firstBaseline: undefined,
  
  /*
   * The first baseline offset minimum value for text frame item (for Area Text only)
   * @type {Number}
   */
  firstBaselineMin: undefined,
  
  /*
   * All the characters in this text range.
   * @type {Characters}
   */
  characters: undefined,
  
  /*
   * All the words in this text range.
   * @type {Words}
   */
  words: undefined,
  
  /*
   * All the lines in this text range.
   * @type {Lines}
   */
  lines: undefined,
  
  /*
   * All the paragraphs in this text range.
   * @type {Paragraphs}
   */
  paragraphs: undefined,
  
  /*
   * All the text in this text range.
   * @type {TextRanges}
   */
  textRanges: undefined,
  
  /*
   * All the insertion points in this text range.
   * @type {InsertionPoints}
   */
  insertionPoints: undefined,
  
  /*
   * Move the object.
 *
   * @param {Object} relativeObject undefined
   * @param {ElementPlacement} insertionLocation undefined
   * @returns {TextFrameItem}
   */
  move: function(relativeObject, insertionLocation) {
    return new TextFrameItem();
  },
  
  /*
   * Duplicate this object.
 *
   * @param {Object} relativeObject undefined
   * @param {ElementPlacement} insertionLocation undefined
   * @returns {TextFrameItem}
   */
  duplicate: function(relativeObject, insertionLocation) {
    return new TextFrameItem();
  },
  
  /*
   * Deletes this object.
   */
  remove: function() {
  },
  
  /*
   * Deletes all elements.
   */
  removeAll: function() {
  },
  
  /*
   * Convert text item to path items.
   * @returns {GroupItem}
   */
  createOutline: function() {
    return new GroupItem();
  },
  
  /*
   * Convert Area Type Text Object To Point Type Object.
   * @returns {TextFrameItem}
   */
  convertAreaObjectToPointObject: function() {
    return new TextFrameItem();
  },
  
  /*
   * Convert Point Type Text Object To Area Type Object.
   * @returns {TextFrameItem}
   */
  convertPointObjectToAreaObject: function() {
    return new TextFrameItem();
  },
  
};
