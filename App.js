import React from 'react'
import { Route, Router, browserHistory } from 'react-router'
import { createApp, renderApp } from '@phenomic/preset-react-app/lib/client'

import './defaults.css'

import Html from './internals/Html'
import Article from './pages/Article'
import Blog from './pages/Blog'
import PageError from './pages/Error'
import Home from './pages/Home'

const routes = () => (
  <Router history={ browserHistory }>
    <Route path="/" component={ Home } />
    <Route path="/articles/tag/:tag" component={ Blog } collection="articles" />
    <Route path="/articles/after/:after" component={ Blog } collection="articles" paginated />
    <Route path="/articles/*" component={ Article } collection="articles" />
    <Route path="/articles" component={ Blog } />
    <Route path="*" component={ PageError } />
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
