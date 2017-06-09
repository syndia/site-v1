import React from 'react'
import { compose, setDisplayName } from 'recompose'
import { Text, View } from 'react-primitives'

import withStyle from '../../helpers/withStyle'
import Link from '../../internals/Link'

const HOC = compose(
  setDisplayName('TagsList'),

  withStyle({
    root: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginRight: -10,
    },
    itemLink: {
      margin: 10,
      color: '#333',
      backgroundColor: 'rgba(0, 0, 0, .08)',
      borderRadius: 3,
    },
    itemText: {
      fontSize: 14,
      lineHeight: 24,
      paddingHorizontal: 6,
    },
  }),
)

const Component = ({ parent, items, styles }) => (
  <View style={ styles.root }>
    {
      items && items.map(tag => (
        <Link key={ tag } to={ `/${ parent }/tags/${ tag }` } style={ styles.itemLink }>
          <Text style={ styles.itemText }>{ tag }</Text>
        </Link>
      ))
    }
  </View>
)

export default HOC(Component)
