import React from 'react'
import { compose, setDisplayName } from 'recompose'

import Layout, { Header, Footer } from '../layout'

const HOC = compose(
  setDisplayName('Homepage'),
)

const Component = ({ children }) => (
  <Layout>
    <Header title={ "Syndia's - Home" } />
    { children }
    <Footer />
  </Layout>
)

export default HOC(Component)
