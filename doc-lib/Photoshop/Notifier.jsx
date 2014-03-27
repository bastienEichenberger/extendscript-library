/*
 * An event-handler object that tells the script to execute specified code when a specified event occurs. For notifiers to work, they must be enabled. See the &apos;notifiers enabled' property of the Application object. Events that occur within scripts do not generally trigger notifiers, because they occur inside of a &quot;play script" event.
 */
var Notifier = {
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
   * The event ID in four characters or a unique string that the notifier is associated with.
   * @type {String}
   */
  event: undefined,
  
  /*
   * The path to the file to execute when the event occurs/activates the notifier.
   * @type {File}
   */
  eventFile: undefined,
  
  /*
   * The class ID associated with the event for the Notifier object, four characters or a unique string.
   * @type {String}
   */
  eventClass: undefined,
  
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
