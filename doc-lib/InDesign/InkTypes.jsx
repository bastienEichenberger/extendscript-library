/*
 * Ink trapping type options.
 */
var InkTypes = {
  /*
   * Uses traditional process inks and most spot inks.
   * @type {Number}
   */
  NORMAL: undefined,
  
  /*
   * Uses heavy, nontransparent inks to prevent trapping of underlying colors but allow for trapping along the edges of the ink. Best for metallic inks.
   * @type {Number}
   */
  OPAQUE: undefined,
  
  /*
   * Uses clear inks to ensure that underlying items trap. Best for varnishes and dieline inks.
   * @type {Number}
   */
  TRANSPARENT: undefined,
  
  /*
   * Uses heavy, nontransparent inks to prevent trapping of underlying colors but allow for trapping along the edges of the ink. Best for inks that have undesirable interactions with other inks.
   * @type {Number}
   */
  OPAQUE_IGNORE: undefined,
  
};
