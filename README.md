# stringbuilder
Simple-to-the-task string builder utility.

## Installation

```cli
    npm install strbuilder
```

## Test

```cli
    npm test
```

## Usage in Node

```javascript
    /* With initialization text */
    var sb = require('stringbuilder')("Start text");
    
    /* Or no text initialization. */
    
    var sb1 = require('stringbuilder')();
    
    sb.append("Hello,").append(" world!");
    
    console.log(sb.toString()) /* prints 'Hello, world!' */
    console.log(sb.length) /* prints 2.
     

```

## Usage in Browser

```html
<!-- include it at the head section of your page -->
<script src='path/to/stringbuilder.js'></script>

```

```javascript

    /* With initialization text */
    var sb = stringbuilder("Start text");
    
    /* Or no text initialization. */
    
    var sb1 = stringbuilder();
    
    sb.append("Hello,").append(" world!");
    
    console.log(sb.toString()) /* prints 'Hello, world!' */
    console.log(sb.length) /* prints 2.
     

```

## Property and methods

- **`length:`** tells us the number of different string appended to it.
- **`toString:`** returns all the strings in it, joined together.
- **`append:`** adds a string to the string builder.


Thanks all.
