/*
 * A borderless column for containing controls in a dialog.
 */
var DialogColumn = {
  /*
   * The unique ID of the DialogColumn.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the DialogColumn (a Dialog, DialogRow, EnablingGroup or BorderPanel).
   * @type {Mixed}
   */
  parent: undefined,
  
  /*
   * The index of the DialogColumn within its containing object.
   * @type {Number}
   */
  index: undefined,
  
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
   * A collection of dialog rows.
   * @type {DialogRows}
   */
  dialogRows: undefined,
  
  /*
   * A collection of widgets.
   * @type {Widgets}
   */
  widgets: undefined,
  
  /*
   * A collection of text editboxes.
   * @type {TextEditboxes}
   */
  textEditboxes: undefined,
  
  /*
   * A collection of integer editboxes.
   * @type {IntegerEditboxes}
   */
  integerEditboxes: undefined,
  
  /*
   * A collection of measurement editboxes.
   * @type {MeasurementEditboxes}
   */
  measurementEditboxes: undefined,
  
  /*
   * A collection of real number editboxes.
   * @type {RealEditboxes}
   */
  realEditboxes: undefined,
  
  /*
   * A collection of angle editboxes.
   * @type {AngleEditboxes}
   */
  angleEditboxes: undefined,
  
  /*
   * A collection of percent editboxes.
   * @type {PercentEditboxes}
   */
  percentEditboxes: undefined,
  
  /*
   * A collection of integer comboboxes.
   * @type {IntegerComboboxes}
   */
  integerComboboxes: undefined,
  
  /*
   * A collection of measurement comboboxes.
   * @type {MeasurementComboboxes}
   */
  measurementComboboxes: undefined,
  
  /*
   * A collection of real number comboboxes.
   * @type {RealComboboxes}
   */
  realComboboxes: undefined,
  
  /*
   * A collection of angle comboboxes.
   * @type {AngleComboboxes}
   */
  angleComboboxes: undefined,
  
  /*
   * A collection of percent comboboxes.
   * @type {PercentComboboxes}
   */
  percentComboboxes: undefined,
  
  /*
   * A collection of checkbox controls.
   * @type {CheckboxControls}
   */
  checkboxControls: undefined,
  
  /*
   * A collection of static text objects.
   * @type {StaticTexts}
   */
  staticTexts: undefined,
  
  /*
   * A collection of dropdowns.
   * @type {Dropdowns}
   */
  dropdowns: undefined,
  
  /*
   * A collection of border panels.
   * @type {BorderPanels}
   */
  borderPanels: undefined,
  
  /*
   * A collection of enabling groups.
   * @type {EnablingGroups}
   */
  enablingGroups: undefined,
  
  /*
   * A collection of radiobutton groups.
   * @type {RadiobuttonGroups}
   */
  radiobuttonGroups: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the DialogColumn.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {DialogColumn}
   */
  getElements: function() {
    return new DialogColumn();
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
