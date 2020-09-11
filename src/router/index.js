import LWDiscover from '@/pages/discover'
import LWMine from '@/pages/mine'
import LWFriend from '@/pages/friend'

const routes = [
  { path: '/', exact: true, component: LWDiscover },
  { path: '/mine', component: LWMine },
  { path: '/friend', component: LWFriend },
]

export default routes
