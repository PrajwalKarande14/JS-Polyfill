function Memoize(fn,maxCacheSize = 50){
    if(maxCacheSize<=0){
        throw new Error("Invalid Arguments passed!! try passing maxCacheSize > 0")
    }
    const cache = new Map()
    return function(...args){
        let result
        const key = JSON.stringify(args)
        if(cache.has(key)){
            result =  cache.get(key).result
            cache.get(key).used++
            return result
        }
        result = fn(...args)
        cache.set(key, {result,used:1})
        
        // Evict least used item if cache exceeds max size
        if(cache.size>maxCacheSize){
            let minKey = null
            let minUsed = Infinity
            for(const [k,v] of cache){
                if(v.used < minUsed){
                    minKey = k
                    minUsed = v.used
                }
            }
            if(minKey!==null){
                cache.delete(minKey)
            }
        }
        return result
    }
}

