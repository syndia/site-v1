import React from 'react'
import { compose, setDisplayName } from 'recompose'
import {} from 'react-primitives'

import withStyle from '../../helpers/withStyle'

import MarkdownList from '../../lists/MarkdownList'

const HOC = compose(
  setDisplayName('FeaturedPosts'),

  withStyle({
    root: {},
  }),
)

const Component = ({ styles }) => (
  <View style={ styles.root }>
    <MarkdownList collection="articles" sortBy="date" itemComponent={ Post } config={ config } />
  </View>
)

export default HOC(Component)
