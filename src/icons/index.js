
import SvgIcon from '../components/SvgIcon'// svg组件
 
// register globally
// createApp({}).component('svg-icon', SvgIcon)
export default {
  install: function(Vue) {
    Vue.component('svg-icon',SvgIcon)
  }
}
//require.context: 自动化导入模块：遍历文件夹下的所有模块。
//返回一个函数，该函数有三个属性：
// resolve {Function} -接受一个参数req,req为svg文件夹下面匹配文件的相对路径,返回这个匹配文件相对于整个工程的相对路径
// keys {Function} keys().map( /** req */ )，匹配文件的路径
// id

// 同时 requireContext 作为一个函数,也接受一个req参数,而requireContext函数返回的是一个模块,这个模块才是真正我们需要的。
// 这个Module模块和使用import导入的模块是一样的

const requireContext = require.context('./svg', false, /\.svg$/) 
console.log(requireContext.resolve('./edit.svg'))  // './src/icons/svg/edit.svg'
requireContext.keys().map( requireContext )   // [Module]   