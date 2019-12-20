const disabled = (fn?: any) => {
    let timeout: any = ''
    return (fn?: any) => {
        if (timeout) {
            clearTimeout(timeout)
        }
        timeout = setTimeout(() => {
            fn()
        }, 100);
    }
}

export default disabled()