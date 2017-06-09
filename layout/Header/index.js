import React from 'react'
import { compose, setDisplayName } from 'recompose'
import Head from 'react-helmet'
import { View, Text } from 'react-primitives'

import withStyle from '../../helpers/withStyle'
import BackgroundGradient from '../../internals/BackgroundGradient'
import Container from '../../internals/Container'
import Teaser from '../../internals/Teaser'
import Hero from '../../widgets/Hero'
import Masterbar from '../Masterbar'

const HOC = compose(
  setDisplayName('LayoutHeader'),

  withStyle({
    root: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },

    hero: {
      paddingBottom: 60,
    },

    heroText: {
      fontSize: 40,
      fontWeight: '200',
      textAlign: 'center',
    },

    heroFullScreen: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 'calc(100vh - 78px)',
    }
  }),
)

const Component = ({ title, teaser, hero, isFullScreen, styles, config, children }) => (
  <BackgroundGradient
    start="rgb(255, 255, 255)"
    end="rgb(235, 228, 224)"
    style={ [styles.root] }
  >
    <Hero { ...hero }>
      <Masterbar darkContrast={ hero && hero.dark } />
      <Container style={ [styles.hero, isFullScreen && styles.heroFullScreen] }>
        <Head><title>{ title }</title></Head>
        <Text style={ styles.heroText}>{ title }</Text>
        { teaser && <Teaser text={ teaser } config={ config } />}
        { children && <View>{ children }</View> }
      </Container>
    </Hero>
  </BackgroundGradient>
)

export const Header = HOC(Component)
