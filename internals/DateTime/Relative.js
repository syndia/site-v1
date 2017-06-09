import React from 'react'
import { distanceInWordsToNow } from 'date-fns'
import nlLocale from 'date-fns/locale/nl'

const DEFAULT_OPTIONS = {
  addSuffix: true,
  locale: nlLocale,
}

export const Relative = ({ value = new Date(), children, options = DEFAULT_OPTIONS }) => (
  <time dateTime={ value.toISOString() }>
    { children || distanceInWordsToNow(value, options) }
  </time>
)
