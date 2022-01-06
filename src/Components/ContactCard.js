import React from 'react'
import style from './ContactCard.module.css'
export default function ContactCard() {
  return (
    <section className={style.card}>
      <h1>GET IN TOUCH</h1>
      <form className={style.form}>
        <div className={style.formdiv}><input type="text" placeholder='NAME' />
          <input type="email" name="" id="" placeholder='EMAIL' /></div>
        <input type="text" placeholder='SUBJECT' />
        <textarea name="" placeholder='MESSAGE' id="" cols="30" rows="10"></textarea>
      </form>
      <div className={style.btncon}>
        <button type='submit' className={style.btn}>SEND MESSAGE</button>
      </div>
    </section>
  )
}
