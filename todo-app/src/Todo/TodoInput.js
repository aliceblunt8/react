import React, {useState} from 'react';
import PropTypes from 'prop-types'


function TodoInput ({ onCreate }) {

  const [value, setValue] = useState('')

  function submitHandler (event) {
    event.preventDefault()

    if(value.trim()) {
      onCreate(value)
      setValue('')
    }
  }

  return (
    <form style={{marginBottom: '1rem'}} onSubmit={submitHandler}>
      <input value={value} onChange={event => setValue(event.target.value)}/>
      <button>Add todo</button>
    </form>
  )

}

TodoInput.propTypes = {
  onCreate: PropTypes.func.isRequired
}

export default TodoInput