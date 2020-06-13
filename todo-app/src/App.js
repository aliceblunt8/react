import React from 'react';
import TodoList from './Todo/TodoList'
import Context from './context'

function App() {

  const [todos, setTodos] = React.useState([
    {id: 1, completed: false, title: 'buy bread'},
    {id: 2, completed: false, title: 'do workout'},
    {id: 3, completed: false, title: 'buy cream'},
  ])


  function toggleTodo(id) {
   setTodos(
     todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
      return todo
    })
   )
   
  // console.log('todo id', id)
  }

  return (
    <div className="wrapper">
      <h1>Todo List</h1>
      <TodoList todos={todos} onToggle={toggleTodo}/>
    </div>
  )
}

export default App;
