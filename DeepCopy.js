const obj = {
    a: 1,
    b:[1,2,3,{name:"prajwal"}],
}

obj.c = obj //creating a circular reference

const DeepCopy = function(obj,map){

    if(typeof obj !== "object" || obj===null){
        return obj
    }
    if(map.has(obj)){
        return map.get(obj)
    }
    let res
    if(Array.isArray(obj)){
        res = []
        map.set(obj,res)
        for(let i in obj){
            res.push(DeepCopy(obj[i],map))
        }
    }else{
        res = {}
        map.set(obj,res)
        for(let i in obj){
            res[i] = DeepCopy(obj[i],map)
        }
        
    }
    return res

}

const map = new WeakMap()
const res = DeepCopy(obj,map)


res.b.push("rvlknev")

console.log(res)
console.log(obj)