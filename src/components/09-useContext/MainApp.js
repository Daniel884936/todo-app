import React from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContex'

export const MainApp = () => {
    const user = {
        id: 123,
        name: 'Erick Tejada',
        email: 'tejadadaniel@gmial.com'
    }

    return (
        <UserContext.Provider value = {user}>
             <AppRouter/>  
        </UserContext.Provider>
            
    )
}
