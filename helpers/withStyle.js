import { createEagerFactory, wrapDisplayName } from 'recompose'
import { StyleSheet } from 'react-primitives'

export default styles => BaseComponent => {
  const factory = createEagerFactory(BaseComponent)
  const WithStyle = ownerProps => factory({
    ...ownerProps,
    styles: StyleSheet.create({ ...styles }),
  })
  return WithStyle
}
