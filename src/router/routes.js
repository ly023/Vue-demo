import App from '../app'
import TAB from 'views/tab'

export default [
  {
    path: '*',
    component: App
  },
  {
    path: '/tab',
    name: 'tab',
    component: TAB
  }

]

