import React from 'react'
import { compose, setDisplayName } from 'recompose'
import { BodyRenderer } from '@phenomic/preset-react-app/lib/client'

require('./index.css')

const HOC = compose(
  setDisplayName('MarkdownGenerated'),
)

const Component = ({ body }) => (
  <div className="phenomic-Markdown">
    <BodyRenderer>{ body }</BodyRenderer>
  </div>
)

export const MarkdownGenerated = HOC(Component)
