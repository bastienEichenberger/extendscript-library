/**
 * Module with indesign grep functions
 * @namespace Document.Grep
 * @memberOf IN
 * @author Bastien Eichenberger
 */
IN.Document.Grep = (function (my) {

    var PATTERNS = {
        ALL_DOUBLE_SPACES: '\s{2,}' // select all spaces when 2-n spaces detected, do not forget to escape backslash
    };

    var UNICODE_HEXA = {
        NORMAL_SPACE: 0020,
        NONBREAKABLE_SPACE: '00A0',
        NONBREAKABLE_SPACE_FIXED_WITH: '202F',
        PUNCTUATION_SPACE: '2008',
        FIGURE_SPACE: '2007',
        FLUSH_SPACE: '2001',
        HAIR_SPACE: '200A',
        THIN_SPACE: '2009',
        QUARTER_SPACE: '2005',
        SIXTH_SPACE: '2006',
        THIRD_SPACE: '2004',
        EN_SPACE: '2002',
        EM_SPACE: '2003',
    };

    var NON_PRINTABLE_CHAR = {
        TABULATION: '\t',
        LINE_BREAK: '\n',
        ALL_OTHER_BREAK: '\r'
    };

    /**
     * Function to find a regular expression in a document
     * @param {string} regular_expression
     * @param {InDesign Document} doc
     * @returns {Array} the result that match the pattern
     */
    my.find = function (regular_expression, doc) {

        if (doc === undefined) {
            var doc = app.activeDocument;
        }

        app.findGrepPreferences = NothingEnum.nothing;
        app.findGrepPreferences.findWhat = regular_expression;

        return doc.findGrep();
    }

    my.find_and_change = function (find, replace, find_grep_preferences, doc) {

        if (doc === undefined) {
            var doc = app.activeDocument;
        }

        app.findGrepPreferences = NothingEnum.nothing;
        app.findGrepPreferences.findWhat = find;
        app.changeGrepPreferences.changeTo = replace;

        return doc.changeGrep();
    }

    my.delete_double_standard_spaces = function (string, doc) {

        if (doc === undefined) {
            var doc = app.activeDocument;
        }
        var pattern = '\x{' + UNICODE_HEXA.NORMAL_SPACE + '}{2,}';
        return my.find_and_change(pattern, UNICODE_HEXA.NORMAL_SPACE, doc);
    }

    my.get = function (name) {
        return REGEX[name];
    }

    return my;

})(IN.Document.Grep || {});
