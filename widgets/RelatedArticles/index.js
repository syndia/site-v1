import React from 'react'
import { compose, mapProps, setDisplayName } from 'recompose'
import { createContainer, query } from '@phenomic/preset-react-app/lib/client'
import { Text } from 'react-primitives'

import withConfig from '../../helpers/withConfig'
import withStyle from '../../helpers/withStyle'
import Flex from '../../internals/Flex'
import Container from '../../internals/Container'
import ArticlesList from '../../lists/ArticlesList'

const HOC = compose(
  setDisplayName('RelatedArticles'),

  withConfig({
    article: {
      preview: true,
      authors: { display: false },
      date: { display: false },
      tags: { display: false },
    }
  }),

  withStyle({
    title: {
      marginTop: 40,
      marginBottom: 20,
      fontSize: 16,
      fontWeight: '200',
    },
  }),

  mapProps(({ isLoading, items, currentArticle, ...rest }) => {
    const articles = []

    !isLoading && items.node && items.node.list && items.node.list.forEach(item => {
      if (item.title !== currentArticle.node.title) articles.push(item)
    })

    return {
      ...rest,
      articles,
    }
  })
)

const Component = ({ articles, config, styles }) => (
  <Flex>
    <Container>
      <Text style={ styles.title }>{ "Related Articles" }</Text>
      <ArticlesList items={ articles } config={ config } />
    </Container>
  </Flex>
)

export default createContainer(HOC(Component), props => ({
  items: query({
    collection: 'articles',
    ...(props.tags ? { by: 'tags', value: props.tags, limit: 4 } : {}),
  }),
}))
