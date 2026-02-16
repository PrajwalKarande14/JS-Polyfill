// returns function with this keyword bound to the provided value

Function.prototype.myBind = function(thisArg,...args1){
    if(thisArg === null || thisArg === undefined) thisArg = globalThis
    const fn = this
    return function bounded(...args){
        const isNew = this instanceof bounded
        const context = isNew ? this : thisArg
        return fn.apply(context,[...args1,...args])
    }
    
}

function greet() {
  console.log(this.name);
}

const user1 = { name: 'Alice' };
const user2 = { name: 'Bob' };

// First bind: Works as expected
const bind1 = greet.myBind(user1);
bind1(); // Output: "Alice"

bind1.apply(user2)

// Second bind: Does NOT override the first
const bind2 = bind1.myBind(user2);
bind2(); // Output: "Alice" (Still!)


