import form from '../'

export default {
  title: 'Lxform',
  component: form,
}

export const normal = () => ({
  components: { form },
  template: `<lx-form>普通按钮</lx-form>`
})