/*
 * A collection of pages.
 */
var Pages = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the Page.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Creates a new page.
 *
   * @param {LocationOptions} [at] The location of the new page relative to the reference object or within the document or spread.  
   * @param {Mixed} [reference] The reference object. Note: Required when the at parameter value specifies before or after. Can accept: Page, Spread, MasterSpread or Document. 
   * @param {Object} [withProperties] Initial values for properties of the new Page 
   * @returns {Page}
   */
  add: function(at, reference, withProperties) {
    return new Page();
  },
  
  /*
   * Returns the Page with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {Page}
   */
  item: function(index) {
    return new Page();
  },
  
  /*
   * Returns the Page with the specified name.
 *
   * @param {String} name The name.
   * @returns {Page}
   */
  itemByName: function(name) {
    return new Page();
  },
  
  /*
   * Returns the Page with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {Page}
   */
  itemByID: function(id) {
    return new Page();
  },
  
  /*
   * Returns the Pages within the specified range.
 *
   * @param {Mixed} from The Page, index, or name at the beginning of the range. Can accept: Page, Long Integer or String.
   * @param {Mixed} to The Page, index, or name at the end of the range. Can accept: Page, Long Integer or String.
   * @returns {Page}
   */
  itemByRange: function(from, to) {
    return new Page();
  },
  
  /*
   * Returns the first Page in the collection.
   * @returns {Page}
   */
  firstItem: function() {
    return new Page();
  },
  
  /*
   * Returns the last Page in the collection.
   * @returns {Page}
   */
  lastItem: function() {
    return new Page();
  },
  
  /*
   * Returns the middle Page in the collection.
   * @returns {Page}
   */
  middleItem: function() {
    return new Page();
  },
  
  /*
   * Returns the Page with the index previous to the specified index.
 *
   * @param {Page} obj The index of the Page that follows the desired Page.
   * @returns {Page}
   */
  previousItem: function(obj) {
    return new Page();
  },
  
  /*
   * Returns the Page whose index follows the specified Page in the collection.
 *
   * @param {Page} obj The Page whose index comes before the desired Page.
   * @returns {Page}
   */
  nextItem: function(obj) {
    return new Page();
  },
  
  /*
   * Returns any Page in the collection.
   * @returns {Page}
   */
  anyItem: function() {
    return new Page();
  },
  
  /*
   * Returns every Page in the collection.
   * @returns {Page}
   */
  everyItem: function() {
    return new Page();
  },
  
  /*
   * Generates a string which, if executed, will return the Page.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the Page with the specified index.
 *
   * @param {Number} index The index.
   * @returns {Page}
   */
  []: function(index) {
    return new Page();
  },
  
};
