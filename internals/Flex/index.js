import React from 'react'
import { compose, setDisplayName } from 'recompose'
import { View } from 'react-primitives'

import withStyle from '../../helpers/withStyle'

const HOC = compose(
  setDisplayName('Flex'),

  withStyle({
    root: {
      flex: 1,
    },
  }),
)

const Component = ({ style, styles, children }) => (
  <View style={ [style, styles.root] }>
    { children }
  </View>
)

export default HOC(Component)
