import React from 'react'
import { compose, setDisplayName } from 'recompose'
import { createContainer, query } from '@phenomic/preset-react-app/lib/client'
import { Text } from 'react-primitives'

import withConfig from '../helpers/withConfig'
import withStyle from '../helpers/withStyle'
import Layout, { Header, Footer } from '../layout'
import Container from '../internals/Container'
import Link from '../internals/Link'
import ArticleList from '../lists/ArticlesList'
import Pagination from '../widgets/Pagination'

const HOC = compose(
  setDisplayName('Blog'),

  withConfig({
    article: {
      preview: true,
      authors: { display: false },
      date: { display: true },
      tags: { display: true },
    },
  }),

  withStyle({
    root: {
      marginTop: 60,
    },

    filterMessage: {
      padding: 10,
    },

    filterMessageLink: {
      fontWeight: 'bold',
    },
  }),
)

const Component = ({ articles, isLoading, params, config, styles }) => (
  <Layout>
    <Header title={ "Syndia's - Blog" } />
    <Container style={ styles.root }>
      { params && params.tag &&
        <Text style={ styles.filterMessage }>
          { "You are currently viewing articles that match "}
          <em>{ params.tag }</em>
          { " tag. "}
          <Link to="/blog/" style={ styles.filterMessageLink }>
            { "View all." }
          </Link>
        </Text>
      }

      { !isLoading && <ArticleList items={ articles.node.list } config={ config } /> }

      <Pagination path="/articles" items={ articles } />
    </Container>
    <Footer />
  </Layout>
)

export default createContainer(HOC(Component), props => ({
  articles: query({
    collection: 'articles',
    limit: 3,
    sortBy: 'date',
    ...(props.params.after ? { after: props.params.after } : null ),
    ...(props.params.tag ? { by: 'tags', value: props.params.tag } : {}),
  })
}))
