/*
 * Data merge options.
 */
var DataMergeOption = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the DataMergeOption (a Application or Document).
   * @type {Mixed}
   */
  parent: undefined,
  
  /*
   * A collection of events.
   * @type {Events}
   */
  events: undefined,
  
  /*
   * A collection of event listeners.
   * @type {EventListeners}
   */
  eventListeners: undefined,
  
  /*
   * Instructions for fitting content in a frame.
   * @type {Fitting}
   */
  fittingOption: undefined,
  
  /*
   * If true, centers the image in the frame; preserves the frame size as well as content size and proportions. Note: If the content is larger than the frame, content around the edges is obscured by the bounding box of the frame.
   * @type {Boolean}
   */
  centerImage: undefined,
  
  /*
   * If true, links images to the target document. If false, embeds images in the target document.
   * @type {Boolean}
   */
  linkImages: undefined,
  
  /*
   * If true, removes blank lines caused by empty fields.
   * @type {Boolean}
   */
  removeBlankLines: undefined,
  
  /*
   * If true, creates a new document when records are merged.
   * @type {Boolean}
   */
  createNewDocument: undefined,
  
  /*
   * The maximum number of pages per document.
   * @type {Number}
   */
  documentSize: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the DataMergeOption.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {DataMergeOption}
   */
  getElements: function() {
    return new DataMergeOption();
  },
  
  /*
   * Retrieves the object specifier.
   * @returns {String}
   */
  toSpecifier: function() {
    return new String();
  },
  
  /*
   * Adds an event listener.
 *
   * @param {String} eventType The event type.
   * @param {Mixed} handler The event handler. Can accept: File or JavaScript Function.
   * @param {Boolean} [captures] This parameter is obsolete. 
   * @returns {EventListener}
   */
  addEventListener: function(eventType, handler, captures) {
    return new EventListener();
  },
  
  /*
   * Removes the event listener.
 *
   * @param {String} eventType The registered event type.
   * @param {Mixed} handler The registered event handler. Can accept: File or JavaScript Function.
   * @param {Boolean} [captures] This parameter is obsolete. 
   * @returns {Boolean}
   */
  removeEventListener: function(eventType, handler, captures) {
    return new Boolean();
  },
  
};
