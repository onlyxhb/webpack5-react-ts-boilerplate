/** @format */

import React, { Suspense } from 'react'
import { HashRouter, Switch, Route, Link } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'

import routes from './routes'
import './App.less'

function App() {
  return (
    <HashRouter>
      <Suspense fallback={<div>loading...</div>}>
        <Switch>
          {routes.map((v: any) => (
            <Route key={v.path} path={v.path} component={v.component} exact />
          ))}
        </Switch>
      </Suspense>
    </HashRouter>
  )
}

export default hot(App)
