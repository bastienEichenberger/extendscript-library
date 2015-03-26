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

/**
 * Function to debug an object in the console
 * @param {number} [depth] where to start the dump by default 1
 * @param {number} [maximum_dump_depth] where to stop the dump by default 10
 * @return {*}
 */
Object.prototype.dump = function (depth, maximum_dump_depth) {

    var name = 'dump';
    var indent = '    ';

    var depth = depth || 1;
    var maximum_dump_depth = maximum_dump_depth || 10;

    if (depth > maximum_dump_depth) {
        return indent + name + ": <Maximum Depth Reached>\n";
    }
    if (typeof this == "object") {
        var child = null;
        var output = indent + name + "\n";
        indent += "\t";

        for (var item in this) {
            try {
                child = this[item];
            } catch (e) {
                child = "<Unable to Evaluate>";
            }
            if (typeof child == "object") {
                output += child.dump(item, indent, depth + 1);
            } else {
                output += indent + item + ": " + child + "\n";
            }
        }
        return output;

    } else {
        return this;
    }
}

/**
 * Function to find if a value exist in a Collection
 * @param {string} prop_name the property to test
 * @param {*} value the value to find
 * @return {*} the value or undefined
 */
Object.prototype.find = function (prop_name, value) {
    for (var i = 0; i < this.length; i++) {
        if (this[i][prop_name] === value) {
            return this[i];
        }
    }
}

/**
 * Function to delete all duplicated item of a collection by key
 * @param {string} key the key to check
 * @return {Array} the new array
 */
Object.prototype.unique_by = function (key) {

    var a = [];
    var l = this.length;

    for (var i = 0; i < l; i++) {

        for (var j = i + 1; j < l; j++) {
            if (this[i][key] === this[j][key]) {
                j = ++i;
            }
        }

        a.push(this[i]);
    }
    return a;
};