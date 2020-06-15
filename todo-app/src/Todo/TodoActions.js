import React from 'react';

function TodoActions (props) {
 
  return (
    <div className="filter" onClick={event => props.clickHandler(event)}>
      <button className="all">All</button>
      <button className="active">Active</button>
      <button className="completed">Completed</button>
      <button className="clear">Clear</button>
    </div>
  )
}

export default TodoActions