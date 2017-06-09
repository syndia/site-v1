import React from 'react'
import { branch, compose, renderComponent } from 'recompose'

const Spinner = () => (<div>{ "Loading..." }</div>)

export default compose(
  branch(
    ({ isLoading }) => isLoading,
    renderComponent(Spinner)
  )
)
