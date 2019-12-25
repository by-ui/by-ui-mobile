function throttle() {
    let flag = false
    return function (fn?: any, delay = 100) {

        if (flag) {
            return false
        }
        flag = true
        setTimeout(() => {
            fn()
            flag = false
        }, delay)
    }
}

export default throttle()