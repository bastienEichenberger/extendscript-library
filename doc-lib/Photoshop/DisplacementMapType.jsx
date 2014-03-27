/*
 * Describes how the displacement map fits the image if the image is not the same size as the map.
 */
var DisplacementMapType = {
  /*
   * The map is resized.
   * @type {int}
   */
  STRETCHTOFIT: undefined,
  
  /*
   * The selection is filled by repeating the map in a pattern.
   * @type {int}
   */
  TILE: undefined,
  
};
