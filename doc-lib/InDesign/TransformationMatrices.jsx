/*
 * A collection of transformation matrices.
 */
var TransformationMatrices = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Create a new TransformationMatrix.
 *
   * @param {Number} [horizontalScaleFactor] The horizontal scale factor of the transformation matrix 
   * @param {Number} [verticalScaleFactor] The vertical scale factor of the transformation matrix 
   * @param {Number} [clockwiseShearAngle] The shear angle of the transformation matrix 
   * @param {Number} [counterclockwiseRotationAngle] The rotation angle of the transformation matrix 
   * @param {Number} [horizontalTranslation] The horizontal translation of the transformation matrix 
   * @param {Number} [verticalTranslation] The vertical translation of the transformation matrix 
   * @param {Number} [matrixValues] The values of the transformation matrix 
   * @param {Mixed} [matrixMapping] The mapping the transformation matrix performs on the unit triangle. Can accept: Array of Array of 2 Arrays of 2 Reals. 
   * @param {Object} [withProperties] Initial values for properties of the new TransformationMatrix 
   * @returns {TransformationMatrix}
   */
  add: function(horizontalScaleFactor, verticalScaleFactor, clockwiseShearAngle, counterclockwiseRotationAngle, horizontalTranslation, verticalTranslation, matrixValues, matrixMapping, withProperties) {
    return new TransformationMatrix();
  },
  
  /*
   * Displays the number of elements in the TransformationMatrix.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the TransformationMatrix with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {TransformationMatrix}
   */
  item: function(index) {
    return new TransformationMatrix();
  },
  
  /*
   * Returns the TransformationMatrix with the specified name.
 *
   * @param {String} name The name.
   * @returns {TransformationMatrix}
   */
  itemByName: function(name) {
    return new TransformationMatrix();
  },
  
  /*
   * Returns the TransformationMatrices within the specified range.
 *
   * @param {Mixed} from The TransformationMatrix, index, or name at the beginning of the range. Can accept: TransformationMatrix, Long Integer or String.
   * @param {Mixed} to The TransformationMatrix, index, or name at the end of the range. Can accept: TransformationMatrix, Long Integer or String.
   * @returns {TransformationMatrix}
   */
  itemByRange: function(from, to) {
    return new TransformationMatrix();
  },
  
  /*
   * Returns the first TransformationMatrix in the collection.
   * @returns {TransformationMatrix}
   */
  firstItem: function() {
    return new TransformationMatrix();
  },
  
  /*
   * Returns the last TransformationMatrix in the collection.
   * @returns {TransformationMatrix}
   */
  lastItem: function() {
    return new TransformationMatrix();
  },
  
  /*
   * Returns the middle TransformationMatrix in the collection.
   * @returns {TransformationMatrix}
   */
  middleItem: function() {
    return new TransformationMatrix();
  },
  
  /*
   * Returns the TransformationMatrix with the index previous to the specified index.
 *
   * @param {TransformationMatrix} obj The index of the TransformationMatrix that follows the desired TransformationMatrix.
   * @returns {TransformationMatrix}
   */
  previousItem: function(obj) {
    return new TransformationMatrix();
  },
  
  /*
   * Returns the TransformationMatrix whose index follows the specified TransformationMatrix in the collection.
 *
   * @param {TransformationMatrix} obj The TransformationMatrix whose index comes before the desired TransformationMatrix.
   * @returns {TransformationMatrix}
   */
  nextItem: function(obj) {
    return new TransformationMatrix();
  },
  
  /*
   * Returns any TransformationMatrix in the collection.
   * @returns {TransformationMatrix}
   */
  anyItem: function() {
    return new TransformationMatrix();
  },
  
  /*
   * Returns every TransformationMatrix in the collection.
   * @returns {TransformationMatrix}
   */
  everyItem: function() {
    return new TransformationMatrix();
  },
  
  /*
   * Generates a string which, if executed, will return the TransformationMatrix.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the TransformationMatrix with the specified index.
 *
   * @param {Number} index The index.
   * @returns {TransformationMatrix}
   */
  []: function(index) {
    return new TransformationMatrix();
  },
  
};
