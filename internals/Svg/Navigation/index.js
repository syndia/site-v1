import React from 'react'
import { compose, setDisplayName } from 'recompose'
import { View } from 'react-primitives'

import withStyle from '../../../helpers/withStyle'

const HOC = compose(
  setDisplayName('SvgSideNavigation'),

  withStyle({
    root: {
      position: 'fixed',
      top: 200,
      right: 20,
    },
  })
)

const Component = ({ style, styles }) => (
  <View style={ [style, styles.root] }>
    <svg
      id="navigation"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 27.2 128.4" style={ { width: '2.4rem', fontSize: '1rem', opacity: 1 } }
    >
      <g id="top-side-navigation">
        <circle cx="14.1" cy="13.2" r="12.7" fill="#000" stroke="#231f20" strokeMiterlimit="10" opacity="0.07" />
      </g>
    </svg>
  </View>
)

export default HOC(Component)
