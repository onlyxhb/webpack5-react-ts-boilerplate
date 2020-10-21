/** @format */

import React, { useState,  useCallback } from 'react'
import { observer } from 'mobx-react'
import styles from './index.module.less'
import CSSModules from 'react-css-modules'
import { Button } from 'antd'

import store  from   './store'

function Hello() {

  const  handleClick =  useCallback(() => {
    console.log(789)
    store.setData('hello world')
  }, [])

  console.log(123456, store, store.data)

  return (
    <div styleName="hello">
      <Button type="primary" onClick={handleClick}>测试</Button>
    </div>
  )
}

export default observer(CSSModules(styles)(Hello))
