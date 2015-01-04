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
            lineNumber: $.line
        };
    }

    for (var name in obj) {
        this[name] = obj[name];
    }
    return this;
}