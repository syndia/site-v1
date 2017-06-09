import React from 'react'
import { compose, mapProps, setDisplayName } from 'recompose'
import { Link as RouterLink } from 'react-router'
import { StyleSheet } from 'react-primitives'

const HOC = compose(
  setDisplayName('Link'),

  mapProps(({ activeStyle, style, ...rest }) => ({
    ...rest,
    injectedProps: {
      className: typeof style === 'number' ?
        `${ StyleSheet.resolve(style).className }` : '',
      activeClassName: typeof activeStyle === 'number' ?
        `${ StyleSheet.resolve(activeStyle).className }` : '',
    },
  })),
)

const Component = ({ injectedProps, ...rest }) => (<RouterLink { ...rest } { ...injectedProps } />)

export default HOC(Component)
