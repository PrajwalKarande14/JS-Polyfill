const asyncAwait = function* (){
    console.log("start of Generator")

    yield  new Promise((res,rej)=>{
        setTimeout(()=>{
            res("Promise 1")
        },1000)
    })

    console.log("middle of Generator")

    yield  new Promise((res,rej)=>{
        setTimeout(()=>{
            res("Promise 2")
        },3000)
    })

    console.log("End of Generator")
}


const runner = function(genFn){
    const res = genFn.next()
    if(res.done){
        return
    }
    Promise.resolve(res.value).then((val)=>{
        console.log(val)
        runner(genFn)
    }).catch((err)=>{
        console.error(err)
        runner(genFn)
    })
    console.log("runner complete")
    
}


const genFn = asyncAwait()
runner(genFn)