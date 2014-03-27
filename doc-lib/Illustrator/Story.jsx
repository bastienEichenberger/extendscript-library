/*
 * A contiguous block of text.
 */
var Story = {
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
   * The text range of the story.
   * @type {TextRange}
   */
  textRange: undefined,
  
  /*
   * The text frame items in this story.
   * @type {TextFrameItems}
   */
  textFrames: undefined,
  
  /*
   * The selected text (ranges) in the story.
   * @type {TextRange}
   */
  textSelection: undefined,
  
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
   * The number of characters in the story.
   * @type {Int32}
   */
  length: undefined,
  
};
