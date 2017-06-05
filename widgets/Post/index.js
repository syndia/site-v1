import React from 'react'
import { compose, defaultProps, setDisplayName, withHandlers } from 'recompose'
import { BodyRenderer } from '@phenomic/preset-react-app/lib/client'
import { Text, View } from 'react-primitives'

import withConfig from '../../helpers/withConfig'
import withStyle from '../../helpers/withStyle'

import Container from '../../internals/Container'
import { DateComponent } from '../../internals/DateTime'
import Link from '../../internals/Link'

const HOC = compose(
  setDisplayName('Post'),

  defaultProps({ isPreview: true }),

  withConfig({
    date: {
      display: true,
    },
  }),

  withStyle({
    root: {},

    container: {
    },

    meta: {},

    heading: {
      textAlign: 'center',
      fontSize: 28,
    },

    text: {
      textAlign: 'center',
      fontSize: 14,
      opacity: .4,
    }
  }),
)

const Component = ({ body, date, id, title, isPreview, styles, config }) => (
  <View style={ styles.root }>
    <Container style={ styles.container }>
      { isPreview &&
        <Text style={ styles.heading }>
          <Link to={ `/articles/${ id }` }>{ title || id }</Link>
        </Text>
      }

      <View style={ styles.meta }>
        { config.date.display &&
          <Text  style={ styles.text }>
            <DateComponent value={ new Date(date) } />
          </Text>
        }
      </View>

      {
        !isPreview && <BodyRenderer>{ body }</BodyRenderer>
      }
    </Container>
  </View>
)

export default HOC(Component)
