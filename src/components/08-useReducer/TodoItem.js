const TodItem = ({ todo,index,handleToggle,handleDelete }) => {
    
    return (     
        <li 
            className="list-group-item">
                              <p 
                                className={`${todo.done && 'complete'}`}
                                onClick = {()=>{
                                    handleToggle(todo.id)
                                }}
                                    >{index + 1}. {todo.desc}</p>
                            <button 
                                    className="btn btn-danger"
                                    onClick = {()=>{
                                        handleDelete(todo.id)
                                    }}
                                    >Borrar</button>
        </li>
     );
}
 
export default TodItem;