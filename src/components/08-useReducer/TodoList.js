import TodItem from "./TodoItem";

const TodoList = ({todos,handleToggle,handleDelete }) => {

    return ( 

    <ul className="list-group list-group-flush">
                {
                    todos.map((todo, i) =>( 
                    <TodItem 
                            key={todo.id}
                            todo = {todo}
                            index = {i}
                            handleDelete = {handleDelete}
                            handleToggle = {handleToggle} />
                    ))
                }           
            </ul>
     );
}
 
export default TodoList;