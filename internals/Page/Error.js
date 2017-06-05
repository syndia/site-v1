import React from 'react'
import { compose, mapProps, setDisplayName } from 'recompose'
import Head from 'react-helmet'
import { StyleSheet, View, Text } from 'react-primitives'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  }
})

const HOC = compose(
  setDisplayName('PageError'),

  mapProps(({ page: { error }, ...rest }) => {
    const status = (error && error.status) || 404
    
    return {
      ...rest,
      status,
      text: error && status !== 404 ? error.statusText : 'Page not found',
    }
  })
)

const Component = ({ status, text, ...rest }) => (
  <View style={ styles.container }>
    <Head><title>{ text }</title></Head>
    { status === 404 &&
      <View>
        <Text>
          <strong>{ status }</strong>
          { " " }
          { text }
        </Text>
        { "It seems you found a broken link." }
        { "Sorry about that. " }
        <br />
        { "Do not hesitate to report this page." }
      </View>
    }
  </View>
)

export const PageError = HOC(Component)
