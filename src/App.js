import React, { memo } from 'react'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import routes from '@/router'

import LWAppHeader from 'components/app-header'
import LWAppFooter from 'components/app-footer'

export default memo(function App() {
  return (
    <HashRouter>
      <LWAppHeader />

      {renderRoutes(routes)}

      <LWAppFooter />
    </HashRouter>
  )
})
