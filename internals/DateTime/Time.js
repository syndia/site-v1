import React from 'react'
import { compose, setDisplayName, withProps } from 'recompose'
import { distanceInWordsToNow, format as formatDate, parse } from 'date-fns'
import nlLocale from 'date-fns/locale/nl'

const DEFAULT_OPTIONS = {
  addSuffix: true,
  locale: nlLocale,
}

const TimeComponent = ({ value = new Date(), format, children }) => {
  const date = parse(value)

  if (typeof format === 'function') {
    format = format(value)
  }

  return (
    <time dateTime={ formatDate(date) }>
      { children || formatDate(date, format, { locale: nlLocale }) }
    </time>
  )
}

export const createTime = (displayName, defaultFormat) => compose(
  setDisplayName(displayName),

  withProps(({ format }) => ({ format: format || defaultFormat })),
)(TimeComponent)

export const Relative = ({ value = new Date(), children, options = DEFAULT_OPTIONS }) => (
  <time dateTime={ value.toISOString() }>
    { children || distanceInWordsToNow(value, options) }
  </time>
)
