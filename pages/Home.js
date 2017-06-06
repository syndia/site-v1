import React from 'react'
import { compose, setDisplayName } from 'recompose'
import { Image, Text, View } from 'react-primitives'

import withStyle from '../helpers/withStyle'

import Layout, { Header, Footer } from '../layout'
import Container from '../internals/Container'

const HOC = compose(
  setDisplayName('Homepage'),

  withStyle({
    root: {},

    row: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 60,
    },

    box: {
      width: '50%',
      flexShrink: 1,
      minWidth: 250,
      paddingVertical: 0,
    },

    left: {
      textAlign: 'left',
    },

    right: {
      textAlign: 'right',
    },
  }),
)

const Component = ({ styles }) => (
  <Layout>
    <Header
      title="I'm a web designer / developer..."
      teaser="...based in Dordrecht, The Netherlands. I have a passion for web design and love to create for web and mobile devices."
      isFullScreen
    />
    <Container style={ styles.root }>
      <Text style={ { fontSize: 40, fontWeight: '200', textAlign: 'center', padding: 60 } }>
        { "What I can do." }
      </Text>
      <View style={ styles.row }>
        <Image style={ styles.box } />
        <View style={ styles.box }>
          <Text style={ styles.left }>
            <h2>{ "Design what you want." }</h2>
            <p>{ "I like to keep it simple. My goals are to focus on typography, content and conveying the message that you want to send." }</p>
          </Text>
        </View>
      </View>
      <View style={ styles.row }>
       <View style={ styles.box }>
          <Text style={ styles.right }>
            <h2>{ "Develop what you need." }</h2>
            <p>{ "I'm a developer, so I know how to create your website to run across devices using the latest technologies available." }</p>
          </Text>
        </View>
        <Image style={ styles.box } />
      </View>

      <Text style={ { fontSize: 40, fontWeight: '200', textAlign: 'center', padding: 60 } }>
        { "I can help." }
      </Text>
      <View style={ styles.row }>
        <h2>{ "I’m currently available for freelance work." }</h2>
        <p style={ { textAlign: 'center' } }>{ "If you have a project that you want to get started, think you need my help with something or just fancy saying hey, then get in touch." }</p>
      </View>
    </Container>
    <Footer />
  </Layout>
)

export default HOC(Component)
