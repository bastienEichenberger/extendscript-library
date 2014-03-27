/*
 * Print booklet options.
 */
var PrintBookletOption = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the PrintBookletOption (a Document).
   * @type {Document}
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
   * The pages to print, specified either as an enumeration or a string. To specify a range, separate page numbers in the string with a hyphen (-). To specify separate pages, separate page numbers in the string with a comma (,). Can return: PageRange enumerator or String.
   * @type {Mixed}
   */
  pageRange: undefined,
  
  /*
   * The type of booklet.
   * @type {BookletTypeOptions}
   */
  bookletType: undefined,
  
  /*
   * The amount of space between pages.
   * @type {Mixed}
   */
  spaceBetweenPages: undefined,
  
  /*
   * The amount of bleed between pages.
   * @type {Mixed}
   */
  bleedBetweenPages: undefined,
  
  /*
   * The amount of creep (binding adjustment based on paper thickness) to add.
   * @type {Mixed}
   */
  creep: undefined,
  
  /*
   * The signature size of booklet (for perfect binding).
   * @type {SignatureSizeOptions}
   */
  signatureSize: undefined,
  
  /*
   * Top margin of the printed booklet.
   * @type {Mixed}
   */
  topMargin: undefined,
  
  /*
   * Bottom margin of the printed booklet.
   * @type {Mixed}
   */
  bottomMargin: undefined,
  
  /*
   * Left margin of the printed booklet.
   * @type {Mixed}
   */
  leftMargin: undefined,
  
  /*
   * Right margin of the printed booklet.
   * @type {Mixed}
   */
  rightMargin: undefined,
  
  /*
   * If true, automatically adjust margins to fit the specified printer's marks and bleed area.
   * @type {Boolean}
   */
  autoAdjustMargins: undefined,
  
  /*
   * If true, make all margins equal to the top margin.
   * @type {Boolean}
   */
  marginsUniformSize: undefined,
  
  /*
   * If true, print blank spreads.
   * @type {Boolean}
   */
  printBlankPrinterSpreads: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the PrintBookletOption.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {PrintBookletOption}
   */
  getElements: function() {
    return new PrintBookletOption();
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
