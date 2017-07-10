/**
 * @class String
 */

/**
 * Function to check if a string contains a char
 * @param {String} string the string to check
 * @returns {Boolean} true if the string contains the char passed as parameter
 */
String.prototype.contains = function (string) {
    return this.indexOf(string) !== -1;
}

/**
 * Function to replace all characters in a string
 * @param {string} find the string to search
 * @param {string} replace the new value of string
 * @returns {string} the new edited string
 */
String.prototype.replace_all = function (find, replace) {
    return this.replace(new RegExp(find, 'g'), replace);
}

/**
 * Function to build a string
 * @author Jason Trill
 * {@link https://gist.github.com/jjt/850046#file-string-prototype-printf-js | jjt/String.prototype.printf.js}
 * @param {string} obj the list of string to replace or an object or an array
 * @returns {string} the new string
 * @example
 * "%s %s great".printf('This', 'is') -> This is great
 * "{bar} or {foo}".printf({foo:'A',bar,'B'}) -> B or A
 * "{}, {}, {}!".printf([1,2,3]) -> 1, 2, 3!
 */
String.prototype.printf = function (obj) {
    var useArguments = false;
    var _arguments = arguments;
    var i = -1;
    if (typeof _arguments[0] === "string") {
        useArguments = true;
    }
    if (obj instanceof Array || useArguments) {
        return this.replace(/\%s/g,
            function (a, b) {
                i++;
                if (useArguments) {
                    if (typeof _arguments[i] === 'string') {
                        return _arguments[i];
                    }
                    else {
                        throw {
                            name: 'InvalidArgumentError',
                            message: 'Arguments element: ' + _arguments[i] + ' is an invalid type',
                            fileName: $.fileName,
                            line: $.line
                        };
                    }
                }
                return obj[i];
            });
    }
    else {
        return this.replace(/\{([^{}]*)\}/g,
            function (a, b) {
                var r = obj[b];
                return typeof r === 'string' || typeof r === 'number' ? r : a;
            });
    }
};
