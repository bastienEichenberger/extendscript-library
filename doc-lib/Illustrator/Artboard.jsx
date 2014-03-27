/*
 * An artboard object.
 */
var Artboard = {
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
   * Size and position of artboard.
   * @type {Rectangle}
   */
  artboardRect: undefined,
  
  /*
   * Pixel aspect ratio, used in ruler visualization if the units are pixels.
   * @type {Number}
   */
  rulerPAR: undefined,
  
  /*
   * Show center mark.
   * @type {Boolean}
   */
  showCenter: undefined,
  
  /*
   * Show cross hairs.
   * @type {Boolean}
   */
  showCrossHairs: undefined,
  
  /*
   * Show title and action safe areas (for video)
   * @type {Boolean}
   */
  showSafeAreas: undefined,
  
  /*
   * Ruler origin of artboard.It is relative to left-bottom corner of the Artboard.
   * @type {Point}
   */
  rulerOrigin: undefined,
  
  /*
   * The name of the artboard.
   * @type {String}
   */
  name: undefined,
  
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
