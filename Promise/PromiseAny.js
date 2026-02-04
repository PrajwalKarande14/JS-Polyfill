//Promise.any => return first resolved value if all are rejected gives AggregateError

Promise.myAny = function (arr) {
    return new Promise((resolve, reject) => {
        if(arr.length === 0){
            reject(new AggregateError([],"All promises were rejected"))
            return
        }
        let errors = []
        let errorCnt = 0
        for (let i = 0; i < arr.length; i++) {
            Promise.resolve(arr[i]).then((val) => {
                resolve(val)
            }).catch((val) => {
                errors[i] = val
                errorCnt++
                if (errorCnt === arr.length) {
                    reject(new AggregateError(errors, "All promises were rejected"))
                }
            })
        }
    })


}

const p1 = new Promise((res, rej) => {
    setTimeout(() => rej("Promise : p1"), 2000)
})
const p2 = new Promise((res, rej) => {
    setTimeout(() => res("Promise : p2"), 4000)
})

const p3 = new Promise((res, rej) => {
    setTimeout(() => rej("Promise : p3"), 1000)
})

const p4 = new Promise((res, rej) => {
    setTimeout(() => res("Promise : p4"), 100)
})


Promise.myAny([p1,p2,p3,p4]).then((val) => console.log(val)).catch((val) => console.log(val))