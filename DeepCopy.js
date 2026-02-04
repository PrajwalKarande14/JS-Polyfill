const obj = {
    a: 1,
    b:[1,2,3,{name:"prajwal"}],
    c:null
}

const DeepCopy = function(obj){
    if(typeof obj !== "object" || obj===null){
        return obj
    }
    let res
    if(Array.isArray(obj)){
        res = []
        for(let i in obj){
            res.push(DeepCopy(obj[i]))
        }
    }else{
        res = {}
        for(let i in obj){
            res[i] = DeepCopy(obj[i])
        }
        
    }
    return res

}

const res = DeepCopy(obj)


res.b.push("rvlknev")

console.log(res)
console.log(obj)