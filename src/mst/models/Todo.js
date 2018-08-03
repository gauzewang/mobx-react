import { types } from 'mobx-state-tree'

export default types
  .model('Todo', {
    id: types.identifier,
    completed: false,
    text: types.string
  })
  .actions(self => {
    return {
      toggleTodo () {
        self.completed = !self.completed
      }
    }
  })
