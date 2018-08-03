import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ completed, text, onClick }) => (
  <li>
    <input
      type='checkbox'
      checked={completed}
      onClick={onClick}
    />
    {text}
  </li>
)

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Todo
