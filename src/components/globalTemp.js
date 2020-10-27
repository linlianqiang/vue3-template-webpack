import Global from './globalTemp.vue'

export default {
  install: function(Vue) {
    Vue.component('temp', Global)
  }
}