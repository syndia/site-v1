import React from 'react'
import { compose, mapProps, setDisplayName } from 'recompose'
import { Text, View } from 'react-primitives'

import withStyle from '../helpers/withStyle'
import Layout, { Footer, Header } from '../layout'
import Container from '../internals/Container'

const HOC = compose(
  setDisplayName('PageError'),

  withStyle({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '50vh',
    },

    title: {
      margin: 30,
    },

    text: {
      fontSize: 24,
      fontWeight: '200',
      lineHeight: 24,
      textAlign: 'left',
      opacity: 0.6,
    },

    span: {
      fontSize: 36,
      fontWeight: '300',
      lineHeight: 36,
      textAlign: 'right',
      textTransform: 'uppercase',
      opacity: 1,
    },

    center: {
      textAlign: 'center',
    }
  }),

  mapProps(({ error, ...rest }) => {
    const status = (error && error.status) || 404

    return {
      ...rest,
      errorText: error && status !== 404
        ? error.statusText
        : 'Page not found',
      status,
    }
  })
)

const Component = ({ errorText, status, styles }) => (
  <Layout>
    <Header title={ errorText } />
    <Container style={ styles.root }>
      { status === 404 &&
        <View style={ styles.title }>
          <Text style={ styles.text }>
            { "Waiting " }<em>{ "for this" }</em>{ " page..." }
          </Text>
          <br />
          <Text style={ [styles.text, styles.span] }>
            { "...is like sunshine at night" }
          </Text>
        </View>
      }
      <View>
        <Text style={ [styles.title, styles.text, styles.center] }>
          <strong>{ status }</strong>
          { " " }
          { errorText }
        </Text>
        { status === 404 &&
          <View>
            { "It seems you found a broken link. Sorry about that." }
            <br />
            {"Do not hesitate to report this page." }
          </View>
        }
      </View>
    </Container>
    <Footer />
  </Layout>
)

export default HOC(Component)
