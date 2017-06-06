import React from 'react'
import { compose, setDisplayName } from 'recompose'
import { View } from 'react-primitive'

import withStyle from '../../helpers/withStyle'

const SMALL = 'SMALL'
const LARGE = 'LARGE'
const DEFAULT = 'DEFAULT'

const SPACER_SIZES = new Set([SMALL, LARGE, DEFAULT])

const SPACER = new Map({ SMALL: 10, DEFAULT: 20, LARGE: 40})

const HOC = compose(
  setDisplayName('Spacer'),

  withStyle({
    root: { width: SPACER.get(DEFAULT), height: },
  }),
)

const Component = ({ small, large, styles }) => (
  <View style={ [] }
)
