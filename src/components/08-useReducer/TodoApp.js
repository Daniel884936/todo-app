import { useEffect, useReducer } from 'react';
import './style.css'
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';
import { todoReducer } from './todoReducer';


const TodoApp = () => {


    const init = () => JSON.parse(localStorage.getItem('todos')) || [];

    const [todos, dispatch] =  useReducer(todoReducer,[],init);


    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos))
    },[todos])


    const handleDelete  = (todoId)=>{      
        const action = {
            payload : todos.find(todo => todo.id === todoId),
            type: 'delete'
        }
        dispatch(action)
    }

    const handleToggle = (todoId)=>{

        dispatch({
            payload : todos.find(todo => todo.id === todoId),
            type: 'toggle'
        })
    }

    const handdleAdd = (todo)=>{
        const action = {
            payload : todo,
            type: 'add'
        }
        dispatch(action)
    }

    return (
    <div>
        <h1>Todo App</h1>
        <hr />

       <div className="row">
           <div className="col-7">
            <TodoList 
                    todos = {todos} 
                    handleDelete = {handleDelete} 
                    handleToggle = {handleToggle}/>
           </div>

           <div className="col">
               <TodoAdd handleAdd = {handdleAdd}/>
           </div>

       </div>
    </div> 
     );
}
 
export default TodoApp;