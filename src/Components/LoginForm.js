import axios from 'axios'
import React, { useState, useRef, useContext } from 'react'
import style from './LoginForm.module.css'
import Modal from '../Components/Modal'
import AuthContext from '../Store/AuthContext'

export default function LoginForm() {
  const authctx = useContext(AuthContext)
  const nameRef = useRef('')
  const emailRef = useRef('')
  const adddressRef = useRef('')
  const ageRef = useRef('')
  const numberRef = useRef('')
  const passwordRef = useRef('')
  const [error, setError] = useState(false)
  const [newUser, setNewUser] = useState(false)
  const [message, setMessage] = useState('')
  const userHandler = (e) => {
    e.preventDefault()
    setNewUser(!newUser)
  }
  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      if (newUser) {
        console.log(nameRef.current.value, emailRef.current.value, ageRef.current.value, adddressRef.current.value, passwordRef.current.value)
        const { data } = await axios.post('https://fierce-hollows-14162.herokuapp.com/user', {
          name: nameRef.current.value, email: emailRef.current.value, number: numberRef.current.value, address: adddressRef.current.value, password: passwordRef.current.value
        })
        setError(true)
        setMessage('Signed up Successfully')
        authctx.login(data[1].token)
      } else {
        console.log(emailRef.current.value, passwordRef.current.value)
        const { data } = await axios.post('https://fierce-hollows-14162.herokuapp.com/user/login', {
          email: emailRef.current.value, password: passwordRef.current.value
        })
        console.log(data);
        authctx.login(data.token)
      }
    } catch (error) {
      setError(true)
      setMessage('Unable to Login')
      console.log(error)
    }

  }

  return (
    <section className={style.main}>
      <span onClick={() => {
        setError(false)
      }}>

        {error && <Modal title={'Login Status'} message={message} />}
      </span>
      <div className={style.btncontainer}>
        <button className={style.btn} onClick={userHandler}>{newUser ? 'CREATE ACCOUNT' : 'LOGIN'}</button>
      </div>
      {newUser && <form className={style.form} onSubmit={submitHandler} >
        <input type="text" ref={nameRef} placeholder='NAME' required />
        <input type="text" ref={ageRef} placeholder='AGE' required />
        <input type="text" ref={adddressRef} placeholder='ADDRESS' required />
        <input type="email" ref={emailRef} placeholder='EMAIL' required />
        <input type="number" ref={numberRef} placeholder='CONTACT NUMBER' required />
        <input type="password" placeholder='PASSWORD' required />
        <input type="password" ref={passwordRef} placeholder='CONFIRM PASSWORD' required />
        <button className={style.btn} type='submit'>SUBMIT</button>
      </form>}
      {!newUser && <form className={style.form} onSubmit={submitHandler}>

        <input type="email" ref={emailRef} placeholder='EMAIL' required />
        <input type="password" ref={passwordRef} placeholder='PASSWORD' required />
        <button className={style.btn} type='submit'>SUBMIT</button>
      </form>}
    </section>
  )
}
