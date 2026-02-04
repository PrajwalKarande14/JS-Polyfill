const debounce = function(fn,wait,immediate=false){
    let timeout;
    return function(...args){
        clearTimeout(timeout)
        timeout = setTimeout(()=>fn.apply(this,args),wait)
    }
}

const log = debounce(console.log, 100);
log('Hello'); // cancelled
log('Hello'); // cancelled
log('Hello'); // Logged at t=100ms