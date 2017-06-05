import React from 'react'
import { compose, setDisplayName } from 'recompose'
import { BodyRenderer } from '@phenomic/preset-react-app/lib/client'

const HOC = compose(
  setDisplayName('MarkdownGenerated'),
)

const Component = ({ body }) => (
  <BodyRenderer>{ body }</BodyRenderer>
)

export const MarkdownGenerated = HOC(Component)
