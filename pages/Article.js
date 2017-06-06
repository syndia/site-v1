import React from 'react'
import { compose, setDisplayName } from 'recompose'
import { BodyRenderer, createContainer, query } from '@phenomic/preset-react-app/lib/client'
import { View } from 'react-primitives'

import withConfig from '../helpers/withConfig'
import withStyle from '../helpers/withStyle'

import Layout, { Footer, Header, Sidebar } from '../layout'
import Post, { Teaser } from '../widgets/Post'

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
  <Layout style={ styles.root } hasSidebar>
    { post && post.node &&
      <View>
        <Header title={ post.node.title } teaser={ post.node.teaser } config={ config } />
        <Post { ...post.node } config={ config.post } isPreview={ false } />
        <Sidebar />
        <Footer />
      </View>
    }
  </Layout>
)

export default createContainer(HOC(Component), ({ params: { splat }, ...rest }) => ({
  post: query({ collection: 'articles', id: splat, ...rest }),
}))
