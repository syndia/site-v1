import { parse } from 'date-fns'

export const DATE = 'dddd D MMMM YYYY'
export const DATETIME = 'dddd D MMM YYYY HH:mm'
export const TIME = 'HH:mm'

export const setUTFOffset = (date, offset) => {
  date = parse(date)
  return date.setHours(date.getHours() + date.getTimezoneOffset() / 60 + offset)
}
