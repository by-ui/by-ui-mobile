const disabled = (fn?: any) => {
    let timeout: any = ''
    return (fn?: any) => {
        if (timeout) {
            clearTimeout(timeout)
        }
        timeout = setTimeout(() => {
            fn()
        }, 200);
    }
}

export default disabled()