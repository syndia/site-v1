import React from 'react'
import { compose, setDisplayName, mapProps } from 'recompose'
import { StyleSheet } from 'react-primitives'

const rawStyle = {
  display: 'flex',
  flexDirection: 'column',
}

const makeGradient = (start, end, direction = 'to bottom right') => ({
  backgroundColor: start,
  background: `linear-gradient(${ direction }, ${ start }, ${ end })`,
})

const HOC = compose(
  setDisplayName('BackgroundGradient'),

  mapProps(({ direction, end, start, ...rest }) => ({
    ...rest,
    style: {
      ...rawStyle,
      ...makeGradient(start, end, direction),
    }
  })),
)

const Component = ({ style, children }) => (
  <div style={ style } className={ StyleSheet.resolve(style).className }>
    { children }
  </div>
)

export default HOC(Component)
