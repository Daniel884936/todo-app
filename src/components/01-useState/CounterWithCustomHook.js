import useCounter from '../../hooks/useCounter';
import './counter.css'

const CounterWithCustomHook = () => {
    
    const {state, reset, increment, decrement} =  useCounter();
    return ( 
    <>
        <h1>{state}</h1>
        <button 
            type="button" 
            className="btn btn-primary"
            onClick = {increment}
        >+1
        </button>
        <button 
            type="button" 
            className="btn btn-primary ml-2"
            onClick = {decrement}
        >-1
        </button>
        <button 
            type="button" 
            className="btn btn-primary ml-2"
            onClick = {reset}
            >Reset            
        </button>
    </> );
}
 
export default CounterWithCustomHook;