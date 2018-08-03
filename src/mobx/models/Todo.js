import { observable, action } from 'mobx'
import uuid from 'node-uuid'

export default class Todo {
  @observable completed = false
  @observable text = ''

  constructor (text, id = uuid.v4(), completed = false) {
    this.text = text
    this.id = id
    this.completed = completed
  }

  @action.bound
  toggleTodo () {
    this.completed = !this.completed
  }
}
