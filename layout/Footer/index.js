import React from 'react'
import { compose, setDisplayName } from 'recompose'
import { View, Text } from 'react-primitives'

import withStyle from '../../helpers/withStyle'

import Link from '../../internals/Link'

const HOC = compose(
  setDisplayName('LayoutFooter'),

  withStyle({
    root: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
    },

    text: {
      fontSize: 13,
      textDecorationLine: 'none',
      letterSpacing: 1,
      color: '#333',
      opacity: .6,
    },

    link: {
      textDecorationLine: 'none',
    },
  }),
)

const Component = ({ styles }) => (
  <View style={ styles.root }>
    <Text style={ styles.text }>
      { "Website by "}
    </Text>
    <Link href="https://www.syndia.nl" style={ styles.link }>
      <Text style={ styles.text }>{ "Syndia.nl" }</Text>
    </Link>
    <Text style={ styles.text }>
      { " Made with " }
      <span>{ "♥" }</span>
      { " and " }
    </Text>
    <Link href="https://phenomic.io" style={ styles.link }>
      <Text style={ styles.text }>{ "<Phenomic />" }</Text>
    </Link>
  </View>
)

export const Footer = HOC(Component)
