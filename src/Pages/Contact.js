import React from 'react'
import ContactCard from '../Components/ContactCard'
import style from './Css/Contact.module.css'
export default function Contact() {
  return (
    <div className={style.container}>
      <ContactCard />
    </div>
  )
}
