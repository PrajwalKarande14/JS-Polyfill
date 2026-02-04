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

const greet = function(){
    console.log(this.name)
}

const obx = {name:"prajwal"}
const obf = {name:"Alice"}
const boundGreet = greet.myBind(obx)
boundGreet() //prajwal

const boundGreet2 = greet.bind(obf)
boundGreet2() //Alice



