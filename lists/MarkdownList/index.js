import React from 'react'
import { compose, createEagerElement, setDisplayName } from 'recompose'
import { createContainer, query } from '@phenomic/preset-react-app/lib/client'
import { View } from 'react-primitives'

import withStyle from '../../helpers/withStyle'

import Flex from '../../internals/Flex'

const HOC = compose(
  setDisplayName('MarkdownList'),

  withStyle({
    root: {}
  }),
)

const Component = ({ itemComponent, items, onItemClick, config, styles }) => (
  <Flex style={ styles.root }>
    { items && items.node && items.node.list && items.node.list.map((item, index) => createEagerElement(itemComponent, {
      ...item,
      key: `item-${ item.id || index }`,
      config: {
        ...config.item,
      },
      onClick: onItemClick,
    })) }
  </Flex>
)

export default createContainer(HOC(Component), ({ collection, singleItem, ...rest }) => ({
  items: query({ collection, ...rest }),
}))
