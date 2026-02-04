Promise.myAllSettled = function (arr) {
    return new Promise((resolve, reject) => {
        let res = []
        let resLen = 0
        for (let i = 0; i < arr.length; i++) {
            Promise.resolve(arr[i]).then((val) => { //handle values other than promise
                const obj = {
                    status: "fulfilled",
                    value: val
                }
                res[i] = obj
                resLen++
                if (resLen === arr.length) {
                    resolve(res)
                }
            }).catch((err) => {
                const obj = {
                    status: "rejected",
                    reason: err
                }
                res[i] = obj
                resLen++
                if (resLen === arr.length) {
                    resolve(res)
                }
            })
        }
        if (arr.length === 0) {
            resolve([])
        }
    })
}

const p1 = new Promise((res, rej) => {
    setTimeout(() => res("Promise : p1"), 2000)
})
const p2 = new Promise((res, rej) => {
    setTimeout(() => rej("Promise : p2"), 4000)
})

const p3 = new Promise((res, rej) => {
    setTimeout(() => res("Promise : p3"), 1000)
})

const p4 = new Promise((res, rej) => {
    setTimeout(() => rej("Promise : p4"), 100)
})

Promise.myAllSettled([p1, p2, p3, p4]).then((val) => console.log(val)).catch((val) => console.log(val))

