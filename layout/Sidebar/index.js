import React from 'react'
import { compose, setDisplayName } from 'recompose'
import { View } from 'react-primitives'

import withStyle from '../../helpers/withStyle'

const HOC = compose(
  setDisplayName('Sidebar'),

  withStyle({
    flexDirection: 'column',
  }),
)

const Component = ({ styles, children, ...rest }) => (
  <View style={ styles.root }>
    <ul { ...rest }>{ children }</ul>
  </View>
)

export const Sidebar = HOC(Component)
