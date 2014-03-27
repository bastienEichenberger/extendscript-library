/*
 * Index entry capitalization options.
 */
var IndexCapitalizationOptions = {
  /*
   * Capitalizes the specified topic but does not capitalize its nested topics. Valid only as parameter of the topic capitalize method; cannot be used as a parameter of the index capitalize method. Note: Must occur after the specified topic and its nested topics are created.
   * @type {Number}
   */
  SELECTED_ENTRY: undefined,
  
  /*
   * Capitalizes the specified topic and its nested topics. Valid only as parameter of the topic capitalize method; cannot be used as a parameter of the index capitalize method. Note: Must occur after the selected topic and its nested subtopics are created.
   * @type {Number}
   */
  INCLUDE_SUBENTRIES: undefined,
  
  /*
   * Capitalizes all level 1 entries. Note: Capitalizes only topics created before the capitalization statement appears in the script.
   * @type {Number}
   */
  ALL_LEVEL_1_ENTRIES: undefined,
  
  /*
   * Capitalizes all index entries. Note: Capitalizes only topics created before the capitalization statement appears in the script.
   * @type {Number}
   */
  ALL_ENTRIES: undefined,
  
};
