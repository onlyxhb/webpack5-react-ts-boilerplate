/** @format */

import React, { useState } from 'react'
import { HashRouter, Switch, Route, Link } from 'react-router-dom'

import routes from './routes'
import './App.less'

function App() {
  return (
    <HashRouter>
      <React.Suspense fallback={<div>出错了</div>}>
        <Switch>
          {routes.map((v: any) => (
            <Route key={v.path} path={v.path} component={v.component} exact />
          ))}
        </Switch>
      </React.Suspense>
    </HashRouter>
  )
}

export default App
