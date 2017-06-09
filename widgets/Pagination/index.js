import React from 'react'
import { compose, setDisplayName } from 'recompose'
import { View } from 'react-primitives'

import withStyle from '../../helpers/withStyle'
import Link from '../../internals/Link'

const HOC = compose(
  setDisplayName('Pagination'),

  withStyle({
    paginationRow: {
      flexDirection: 'row',
    },

    paginationColumn: {
      width: '50%',
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
  }),
)

const Component = ({ items, path, styles }) => (
  <View style={ styles.paginationRow }>
    <View style={ styles.paginationColumn }>
      { items.node && items.node.hasNextPage &&
        <Link to={ `${ path }/after/${ items.node.next }` }>
          { "Go Back in Time" }
        </Link>
      }
    </View>

    <View style={ styles.paginationColumn }>
      { items.node && items.node.hasPreviousPage &&
        <Link to={
          items.node.previousPageIsFirst
            ? path
            : `${ path }/after/${ items.node.previous }`
        }>
          { "Go Forward in Time" }
       </Link>
      }
    </View>
  </View>
)

export default HOC(Component)
