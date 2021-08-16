import { useState } from "react";
import './counter.css'

const CounterApp = () => {

    const [state, setCounter] = useState({
        counter1 : 0,
        counter2 : 10,
        counter3 : 20,
        counter4 : 30,
        counter5 : 40,
    });

    const {counter1} = state;
    return (        
    <>
    <h1>{counter1}</h1>

    <button 
            className="btn btn-primary"
            onClick={()=>{
                setCounter({
                    ...state,
                    counter1: counter1 + 1 
                })
            }}
            >
                +1
    </button>
    </> );
}
 
export default CounterApp;