import {useEffect,useContext} from 'react'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'
import TodosContext from './context/todos'

export default function App() {
  const {fetchTodos} = useContext(TodosContext)

  useEffect(() => {
    fetchTodos()
  },[fetchTodos]) //should rerender whenever theres something new in the todo 

  return (
    <div>
      <TodoCreate />
      <TodoList />
    </div>
  );
}

