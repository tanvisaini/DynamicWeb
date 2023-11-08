import {useState, createContext, useCallback} from 'react'
import axios from 'axios'
//use create context to create our context for our todos 

const TodosContext = createContext()

function Provider({children}){
    const [todos, setTodos] = useState([])

    const fetchTodos = useCallback(async() => {
        const response = await axios.get('http://localhost:3001/todos')
        setTodos(response.data)
    }, [])

    const createTodo = async (title) => {
        const response = await axios.post('http://localhost:3001/todos', {
          title: title,
        })
      
        
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
        console.log(response)
        setTodos(updatedTodos)
    }

    const editTodobyId = async(id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/todos/${id}`, {
          title: newTitle
        })
        const updatedTodos = todos.map((todo) => {
          //if the current todo matches the given id, we want to edit it 
          if(todo.id === id){
            return {...todo, ...response.data}
          }
          //else just return other todos as they are
          return todo
        })
        console.log(updatedTodos)
    }

    const valuesToShare = {
        todos,
        fetchTodos,
        createTodo,
        editTodobyId,
        deleteTodoById,
    }

    return <TodosContext.Provider value={valuesToShare}>{children}</TodosContext.Provider>
}

//exporting it
export default TodosContext
export {Provider} 