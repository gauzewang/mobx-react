import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import todoApp from './reducers'

import ListTodo from './containers/ListTodo'
import AddTodo from './containers/AddTodo'

export default class Redux extends Component {
  constructor (props) {
    super(props)

    this.store = createStore(
      todoApp,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  }

  render () {
    const store = this.store

    return (
      <Provider store={store}>
        <div>
          <h1>Redux</h1>
          <AddTodo />
          <ListTodo />
        </div>
      </Provider>
    )
  }
}
