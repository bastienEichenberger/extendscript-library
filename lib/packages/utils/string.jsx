/**
 * Function to check if a string contains a char
 * @name String.contains_char
 * @function
 * @param {Character} my_string the char to check
 * @returns {boolean} true if the string contains the char passed as parameter
 */
String.prototype.contains_char = function (search_string) {
    return this.indexOf(search_string) != -1
}

/**
 * Function to replace all characters in a string
 * @name String.replace_all
 * @function
 * @param {string} find the character to search
 * @param {string} replace the new value of the character
 * @returns {string} the replaced string
 */
String.prototype.replace_all = function(find, replace) {
    return this.replace(new RegExp(find, 'g'), replace);
}
