import React, { Fragment, memo } from 'react'
import { discoverMenu } from 'common/local-data'

import { Discover } from './style'
import { NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

export default memo(function LWDiscover(props) {
  return (
    <Discover>
      <div className="discover-nav">
        <div className="nav-list wrap-v1">
          {discoverMenu.map(item => {
            return (
              <Fragment key={item.title}>
                <NavLink className="list-item" to={item.link}>
                  <em>{item.title}</em>
                </NavLink>
              </Fragment>
            )
          })}
        </div>
      </div>

      {renderRoutes(props.route.routes)}
    </Discover>
  )
})
