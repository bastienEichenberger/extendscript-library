/*
 * Creates and returns a new object of a given type.
 * @constructor
   *
 * @param {any} what The object type.
 */
function Object(what) {
  /*
   * Points to the prototype object for this object.
   * @type {Object}
   */
  this.prototype = undefined;
  
  /*
   * Points to the constructor function that created this object.
   * @type {Function}
   */
  this.constructor = undefined;
  
  /*
   * Retrieves and returns the Reflection object associated with this method or a property.
   * @type {Reflection}
   */
  this.reflect = undefined;
  
  /*
   * Reports whether an object is still valid.
   *
   * @param {Object} what The object to check.
   * @returns {Boolean}
   */
  this.isValid = function(what) {
    return new Boolean();
  }
  
  /*
   * Creates and returns a string representing this object.
   * @returns {String}
   */
  this.toString = function() {
    return new String();
  }
  
  /*
   * undefined
   * @returns {String}
   */
  this.toLocaleString = function() {
    return new String();
  }
  
  /*
   * Reports whether a given property is defined with an instance or within the prototype chain.
   *
   * @param {String} name The name of the property to check.
   * @returns {Boolean}
   */
  this.hasOwnProperty = function(name) {
    return new Boolean();
  }
  
  /*
   * Reports whether a given property is enumerable.
   *
   * @param {String} name The name of the property to check.
   * @returns {Boolean}
   */
  this.propertyIsEnumerable = function(name) {
    return new Boolean();
  }
  
  /*
   * Checks whether the given object is a prototype of this object.
   *
   * @param {Object} what The object to check.
   * @returns {Boolean}
   */
  this.isPrototypeOf = function(what) {
    return new Boolean();
  }
  
  /*
   * Retrieves and returns the primitive value of this object.
   * @returns {Object}
   */
  this.valueOf = function() {
    return new Object();
  }
  
  /*
   * Creates and returns a string representation of this object.
   * @returns {String}
   */
  this.toSource = function() {
    return new String();
  }
  
  /*
   * Removes the watch function of a property.
   *
   * @param {String} name The name of the property to unwatch.
   */
  this.unwatch = function(name) {
  }
  
  /*
   * Adds a watch function to a property, which is called when the value changes.
   *
   * @param {String} name The name of the property to watch.
   * @param {Function} func The function to be called when the value of this property changes.
   */
  this.watch = function(name, func) {
  }
  
}
