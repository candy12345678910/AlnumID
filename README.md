# alnumid

`alnumid` is a Node.js package that allows users to generate unique IDs of any size with customizable character sets.

## Installation

To install `alnumid`, simply run:

```bash
npm install alnumid
```

## Usage

```javascript
const alnumid = require('alnumid');

// Generate an ID of size 8 with default character set (numbers, lowercase and uppercase letters, and symbols)
const id = alnumid(8);
console.log(id); // Example output: "5bP@2dF!"

// Generate an ID of size 12 with only numbers and capital letters
const idCustomSizeAndChars = alnumid(12, { num: true, capital: true });
console.log(idCustomSizeAndChars); // Example output: "7K8H4N2M9P0A"

// Generate an ID with a custom character set
const idCustomChars = alnumid(10, { num: true, small: true, capital: true });
console.log(idCustomChars); // Example output: "aB3C6dE8fG"
```

## Customization Options

You can customize the generated ID by passing an object as the second argument to the function. The object can contain the following boolean properties:

- `num`: Include numbers in the ID.
- `small`: Include lowercase letters in the ID.
- `capital`: Include uppercase letters in the ID.
- `alpha`: Include alphanumeric characters in the ID.

If any option is given, the ID will generate with that set only. Do not use `false` as the value for any option.




## Issues

Please report any issues or suggestions [here](https://github.com/candy12345678910/AlnumID/issues).
