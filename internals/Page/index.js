import React from 'react'
import { branch, compose, mapProps, renderComponent, setDisplayName } from 'recompose'

import { ActivityIndicator } from '../ActivityIndicator'
import { MarkdownGenerated } from '../MarkdownGenerated'

import { PageError } from './Error'

export const Page = compose(branch(
  ({ hasError }) => hasError,
  renderComponent(PageError),
  renderComponent(Component),
))

const Component = props => (
  <MarkdownGenerated body={ props.page.node.body } />
)
