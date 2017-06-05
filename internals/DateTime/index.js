import { parse, startOfDay } from 'date-fns'

import { DATE, DATETIME, TIME } from './utilities'
import { createTime } from './Time'

const dateTimeFormatGetter = date => {
  date = parse(date)
  if (startOfDay(date).getTime() === date.getTime())
    return DATE

  return DATETIME
}

export { Relative } from './Time'
export const Time = createTime('Time', TIME)
export const DateTime = createTime('DateTime', dateTimeFormatGetter)
export const Day = createTime('Day', 'dddd')
export const DateComponent = createTime('Date', DATE)
