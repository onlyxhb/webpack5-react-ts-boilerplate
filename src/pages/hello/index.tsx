/** @format */

import React, { useState, useCallback } from 'react'
import { observer } from 'mobx-react'
import styles from './index.module.less'
import CSSModules from 'react-css-modules'
import { Button } from 'antd'

import userStore from 'src/stores/userStore'

function Hello() {
  const handleClick = useCallback(() => {
    userStore.setUserInfo({
      name: '444',
      avatar: '333',
      phone: 3333,
      status: 2
    })
  }, [])

  console.log(userStore.userInfo)

  return (
    <div styleName="hello">
      <Button type="primary" onClick={handleClick}>
        测试
      </Button>
    </div>
  )
}

export default observer(CSSModules(styles)(Hello))
