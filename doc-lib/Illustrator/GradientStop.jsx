/*
 * A gradient stop.
 */
var GradientStop = {
  /*
   * The object's container.
   * @type {Object}
   */
  parent: undefined,
  
  /*
   * The class name of the object.
   * @type {String}
   */
  typename: undefined,
  
  /*
   * Midpoint key value in percent.
   * @type {Number}
   */
  midPoint: undefined,
  
  /*
   * Location of color in the blend (in percent)
   * @type {Number}
   */
  rampPoint: undefined,
  
  /*
   * The color linked to this gradient stop.
   * @type {Color}
   */
  color: undefined,
  
  /*
   * The opacity (between 0.0 and 100.0) value for the gradient stop.
   * @type {Number}
   */
  opacity: undefined,
  
  /*
   * Deletes this object.
   */
  remove: function() {
  },
  
  /*
   * Deletes all elements.
   */
  removeAll: function() {
  },
  
};
