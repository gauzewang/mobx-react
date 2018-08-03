import React, { Component }from 'react'
import { action } from 'mobx'
import { observer, inject } from 'mobx-react'

@inject('store')
@observer
export default class AddTodoForm extends Component {
  constructor (props) {
    super(props)
    this.newTodoTitle = null
  }

  render () {
    // functions
    const handleFormSubmit = this.handleFormSubmit

    return (
      <form onSubmit={handleFormSubmit}>
        New Todo:
        <input
          type='text'
          ref={ (ref) => {this.newTodoTitle = ref} }
        />
        <button type='submit'>Add</button>
      </form>
    )
  }

  @action.bound
  handleFormSubmit = e => {
    this.newTodoTitle.value.length > 0 && this.props.store.addTodo(this.newTodoTitle.value)
    this.newTodoTitle.value = ''
    e.preventDefault()
  }
}
