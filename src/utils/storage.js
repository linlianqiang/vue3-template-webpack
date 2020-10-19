export const setStorage = (name ,val) => {
  return localStorage.setItem(name,val)
}
export const getStorage = (name) => {
  return localStorage.getItem(name)
}