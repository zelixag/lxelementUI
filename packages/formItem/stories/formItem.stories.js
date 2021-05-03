import formItem from '../'

export default {
  title: 'LxformItem',
  component: formItem,
}

export const normal = () => ({
  components: { formItem },
  template: `<lx-formItem>普通按钮</lx-formItem>`
})