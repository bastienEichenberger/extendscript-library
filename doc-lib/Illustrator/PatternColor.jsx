/*
 * A Pattern color specification.
 */
var PatternColor = {
  /*
   * The distance to translate the (unscaled) prototype before filling.
   * @type {Number}
   */
  shiftDistance: undefined,
  
  /*
   * The angle to translate the (unscaled) prototype before filling.
   * @type {Number}
   */
  shiftAngle: undefined,
  
  /*
   * The fraction to scale the prototype before filling.
   * @type {Point}
   */
  scaleFactor: undefined,
  
  /*
   * The angle to rotate the before filling.
   * @type {Number}
   */
  rotation: undefined,
  
  /*
   * Whether or not the prototype is reflected before filling.
   * @type {Boolean}
   */
  reflect: undefined,
  
  /*
   * The axis around which to reflect.
   * @type {Number}
   */
  reflectAngle: undefined,
  
  /*
   * The angle to slant the shear by.
   * @type {Number}
   */
  shearAngle: undefined,
  
  /*
   * The axis to shear with respect to.
   * @type {Number}
   */
  shearAxis: undefined,
  
  /*
   * Additional transformation arising from manipulating the path.
   * @type {Matrix}
   */
  matrix: undefined,
  
  /*
   * undefined
   * @type {Pattern}
   */
  pattern: undefined,
  
};
