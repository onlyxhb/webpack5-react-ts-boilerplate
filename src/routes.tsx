/** @format */

import React from 'react'
import loadable from '@loadable/component'

const routes = [
  {
    path: '/',
    component: () => <h1>hhhh</h1>
  },
  {
    path: '/hello',
    component: loadable(() => import('src/pages/hello'))
  },
  {
    path: '/404',
    component: loadable(() => import('src/pages/404'))
  }
]

export default routes
