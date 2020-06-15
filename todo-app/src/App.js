import React from 'react';
import TodoList from './Todo/TodoList'
import Context from './context'
import TodoInput from './Todo/TodoInput';
import TodoActions from './Todo/TodoActions';

function App() {

  const [todos, setTodos] = React.useState([
    {id: 1, completed: true, title: 'buy ice-cream'},
    {id: 2, completed: false, title: 'do workout'},
    {id: 3, completed: false, title: 'watch film'},
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
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo (title) {
    setTodos(
      todos.concat([
      { 
        title,
        id: Date.now(),
        completed: false,
      }
    ])
   )
  }

  function onBtnClick (event) { 
    let btnClass = event.target.className;
    let todosList = Array.from(todos);
    
   if (btnClass === 'all') {
      // console.log(1, todos);
      // console.log(2, todosList);
      setTodos(todosList) //??? should set state to initial state with copy of todos
    }

   if (btnClass === 'active') {
     let activeItems = todos.filter(todo => todo.completed === false)
     setTodos(activeItems)
    }

  if (btnClass === 'completed') {
     let doneItems = todos.filter(todo => todo.completed === true)
     setTodos(doneItems)
    }

   if (btnClass === 'clear') {
    setTodos(todos.filter(todo => todo.completed !== true))
  }
}

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>Todo List</h1>
        <TodoInput onCreate={addTodo}/>
          {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo}/>
          ) : (
          <p>no todos!</p>
          )}
          <TodoActions todos={todos} clickHandler={onBtnClick}/>
      </div>
    </Context.Provider>
  )
}

export default App;
