
function debounce(fn, delay) {
    let timeout;
    return function (...args) {
        const context = this;
        clearTimeout(timeout)
        timeout = setTimeout(() => fn.apply(context, args), delay)
    }
}