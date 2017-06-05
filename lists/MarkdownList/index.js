import React from 'react'
import { compose, createEagerElement, setDisplayName } from 'recompose'
import { createContainer, query } from '@phenomic/preset-react-app/lib/client'
import { View } from 'react-primitives'

const HOC = compose(
  setDisplayName('MarkdownList'),
)

const Component = ({ itemComponent, items, onItemClick, config }) => (
  <View>
    { items && items.node && items.node.list && items.node.list.map((item, index) => createEagerElement(itemComponent, {
      ...item,
      key: `item-${ item.id || index }`,
      config: {
        ...config.item,
      },
      onClick: onItemClick,
    })) }
  </View>
)

export default createContainer(HOC(Component), ({ collection, singleItem, ...rest }) => ({
  items: query({ collection, ...rest }),
}))
