import {useState} from 'react'
import {useEffect} from 'react'
import axios from 'axios'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

export default function App() {
  const [todos, setTodos] = useState([])

  const fetchTodos = async() => {
    const response = await axios.get('http://localhost:3001/todos')

    setTodos(response.data)
  }

  useEffect(() => {
    fetchTodos()
  },[])

  const createTodo = async (title) => {
    const response = await axios.post('http://localhost:3001/todos', {
      title: title,
    })
  
    // console.log(response)
    const updatedTodos = [...todos, response.data]
    setTodos(updatedTodos)
    console.log(todos)
  }

  const deleteTodoById = async(id) => {
    const response = await axios.delete(`http://localhost:3001/todos/${id}`)
    //filter method does not mutate an existing array, it returns a whole new one
    const updatedTodos = todos.filter((todo) => {
      //if true, keep the todo aka return it in the new filtered array 
      return todo.id !== id
    })
    setTodos(updatedTodos)
  }

  const editTodobyId = async(id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/todos/${id}`, {
      title: newTitle
    })
    const updatedTodos = todos.map((todo) => {
      //if the current todo matches the given id, we want to edit it 
      if(todo.id == id){
        return {...todo, ...response.data}
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

