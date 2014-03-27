/*
 * Plugin artwork item.
 */
var PluginItem = {
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
   * Is the plugin group a tracing?
   * @type {Boolean}
   */
  isTracing: undefined,
  
  /*
   * The tracing object associated with this plugin item.
   * @type {TracingObject}
   */
  tracing: undefined,
  
  /*
   * Move the object.
 *
   * @param {Object} relativeObject undefined
   * @param {ElementPlacement} insertionLocation undefined
   * @returns {PluginItem}
   */
  move: function(relativeObject, insertionLocation) {
    return new PluginItem();
  },
  
  /*
   * Duplicate this object.
 *
   * @param {Object} relativeObject undefined
   * @param {ElementPlacement} insertionLocation undefined
   * @returns {PluginItem}
   */
  duplicate: function(relativeObject, insertionLocation) {
    return new PluginItem();
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
  
};
