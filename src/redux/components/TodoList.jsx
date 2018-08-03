import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, unfinishedTodoCount, onTodoClick }) => (
  <div>
    <hr />
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
      ))}
    </ul>
    Tasks left: {unfinishedTodoCount}
  </div>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  unfinishedTodoCount: PropTypes.number.isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList
