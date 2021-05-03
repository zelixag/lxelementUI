import form from './src/form.vue'

form.install = Vue => {
  Vue.component(form.name, form)
}

export default form