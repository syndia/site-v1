import { createContainer, query } from '@phenomic/preset-react-app/lib/client'

import { Page } from './index'

export const Post  = createContainer(Page, props => ({
  page: query({ collection: 'posts', id: props.params.splat })
}))
