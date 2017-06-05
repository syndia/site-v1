import React from 'react'
import { compose, setDisplayName } from 'recompose'
import Head from 'react-helmet'
import { View, Text } from 'react-primitives'

import withStyle from '../../helpers/withStyle'

import Container from '../../internals/Container'

const HOC = compose(
  setDisplayName('LayoutHeader'),

  withStyle({
    root: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },

    hero: {
      paddingTop: 40,
      paddingBottom: 60,
    },

    heroText: {
      fontSize: 40,
      fontWeight: '200',
      textAlign: 'center',
    },
  })
)

const Component = ({ title, styles, children }) => (
  <View style={ styles.root }>
    <Head><title>{ title }</title></Head>
    <Container style={ styles.hero }>
      <Text style={ styles.heroText}>{ title }</Text>
      { children && <View>{ children }</View> }
    </Container>
  </View>
)

export const Header = HOC(Component)
