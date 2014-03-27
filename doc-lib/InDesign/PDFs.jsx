/*
 * A collection of PDF files.
 */
var PDFs = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the PDF.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the PDF with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {PDF}
   */
  item: function(index) {
    return new PDF();
  },
  
  /*
   * Returns the PDF with the specified name.
 *
   * @param {String} name The name.
   * @returns {PDF}
   */
  itemByName: function(name) {
    return new PDF();
  },
  
  /*
   * Returns the PDF with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {PDF}
   */
  itemByID: function(id) {
    return new PDF();
  },
  
  /*
   * Returns the PDFs within the specified range.
 *
   * @param {Mixed} from The PDF, index, or name at the beginning of the range. Can accept: PDF, Long Integer or String.
   * @param {Mixed} to The PDF, index, or name at the end of the range. Can accept: PDF, Long Integer or String.
   * @returns {PDF}
   */
  itemByRange: function(from, to) {
    return new PDF();
  },
  
  /*
   * Returns the first PDF in the collection.
   * @returns {PDF}
   */
  firstItem: function() {
    return new PDF();
  },
  
  /*
   * Returns the last PDF in the collection.
   * @returns {PDF}
   */
  lastItem: function() {
    return new PDF();
  },
  
  /*
   * Returns the middle PDF in the collection.
   * @returns {PDF}
   */
  middleItem: function() {
    return new PDF();
  },
  
  /*
   * Returns the PDF with the index previous to the specified index.
 *
   * @param {PDF} obj The index of the PDF that follows the desired PDF.
   * @returns {PDF}
   */
  previousItem: function(obj) {
    return new PDF();
  },
  
  /*
   * Returns the PDF whose index follows the specified PDF in the collection.
 *
   * @param {PDF} obj The PDF whose index comes before the desired PDF.
   * @returns {PDF}
   */
  nextItem: function(obj) {
    return new PDF();
  },
  
  /*
   * Returns any PDF in the collection.
   * @returns {PDF}
   */
  anyItem: function() {
    return new PDF();
  },
  
  /*
   * Returns every PDF in the collection.
   * @returns {PDF}
   */
  everyItem: function() {
    return new PDF();
  },
  
  /*
   * Generates a string which, if executed, will return the PDF.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the PDF with the specified index.
 *
   * @param {Number} index The index.
   * @returns {PDF}
   */
  []: function(index) {
    return new PDF();
  },
  
};
