import React from 'react'
import PropTypes from 'prop-types'

let AddTodoForm = ({ submitData }) => {
  let input

  return (
    <form onSubmit={e => {
      e.preventDefault()
      submitData(input.value)
      input.value = ''
    }}>
      New Todo:
      <input
        ref={node => { input = node }}
        type='text'
      />
      <button type='submit'>Add</button>
    </form>
  )
}

AddTodoForm.propTypes = {
  submitData: PropTypes.func.isRequired
}

export default AddTodoForm
