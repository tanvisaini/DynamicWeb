import {useState} from 'react'

export default function TodoEdit(props){
    const {todo, onSubmit} = props
    const [title, setTitle] = useState(todo.title)

    const handleSubmit = (event) => {
        event.preventDefault()
        //we want the title from state not from our todo.title
        onSubmit(todo.id, title)
    }

    const handleChange = (event) =>{
        setTitle(event.target.value)
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label> Title </label>
                <input  onChange={handleChange} />
                <button>Update</button>
            </form>
        </div>

    );
}