/** @format */

import React from 'react'
import NotFound from 'src/pages/404'
import Hello from 'src/pages/hello'

const routes = [
  {
    path: '/',
    component: () => <h1>hhhh</h1>
  },
  {
    path: '/hello',
    component: (props: any) => <Hello {...props} />
  },
  {
    path: '/404',
    component: (props: any) => <NotFound {...props} />
  }
]

export default routes
