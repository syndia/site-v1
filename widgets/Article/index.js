import React from 'react'
import { compose, setDisplayName } from 'recompose'
import { Text, View } from 'react-primitives'

import withStyle from '../../helpers/withStyle'
import Link from '../../internals/Link'
import { DateComponent } from '../../internals/DateTime'
import { MarkdownGenerated } from '../../internals/MarkdownGenerated'
import AuthorsList from '../../lists/AuthorsList'
import TagsList from '../../lists/TagsList'
import Thumbnail from '../../widgets/UnsplashImages/Thumbnail'

const HOC = compose(
  setDisplayName('Article'),

  withStyle({
    meta: {},

    text: {
      fontWeight: '200',
      fontSize: 14,
      opacity: 0.4,
    },

    authors: {
      marginTop: 60,
    }
  }),
)

const Component = ({ authors, body, comments, date, id, hero, tags, teaser, title, type, config, styles }) => (
  <View>
    { config.preview &&
      <Link to={ `/articles/${ id }` }>
        { hero && <Thumbnail id={ hero.id } style={ styles && styles.thumbnail } /> }
        <Text>{ title }</Text>
      </Link>
    }
    {
      config.authors.display &&
      <View style={ styles.meta }>
        <AuthorsList items={ authors } style={ styles.authors } />
      </View>
    }
    { config.date.display &&
      <View style={ styles.meta }>
        <Text  style={ styles.text }>
          <DateComponent value={ new Date(date) } />
        </Text>
      </View>
    }
    { !config.preview && body && <MarkdownGenerated body={ body } /> }
    { tags && tags.length && config.tags.display && <TagsList parent="articles" items={ tags } /> }
  </View>
)

export default HOC(Component)
