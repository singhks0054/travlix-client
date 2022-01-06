import React from 'react'
import Button from './Button'
import style from './TextCard.module.css'
export default function TextCard(props) {
  return (
    <section className={style.section}>
      <h3>{props.head}</h3>
      <p>{props.desc}</p>
      <Button to={'/offer'} >BOOK NOW</Button>
    </section>
  )
}
