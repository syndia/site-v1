import React from 'react'
import { compose, setDisplayName } from 'recompose'
import { Text, View } from 'react-primitives'

import withStyle from '../../helpers/withStyle'

const HOC = compose(
  setDisplayName('ArticlesList'),

  withStyle({
    list: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },

    item: {
      position: 'relative',
      width: 'calc(100vw / 3)',
      padding: 20,
      borderWidth: 1,
      borderColor: '#eee',
    }
  }),
)

const Component = ({ items, styles }) => (
  <View style={ styles.list }>
    { items.map(item => (
      <View style={styles.item } key={ item.id }>
        <Text style={ styles.itemName }>{ item.title }</Text>
      </View>
    )) }
  </View>
)

export default HOC(Component)
