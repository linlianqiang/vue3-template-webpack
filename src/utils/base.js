/**
 * 手写深拷贝
 *  */ 
export function deepClone(obj) {
  if(typeof obj !== 'object' || obj == null) {
    console.log('result22:', obj)
    return obj
  }

  let result
  if(obj instanceof Array) {
    result = []
  } else {
    result = {}
  }

  for(const key in obj) {
    if(Object.prototype.hasOwnProperty.call(obj,key)) { //不是通过原型继承来的
      // 递归调用!!
      result[key] = deepClone(obj[key])
    }
  }
  
  return result
}


