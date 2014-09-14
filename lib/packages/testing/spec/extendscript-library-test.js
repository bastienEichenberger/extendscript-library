//@include "../../utils/string.jsx"
describe("Test unit utils string", function() {

    it("test if a string contains a char", function() {
        var str_true = function () {
            var str = 'a simple string';
            return str.contains_char('s');
        }
        expect( str_true() ).toBeTruthy();
    });

    it("test if a string doesn't contains a char", function() {
        var str_false = function () {
            var str = 'a simple string';
            return str.contains_char('w');
        }
        expect( str_false() ).toBeFalsy();
    });
});