import React from 'react'
import { compose, lifecycle, mapProps, setDisplayName, withHandlers, withState } from 'recompose'
import { omit } from 'lodash'
import { View } from 'react-primitives'
import Head from 'react-helmet'

import Container from '../../internals/Container'

const SHORTNAME = 'shortname'
const IDENTIFIER = 'identifier'
const TITLE = 'title'
const URL = 'url'
const CATEGORY_ID = 'category_id'
const ON_NEW_COMMENT = 'onNewComment'

const DISQUS_URI = 'disqus.com'
const DISQUS_PREFIX = 'disqus_'
const DISQUS_CONFIG = new Set([CATEGORY_ID, IDENTIFIER, ON_NEW_COMMENT, SHORTNAME, TITLE,URL])

const CAN_USE_DOM = Boolean(
  typeof window !== 'undefined'
  && window.document
  && window.document.createElement
)

const copyProps = (context, props, prefix = '') => {
  Object.keys(props).forEach(prop => context[prefix + prop] = props[prop])

  if (typeof props.onNewComment === 'function') {
    context[`${ prefix }config`] = () => {
      this.callbacks.onNewComment = [comment => props.onNewComment(comment)]
    }
  }
}

const HOC = compose(
  setDisplayName('DisqusEmbed'),

  withState('disqusAdded', 'setDisqusAdded', false),

  withHandlers({
    loadDisqus: props => () => {
      const disqusProps = {}

      // extract Disqus props that were supplied to this component
      DISQUS_CONFIG.forEach(prop => {
        disqusProps[prop] = (Boolean(props[prop]) && props[prop])
      })

      if (CAN_USE_DOM) {
        // always set URL
        if (!props.url || !props.url.length) {
          disqusProps.url = window.location.href
        }

        // if Disqus has already been added, reset it
        if (typeof window.DISQUS !== 'undefined') {
          window.DISQUS.reset({
            reload: true,
            config: () => {
              copyProps(this.page, props)

              // Disqus needs hashbang URL, see https://help.disqus.com/customer/portal/articles/472107
              this.page.url = `${ this.page.url.replace(/#/, '') }#!newthread`
            }
          })
        } else {
          copyProps(window, props, DISQUS_PREFIX)
          props.setDisqusAdded(true)
        }
      }
    }
  }),

  lifecycle({
    componentDidMount() {
      this.props.loadDisqus()
    },

    componentDidUpdate() {
      this.props.loadDisqus()
    },
  }),

  mapProps(props => omit(props, ['setDisqusAdded'])),
)

const Component = ({ disqusAdded, shortname }) => (
  <View>
    { ! disqusAdded &&
      <Head
        script={ [{
          async: true,
          type: 'text/javascript',
          src: `//${ shortname }.${ DISQUS_URI }/embed.js`,
        }] }
      />
    }

    <Container>
      <div id="disqus_thread" />
    </Container>
  </View>
)

export default HOC(Component)
