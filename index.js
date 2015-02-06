var a8b = require('ansi-8-bit');

module.exports = function strcolor(s, colours) {
    /*
       @n -  reset
       @R -  bright red
       @r -  dark red
       @B -  blue
       @b -  dark blue
       @W -  bright white
       @w -  white
       @C -  bright cyan
       @c -  dark cyan
       @G -  bright green
       @g -  dark green
       @M -  pink/magenta
       @m -  purple/magenta
       @Y -  yellow
       @y -  dark yellow
       */
    var ccodes = {
        '@n' : a8b.reset,
        '@R' : a8b.fg.getRgb(5,0,0),
        '@r' : a8b.fg.getRgb(3,0,0),
        '@G' : a8b.fg.getRgb(0,5,0),
        '@g' : a8b.fg.getRgb(0,3,0),
        '@B' : a8b.fg.getRgb(0,0,5),
        '@b' : a8b.fg.getRgb(0,0,3),
        '@M' : a8b.fg.getRgb(4,0,2),
        '@m' : a8b.fg.getRgb(1,0,2),
        '@C' : a8b.fg.getRgb(0,3,3),
        '@c' : a8b.fg.getRgb(0,1,1),
        '@Y' : a8b.fg.getRgb(5,5,0),
        '@y' : a8b.fg.getRgb(5,2,0),
        '@W' : a8b.fg.grayscale[23],
        '@w' : a8b.fg.grayscale[13]
    };
    // add optional colours to ccodes
    colours = colours || {};
    Object.keys(colours).forEach(function(k) {
        ccodes[k] = colours[k];
    });

    //replace string with colours
    Object.keys(ccodes).forEach(function(k) {
        s = s.replace(new RegExp(k, 'g'), ccodes[k]);
    });
    return s;
};
