/*
 * A collection of notifier objects in the document.
 */
var Notifiers = {
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
   * Number of elements in the collection.
   * @type {int}
   */
  length: undefined,
  
  /*
   * Creates a notifier.
 *
   * @param {String} event The class id of the event, four characters or a unique string.
   * @param {File} eventFile The script file to execute when the event occurs.
   * @param {String} [eventClass] The class of the object the event is applied to, four characters or a unique string. When an event applies to multiple types of objects, you use the event class parameter to distinguish which object this Notifier applies to. For example, the Make event (�Mk�) applies to documents (�Dcmn�), channels (�Chnl�) and other objects.
   * @returns {Notifier}
   */
  add: function(event, eventFile, eventClass) {
    return new Notifier();
  },
  
  /*
   * Deletes all elements.
   */
  removeAll: function() {
  },
  
  /*
   * Get the first element in the collection with the provided name.
 *
   * @param {String} name undefined
   * @returns {Notifier}
   */
  getByName: function(name) {
    return new Notifier();
  },
  
  /*
   * Get an element in the collection with the provided index.
 *
   * @param {uint} index undefined
   * @returns {Notifier}
   */
  []: function(index) {
    return new Notifier();
  },
  
};
