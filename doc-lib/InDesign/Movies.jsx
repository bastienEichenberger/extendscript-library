/*
 * A collection of movies.
 */
var Movies = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new Movie
 *
   * @param {Layer} [layer] The layer on which to create the Movie. 
   * @param {LocationOptions} [at] The location at which to insert the Movie relative to the reference object or within the container object. 
   * @param {Mixed} [reference] The reference object. Note: Required when the at parameter is before or after. Can accept: Document, Spread, MasterSpread, Page, Layer or PageItem. 
   * @param {Object} [withProperties] Initial values for properties of the new Movie 
   * @returns {Movie}
   */
  add: function(layer, at, reference, withProperties) {
    return new Movie();
  },
  
  /*
   * Displays the number of elements in the Movie.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the Movie with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {Movie}
   */
  item: function(index) {
    return new Movie();
  },
  
  /*
   * Returns the Movie with the specified name.
 *
   * @param {String} name The name.
   * @returns {Movie}
   */
  itemByName: function(name) {
    return new Movie();
  },
  
  /*
   * Returns the Movie with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {Movie}
   */
  itemByID: function(id) {
    return new Movie();
  },
  
  /*
   * Returns the Movies within the specified range.
 *
   * @param {Mixed} from The Movie, index, or name at the beginning of the range. Can accept: Movie, Long Integer or String.
   * @param {Mixed} to The Movie, index, or name at the end of the range. Can accept: Movie, Long Integer or String.
   * @returns {Movie}
   */
  itemByRange: function(from, to) {
    return new Movie();
  },
  
  /*
   * Returns the first Movie in the collection.
   * @returns {Movie}
   */
  firstItem: function() {
    return new Movie();
  },
  
  /*
   * Returns the last Movie in the collection.
   * @returns {Movie}
   */
  lastItem: function() {
    return new Movie();
  },
  
  /*
   * Returns the middle Movie in the collection.
   * @returns {Movie}
   */
  middleItem: function() {
    return new Movie();
  },
  
  /*
   * Returns the Movie with the index previous to the specified index.
 *
   * @param {Movie} obj The index of the Movie that follows the desired Movie.
   * @returns {Movie}
   */
  previousItem: function(obj) {
    return new Movie();
  },
  
  /*
   * Returns the Movie whose index follows the specified Movie in the collection.
 *
   * @param {Movie} obj The Movie whose index comes before the desired Movie.
   * @returns {Movie}
   */
  nextItem: function(obj) {
    return new Movie();
  },
  
  /*
   * Returns any Movie in the collection.
   * @returns {Movie}
   */
  anyItem: function() {
    return new Movie();
  },
  
  /*
   * Returns every Movie in the collection.
   * @returns {Movie}
   */
  everyItem: function() {
    return new Movie();
  },
  
  /*
   * Generates a string which, if executed, will return the Movie.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the Movie with the specified index.
 *
   * @param {Number} index The index.
   * @returns {Movie}
   */
  []: function(index) {
    return new Movie();
  },
  
};
