import React from 'react'
import { compose, setDisplayName, withProps } from 'recompose'
import { format as formatDate, parse } from 'date-fns'
import nlLocale from 'date-fns/locale/nl'

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
