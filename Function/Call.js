Function.prototype.myCall = function(obj,...args){
    if(!obj) obj = globalThis
    obj = Object(obj)
    const calledFunction = Symbol("calledFunction")

    //create property in object with value of the called function
    obj[calledFunction] = this //->function called

    //function call
    let result = obj[calledFunction](...args)

    //delete property
    delete obj[calledFunction]
    return result
}


function greet(str){
    console.log(str,this.name)
}

const obx = {name:"prajwal"}
greet.myCall(obx,"Hellowww!!!! :")
const obs = {name:"Neel"}
greet.myCall(obs,"!!!! :")
greet("Noice")