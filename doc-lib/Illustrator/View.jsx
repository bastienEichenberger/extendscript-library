/*
 * A view.
 */
var View = {
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
   * The bounding rectangle of this view.
   * @type {Rectangle}
   */
  bounds: undefined,
  
  /*
   * The center point of this view.
   * @type {Point}
   */
  centerPoint: undefined,
  
  /*
   * The zoom factor of this view.
   * @type {Number}
   */
  zoom: undefined,
  
  /*
   * The mode of display.
   * @type {ScreenMode}
   */
  screenMode: undefined,
  
};
