const DeepEqual = require('./DeepEqual.js');


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