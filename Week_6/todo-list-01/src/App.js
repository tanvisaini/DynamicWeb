import {useState} from 'react'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

export default function App() {
  const [todos, setTodos] = useState([])

  const createTodo = (title) => {
    //do not update existing objects, instead create a copy and update instead 
    const updatedTodos = [
      ...todos,
      {id: Math.round(Math.random() * 100000),title: title}
    ]
    setTodos(updatedTodos)
    console.log(todos)
  }

  const deleteTodoById = (id) => {
    //filter method does not mutate an existing array, it returns a whole new one
    const updatedTodos = todos.filter((todo) => {
      //if true, keep the todo aka return it in the new filtered array 
      return todo.id !== id
    })
    setTodos(updatedTodos)
  }

  const editTodobyId = (id, newTitle) => {
    const updatedTodos = todos.map((todo) => {
      //if the current todo matches the given id, we want to edit it 
      if(todo.id == id){
        return {...todo, title: newTitle}
      }
      //else just return other todos as they are
      return todo
    })
  }

  return (
    <div>
      {todos.length}
      <TodoCreate onCreate={createTodo}/>
      <TodoList todos={todos} onDelete={deleteTodoById} onEdit={editTodobyId}/>
    </div>
  );
}

