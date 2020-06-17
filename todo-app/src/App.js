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

  let [filterBy, setFilterBy] = React.useState('all')

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

  // add filter(class) to this.state.filterBy
  function setFilter (filter) {
    // console.log(event.target.className)
    return setFilterBy(filter)
  }

  //filter todos by filter aka class, return NEW array (state WON'T BE changed)
  function filterTodos () {
    switch(filterBy) {
      case 'active': {
        return todos.filter(todo => !todo.completed)
      }
      case 'completed': {
        return todos.filter(todo => todo.completed)
      }
      default: return todos
    }
  }

  //filter todos (state WILL BE changed)
  function clearTodos () {
    return setTodos(
      todos.filter(todo => !todo.completed)
    )
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>Todo List</h1>
        <TodoInput onCreate={addTodo}/>
          {todos.length ? (
          <TodoList todos={filterTodos(todos)} onToggle={toggleTodo}/>
          ) : (
          <p>no todos!</p>
          )}
          <TodoActions todos={todos} setBtnFilter={setFilter} clearBtn={clearTodos}/>
      </div>
    </Context.Provider>
  )
}

export default App;
