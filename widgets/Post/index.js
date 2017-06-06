import React from 'react'
import { compose, defaultProps, setDisplayName, withHandlers } from 'recompose'
import { BodyRenderer } from '@phenomic/preset-react-app/lib/client'
import { Text, View } from 'react-primitives'

import withConfig from '../../helpers/withConfig'
import withStyle from '../../helpers/withStyle'

import Container from '../../internals/Container'
import { DateComponent } from '../../internals/DateTime'
import Link from '../../internals/Link'

const AuthorMeta = ({ name = 'John Ripke', intro = 'I’m a senior web developer at @syndianl and senior friends-joke developer at home.', styles }) => (
  <View style={ styles.author }>
    <Text style={ styles.name }>{ name }</Text>
    <Text style={ styles.intro }>{ intro }</Text>
  </View>
)

const HOC = compose(
  setDisplayName('Post'),

  defaultProps({ isPreview: true }),

  withConfig({
    date: {
      display: true,
    },

    author: {
      display: true,
    }
  }),

  withStyle({
    root: {},

    container: {
      paddingTop: 60,
    },

    meta: {},

    heading: {
      textAlign: 'center',
      fontSize: 28,
    },

    text: {
      fontSize: 14,
      opacity: .4,
    },

    author: {
      flexDirection: 'column',
    },

    name: {
      fontSize: 16,
      fontWeight: '200',
    },

    intro: {
      paddingTop: 4,
      paddingBottom: 4,
      fontSize: 15,
      opacity: .4,
    },

    preview: {
      textAlign: 'center',
    }
  }),
)

const Component = ({ body, date, id, title, isPreview, styles, config }) => (
  <View style={ styles.root }>
    <Container style={ styles.container }>
      { ! isPreview &&
        <View>
          <AuthorMeta styles={ styles } />
          <View style={ styles.meta }>
            { config.date.display &&
              <Text  style={ styles.text }>
                <DateComponent value={ new Date(date) } />
              </Text>
            }
          </View>
        </View>
      }

      { isPreview &&
        <View style={ styles.preview }>
          <Text style={ styles.heading }>
            <Link to={ `/articles/${ id }` }>{ title || id }</Link>
          </Text>
          <View style={ styles.meta }>
            { config.date.display &&
              <Text style={ styles.text }>
                <DateComponent value={ new Date(date) } />
              </Text>
            }
          </View>
       </View>
      }

      <View style={ { paddingTop: 20 } }>
        {
          !isPreview && <BodyRenderer>{ body }</BodyRenderer>
        }
      </View>
    </Container>
  </View>
)

export default HOC(Component)
