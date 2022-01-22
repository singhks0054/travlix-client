import React, { useState } from "react";

const AuthContext = React.createContext({
  token: '',
  isLogIn: true,
  login: (token) => { },
  logout: () => { }
})

export const AuthContextProvider = (props) => {

  const initialState = localStorage.getItem('token')
  const [token, setToken] = useState(initialState)
  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token)
    localStorage.setItem('token', token)
  }
  const logoutHandler = () => {
    setToken(null)
    console.log('object')
    localStorage.removeItem(token)
  }

  const contextValue = {
    token: token,
    isLogIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler

  }
  return (<AuthContext.Provider value={contextValue}>
    {props.children}
  </AuthContext.Provider>)

}
export default AuthContext;