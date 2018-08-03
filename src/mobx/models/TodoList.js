import { observable, computed, action } from 'mobx'

import Todo from './Todo'

export default class TodoList {
  @observable todos = []

  constructor (todoTexts = []) {
    todoTexts.map(todoText => {
      this.todos.push(new Todo(todoText))
    })
  }
  
  @computed get unfinishedTodoCount () {
    return this.todos.filter(todo => !todo.completed).length
  }

  @action.bound
  addTodo (text) {
    this.todos.push(new Todo(text))
  }
}
