/*
 * Dynamic object used to create data-driven graphics.
 */
var Variable = {
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
   * The variable's type.
   * @type {VariableKind}
   */
  kind: undefined,
  
  /*
   * The name of this variable.
   * @type {String}
   */
  name: undefined,
  
  /*
   * All the artwork in this document.
   * @type {PageItems}
   */
  pageItems: undefined,
  
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
