import React from 'react'
import { Route, Router, browserHistory } from 'react-router'
import { createApp, renderApp } from '@phenomic/preset-react-app/lib/client'

import Html from './internals/Html'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Post from './pages/Post'

const routes = () => (
  <Router history={ browserHistory }>
    <Route path="/" component={ Home } />
    <Route path="/blog" component={ Blog } />
    <Route path="/articles/*" component={ Post } collection="articles" />
  </Router>
)

export default createApp(routes, Html)

if (module.hot) {
  module.hot.accept(() => renderApp(routes))
}

// kill previous website ServiceWorker
if (typeof navigator !== 'undefined' && 'serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(registrations => {
    for (const registration of registrations)
      registration.unregister()
  })
}
