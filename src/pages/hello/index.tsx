/** @format */

import React, { useState, useCallback } from 'react'
import { observer } from 'mobx-react'
import CSSModules from 'react-css-modules'
import { Button } from 'antd'

import userStore from 'src/stores/userStore'
import styles from './index.module.less'

function Hello() {
  const handleClick = useCallback(() => {
    userStore.getUserInfo()
  }, [])

  console.log(123456, userStore)

  return (
    <div styleName="hello">
      <Button type="primary" onClick={handleClick}>
        测试
      </Button>
    </div>
  )
}

export default observer(CSSModules(styles)(Hello))
