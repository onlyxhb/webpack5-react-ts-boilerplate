/** @format */

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'

import './index.less'
import stores from './stores'
import App from './App'

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.querySelector('#root')
)
