import React from 'react'
import { compose, setDisplayName } from 'recompose'
import { Text, View } from 'react-primitives'

import withStyle from '../../helpers/withStyle'

import Link from '../../internals/Link'
import SocialItem from '../../internals/Social/Item'

import { version } from '../../package.json'

const HOC = compose(
  setDisplayName('Masterbar'),

  withStyle({
    root: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      paddingVertical: 10,
    },

    text: {
      fontSize: 30,
      fontWeight: '700',
      textDecorationLine: 'none',
    },

    brand: {
      flexDirection: 'row',
      flexGrow: 1,
      alignItems: 'baseline',
      justifyContent: 'flex-start',
      paddingVertical: 10,
    },

    version: {
      marginLeft: 8,
      fontSize: 12,
      textDecorationLine: 'none',
      color: '#333',
      opacity: .6,
    },

    navigation: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
      maxWidth: '100%',
      paddingVertical: 10,
    },

    link: {
      textDecorationLine: 'none',
      padding: 10,
    },

    linkActive: {
      backgroundColor: 'rgba(0, 0, 0, .1)',
    },

    linkText: {
       color: '#333',
       textDecorationLine: 'none',
    },

    linkBold: {
      fontWeight: '700',
    },

    colorWhite: {
      color: 'white',
    },

    pipe: {
      fontSize: 20,
      fontWeight: '200',
      opacity: .2,
    },
  }),
)

const Component = ({ darkContrast, styles }) => (
  <View style={ styles.root }>
    <View style={ styles.brand }>
      <Link to="/" style={ styles.text }>
        <Text style={ [styles.linkText, darkContrast && styles.colorWhite]}>
          { "Syndia.nl" }
        </Text>
      </Link>
      <Link href="https://github.com/syndia/site-v1/releases" style={ styles.version }>
        <Text style={ [styles.linkText, darkContrast && styles.colorWhite] }>
          { `v${ version }` }
        </Text>
      </Link>
    </View>
    <View style={ styles.navigation }>
      <Link to="/blog" style={ styles.link } activeStyle={ styles.linkActive }>
        <Text style={ [styles.linkText, darkContrast && styles.colorWhite] }>
          { "Blog" }
        </Text>
      </Link>
      <Link to="/showcase" style={ styles.link } activeStyle={ styles.linkActive }>
        <Text style={ [styles.linkText, styles.linkBold, darkContrast && styles.colorWhite] }>
          { "Portfolio" }
        </Text>
      </Link>
      <Text style={styles.pipe}>{" | "}</Text>
      <SocialItem link="https://twitter.com/syndianl" showName style={ styles.link } textStyle={ [styles.linkText, darkContrast && styles.colorWhite] } />
      <SocialItem link="https://linkedin.com/syndia" showName style={ styles.link } textStyle={ [styles.linkText, darkContrast && styles.colorWhite] } />
      <SocialItem link="https://github.com/syndia" showName style={ styles.link } textStyle={ [styles.linkText, darkContrast && styles.colorWhite] } />
    </View>
  </View>
)

export default HOC(Component)
