import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ todo }) => (
  <li>
    <input
      type='checkbox'
      checked={todo.completed}
      onClick={todo.toggleTodo}
    />
    {todo.text}
  </li>
)

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    toggleTodo: PropTypes.func.isRequired
  }).isRequired
}

export default Todo
