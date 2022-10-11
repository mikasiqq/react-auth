import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email, password) => {}
})

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const isUserLogged = localStorage.getItem('isLoggedIn')
        if (isUserLogged === '1') setIsLoggedIn(true)
        
      }, [])

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn')
        setIsLoggedIn(false)
    }
    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', '1')
        setIsLoggedIn(true)
    }

    return <AuthContext.Provider
        value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler}}
    >{props.children}</AuthContext.Provider>
}
export default AuthContext