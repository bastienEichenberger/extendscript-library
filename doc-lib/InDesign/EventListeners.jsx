/*
 * A collection of event listeners.
 */
var EventListeners = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Adds an event listener.
 *
   * @param {String} eventType The event type.
   * @param {Mixed} handler The event handler. Can accept: File or JavaScript Function.
   * @param {Boolean} [captures] This parameter is obsolete. 
   * @param {Object} [withProperties] Initial values for properties of the new EventListener 
   * @returns {EventListener}
   */
  add: function(eventType, handler, captures, withProperties) {
    return new EventListener();
  },
  
  /*
   * Displays the number of elements in the EventListener.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the EventListener with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {EventListener}
   */
  item: function(index) {
    return new EventListener();
  },
  
  /*
   * Returns the EventListener with the specified name.
 *
   * @param {String} name The name.
   * @returns {EventListener}
   */
  itemByName: function(name) {
    return new EventListener();
  },
  
  /*
   * Returns the EventListener with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {EventListener}
   */
  itemByID: function(id) {
    return new EventListener();
  },
  
  /*
   * Returns the EventListeners within the specified range.
 *
   * @param {Mixed} from The EventListener, index, or name at the beginning of the range. Can accept: EventListener, Long Integer or String.
   * @param {Mixed} to The EventListener, index, or name at the end of the range. Can accept: EventListener, Long Integer or String.
   * @returns {EventListener}
   */
  itemByRange: function(from, to) {
    return new EventListener();
  },
  
  /*
   * Returns the first EventListener in the collection.
   * @returns {EventListener}
   */
  firstItem: function() {
    return new EventListener();
  },
  
  /*
   * Returns the last EventListener in the collection.
   * @returns {EventListener}
   */
  lastItem: function() {
    return new EventListener();
  },
  
  /*
   * Returns the middle EventListener in the collection.
   * @returns {EventListener}
   */
  middleItem: function() {
    return new EventListener();
  },
  
  /*
   * Returns the EventListener with the index previous to the specified index.
 *
   * @param {EventListener} obj The index of the EventListener that follows the desired EventListener.
   * @returns {EventListener}
   */
  previousItem: function(obj) {
    return new EventListener();
  },
  
  /*
   * Returns the EventListener whose index follows the specified EventListener in the collection.
 *
   * @param {EventListener} obj The EventListener whose index comes before the desired EventListener.
   * @returns {EventListener}
   */
  nextItem: function(obj) {
    return new EventListener();
  },
  
  /*
   * Returns any EventListener in the collection.
   * @returns {EventListener}
   */
  anyItem: function() {
    return new EventListener();
  },
  
  /*
   * Returns every EventListener in the collection.
   * @returns {EventListener}
   */
  everyItem: function() {
    return new EventListener();
  },
  
  /*
   * Generates a string which, if executed, will return the EventListener.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the EventListener with the specified index.
 *
   * @param {Number} index The index.
   * @returns {EventListener}
   */
  []: function(index) {
    return new EventListener();
  },
  
};
