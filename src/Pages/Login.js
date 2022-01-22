import React, { useContext } from 'react'
import LoginForm from '../Components/LoginForm'
import User from './User'
import AuthContext from '../Store/AuthContext'
import style from './Css/Login.module.css'
export default function Login() {

  const authctx = useContext(AuthContext)
  const isLoggedIn = authctx.isLogIn;

  return (
    <main className={style.main}>
      {
        !isLoggedIn && <LoginForm />
      }
      {
        isLoggedIn && <User />
      }
    </main>
  )
}
