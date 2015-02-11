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

Object.prototype.dump = function (name, indent, depth, maximum_dump_depth) {

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