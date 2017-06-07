import React from 'react'
import { compose, setDisplayName } from 'recompose'
import { BodyRenderer, createContainer, query } from '@phenomic/preset-react-app/lib/client'
import { View } from 'react-primitives'

import withConfig from '../helpers/withConfig'
import withStyle from '../helpers/withStyle'

import Layout, { Footer, Header, Sidebar } from '../layout'
import Post, { Teaser } from '../widgets/Post'
import RelatedArticles from '../widgets/RelatedArticles'
import DisqusEmbed from '../widgets/DisqusEmbed'

const HOC = compose(
  setDisplayName('Post'),

  withConfig({
    post: {
    }
  }),

  withStyle({
    root: {},
  }),
)

const Component = ({ post, styles, config, children }) => (
  <Layout style={ styles.root }>
    { post && post.node &&
      <View>
        <Header title={ post.node.title } teaser={ post.node.teaser } hero={ post.node.hero } config={ config } />
        <Post { ...post.node } config={ config.post } isPreview={ false } />
        { post.node.tags &&
          <RelatedArticles currentArticle={ post } tags={ post.node.tags[0] } />
        }
        { post.node.comments &&
          <DisqusEmbed
            shortname="syndia"
            identifier="disqus_thread"
            title="React Disqus thread component"
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
