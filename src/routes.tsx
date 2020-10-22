/** @format */

import React, { lazy } from 'react'

const routes = [
  {
    path: '/',
    component: () => <h1>嘿嘿</h1>
  },
  {
    path: '/hello',
    component: lazy(() => import('src/pages/hello'))
  },
  {
    path: '/404',
    component: lazy(() => import('src/pages/404'))
  }
]

export default routes
