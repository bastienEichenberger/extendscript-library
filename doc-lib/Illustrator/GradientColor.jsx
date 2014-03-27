/*
 * A Gradient color specification.
 */
var GradientColor = {
  /*
   * The gradient vector origin.
   * @type {Point}
   */
  origin: undefined,
  
  /*
   * The gradient vector angle.
   * @type {Number}
   */
  angle: undefined,
  
  /*
   * The gradient vector length.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * The gradient hilite vector angle.
   * @type {Number}
   */
  hiliteAngle: undefined,
  
  /*
   * The gradient hilite vector length.
   * @type {Number}
   */
  hiliteLength: undefined,
  
  /*
   * Additional transformation arising from manipulating the path.
   * @type {Matrix}
   */
  matrix: undefined,
  
  /*
   * Reference to the object defining the gradient.
   * @type {Gradient}
   */
  gradient: undefined,
  
};
