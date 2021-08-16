import React, {useRef} from 'react';
import '../02-useEffect/useEffect.css'

const FocusScreen = () => {
    
    const inputRef = useRef();
    
    const handleClick = () =>{
        inputRef.current.select();
    }

    return ( 
        <>
        <h1>FocusScreen</h1>
        <hr></hr>
                
          <input type="text"
                 ref = {inputRef}
                 className="form-control"
                 name=""                 
                 aria-describedby="helpId" 
                 placeholder=""/>          
        <button type="button" onClick = {handleClick} className="btn btn-primary mt-2">Click</button>
        </>      
    );
}
 
export default FocusScreen;