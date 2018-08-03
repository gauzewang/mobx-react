import { types } from 'mobx-state-tree'
import uuid from 'node-uuid'

import Todo from './Todo'

export default types
  .model('TodoList', {
    todos: types.array(Todo)
  })
  .views(self => {
    return {
      get unfinishedTodoCount () {
        return self.todos.filter(todo => !todo.completed).length
      }
    }
  })
  .actions(self => {
    return {
      addTodo (text) {
        self.todos.push({
          text,
          id: uuid.v4()
        })
      }
    }
  })
