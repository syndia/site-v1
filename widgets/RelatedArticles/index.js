import React from 'react'
import { compose, mapProps, setDisplayName } from 'recompose'
import { createContainer, query } from '@phenomic/preset-react-app/lib/client'
import { Text, View } from 'react-primitives'

import Flex from '../../internals/Flex'
import Container from '../../internals/Container'
import ArticlesList from '../../lists/ArticlesList'

const HOC = compose(
  setDisplayName('RelatedArticles'),

  mapProps(({ items, currentArticle }) => {
    const articles = []

    items.node && items.node.list && items.node.list.forEach(item => {
      if (item.title !== currentArticle.node.title) articles.push(item)
    })

    return {
      articles,
    }
  })
)

const Component = ({ articles }) => (
  <Flex>
    <Container>
      <Text><h3>{ "Related Articles" }</h3></Text>
      <ArticlesList items={ articles } />
    </Container>
  </Flex>
)

export default createContainer(HOC(Component), props => ({
  items: query({
    collection: 'articles',
    ...(props.tags ? { by: 'tags', value: props.tags } : {}),
  }),
}))
