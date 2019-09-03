import React from 'react'
import withRouter from 'umi/withRouter'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import styles from './index.less'

export default withRouter(({ location, children }) => {
  return (
    <div className={styles.wapper}>
      {
        <TransitionGroup>
          <CSSTransition key={location.pathname} classNames="page" timeout={300}>
            {children}
          </CSSTransition>
        </TransitionGroup>
      }
    </div>
  )
})
