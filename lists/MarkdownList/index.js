import React from 'react'
import { compose, createEagerElement, setDisplayName } from 'recompose'
import { createContainer, query } from '@phenomic/preset-react-app/lib/client'
import { View } from 'react-primitives'

import withStyle from '../../helpers/withStyle'

import Post from '../../widgets/Post'

import Flex from '../../internals/Flex'

const HOC = compose(
  setDisplayName('MarkdownList'),

  withStyle({
    root: {}
  }),
)

const List = ({ items, isLoading, onItemClick, config, styles }) => (
  <Flex>
    { !isLoading && items.node && items.node.list && items.node.list.map((item, index) => createEagerElement(Post, {
      ...item,
      key: `item-${ item.id || index }`,
      config: {
        ...config.item,
      },
      onClick: onItemClick,
    })) }
  </Flex>
)

export default createContainer(List, props => ({
  items: query({ collection: 'articles', props }),
}))
