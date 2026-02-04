const debounce = function(fn,wait,immediate=false){
    let timeout;
    return function(...args){
        if(timeout) clearTimeout(timeout)
        if(immediate){
            const callNow = !timeout
            timeout = setTimeout(()=>{timeout = null},wait)
            if(callNow){
                fn.apply(this,args)
            }
        }else{
            timeout = setTimeout(()=>fn.apply(this,args),wait)
        }
    }
}

const log = debounce(console.log, 100,true);
log('Hello'); // cancelled
log('Hello'); // cancelled
log('Hello'); // Logged at t=100ms