import React from 'react'
import { compose, setDisplayName } from 'recompose'
import { View } from 'react-primitives'

import withStyle from '../../helpers/withStyle'

const HOC = compose(
  setDisplayName('Container'),

  withStyle({
    root: {
      flex: 1,
      width: '100%',
      maxWidth: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  }),
)

const Component = ({ style, styles, children }) => (
  <View style={ [style, styles.root] }>
    { children }
  </View>
)

export default HOC(Component)
