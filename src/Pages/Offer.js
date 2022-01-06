import React from 'react'
import style from './Css/Offer.module.css'
import LabelForm from './LabelForm'
export default function Offer() {
  return (
    <main className={style.about}>
      <section className={style.main}>
        <h1>OUR OFFERS</h1>
      </section>
      <LabelForm />
    </main>
  )
}
