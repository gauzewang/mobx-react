import React, { Component } from 'react'
import { Provider, observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'

import TodoList from './components/TodoList'
import AddTodoForm from './components/AddTodoForm'
import TodoListModel from './models/TodoList'

@observer
export default class Mobx extends Component {
  constructor (props) {
    super(props)
    this.store = TodoListModel.create()
  }

  render () {
    const store = this.store

    return (
      <Provider store={store}>
        <div>
          <h1>MobX-state-tree</h1>
          <DevTools />
          <AddTodoForm />
          <TodoList todos={store.todos} unfinishedTodoCount={store.unfinishedTodoCount} />
        </div>
      </Provider>
    )
  }
}
