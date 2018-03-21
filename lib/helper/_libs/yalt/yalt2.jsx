/**
 * @todo contact author > add a way to load translations elsewhere
 */


/***********************************************************************/
/*                                                                     */
/*      YALT 2 Sample :: Demonstrates a simple localization technique  */
/*                       (without using the ExtendScript feature)      */
/*                                                                     */
/*      [Ver: 2.1]       [Author: Marc Autret]       [Modif: 07/23/10] */
/*      [Lang: EN|FR|DE] [Req: InDesign CS3/CS4/CS5] [Creat: 06/27/09] */
/*                                                                     */
/*                                                                     */
/*      Bugs & Feedback : marc{at}indiscripts{dot}com                  */
/*                        www.indiscripts.com                          */
/*                                                                     */
/***********************************************************************/

// #####################################
// YALT BLOCK
// #####################################

var TRANS = {

    //======================================
    // <L10N> :: FRENCH_LOCALE :: GERMAN_LOCALE
    //======================================
    // Good morning %1! :: Bonjour %1 ! :: Guten Morgen %1!
    // What's your name? :: Quel est v\u00F4tre nom ? :: Wie ist Ihr Name?
    // </L10N>
}

var L10N = L10N || (function (ln) {




        var CM = '// ', SP = ' :: ', BM = '<L10N>', EM = '</L10N>', NL = '\r';
        ln = ln || (function (lid) {
                for (var p in Locale)if (Locale[p] == lid)return (p);
            })(app.locale);

        var tb = (function (bdy) {
            var lines = (function () {
                var t = CM.length, ls = bdy.replace(/[\r\n]+[ \t]*/g, NL).split(NL), l, r = [];
                while (typeof(l = ls.shift()) != 'undefined') {
                    if (l.indexOf(CM) != 0)continue;
                    if (l.indexOf(EM) >= 0)break;
                    if (l.indexOf(SP) < 0)continue;
                    r.push(l.substr(t).split(SP));
                }
                while ((l = r.shift()) && (l[0] != BM));
                return l && [l].concat(r);
            })();

            if (!lines) return {};
            var l = lines[0], c = (function () {
                for (var c = 1, sz = l.length; c < sz; ++c) if (l[c] == ln) return c;
                return 0;
            })();
            if (!c) return {};
            var t, r = {}, uEsc = function () {
                return String.fromCharCode(Number('0x' + arguments[1]));
            };
            while (l = lines.shift())(t = l[c]) && (r[l[0]] = t.replace(/\\u([0-9a-f]{4})/gi, uEsc));
            return r;
        })(TRANS.toString());
        __ = function (ks) {
            var r = (tb[ks] || ks), a = arguments, sz = a.length;
            return (sz < 1) ? r : r.replace(RegExp('%([1-' + sz + '])', 'g'), function (m, i) {
                    return a[i];
                });
        };
        return {locale: ln, version: 2.100723};

    })(/*'ENGLISH_LOCALE'*/);


