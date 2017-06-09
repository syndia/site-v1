import React from 'react'
import { compose, createEagerElement, defaultProps, setDisplayName } from 'recompose'
import { Text, View } from 'react-primitives'

import withStyle from '../../helpers/withStyle'
import Grid from '../../widgets/Grid'
import Article from '../../widgets/Article'

const HOC = compose(
  setDisplayName('ArticlesList'),

  defaultProps({
    columns: 3,
  }),

  withStyle({
    list: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },

    link: {
      padding: 10,
      textDecorationLine: 'none',
    },

    thumbnail: {
      backgroundColor: 'grey',
      height: '10vh',
    },

    itemName: {
      marginTop: 16,
      fontSize: 18,
      fontWeight: '600',
      color: 'black',
    },
  }),
)

const Component = ({ columns, items, onArticleClick, config, style, styles }) => (
  <Grid style={ styles.list } columns={ columns }>
    { items && items.map(article =>
      createEagerElement(Article, {
        ...article,
        key: article.id,
        config: {
          ...config.article,
        },
        onClick: onArticleClick,
        style: style,
      })
    ) }
  </Grid>
)

export default HOC(Component)
