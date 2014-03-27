/*
 * The amount and type of compression to use for bitmap images.
 */
var CompressionQuality = {
  /*
   * Uses minimum compression. Not valid when bitmap compression is ZIP.
   * @type {Number}
   */
  MINIMUM: undefined,
  
  /*
   * Uses low compression. Not valid when bitmap compression is ZIP.
   * @type {Number}
   */
  LOW: undefined,
  
  /*
   * Uses medium compression. Not valid when bitmap compression is ZIP.
   * @type {Number}
   */
  MEDIUM: undefined,
  
  /*
   * Uses high compression. Not valid when bitmap compression is ZIP.
   * @type {Number}
   */
  HIGH: undefined,
  
  /*
   * Uses maximum compression. Not valid when bitmap compression is ZIP.
   * @type {Number}
   */
  MAXIMUM: undefined,
  
  /*
   * Uses 4-bit compression. Valid only when bitmap compression is ZIP.
   * @type {Number}
   */
  FOUR_BIT: undefined,
  
  /*
   * Uses 8-bit compression. Valid only when bitmap compression is ZIP.
   * @type {Number}
   */
  EIGHT_BIT: undefined,
  
};
