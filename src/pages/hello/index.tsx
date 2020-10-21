/** @format */

import React, { useState } from 'react'
import styles from './index.module.less'
import CSSModules from 'react-css-modules'

function Hello() {
  return <div styleName="hello">hello world</div>
}

export default CSSModules(styles)(Hello)
