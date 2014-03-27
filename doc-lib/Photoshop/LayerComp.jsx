/*
 * A snapshot of a state of the layers in a document &amp;&#35;40;can be used to view different page layouts or compostions&#41;.
 */
var LayerComp = {
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
   * The name of the layer comp.
   * @type {String}
   */
  name: undefined,
  
  /*
   * The description of the layer comp.
   * @type {any}
   */
  comment: undefined,
  
  /*
   * If true, uses layer appearance (layer styles) settings.
   * @type {Boolean}
   */
  appearance: undefined,
  
  /*
   * If true, uses layer position.
   * @type {Boolean}
   */
  position: undefined,
  
  /*
   * If true, the layer comp is visible.
   * @type {Boolean}
   */
  visibility: undefined,
  
  /*
   * If true, the layer comp is currently selected.
   * @type {Boolean}
   */
  selected: undefined,
  
  /*
   * Adds an element.
   * @returns {LayerComp}
   */
  add: function() {
    return new LayerComp();
  },
  
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
  
  /*
   * Applies the layer comp to the document.
   */
  apply: function() {
  },
  
  /*
   * Recaptures the current layer state(s) for this layer comp.
   */
  recapture: function() {
  },
  
  /*
   * Resets the layer comp state to the document state.
   */
  resetFromComp: function() {
  },
  
};
