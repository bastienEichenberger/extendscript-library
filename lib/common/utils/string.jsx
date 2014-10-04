/**
 * @class String
 */

/**
 * Function to check if a string contains a char
 * @param {Character} my_string the char to check
 * @returns {boolean} true if the string contains the char passed as parameter
 */
String.prototype.contains = function (search_string) {
    return this.indexOf(search_string) != -1
}

/**
 * Function to replace all characters in a string
 * @param {string} find the string to search
 * @param {string} replace the new value of string
 * @returns {string} the new edited string
 */
String.prototype.replace_all = function(find, replace) {
    return this.replace(new RegExp(find, 'g'), replace);
}
