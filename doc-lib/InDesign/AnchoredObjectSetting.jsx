/*
 * The settings for an anchored object.
 */
var AnchoredObjectSetting = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the AnchoredObjectSetting (a Application, Document, EPSText, SplineItem, Polygon, GraphicLine, Rectangle, Oval, Group, TextFrame, Button, FormField, SignatureField, TextBox, RadioButton, ListBox, ComboBox, CheckBox, MultiStateObject or ObjectStyle).
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
   * The position of the anchored object relative to the anchor.
   * @type {AnchorPosition}
   */
  anchoredPosition: undefined,
  
  /*
   * If true, the position of the anchored object is relative to the binding spine of the page or spread.
   * @type {Boolean}
   */
  spineRelative: undefined,
  
  /*
   * If true, prevents manual positioning of the anchored object.
   * @type {Boolean}
   */
  lockPosition: undefined,
  
  /*
   * If true, pins the position of the anchored object within the text frame top and bottom.
   * @type {Boolean}
   */
  pinPosition: undefined,
  
  /*
   * The point in the anchored object to position.
   * @type {AnchorPoint}
   */
  anchorPoint: undefined,
  
  /*
   * When anchored position is above line, the position of the anchored object is relative to the text area. When anchored position is custom, the horizontal alignment of the anchored object is set by the horizontal reference point. Note: Not valid when anchored position is inline.
   * @type {HorizontalAlignment}
   */
  horizontalAlignment: undefined,
  
  /*
   * The horizontal reference point on the page. Valid only when anchored position is custom.
   * @type {AnchoredRelativeTo}
   */
  horizontalReferencePoint: undefined,
  
  /*
   * The vertical alignment of the anchored object reference point with the vertical reference point on the page. Notes: Valid only when anchored position is custom.
   * @type {VerticalAlignment}
   */
  verticalAlignment: undefined,
  
  /*
   * The vertical reference point on the page. Valid when anchored position is custom.
   * @type {VerticallyRelativeTo}
   */
  verticalReferencePoint: undefined,
  
  /*
   * The horizontal (x) offset of the anchored object.
   * @type {Mixed}
   */
  anchorXoffset: undefined,
  
  /*
   * The vertical (y) offset of the anchored object. Corresponds to the space after property for above line positioning.
   * @type {Mixed}
   */
  anchorYoffset: undefined,
  
  /*
   * The space above an above-line anchored object.
   * @type {Mixed}
   */
  anchorSpaceAbove: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Inserts the anchored object into specified story.
 *
   * @param {InsertionPoint} storyOffset The location within the story, specified as an insertion point.
   * @param {AnchorPosition} [anchoredPosition] The position of the anchored object relative to the anchor. 
   */
  insertAnchoredObject: function(storyOffset, anchoredPosition) {
  },
  
  /*
   * Releases the anchored object from its associated text.
   */
  releaseAnchoredObject: function() {
  },
  
  /*
   * Generates a string which, if executed, will return the AnchoredObjectSetting.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {AnchoredObjectSetting}
   */
  getElements: function() {
    return new AnchoredObjectSetting();
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
