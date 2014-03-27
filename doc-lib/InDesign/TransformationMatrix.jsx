/*
 * A transformation matrix.
 */
var TransformationMatrix = {
  /*
   * The name of the TransformationMatrix.
   * @type {String}
   */
  name: undefined,
  
  /*
   * The values of the transformation matrix.
   * @type {Number}
   */
  matrixValues: undefined,
  
  /*
   * The horizontal scale factor of the transformation matrix.
   * @type {Number}
   */
  horizontalScaleFactor: undefined,
  
  /*
   * The vertical scale factor of the transformation matrix.
   * @type {Number}
   */
  verticalScaleFactor: undefined,
  
  /*
   * The shear angle of the transformation matrix.
   * @type {Number}
   */
  clockwiseShearAngle: undefined,
  
  /*
   * The rotation angle of the transformation matrix.
   * @type {Number}
   */
  counterclockwiseRotationAngle: undefined,
  
  /*
   * The horizontal translation of the transformation matrix.
   * @type {Number}
   */
  horizontalTranslation: undefined,
  
  /*
   * The vertical translation of the transformation matrix.
   * @type {Number}
   */
  verticalTranslation: undefined,
  
  /*
   * The mapping the transformation matrix performs on the unit triangle. Can return: Array of Array of 2 Arrays of 2 Reals.
   * @type {Mixed}
   */
  matrixMapping: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the TransformationMatrix (a Application).
   * @type {Application}
   */
  parent: undefined,
  
  /*
   * The index of the TransformationMatrix within its containing object.
   * @type {Number}
   */
  index: undefined,
  
  /*
   * A collection of events.
   * @type {Events}
   */
  events: undefined,
  
  /*
   * A collection of event listeners.
   * @type {EventListeners}
   */
  eventListeners: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Scale the transformation matrix.
 *
   * @param {Number} [horizontallyBy] The horizontal scale factor 
   * @param {Number} [verticallyBy] The vertical scale factor 
   * @returns {TransformationMatrix}
   */
  scaleMatrix: function(horizontallyBy, verticallyBy) {
    return new TransformationMatrix();
  },
  
  /*
   * Shear the transformation matrix.
 *
   * @param {Number} [byAngle] The horizontal shear angle 
   * @param {Number} [bySlope] The horizontal shear slope 
   * @returns {TransformationMatrix}
   */
  shearMatrix: function(byAngle, bySlope) {
    return new TransformationMatrix();
  },
  
  /*
   * Rotate the transformation matrix.
 *
   * @param {Number} [byAngle] The counterclockwise rotation angle 
   * @param {Number} [byCosine] The cosine of the desired rotation 
   * @param {Number} [bySine] The sine of the desired rotation 
   * @returns {TransformationMatrix}
   */
  rotateMatrix: function(byAngle, byCosine, bySine) {
    return new TransformationMatrix();
  },
  
  /*
   * Translate the transformation matrix.
 *
   * @param {Number} [horizontallyBy] The horizontal translation distance 
   * @param {Number} [verticallyBy] The vertical translation distance 
   * @returns {TransformationMatrix}
   */
  translateMatrix: function(horizontallyBy, verticallyBy) {
    return new TransformationMatrix();
  },
  
  /*
   * Multiply the transformation matrix by another.
 *
   * @param {TransformationMatrix} withMatrix The right hand matrix factor
   * @returns {TransformationMatrix}
   */
  catenateMatrix: function(withMatrix) {
    return new TransformationMatrix();
  },
  
  /*
   * Invert the transformation matrix.
   * @returns {TransformationMatrix}
   */
  invertMatrix: function() {
    return new TransformationMatrix();
  },
  
  /*
   * Multiply the point by the matrix.
 *
   * @param {Number} point The point to transform
   * @returns {Number}
   */
  changeCoordinates: function(point) {
    return new Number();
  },
  
  /*
   * Generates a string which, if executed, will return the TransformationMatrix.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {TransformationMatrix}
   */
  getElements: function() {
    return new TransformationMatrix();
  },
  
  /*
   * Retrieves the object specifier.
   * @returns {String}
   */
  toSpecifier: function() {
    return new String();
  },
  
  /*
   * Adds an event listener.
 *
   * @param {String} eventType The event type.
   * @param {Mixed} handler The event handler. Can accept: File or JavaScript Function.
   * @param {Boolean} [captures] This parameter is obsolete. 
   * @returns {EventListener}
   */
  addEventListener: function(eventType, handler, captures) {
    return new EventListener();
  },
  
  /*
   * Removes the event listener.
 *
   * @param {String} eventType The registered event type.
   * @param {Mixed} handler The registered event handler. Can accept: File or JavaScript Function.
   * @param {Boolean} [captures] This parameter is obsolete. 
   * @returns {Boolean}
   */
  removeEventListener: function(eventType, handler, captures) {
    return new Boolean();
  },
  
};
