/*
 * Options for embedding fonts in the exported EPS.
 */
var FontEmbedding = {
  /*
   * Embeds only references to fonts.
   * @type {Number}
   */
  NONE: undefined,
  
  /*
   * Embeds all fonts once per page.
   * @type {Number}
   */
  COMPLETE: undefined,
  
  /*
   * Embeds only the characters (glyphs) used in the document. Glyphs are downloaded once per page.
   * @type {Number}
   */
  SUBSET: undefined,
  
};
