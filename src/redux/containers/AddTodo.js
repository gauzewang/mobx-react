import { connect } from 'react-redux'
import { addTodo } from '../actions'
import AddTodoForm from '../components/AddTodoForm'

const mapDispatchToProps = dispatch => {
  return {
    submitData: inputValue => {
      inputValue.trim() && dispatch(addTodo(inputValue))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(AddTodoForm)
