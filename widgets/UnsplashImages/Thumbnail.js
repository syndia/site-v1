import React from 'react'
import { compose, mapProps, setDisplayName } from 'recompose'
import { Image } from 'react-primitives'

import withStyle from '../../helpers/withStyle'

import { createUnsplashThumbnail } from './utilities'

const HOC = compose(
  setDisplayName('UnsplashThumbnail'),

  withStyle({
    root: {
      width: 'auto',
      height: 150,
    }
  }),

  mapProps(({ id, orientation, ...rest }) => ({
    ...rest,
    source: id && createUnsplashThumbnail(id, orientation),
  }))
)

const Component = ({ source, styles }) => (
  <Image source={ source } style={ styles.root } />
)

export default HOC(Component)
