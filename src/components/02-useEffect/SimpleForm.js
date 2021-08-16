import React, { useEffect, useState } from "react";
import './useEffect.css'

const SimpleForm = () => {

    const [formState, setFormState] =    useState({
        name: '',
        email: ''
    })
    
    const {name, email} = formState;

    useEffect(()=>{
        console.log(name)
    }, [name])

    useEffect(()=>{
        console.log(email)
    }, [email])


    const handleInputChange = ({target})=>{
        setFormState({
            ...formState,
            [target.name] : target.value
        })
    }

    return ( 
    <>
    <form>
        <div className="form-group">
          <input 
                type="text" 
                name="name" 
                value = {name}
                onChange={handleInputChange}
                className="form-control" 
                placeholder="Daniel" 
                aria-describedby="helpId"/>
        </div>

        <div className="form-group">
          <input 
                type="text" 
                name="email" 
                onChange={handleInputChange}
                value = {email} 
                className="form-control" 
                placeholder="daniel@gmail.com" 
                aria-describedby="helpId"/>
        </div>
    </form>
    </> );
}
 
export default SimpleForm;