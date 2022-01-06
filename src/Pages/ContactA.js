import React from 'react'
import style from './Css/ContactA.module.css'
import ContactCard from '../Components/ContactCard'
export default function ContactA() {
  return (
    <main >
      <div className={style.main}>
        <ContactCard />
      </div>
      <section className={style.map}>
        <h1>MAP</h1>
      </section>
    </main>
  )
}
