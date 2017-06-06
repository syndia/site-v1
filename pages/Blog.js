import React from 'react'
import { compose, setDisplayName } from 'recompose'

import withConfig from '../helpers/withConfig'

import Layout, { Header, Footer } from '../layout'
import MarkdownList from '../lists/MarkdownList'
import Post from '../widgets/Post'

const HOC = compose(
  setDisplayName('Blog'),

  withConfig({
    post: {},
  })
)

const Component = ({ config, children }) => (
  <Layout>
    <Header title={ "Syndia's - Blog" } />
    <MarkdownList config={ config } />
    { children }
    <Footer />
  </Layout>
)

export default HOC(Component)
