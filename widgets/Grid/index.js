import React, { Children } from 'react'
import { compose, createEagerFactory, setDisplayName, withPropsOnChange } from 'recompose'
import { View } from 'react-primitives'

import withStyle from '../../helpers/withStyle'
import Flex from '../../internals/Flex'

const GridItem = createEagerFactory(({ style, children }) => (
  <View style={ style }>
    { children }
  </View>
))

const HOC = compose(
  setDisplayName('Grid'),

  withStyle({
    root: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 10,
    },

    item: {
    }
  }),

  withPropsOnChange(['columns', 'children'], ({ columns = 3, children }) => {
    const width = { width: `${ 100 / columns }%` }
    return {
      children: Children.map(children, (child, index) => child &&
        GridItem({
          key: child.key || index,
          children: child,
          style: [width, child.props.style],
        })
      )
    }
  }),
)

const Component = ({ styles, children }) => (
  <Flex>
    <View style={ styles.root }>
      { children }
    </View>
  </Flex>
)

export default HOC(Component)
