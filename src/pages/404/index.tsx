/** @format */

import React, { useState } from 'react'
import img from 'src/assets/404.png'
import styles from './index.module.less'
import classNames from 'classnames'
import CSSModules from 'react-css-modules'

function NotFound() {
  // const [animated, setAnimated] = useState()

  const handleEnter = () => {
    // setAnimated('hinge')
  }

  return (
    <div styleName="not-found">
      hooks有问题啊
      {/* <img src={img} alt="404" styleName={classNames('animated', 'swing', animated)} onMouseEnter={handleEnter} /> */}
    </div>
  )
}

export default CSSModules(styles)(NotFound)
