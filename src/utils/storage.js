export const setStorage = (name, val) => {
    const value = typeof (val) === 'string' ? val : JSON.stringify(val)
    return localStorage.setItem(name, value)
}
export const getStorage = (name) => {
    return localStorage.getItem(name)
}