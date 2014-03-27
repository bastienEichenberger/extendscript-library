/*
 * The method to use to smooth edges by softening the color transition between edge pixels and background pixels.
 */
var AntiAlias = {
  /*
   * Does not use anti-aliasing.
   * @type {int}
   */
  NONE: undefined,
  
  /*
   * Makes type appear its sharpest.
   * @type {int}
   */
  SHARP: undefined,
  
  /*
   * Makes type appear somewhat sharp.
   * @type {int}
   */
  CRISP: undefined,
  
  /*
   * Makes type appear heavier.
   * @type {int}
   */
  STRONG: undefined,
  
  /*
   * Makes type appear smoother.
   * @type {int}
   */
  SMOOTH: undefined,
  
};
