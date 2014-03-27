/*
 * Options for selection status in relation to previously selected objects.
 */
var SelectionOptions = {
  /*
   * Adds the object to the existing selection; if no object was previously selected, makes the object the only selected object.
   * @type {Number}
   */
  ADD_TO: undefined,
  
  /*
   * Deselects the object.
   * @type {Number}
   */
  REMOVE_FROM: undefined,
  
  /*
   * Selects the object and deselects any previously selected objects.
   * @type {Number}
   */
  REPLACE_WITH: undefined,
  
  /*
   * Sets the key object. At least 2 objects must be selected, and the key object specified must be one of them.
   * @type {Number}
   */
  SET_KEY: undefined,
  
};
