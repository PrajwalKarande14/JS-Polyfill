//calls a function with a given this value and arguments provided as an array

Function.prototype.myApply = function(obj,args){
    if(!obj) obj = globalThis
    obj = Object(obj)
    const calledFunction = Symbol("calledFunction")

    //create property in object with value of the called function
    obj[calledFunction] = this //->function called

    //function call
    let result = obj[calledFunction](...(args || []))

    //delete property
    delete obj[calledFunction]
    return result
}

function greet(str,x,y){
    console.log(str,this.name)
    console.log(x+y)
}

const obx = {name:"prajwal"}
greet.myApply(obx,["Hellowww!!!! :",10,20])

greet.apply(obx,["Hellowww!!!! :",10,20])


