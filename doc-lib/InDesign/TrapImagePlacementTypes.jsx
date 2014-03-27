/*
 * Options for trap placement between vector objects and bitmap images.
 */
var TrapImagePlacementTypes = {
  /*
   * Creates a trap that straddles the edge between vector objects and bitmap images.
   * @type {Number}
   */
  CENTER_EDGES: undefined,
  
  /*
   * Causes vector objects to overlap abutting images.
   * @type {Number}
   */
  CHOKE: undefined,
  
  /*
   * Applies the same trapping rules as used elsewhere in the document. Note: When used to trap an object to a photograph, can result in noticeably uneven edges as the trap moves from one side of the edge to another.
   * @type {Number}
   */
  IMAGE_NEUTRAL_DENSITY: undefined,
  
  /*
   * Causes bitmap images to overlap the abutting objects.
   * @type {Number}
   */
  IMAGES_OVER_SPREAD: undefined,
  
};
