import { useForm } from "../../hooks/useForm";

const TodoAdd = ({handleAdd}) => {
    
    const [{description}, handleInputChange, reset] = useForm({
        description: ''
    })

    const handleSubmit = (e) =>{        
        e.preventDefault();

        if(description.length < 1) return;
            const todo =  {
                id: new Date().getTime(),
                desc: description, 
                done: false
            }
        handleAdd(todo)
        reset();
    }

    return ( 
    <>
    <h4>Agrer TODO</h4>
               <hr/>
               <form onSubmit = {handleSubmit}>
                   <input
                        onChange = {handleInputChange} 
                        value = {description}
                        type="text"
                        name="description"
                        className="form-control"
                        placeholder="Aprender..."
                        autoComplete="off"/>

                        <button 
                             type="submit"
                             className="btn btn-outline-primary btn-block mt-1">Agregar
                        </button>
               </form>
    </> 
    );    
}
 
export default TodoAdd;