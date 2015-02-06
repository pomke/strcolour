# strcolour
Ansi-code colour a string containing @r style colour codes.


Usage:

```javascript
strcolour = require('strcolour');
console.log(strcolour("Rover says hello @bEarth@n from the @rRed Planet@n!"));
```

Default codes are:

```
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
```

You can pass in extra codes and their ANSI escape values as an optional second argument.
