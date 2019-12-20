const disabled = (fn?: any) => {
    let timeout: any = ''
    return (fn?: any) => {
        if (timeout) {
            clearTimeout(timeout)
        }
        timeout = setTimeout(() => {
            fn()
        }, 300);
    }
}

export default disabled()