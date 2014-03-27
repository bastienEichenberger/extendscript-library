/*
 * Options for proofing colors.
 */
var ProofingType = {
  /*
   * Turns off soft proof display.
   * @type {Number}
   */
  PROOF_OFF: undefined,
  
  /*
   * Creates a soft proof of colors using the document's CMYK profile.
   * @type {Number}
   */
  DOCUMENT_CMYK: undefined,
  
  /*
   * Creates a soft proof of colors using the current CMYK working space.
   * @type {Number}
   */
  WORKING_CMYK: undefined,
  
  /*
   * Allows creation of a custom proofing setup for a specific output condition.
   * @type {Number}
   */
  CUSTOM: undefined,
  
};
