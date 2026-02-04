const throttle = (fn, limit,mode = {leading : true, trailing:true}) => {
    let lastCall = 0
    let lastFun
    return function(...args){
        const now = Date.now()
        if(lastCall && mode.leading === false){
            lastCall = now
        }

        const remaining = limit - (now - lastCall)

        if(remaining<0){
            if(lastFun){
                clearTimeout(lastFun)
                lastFun = null
            }
            lastCall = now
            fn.apply(this,args)
        }else if(!mode.trailing && lastFun){
            lastFun = setTimeout(() => {
                lastCall = mode.leading === false ? 0 : now
                lastFun = null
                fn.apply(this,args)
            }, remaining);
        }

    }
}   