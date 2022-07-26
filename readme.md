
# Deep Equal In javascript

## Author

- [@lionel](https://www.github.com/myominhtoo)


## Installation

Install my-project with git

```bash
 git clone https://github.com/myominhtoo/deep_equal.git
 cd deep_equal
```
    
## Features

- Can use to check 'values' deep for not only primitive but also
  non-primitive type in Javascript


## Usage/Examples
## For Node

```javascript
const DeepEqual = require('./DeepEqual.js');

console.log(DeepEqual.check( value_one , value_two ));
```

## Running Tests
To run tests, run the following command

```bash
  node test.js

  const DeepEqual = require('./DeepEqual');


  console.log("TRUE")

  console.log(DeepEqual.check(1,1));
  console.log(DeepEqual.check(1,'1'));
  console.log(DeepEqual.check(true,true));
  console.log(DeepEqual.check('a','a'));
  console.log(DeepEqual.check([],[]));
  console.log(DeepEqual.check({},{}))
  console.log(DeepEqual.check([[],[]],[[],[]]))
  console.log(DeepEqual.check(['a',{b : null}],['a',{b : null}]));
  console.log(DeepEqual.check(NaN,NaN))
  console.log(DeepEqual.check(undefined,undefined))

  console.log("\n\n")


  console.log("FALSE")

  console.log(DeepEqual.check(1,2));
  console.log(DeepEqual.check([1,2],[2,3]));
  console.log(DeepEqual.check(true,false));
  console.log(DeepEqual.check('a','b'));
  console.log(DeepEqual.check([],{}));
  console.log(DeepEqual.check({a : {}} , {a : []}))
  console.log(DeepEqual.check([{},[]],[1,null]))
  console.log(DeepEqual.check(['c',{b : NaN}],['a',{b : null}]));
  console.log(DeepEqual.check(NaN,null))
  console.log(DeepEqual.check(undefined,'undefined'))

  console.log("\n\n")
```

