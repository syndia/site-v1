import React from 'react'
import { compose, setDisplayName } from 'recompose'
import { View, Text } from 'react-primitives'

import withStyle from '../helpers/withStyle'

import Flex from '../internals/Flex'

export { Header } from './Header'
export { Footer } from './Footer'
export { Sidebar } from './Sidebar'

const HOC = compose(
  setDisplayName('Layout'),

  withStyle({
    root: {},
  }),
)

const Component = ({ styles, children }) => (
  <Flex style={ [styles.root] }>
    { children }
  </Flex>
)

export default HOC(Component)
