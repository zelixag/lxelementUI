import LxButton from '../'

export default {
  title: 'LxButton',
  component: LxButton,
}

export const normal = () => ({
  components: {LxButton},
  template: `<lx-button>普通按钮</lx-button>`
})