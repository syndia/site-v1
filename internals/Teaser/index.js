import React from 'react'
import { compose, setDisplayName } from 'recompose'
import { Text, View } from 'react-primitives'

import withStyle from '../../helpers/withStyle'

const HOC = compose(
  setDisplayName('PostTeaser'),

  withStyle({
    root: {
      alignItems: 'center',
      justifyContent: 'center',
    },

    text: {
      fontSize: 20,
      textAlign: 'center',
    },
  }),
)

const Component = ({ text, config, styles }) => (
  <View style={ styles.root }>
    <Text style={ styles.text }>
      { text }
    </Text>
  </View>
)

export default HOC(Component)
