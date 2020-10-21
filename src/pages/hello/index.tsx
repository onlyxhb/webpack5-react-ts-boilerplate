/** @format */

import React, { useState } from 'react'
import styles from './index.module.less'
import CSSModules from 'react-css-modules'
import { Button } from 'antd'

function Hello() {
  return (
    <div styleName="hello">
      <Button type="primary">测试</Button>
    </div>
  )
}

export default CSSModules(styles)(Hello)
