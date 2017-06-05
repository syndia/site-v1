import React from 'react'
import { compose, setDisplayName } from 'recompose'
import { View, Text } from 'react-primitives'

import withStyle from '../helpers/withStyle'

import Flex from '../internals/Flex'

import Masterbar from './Masterbar'

export { Header } from './Header'
export { Footer } from './Footer'
export { Sidebar } from './Sidebar'

const HOC = compose(
  setDisplayName('Layout'),

  withStyle({
    root: {
      minHeight: '100vh',
    },
  }),
)

const Component = ({ styles, children }) => (
  <Flex style={ [styles.root] }>
    <Masterbar />
    { children }
  </Flex>
)

export default HOC(Component)
