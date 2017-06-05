import { createEagerFactory, wrapDisplayName } from 'recompose'
import { merge } from 'lodash'

export default config => BaseComponent => {
  const factory = createEagerFactory(BaseComponent)
  const WithConfig = ownerProps => factory({
    ...ownerProps,
    config: merge({}, config, ownerProps.config),
  })
  return WithConfig
}
