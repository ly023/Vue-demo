import App from '../app'
import TAB from 'views/tab'
import Scroll from 'views/scroll'

export default [
  {
    path: '*',
    component: App
  },
  {
    path: '/tab',
    name: 'tab',
    component: TAB
  },
  {
    path: '/scroll',
    name: 'scroll',
    component: Scroll
  }
]

