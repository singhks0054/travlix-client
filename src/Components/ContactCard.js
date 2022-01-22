import React, { useRef, useState } from 'react'
import axios from 'axios'
import style from './ContactCard.module.css'
import Modal from './Modal'
export default function ContactCard() {
  const name = useRef('')
  const email = useRef('')
  const subject = useRef('')
  const message = useRef('')
  const [info, setInfo] = useState('')
  const [showMessage, setShowMessage] = useState(false)

  const submitHandler = async (e) => {
    e.preventDefault();
    const enEmail = email.current.value
    const enName = name.current.value
    const enSubject = subject.current.value
    const enMessage = message.current.value
    const { data } = await axios.post('https://fierce-hollows-14162.herokuapp.com/contact', {
      email: enEmail, name: enName, subject: enSubject, message: enMessage
    })
    setShowMessage(true)
    setInfo(data)
  }

  const errorHandler = (e) => {
    setShowMessage(false)
  }
  return (
    <section className={style.card}>
      {showMessage && <Modal title={'Form submission Status !'} error={errorHandler} message={info} />}
      <h1>GET IN TOUCH</h1>
      <form className={style.form} onSubmit={submitHandler}>
        <div className={style.formdiv}>
          <input type="text" ref={name} placeholder='NAME' />
          <input type="email" ref={email} name="" id="" placeholder='EMAIL' /></div>
        <input type="text" ref={subject} placeholder='SUBJECT' />
        <textarea ref={message} placeholder='MESSAGE' id="" cols="30" rows="10"></textarea>

        <div className={style.btncon}>
          <button type='submit' className={style.btn} >SEND MESSAGE</button>
        </div>
      </form>
    </section>
  )
}
