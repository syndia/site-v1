import React from 'react'
import { compose, mapProps, setDisplayName } from 'recompose'
import { Image, Text, View } from 'react-primitives'

import withStyle from '../../helpers/withStyle'

import { createUnsplashSource } from '../../widgets/UnsplashImages/utilities'

const HOC = compose(
  setDisplayName('Hero'),

  withStyle({
    root: {
    },

    dark: {
      color: 'white',
    },

    image: {
      opacity: 0.9,
    }
  }),

  mapProps(({ id, ...rest }) => {
    let source

    if (id) {
      source = createUnsplashSource(id)
    }

    return {
      ...rest,
      source: source,
    }
  }),
)

const Component = ({ source, styles, children, ...rest }) => (
  <View style={ styles.root }>
    <Image source={ source } style={ styles.image }>
      <Text style={ rest.dark && styles.dark }>
        { children }
      </Text>
    </Image>
  </View>
)

export default HOC(Component)
