//Promise.all = returns array of fulfilled promises value if any one is rejected returns rejected value

Promise.myAll = function(arr){
    return new Promise((resolve,reject)=>{
        let res = []
        let resLen = 0
        for (let i = 0; i < arr.length; i++){
            Promise.resolve(arr[i]).then((val)=>{ //handle values other than promise
                res[i] = val
                resLen++;
                if(resLen === arr.length){
                    resolve(res)
                }
            }).catch((err)=>{
                reject(err)
            })
        }
        if(arr.length === 0){
            resolve([])
        }
    })
}


const p1 = new Promise((res,rej)=>{
    setTimeout(()=>res("Promise : p1"),1000)
})
const p2 = Promise.reject("Rejected Promise : p2")
const p3 = Promise.resolve("Promise : p3")


Promise.myAll([p1,p2]).then((val)=>console.log(val)).catch((err)=>console.error(err))
Promise.myAll([p1,p3]).then((val)=>console.log(val)).catch((err)=>console.error(err))

Promise.all([p1,p3]).then((val)=>console.log("all: ",val)).catch((err)=>console.error("Error in all:",err))
