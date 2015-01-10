/**
 * @class Object
 */

/**
 * Function to merge 2 objects
 * @param {Object} obj the object to merge
 * @return {Object}
 */
Object.prototype.merge = function (obj) {
    if (!obj) {
        throw {
            name: 'InvalidArgumentError',
            message: 'you must enter a valid value for the param obj',
            fileName: $.fileName,
            line: $.line
        };
    }

    for (var key in obj) {
        if (obj.hasOwnProperty(key)) { // do not check in the prototype chain
            this[key] = obj[key];
        }
    }
    return this;
}