import { Provider } from 'react-redux'
import React, { Component } from 'react'

import AsyncApp from './AsyncApp'
import configureStore from '../configureStore'

const store = configureStore()

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <AsyncApp />
      </Provider>
    )
  }
}
