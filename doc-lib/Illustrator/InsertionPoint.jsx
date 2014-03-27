/*
 * A location between characters, used to insert new text objects.
 */
var InsertionPoint = {
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
   * The story of the text range.
   * @type {Story}
   */
  story: undefined,
  
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
  
};
