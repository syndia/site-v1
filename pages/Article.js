import React from 'react'
import { branch, compose, renderComponent, setDisplayName } from 'recompose'
import { createContainer, query } from '@phenomic/preset-react-app/lib/client'
import { View } from 'react-primitives'

import withConfig from '../helpers/withConfig'
import withStyle from '../helpers/withStyle'
import Layout, { Footer, Header, Sidebar } from '../layout'
import Container from '../internals/Container'
import Article from '../widgets/Article'
import RelatedArticles from '../widgets/RelatedArticles'
import DisqusEmbed from '../widgets/DisqusEmbed'

import ArticleError from './Error'

const HOC = compose(
  setDisplayName('Article'),

  withConfig({
    article: {
      preview: false,
      authors: { display: true },
      date: { display: true },
      tags: { display: true },
    }
  }),

  withStyle({
    root: {},
  }),

  branch(
    ({ hasError }) => hasError,
    renderComponent(ArticleError),
  ),
)

const Component = ({ post, isLoading, styles, config }) => (
  <Layout style={ styles.root }>
    { !isLoading && post && post.node &&
      <View>
        <Header title={ post.node.title } teaser={ post.node.teaser } hero={ post.node.hero } config={ config } />
        <Container>
          <Article { ...post.node } config={ config.article } />
        </Container>
        { post.node.tags &&
          <RelatedArticles currentArticle={ post } tags={ post.node.tags[0] } />
        }
        { post.node.comments &&
          <DisqusEmbed
            shortname="syndia"
            identifier={ post.node.id }
            title={ post.node.title }
          />
        }
        <Sidebar />
        <Footer />
      </View>
    }
  </Layout>
)

export default createContainer(HOC(Component), ({ params: { splat }, ...rest }) => ({
  post: query({ collection: 'articles', id: splat, ...rest }),
}))
