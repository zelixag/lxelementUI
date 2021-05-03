import formItem from './src/formItem.vue'

formItem.install = Vue => {
  Vue.component(formItem.name, formItem)
}

export default formItem