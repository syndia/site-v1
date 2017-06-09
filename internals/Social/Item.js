import React from 'react'
import { compose, mapProps, onlyUpdateForKeys, setDisplayName } from 'recompose'
import { memoize } from 'lodash'
import { Text } from 'react-primitives'

import withConfig from '../../helpers/withConfig'
import Link from '../Link'

import * as Icons from './icons' // eslint-disable-line import/no-namespace
import { FACEBOOK, GITHUB, GOOGLE_PLUS, INSTAGRAM, LINKEDIN, TWITTER } from './providers'

const PROVIDER_REGEXP = new Map([
  [FACEBOOK, /facebook.com/],
  [GITHUB, /github.com/],
  [GOOGLE_PLUS, /plus.google.com/],
  [INSTAGRAM, /instagram.com/],
  [LINKEDIN, /linkedin.com/],
  [TWITTER, /twitter.com/],
])

const PROVIDER_NAMES = new Map([
  [FACEBOOK, 'Facebook'],
  [GITHUB, 'GitHub'],
  [GOOGLE_PLUS, 'Google Plus'],
  [INSTAGRAM, 'Instagram'],
  [LINKEDIN, 'LinkedIn'],
  [TWITTER, 'Twitter'],
])

const PROVIDER_ICONS = new Map([
  [FACEBOOK, <Icons.Facebook key="facebook-icon" />],
  [GITHUB, <Icons.GitHub key="github-icon" />],
  [GOOGLE_PLUS, <Icons.GooglePlus key="googleplus-icon" />],
  [LINKEDIN, <Icons.LinkedIn key="linkedin-icon" />],
  [TWITTER, <Icons.Twitter key="twitter-icon" />],
])

const getProvider = memoize(url => {
  for (const [provider, regex] of PROVIDER_REGEXP) {
    if (regex.test(url)) {
      return provider
    }
  }
  return null
})

const HOC = compose(
  setDisplayName('SocialItem'),

  withConfig({
    social: {
      i18n: {
        visitOn: 'Visit on',
      }
    }
  }),

  mapProps(({ config, ...rest }) => ({
    ...rest,
    config: { ...config.social },
  })),

  onlyUpdateForKeys('link'),
)

const Component = ({ link, title, showName, icon, config, style, textStyle, children, ...rest }) => {
  const provider = getProvider(link)
  const name = PROVIDER_NAMES.get(provider)

  if (!title) {
    title = `${ config.i18n.visitOn} ${ name }.`
  } else if (typeof title === 'function') {
    title = title(name)
  }

  return (
    <Link { ...rest } target="_blank" href={ link } title={ title } style={ style }>
      { icon && PROVIDER_ICONS.get(provider) }
      { children }
      { showName && <Text style={ textStyle }>{ name }</Text> }
    </Link>
  )
}

export default HOC(Component)
