/*
 * Options for aligning small characters to the largest character in the line.
 */
var CharacterAlignment = {
  /*
   * Aligns small characters in a line to the large character.
   * @type {Number}
   */
  ALIGN_BASELINE: undefined,
  
  /*
   * Aligns small characters in horizontal text to the top of the em box of large characters. In vertical text, aligns characters to the right of the em box.
   * @type {Number}
   */
  ALIGN_EM_TOP: undefined,
  
  /*
   * Aligns small characters to the center of the em box of large characters.
   * @type {Number}
   */
  ALIGN_EM_CENTER: undefined,
  
  /*
   * Aligns small characters in horizontal text to the bottom of the em box of large characters. In vertical text, aligns characters to the left of the em box.
   * @type {Number}
   */
  ALIGN_EM_BOTTOM: undefined,
  
  /*
   * Aligns small characters in horizontal text to the top of the ICF of large characters. In vertical text, aligns characters to the right of the ICF.
   * @type {Number}
   */
  ALIGN_ICF_TOP: undefined,
  
  /*
   * Aligns small characters in horizontal text to the bottom of the ICF of large characters. In vertical text, aligns characters to the left of the ICF.
   * @type {Number}
   */
  ALIGN_ICF_BOTTOM: undefined,
  
};
