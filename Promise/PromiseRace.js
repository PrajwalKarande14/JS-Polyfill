//Promise.race => returns first fullfilled or rejected promise

Promise.myRace = function(arr){
    return new Promise((resolve,reject)=>{
        if(arr.length===0){
            return;
        }
        for (let i = 0; i < arr.length; i++){
           Promise.resolve(arr[i]).then((val)=>{ //handle values other than promise
                resolve(val)
            }).catch((err)=>{
                reject(err)
            })
        }
        
    })
}


const p1 = new Promise((res,rej)=>{
    setTimeout(()=>res("Promise : p1"),2000)
})
const p2 = new Promise((res,rej)=>{
    setTimeout(()=>res("Promise : p2"),4000)
})

const p3 = new Promise((res,rej)=>{
    setTimeout(()=>res("Promise : p3"),1000)
})

const p4 = new Promise((res,rej)=>{
    setTimeout(()=>rej("Promise : p4"),100)
})



Promise.myRace([p1,p2,p3,p4])
.then((val)=>console.log(val))
.catch((err)=>console.error(err))