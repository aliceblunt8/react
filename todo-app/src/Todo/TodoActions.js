import React from 'react';

function TodoActions ({ setBtnFilter, clearBtn}) {
 
  return (
    <div className="filter">
      <button onClick={() => setBtnFilter('all')} className="all">All</button>
      <button onClick={() => setBtnFilter('active')} className="active">Active</button>
      <button onClick={() => setBtnFilter('completed')} className="completed">Completed</button>
      <button onClick={() => clearBtn()} className="clear">Clear</button>
    </div>
  )
}

export default TodoActions