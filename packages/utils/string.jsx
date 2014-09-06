
String.prototype.containsChar = function (my_char) {
    var contains_char = false;
    for (var i = 0; i < myStringID.length; i++){
        if (my_char.indexOf(this.charAt(i)) != -1) {
            contains_char = true;
            break;
        }
    }
    return contains_char;
}

String.prototype.replaceAll = function(find, replace) {
    return this.replace(new RegExp(find, 'g'), replace);
}
