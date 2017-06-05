import React from 'react'
import { compose, setDisplayName, withProps } from 'recompose'
import Head from 'react-helmet'
import { StyleSheet } from 'react-primitives'

const Html = ({ body, script, state }) => {
  const helmet = Head.renderStatic()

  return (
    <html { ...helmet.htmlAttributes.toComponent() }>
      <head>
        { helmet.base.toComponent() }
        { helmet.title.toComponent() }
        { helmet.meta.toComponent() }
        <link rel="stylesheet" href="/styles.css" />
        { helmet.link.toComponent() }
        { helmet.style.toComponent() }
        { helmet.script.toComponent() }
        { helmet.noscript.toComponent() }
      </head>
      <body { ...helmet.bodyAttributes.toComponent() }>
        { body }
        { state }
        { script }
      </body>
    </html>
  )
}

export default Html
