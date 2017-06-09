import React from 'react'
import { compose, setDisplayName } from 'recompose'
import { Text, View } from 'react-primitives'

import withStyle from '../../helpers/withStyle'
import Link from '../../internals/Link'

const HOC = compose(
  setDisplayName('AuthorsList'),

  withStyle({
    root: {
      flexDirection: 'column',
    },
    itemLink: {
      fontWeight: '200',
      textDecorationLine: 'none',
      color: 'inherit',
    },
    intro: {
      fontSize: 14,
      opacity: 0.4,
    },
    name: {
      fontSize: 16,
      opacity: 1,
    }
  }),
)

const Component = ({ items, style, styles }) => (
  <View style={ [style, styles.root] }>
    {
      items && items.map((author, index) => (
        <Link key={ author.id || index } to={ `/authors/${ author.id }` } style={ styles.itemLink }>
          <Text style={ styles.name }>{ author.name }</Text>
          <br />
          <Text style={ styles.intro }>{ author.intro }</Text>
        </Link>
      ))
    }
  </View>
)

export default HOC(Component)
